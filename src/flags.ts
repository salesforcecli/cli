/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
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
