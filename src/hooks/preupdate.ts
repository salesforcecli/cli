/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CliUx, Interfaces } from '@oclif/core';

// eslint-disable-next-line @typescript-eslint/require-await
export const hook: Interfaces.Hook<'preupdate'> = async function (opts) {
  if (opts.config.root.includes('sfdx')) {
    CliUx.ux.warn(
      'Running "sf update" has no effect because you\'re using a version of sf that was installed by sfdx. To update sf, run "sfdx update".'
    );
  }
};
