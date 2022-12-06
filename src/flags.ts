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

export interface ProcessLike {
  argv: string[];
  env: { [key: string]: string | undefined };
}

export function preprocessCliFlags(process: ProcessLike): void {
  process.argv = process.argv.filter((arg, index) => {
    switch (arg) {
      case '--dev-debug': {
        let debug = '*';
        if (process.argv[index + 1] && !process.argv[index + 1]?.startsWith('-')) {
          // if the next arg is defined and IS NOT a flag, set it as the logger level
          debug = process.argv[index + 1];
        }

        // convert --dev-debug into a set of environment variables
        process.env.DEBUG = debug;
        process.env.SF_DEBUG = '1';
        process.env.SF_ENV = 'development';
        return false;
      }

      default: {
        // retain all other cli args
        return true;
      }
    }
  });
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
module.exports.preprocessCliFlags = preprocessCliFlags;
