/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import util from 'node:util';
import { Command } from '@oclif/core/command';
import { CommandHelp, Help } from '@oclif/core/help';
import Interfaces from '@oclif/core/interfaces';
import { toConfiguredId } from '@oclif/core/util/ids';
import { colorize } from '@oclif/core/ux';
import { SfCommandHelp } from './sfCommandHelp.js';

export default class SfHelp extends Help {
  protected CommandHelpClass: typeof CommandHelp = SfCommandHelp;
  protected commandHelpClass: SfCommandHelp | undefined;
  private showShortHelp = false;
  private commands: string[] = [];
  private commandIdRegex: RegExp;

  public constructor(config: Interfaces.Config, opts?: Partial<Interfaces.HelpOptions>) {
    super(config, opts);

    this.commands = this.config.commandIDs.map((c) => `${this.config.bin} ${toConfiguredId(c, this.config)}`);
    const regexes: string[] = [];
    for (const cmd of this.commands) {
      const subCommands = this.commands.filter((c) => c !== cmd && c.startsWith(cmd)).map((c) => c.replace(cmd, ''));
      /**
       * This regex matches any command in the help output.
       * It will continue to match until the next space, quote, or period.
       *
       * Examples that will match (see sf project deploy start as an example):
       * - sf deploy project start
       * - "sf deploy project start"
       * - sf org create scratch|sandbox
       * - "sf org create scratch|sandbox"
       *
       * It will not match any child commands of the current command.
       * For instance, the examples in `sf org list metadata --help` should match `sf org list metadata` but not `sf org list`.
       *
       * Example of constructed regex that won't match child commands:
       * - /sf org list([^\s".]+)?(?! auth| limits| sobject record-counts| metadata| metadata-types| users)/g
       * - /sf org list metadata([^\s".]+)?(?!-types)/g
       */
      let regexString = `${cmd}([^\\s".]+)?`;
      if (subCommands.length) regexString += `(?!${subCommands.join('|')})`;
      regexes.push(regexString);
    }

    this.commandIdRegex = new RegExp(regexes.join('|'), 'g');
  }

  public async showHelp(argv: string[]): Promise<void> {
    this.showShortHelp = argv.includes('-h');
    return super.showHelp(argv);
  }

  protected getCommandHelpClass(command: Command.Loadable): CommandHelp {
    this.commandHelpClass = super.getCommandHelpClass(command) as SfCommandHelp;
    this.commandHelpClass.showShortHelp = this.showShortHelp;
    return this.commandHelpClass;
  }

  protected log(...args: string[]): void {
    const formatted = args.map((arg) => {
      let formattedArg = arg.slice();
      const matches = util.stripVTControlCharacters(formattedArg).match(this.commandIdRegex) ?? [];
      for (const match of matches) {
        formattedArg = formattedArg.replaceAll(match, colorize('dim', match));
      }

      return formattedArg;
    });

    super.log(...formatted);
  }
}
