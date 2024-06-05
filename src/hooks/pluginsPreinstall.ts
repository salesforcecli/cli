/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { type Hook } from '@oclif/core/hooks';

const hook: Hook.PluginsPreinstall = async function (options) {
  const verifySignHookResult = await this.config.runHook('plugins:preinstall:verify:signature', options);
  const pluginTrustFailure = verifySignHookResult.failures.find(
    (failure) => failure.plugin.name === '@salesforce/plugin-trust'
  );

  if (pluginTrustFailure !== undefined) {
    const { handle } = await import('@oclif/core/handle');
    await handle(pluginTrustFailure.error);
  }
};

export default hook;
