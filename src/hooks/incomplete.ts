/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as os from 'os';
import { Hook, toConfiguredId, toStandardizedId, Interfaces, Command, loadHelpClass } from '@oclif/core';
import { Prompter } from '@salesforce/sf-plugins-core';
import { Lifecycle } from '@salesforce/core';

function buildChoices(
  matches: Command.Loadable[],
  config: Interfaces.Config
): Array<{ name: string; value: Command.Loadable }> {
  const configuredIds = matches.map((p) => toConfiguredId(p.id, config));
  const maxCommandLength = configuredIds.reduce((max, id) => Math.max(max, id.length), 0);
  return matches.map((p, i) => {
    const summary = p.summary ?? p.description?.split(os.EOL)[0] ?? '';
    return {
      name: `${configuredIds[i].padEnd(maxCommandLength + 5, ' ')}${summary}`,
      value: p,
      short: configuredIds[i],
    };
  });
}

async function determineCommand(config: Interfaces.Config, matches: Command.Loadable[]): Promise<string> {
  if (matches.length === 1) return matches[0].id;
  const prompter = new Prompter();
  const choices = buildChoices(matches, config);
  const { command } = await prompter.timedPrompt<{ command: Command.Loadable }>([
    {
      name: 'command',
      type: 'list',
      message: 'Which of these commands do you mean',
      choices,
    },
  ]);

  return command.id;
}

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv }) {
  const command = await determineCommand(config, matches);

  if (argv.includes('--help') || argv.includes('-h')) {
    const Help = await loadHelpClass(config);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const help = new Help(config, config.pjson.helpOptions);
    return help.showHelp([toStandardizedId(command, config), ...argv]);
  }

  if (matches.length === 1) {
    await Lifecycle.getInstance().emitWarning(
      `One command matches the partial command entered, running command:${os.EOL}${config.bin} ${toConfiguredId(
        command,
        config
      )} ${argv.join(' ')}`
    );
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
