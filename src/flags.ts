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

// -------------------------------------------------------------------------------
// No requires or imports since this is loaded early in the cli lifecycle and we
// want to minimize the number of packages that load before enabling require
// instrumentation.
// -------------------------------------------------------------------------------

export type ProcessLike = {
  argv: string[];
  env: { [key: string]: string | undefined };
};

export function preprocessCliFlags(process: ProcessLike): void {
  process.argv.map((arg) => {
    if (arg === '--dev-debug') {
      let debug = '*';
      const filterIndex = process.argv.indexOf('--debug-filter');
      if (filterIndex > 0) {
        debug = process.argv[filterIndex + 1];

        process.argv.splice(filterIndex, 2);
      }
      // convert --dev-debug into a set of environment variables
      process.env.DEBUG = debug;
      process.env.SF_DEBUG = '1';
      process.env.SF_ENV = 'development';

      // set `SF_LOG_LEVEL` to `trace` if it wasn't specified
      if (process.env.SF_LOG_LEVEL === undefined) {
        process.env.SF_LOG_LEVEL = 'trace';
      }

      // need to calculate indexOf --dev-debug here because it might've changed based on --debug-filter
      process.argv.splice(process.argv.indexOf('--dev-debug'), 1);
    }
  });
}
