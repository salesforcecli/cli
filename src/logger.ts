/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { format } from 'node:util';
import Interfaces from '@oclif/core/interfaces';
import { Logger } from '@salesforce/core/logger';

export const customLogger = (namespace: string): Interfaces.Logger => {
  const sfLogger = new Logger(namespace);
  return {
    child: (ns: string, delimiter?: string) => customLogger(`${namespace}${delimiter ?? ':'}${ns}`),
    debug: (formatter: unknown, ...args: unknown[]) => sfLogger.debug(format(formatter, ...args)),
    error: (formatter: unknown, ...args: unknown[]) => sfLogger.error(format(formatter, ...args)),
    info: (formatter: unknown, ...args: unknown[]) => sfLogger.info(format(formatter, ...args)),
    trace: (formatter: unknown, ...args: unknown[]) => sfLogger.trace(format(formatter, ...args)),
    warn: (formatter: unknown, ...args: unknown[]) => sfLogger.warn(format(formatter, ...args)),
    namespace,
  };
};

export const logger = customLogger('sf');
