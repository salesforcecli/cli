/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Command, CommandHelp, Help, toConfiguredId } from '@oclif/core';
import { Ansis } from 'ansis';
import { SfCommandHelp } from './sfCommandHelp.js';

const ansis = new Ansis();

export default class SfHelp extends Help {
  protected CommandHelpClass: typeof CommandHelp = SfCommandHelp;
  protected commandHelpClass: SfCommandHelp | undefined;
  private showShortHelp = false;
  private commands: string[] = [];

  public async showHelp(argv: string[]): Promise<void> {
    this.showShortHelp = argv.includes('-h');
    this.commands = this.config.commandIDs.map((c) => `${this.config.bin} ${toConfiguredId(c, this.config)}`);

    return super.showHelp(argv);
  }

  protected getCommandHelpClass(command: Command.Loadable): CommandHelp {
    this.commandHelpClass = super.getCommandHelpClass(command) as SfCommandHelp;
    this.commandHelpClass.showShortHelp = this.showShortHelp;
    return this.commandHelpClass;
  }

  protected log(...args: string[]): void {
    const formatted = args.map((arg) => {
      for (const cmd of this.commands) {
        /**
         * This regex matches any command in the help output.
         * It will continue to match until the next space, quote, or period.
         *
         * Examples that will match:
         * - sf deploy project start
         * - "sf deploy project start"
         * - sf org create scratch|sandbox
         * - "sf org create scratch|sandbox"
         */
        const regex = new RegExp(`${cmd}([^\\s".]+)?`, 'g');
        const [match] = ansis.strip(arg.slice()).match(regex) ?? [];

        if (match) {
          arg = arg.replace(regex, ansis.dim(match));
        }
      }

      return arg;
    });

    super.log(...formatted);
  }
}
