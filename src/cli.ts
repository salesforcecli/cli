/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as os from 'os';
import * as path from 'path';
import { Main, run as oclifRun } from '@oclif/command';
import { Config, IConfig } from '@oclif/config';
import { set } from '@salesforce/kit';
import { AnyJson, get } from '@salesforce/ts-types';
import * as Debug from 'debug';
import { exec } from 'shelljs';
import { default as nodeEnv, Env } from './util/env';

const debug = Debug('sf');

export const UPDATE_DISABLED_INSTALLER =
  'Manual and automatic CLI updates have been disabled by setting "SFDX_AUTOUPDATE_DISABLE=true". ' +
  'To check for a new version, unset that environment variable.';

export const UPDATE_DISABLED_NPM = 'Use "npm update --global sfdx-cli" to update npm-based installations.';

export const UPDATE_DISABLED_DEMO =
  'Manual and automatic CLI updates have been disabled in DEMO mode. ' +
  'To check for a new version, unset the environment variable SFDX_ENV.';

export function configureUpdateSites(config: IConfig, env = nodeEnv): void {
  const s3Host = env.getS3HostOverride();
  if (s3Host) {
    // Override config value if set via envar
    set(config, 'pjson.oclif.update.s3.host', s3Host);
  }

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

function debugCliInfo(version: string, channel: string, env: Env, config: IConfig): void {
  function debugSection(section: string, items: Array<[string, string]>): void {
    const pad = 25;
    debug('%s:', section.padStart(pad));
    items.forEach(([name, value]) => debug('%s: %s', name.padStart(pad), value));
  }

  debugSection('OS', [
    ['platform', os.platform()],
    ['architecture', os.arch()],
    ['release', os.release()],
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
    [
      'NODE_OPTIONS',
      Env.SFDX_AUTOUPDATE_DISABLE,
      'SFDX_BINPATH',
      'SFDX_COMPILE_CACHE',
      Env.SFDX_DISABLE_AUTOUPDATE,
      Env.SFDX_ENV,
      Env.SFDX_INSTALLER,
      Env.SFDX_LAZY_LOAD_MODULES,
      Env.SFDX_NPM_REGISTRY,
      'SFDX_REDIRECTED',
      Env.SFDX_S3_HOST,
      Env.SFDX_UPDATE_INSTRUCTIONS,
    ].map((key): [string, string] => [key, env.getString(key, '<not set>')])
  );

  debugSection(
    'ARGS',
    process.argv.map((arg, i): [string, string] => [i.toString(), arg])
  );
}

interface VersionDetail {
  cliVersion: string;
  architecture: string;
  nodeVersion: string;
  pluginVersions?: string[];
  osVersion?: string;
}

class SfMain extends Main {
  // Function which returns Version object which includes cli version, plugin versions, OS and its version.
  protected getVersionDetail(isVerbose: boolean): VersionDetail {
    const versions = this.config.userAgent.split(' ');
    const cliVersion: string = versions[0];
    const architecture: string = versions[1];
    const nodeVersion: string = versions[2];
    if (!isVerbose) return { cliVersion, architecture, nodeVersion };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const pluginVersion: string = exec('sf plugins --core', {
      silent: true,
    }).toString();
    const pluginVersions: string[] = pluginVersion.split('\n');
    pluginVersions.pop();
    const osVersion = `${os.type()} ${os.release()}`;
    return { cliVersion, architecture, nodeVersion, pluginVersions, osVersion };
  }

  protected printVersionDetails(versionDetails: VersionDetail, isJson: boolean): void {
    if (isJson) {
      this.log(`${JSON.stringify(versionDetails, null, '\t')}`);
    } else {
      this.log(` CLI Version : \n\t${versionDetails.cliVersion}`);
      this.log(`\n Architecture: \n\t${versionDetails.architecture}`);
      this.log(`\n Node Version : \n\t${versionDetails.nodeVersion}`);
      this.log('\n Plugin Version: ');
      versionDetails.pluginVersions?.forEach((plugin) => {
        this.log(`\t${plugin}`);
      });
      this.log(`\n OS and Version: \n\t${versionDetails.osVersion}`);
    }
  }

  protected _version(): never {
    const options: Set<string> = new Set(this.argv);

    // Checking if options doesn't have --verbose and --json
    if (!options.has('--verbose') && !options.has('--json')) {
      this.log(this.config.userAgent);
    } else {
      const versionDetails = this.getVersionDetail(options.has('--verbose'));
      this.printVersionDetails(versionDetails, options.has('--json'));
    }
    return this.exit(0);
  }
}

export function create(
  version: string,
  channel: string,
  run: typeof oclifRun,
  env = nodeEnv
): { run: () => Promise<unknown> } {
  const root = path.resolve(__dirname, '..');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pjson = require(path.resolve(__dirname, '..', 'package.json')) as AnyJson;
  const args = process.argv.slice(2);

  return {
    async run(): Promise<unknown> {
      const config = new Config({ name: get(pjson, 'oclif.bin') as string | undefined, root, version, channel });
      await config.load();
      configureUpdateSites(config, env);
      configureAutoUpdate(env);
      debugCliInfo(version, channel, env, config);
      // I think the run method is used in test.
      return (run ? run(args, config) : await SfMain.run(args, config)) as unknown;
    },
  };
}
