/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as os from 'os';
import { Hook, toConfiguredId, toStandardizedId, Interfaces } from '@oclif/core';
import { Prompter } from '@salesforce/sf-plugins-core';
import { Lifecycle } from '@salesforce/core';

async function determineCommand(config: Interfaces.Config, matches: Interfaces.Command.Loadable[]): Promise<string> {
  if (matches.length === 1) return matches[0].id;
  const prompter = new Prompter();
  const { command } = await prompter.timedPrompt<{ command: string }>([
    {
      name: 'command',
      type: 'list',
      message: 'Which of these commands do you mean',
      choices: matches.map((p) => toConfiguredId(p.id, config)),
    },
  ]);

  return command;
}

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv }) {
  const command = await determineCommand(config, matches);

  if (argv.includes('--help') || argv.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
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
