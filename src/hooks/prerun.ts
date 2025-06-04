/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { type Hook } from '@oclif/core/hooks';

const hook: Hook.Prerun = async function ({ Command, config, argv }) {
  if (argv.includes('--json') || process.argv.includes('--json')) return;
  const { plugin } = Command;
  if (!plugin) return;
  if (plugin.type === 'link') return;

  const jitPlugins = config.pjson.oclif.jitPlugins ?? {};
  const deps = config.pjson.dependencies ?? {};

  const specifiedVersion = jitPlugins[plugin.name] ?? deps[plugin.name];
  if (!specifiedVersion) return;

  // Simple semver comparison without external library
  const parseVersion = (version: string): number[] =>
    version
      .replace(/^[^\d]*/, '')
      .split('.')
      .map((n) => parseInt(n, 10) || 0);

  const isLessThan = (version1: string, version2: string): boolean => {
    const v1 = parseVersion(version1);
    const v2 = parseVersion(version2);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
      const num1 = v1[i] || 0;
      const num2 = v2[i] || 0;

      if (num1 < num2) return true;
      if (num1 > num2) return false;
    }
    return false;
  };

  if (isLessThan(plugin.version, specifiedVersion)) {
    const { ux } = await import('@oclif/core/ux');
    ux.warn(
      `Plugin ${plugin.name} (${plugin.version}) is older than the version specified by ${config.bin} (${specifiedVersion})`
    );
  }
};

export default hook;
