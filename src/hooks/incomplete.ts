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

import os from 'node:os';
import { Command } from '@oclif/core/command';
import { type Hook } from '@oclif/core/hooks';
import { toConfiguredId, toStandardizedId } from '@oclif/core/util/ids';
import Interfaces from '@oclif/core/interfaces';

function buildChoices(
  matches: Command.Loadable[],
  config: Interfaces.Config
): Array<{ name: string; value: Command.Loadable['id'] }> {
  const configuredIds = matches.map((p) => toConfiguredId(p.id, config));
  const maxCommandLength = configuredIds.reduce((max, id) => Math.max(max, id.length), 0);
  return matches.map((p, i) => {
    const summary = p.summary ?? p.description?.split(os.EOL)[0] ?? '';
    return {
      name: `${configuredIds[i].padEnd(maxCommandLength + 5, ' ')}${summary}`,
      value: p.id,
      short: configuredIds[i],
    };
  });
}

async function determineCommand(config: Interfaces.Config, matches: Command.Loadable[]): Promise<string> {
  const [{ setTimeout }, { SfError }, select] = await Promise.all([
    import('node:timers/promises'),
    import('@salesforce/core/sfError'),
    import('@inquirer/select'),
  ]);

  const choices = buildChoices(matches, config);
  const answer = select.default({
    message: 'Which of these commands do you mean',
    choices,
  });

  const timeout = setTimeout(60_000, undefined, { ref: false }).then(() => {
    answer.cancel();
    throw new SfError('Prompt timed out.');
  });
  return Promise.race([answer, timeout]);
}

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv }) {
  const command = await determineCommand(
    config,
    matches.filter((m) => !m.hidden)
  );

  if (argv.includes('--help') || argv.includes('-h')) {
    const { loadHelpClass } = await import('@oclif/core/help');
    const Help = await loadHelpClass(config);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const help = new Help(config, config.pjson.helpOptions);
    return help.showHelp([toStandardizedId(command, config), ...argv]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
