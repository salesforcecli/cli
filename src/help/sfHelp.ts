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

import { Command } from '@oclif/core/command';
import { CommandHelp, Help } from '@oclif/core/help';
import Interfaces from '@oclif/core/interfaces';
import { toConfiguredId } from '@oclif/core/util/ids';
import { Ansis } from 'ansis';
import { colorize } from '@oclif/core/ux';
import { SfCommandHelp } from './sfCommandHelp.js';

const ansis = new Ansis();

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
      const matches = ansis.strip(formattedArg).match(this.commandIdRegex) ?? [];
      for (const match of matches) {
        formattedArg = formattedArg.replaceAll(match, colorize('dim', match));
      }

      return formattedArg;
    });

    super.log(...formatted);
  }
}
