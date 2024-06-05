/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { type Hook } from '@oclif/core/hooks';

// eslint-disable-next-line @typescript-eslint/require-await
const hook: Hook.Prerun = async function ({ Command, config }) {
  if (process.argv.includes('--json')) return;
  const { plugin } = Command;
  if (!plugin) return;
  if (plugin.type === 'link') return;

  const jitPlugins = config.pjson.oclif.jitPlugins ?? {};
  const deps = config.pjson.dependencies ?? {};

  const specifiedVersion = jitPlugins[plugin.name] ?? deps[plugin.name];
  if (!specifiedVersion) return;

  if (plugin.version !== specifiedVersion) {
    const { ux } = await import('@oclif/core/ux');
    ux.warn(
      `Plugin ${plugin.name} (${plugin.version}) differs from the version specified by ${config.bin} (${specifiedVersion})`
    );
  }
};

export default hook;
