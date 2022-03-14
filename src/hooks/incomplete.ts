/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';
import { Prompter } from '@salesforce/sf-plugins-core';

const hook: Hook.CommandIncomplete = async function ({ config, matches, argv }) {
  const prompter = new Prompter();
  const { command } = await prompter.timedPrompt<{ command: string }>([
    {
      name: 'command',
      type: 'list',
      message: 'Which of these commands did you mean',
      choices: matches.map((p) => toConfiguredId(p.id, config)),
    },
  ]);

  if (argv.includes('--help') || argv.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
