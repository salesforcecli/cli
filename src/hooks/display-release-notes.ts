/*
 * Copyright 2026, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Hook } from '@oclif/core/hooks';
import ux from '@oclif/core/ux';

export const hook: Hook.Update = async function ({ config }) {
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
