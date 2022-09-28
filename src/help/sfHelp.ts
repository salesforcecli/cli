/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CommandHelp, Help, Interfaces } from '@oclif/core';
import * as chalk from 'chalk';
import { SfCommandHelp } from './sfCommandHelp';

export default class SfHelp extends Help {
  protected CommandHelpClass: typeof CommandHelp = SfCommandHelp;
  protected commandHelpClass: SfCommandHelp;
  private showShortHelp = false;
  private commands: string[] = [];
  private subCommands: Record<string, string[]> = {};

  public async showHelp(argv: string[]): Promise<void> {
    this.showShortHelp = argv.includes('-h');
    this.commands = this.config.commandIDs.map(
      (c) => `${this.config.bin} ${c.replace(/:/g, this.config.topicSeparator)}`
    );
    for (const cmd of this.commands) {
      this.subCommands[cmd] = this.commands
        .filter((c) => c.startsWith(cmd) && c !== cmd)
        .map((c) => `${c.replace(cmd, '')}`);
    }

    return super.showHelp(argv);
  }

  protected getCommandHelpClass(command: Interfaces.Command): CommandHelp {
    this.commandHelpClass = super.getCommandHelpClass(command) as SfCommandHelp;
    this.commandHelpClass.showShortHelp = this.showShortHelp;
    return this.commandHelpClass;
  }

  protected log(...args: string[]): void {
    const formatted = args.map((arg) => {
      for (const cmd of this.commands) {
        const regex =
          this.subCommands[cmd].length > 0
            ? new RegExp(`(?<!\\$ )${cmd}(?!${this.subCommands[cmd].join('|')})`, 'g')
            : new RegExp(`(?<!\\$ )${cmd}`, 'g');

        arg = arg.replace(regex, chalk.dim(cmd));
      }

      return arg;
    });

    super.log(...formatted);
  }
}
