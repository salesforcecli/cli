/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Hook } from '@oclif/core';
import { Prompter } from '@salesforce/sf-plugins-core';
import { SfError } from '@salesforce/core';

const hook: Hook<'jit_plugin_not_installed'> = async function (opts) {
  const prompter = new Prompter();
  const { confirmation } = await prompter.timedPrompt<{ confirmation: string }>([
    {
      name: 'confirmation',
      type: 'confirm',
      message: `Would you like to install ${opts.command.pluginName}?`,
    },
  ]);

  if (confirmation) {
    try {
      await opts.config.runCommand('plugins:install', [opts.command.pluginName]);
    } catch {
      throw new SfError(`Could not install ${opts.command.pluginName}`, 'JitPluginInstallError');
    }
  } else {
    throw new SfError(`${opts.command.pluginName} not installed`, 'JitPluginNotInstalled');
  }
};

export default hook;
