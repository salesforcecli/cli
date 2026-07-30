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
import { format } from 'node:util';
import Interfaces from '@oclif/core/interfaces';
import { Logger } from '@salesforce/core/logger';

const customLogger = (namespace: string): Interfaces.Logger => {
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

export const logger = customLogger('sf:oclif');
export const sfStartupLogger = customLogger('sf-startup');
