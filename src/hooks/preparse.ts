/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import fs from 'node:fs/promises';
import { join, parse } from 'node:path';

import type { Hook } from '@oclif/core';

const hook: Hook<'preparse'> = async function ({ argv, options, context }) {
  // TODO validate that value was provided for --flags-dir
  if (!argv.includes('--flags-dir')) return argv;

  context.debug('Initial argv', argv.join(' '));
  const flagsToIgnore = new Set(
    Object.entries(options.flags ?? {})
      .filter(
        ([, flagOptions]) =>
          // don't ignore if flag can take multiple values
          (flagOptions.type === 'option' && flagOptions.multiple !== true) || flagOptions.type === 'boolean'
      )
      .filter(
        ([flagName, flagOptions]) =>
          // ignore if short char flag is present
          argv.includes(`-${flagOptions.char}`) ||
          // ignore if long flag is present
          argv.includes(`--${flagName}`) ||
          // ignore if --no- flag is present
          (flagOptions.type === 'boolean' && flagOptions.allowNo && argv.includes(`--no-${flagName}`))
      )
      .map(([flagName]) => flagName)
  );
  context.debug('Flags to ignore', flagsToIgnore);

  const flagsDir = argv[argv.indexOf('--flags-dir') + 1];
  if (!flagsDir) {
    context.debug('No flags dir provided');
    return argv;
  }
  if (flagsDir.startsWith('-')) {
    context.debug(`No flags dir provided, got ${flagsDir}`);
    return argv;
  }

  async function safeReadDir(path: string): Promise<string[]> {
    try {
      return await fs.readdir(path);
    } catch {
      context.debug('No flags dir found');
      return [];
    }
  }

  async function safeReadFile(path: string): Promise<string | undefined> {
    try {
      return await fs.readFile(path, 'utf8');
    } catch (err) {
      context.debug(path, err);
    }
  }

  const filesInDir = await safeReadDir(flagsDir);
  context.debug('Files in dir', filesInDir);
  const flagsToInsert = await Promise.all(
    filesInDir
      // ignore files that were provided as flags
      .filter((f) => !flagsToIgnore.has(f))
      .map(async (file) => {
        const { name, ext } = parse(file);
        const contents = await safeReadFile(join(flagsDir, file));
        if (contents === undefined) {
          return [name, undefined] satisfies [string, undefined];
        }
        const values = ext === '.json' ? [JSON.stringify(JSON.parse(contents))] : contents?.split('\n');
        return [name, values] satisfies [string, string[]];
      })
  );
  context.debug('Flags to insert', flagsToInsert);
  for (const [flag, values] of flagsToInsert) {
    for (const value of values ?? []) {
      argv.push(`--${flag}`);
      if (value) argv.push(value);
    }
  }

  const flagsDirIndex = argv.indexOf('--flags-dir');
  argv.splice(flagsDirIndex, 2);
  context.debug(`Returning argv: ${argv.join(' ')}`);
  return argv;
};

export default hook;
