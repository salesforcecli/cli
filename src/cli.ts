/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { platform, arch, release } from 'node:os';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Config, Interfaces, run as oclifRun, settings } from '@oclif/core';
import { set } from '@salesforce/kit';
import Debug from 'debug';
import { default as nodeEnv, Env } from './util/env.js';

const debug = Debug('sf');

const envVars = [
  ...new Set([
    ...Object.keys(process.env).filter((e) => e.startsWith('SF_') || e.startsWith('SFDX_')),
    'NODE_OPTIONS',
    Env.SF_AUTOUPDATE_DISABLE,
    'SF_BINPATH',
    'SF_COMPILE_CACHE',
    Env.SF_DISABLE_AUTOUPDATE,
    Env.SF_ENV,
    Env.SF_INSTALLER,
    Env.SF_NPM_REGISTRY,
    'SF_REDIRECTED',
    Env.SF_UPDATE_INSTRUCTIONS,
  ]),
];

export const UPDATE_DISABLED_INSTALLER =
  'Manual and automatic CLI updates have been disabled by setting "SF_AUTOUPDATE_DISABLE=true". ' +
  'To check for a new version, unset that environment variable.';

export const UPDATE_DISABLED_NPM = 'Use "npm update --global @salesforce/cli" to update npm-based installations.';

export const UPDATE_DISABLED_DEMO =
  'Manual and automatic CLI updates have been disabled in DEMO mode. ' +
  'To check for a new version, unset the environment variable SF_ENV.';

export function configureUpdateSites(config: Interfaces.Config, env = nodeEnv): void {
  const npmRegistry = env.getNpmRegistryOverride();
  if (npmRegistry) {
    // Override config value if set via envar
    set(config, 'pjson.oclif.warn-if-update-available.registry', npmRegistry);
  }
}

export function configureAutoUpdate(envars: Env): void {
  if (envars.isDemoMode()) {
    // Disable autoupdates in demo mode
    envars.setAutoupdateDisabled(true);
    envars.setUpdateInstructions(UPDATE_DISABLED_DEMO);
    return;
  }

  if (envars.isInstaller()) {
    envars.normalizeAutoupdateDisabled();
    if (envars.isAutoupdateDisabled()) {
      envars.setUpdateInstructions(UPDATE_DISABLED_INSTALLER);
    }
    return;
  }

  // Not an installer, so this must be running from an npm installation
  if (!envars.isAutoupdateDisabledSet()) {
    // Disable autoupdates if run from an npm install or in local dev, if not explicitly set
    envars.setAutoupdateDisabled(true);
  }

  if (envars.isAutoupdateDisabled()) {
    envars.setUpdateInstructions(UPDATE_DISABLED_NPM);
  }
}

function debugCliInfo(version: string, channel: string, env: Env, config: Interfaces.Config): void {
  function debugSection(section: string, items: Array<[string, string]>): void {
    const pad = 25;
    debug('%s:', section.padStart(pad));
    items.forEach(([name, value]) => debug('%s: %s', name.padStart(pad), value));
  }

  debugSection('OS', [
    ['platform', platform()],
    ['architecture', arch()],
    ['release', release()],
    ['shell', config.shell],
  ]);

  debugSection('NODE', [['version', process.versions.node]]);

  debugSection('CLI', [
    ['version', version],
    ['channel', channel],
    ['bin', config.bin],
    ['data', config.dataDir],
    ['cache', config.cacheDir],
    ['config', config.configDir],
  ]);

  debugSection(
    'ENV',
    [...envVars].map((key): [string, string] => [key, env.getString(key, '<not set>')] as [string, string])
  );

  debugSection(
    'ARGS',
    process.argv.map((arg, i): [string, string] => [i.toString(), arg])
  );
}

type CreateOptions = {
  version: string;
  bin: string | undefined;
  channel: string;
  run?: typeof oclifRun;
  env?: typeof nodeEnv;
};

export function create({ version, bin, channel, run, env }: CreateOptions): { run: () => Promise<unknown> } {
  settings.performanceEnabled = true;
  const root = resolve(fileURLToPath(import.meta.url), '..');
  const args = process.argv.slice(2);
  const environment = env ?? nodeEnv;
  return {
    async run(): Promise<unknown> {
      const config = new Config({
        name: bin,
        root,
        version,
        channel,
      });
      await config.load();
      configureUpdateSites(config, environment);
      configureAutoUpdate(environment);
      debugCliInfo(version, channel, environment, config);
      // Example of how run is used in a test https://github.com/salesforcecli/cli/pull/171/files#diff-1deee0a575599b2df117c280da319f7938aaf6fdb0c04bcdbde769dbf464be69R46
      return run ? run(args, config) : oclifRun(args, config);
    },
  };
}
