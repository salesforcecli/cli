/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import type { Hook } from '@oclif/core/hooks';

const unescapedComma = /(?<!\\),/;

const hook: Hook.Preparse = async function ({ argv, options, context }) {
  if (unescapedComma.test(argv.join(' '))) {
    const hasArrayFlag = Object.values(options.flags ?? {}).some(
      (flagOptions) => flagOptions.type === 'option' && flagOptions.multiple === true && flagOptions.delimiter === ','
    );
    if (hasArrayFlag) {
      const { Lifecycle } = await import('@salesforce/core/lifecycle');
      await Lifecycle.getInstance().emitWarning(
        'The input format for array arguments has changed. Use this format: --array-flag value1 --array-flag value2 --array-flag value3'
      );
    }
  }

  // Skip this hook if command does not have a --flags-dir flag or if it is not present in argv
  if (!argv.includes('--flags-dir') || !options.flags?.['flags-dir']) return argv;
  const flagsDir = argv[argv.indexOf('--flags-dir') + 1];
  if (!flagsDir) {
    context.debug('No flags dir provided');
    return argv;
  }
  if (flagsDir.startsWith('-')) {
    context.debug(`No flags dir provided, got ${flagsDir}`);
    return argv;
  }

  const { default: fs } = await import('node:fs/promises');
  const { default: path } = await import('node:path');

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
          // Using || instead of ?? is intentional here: argv.includes() returns false (not null/undefined)
          // when the flag isn't found, and we need false to trigger evaluation of subsequent conditions.
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          (flagOptions.char && argv.includes(`-${flagOptions.char}`)) ||
          // ignore if long flag is present
          argv.includes(`--${flagName}`) ||
          // ignore if --no- flag is present
          (flagOptions.type === 'boolean' && flagOptions.allowNo && argv.includes(`--no-${flagName}`))
      )
      .flatMap(([flagName, flagOptions]) => {
        // Also ignore the --no- flag if boolean flag allows it
        if (flagOptions.type === 'boolean' && flagOptions.allowNo) {
          return [flagName, `no-${flagName}`];
        }

        return [flagName];
      })
  );
  context.debug('Flags to ignore', flagsToIgnore);

  async function safeReadDir(filePath: string): Promise<string[]> {
    try {
      return await fs.readdir(filePath);
    } catch (err) {
      context.debug('No flags dir found');
      context.debug(err);
      return [];
    }
  }

  async function safeReadFile(filePath: string): Promise<string | undefined> {
    try {
      return await fs.readFile(filePath, 'utf8');
    } catch (err) {
      context.debug(filePath, err);
    }
  }

  const filesInDir = await safeReadDir(flagsDir);
  context.debug('Files in dir', filesInDir);
  const flagsToInsert = await Promise.all(
    filesInDir
      // ignore files that were provided as flags
      .filter((f) => !flagsToIgnore.has(f))
      .map(async (file) => {
        const { name, ext } = path.parse(file);
        const contents = await safeReadFile(path.join(flagsDir, file));
        if (contents === undefined) {
          return [name, undefined] satisfies [string, undefined];
        }
        const crlf = contents.search('\r\n') !== -1;

        let values: string[];

        if (ext === '.json') {
          // JSON files: parse and re-stringify (existing behavior)
          values = [JSON.stringify(JSON.parse(contents))];
        } else {
          // Non-JSON files: split by lines and filter full-line comments
          const lines = contents?.trim().split(crlf ? '\r\n' : '\n') || [];
          values = lines.filter((line) => {
            const trimmed = line.trim();
            // Filter out lines that are only whitespace + comment (full-line comments)
            if (trimmed.startsWith('#') || trimmed.startsWith('//')) {
              return false;
            }
            // Keep all other lines unchanged, including empty lines
            return true;
          });
        }

        return [name, values] satisfies [string, string[]];
      })
  );

  const newArgv = [...argv];
  context.debug('Flags to insert', flagsToInsert);
  for (const [flag, values] of flagsToInsert) {
    for (const value of values ?? []) {
      newArgv.push(flag.length === 1 ? `-${flag}` : `--${flag}`);
      if (value) newArgv.push(value);
    }
  }

  context.debug(`Returning argv: ${newArgv.join(' ')}`);
  return newArgv;
};

export default hook;
