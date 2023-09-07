/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Hook, ux } from '@oclif/core';

// eslint-disable-next-line @typescript-eslint/require-await
const hook: Hook.Prerun = async function ({ config }) {
  const jitPlugins = config.pjson.oclif.jitPlugins ?? {};
  const deps = config.pjson.dependencies ?? {};
  for (const plugin of config.getPluginsList()) {
    // Skip the root plugin
    if (plugin.root === config.root) continue;
    // Skip user plugins that are not in the jitPlugins configuration
    if (plugin.type === 'user' && !jitPlugins[plugin.name]) continue;
    // Skip linked plugins
    if (plugin.type === 'link') continue;

    const specifiedVersion = jitPlugins[plugin.name] ?? deps[plugin.name];
    if (plugin.version !== specifiedVersion) {
      ux.warn(
        `Plugin ${plugin.name} (${plugin.version}) differs from the version specified by ${config.bin} (${specifiedVersion})`
      );
    }
  }
};

export default hook;
