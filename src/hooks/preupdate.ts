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
      'Running sf update will have no effect since you are using a version that was installed by sfdx. Please use sfdx update instead.'
    );
  }
};
