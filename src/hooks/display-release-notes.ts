/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Hook, ux } from '@oclif/core';

export const hook: Hook<'update'> = async function ({ config }) {
  if (process.env.SF_HIDE_RELEASE_NOTES === 'true') return;

  try {
    return await config.runCommand('whatsnew', ['--hook']);
  } catch (err) {
    const error = err as Error;
    ux.stdout('NOTE: This error can be ignored in CI and may be silenced in the future');
    ux.stdout('- Set the SF_HIDE_RELEASE_NOTES env var to "true" to skip this script\n');
    ux.stdout(error.message);
  }
};

export default hook;
