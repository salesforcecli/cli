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
        const lookahead = process.argv[index + 1];
        if (lookahead && !lookahead.startsWith('-') && !lookahead.includes('=')) {
          // --dev-debug var=arg -> DEBUG = *
          // --dev-debug -a alias -> DEBUG = *
          // --dev-debug --alias alias -> DEBUG = *
          // sf config get --dev-debug target-dev-hub --json -> DEBUG = 'target-dev-hub'
          // we need to delete the DEBUG level before being passed to OCLIF
          delete process.argv[index + 1];
          debug = lookahead;
        }

        // convert --dev-debug into a set of environment variables
        process.env.DEBUG = debug;
        process.env.SF_DEBUG = '1';
        process.env.SF_ENV = 'development';
        process.env.SFDX_DEBUG = '1';
        process.env.SFDX_ENV = 'development';

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
