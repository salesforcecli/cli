/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CommandHelp, Help, Interfaces } from '@oclif/core';
import * as chalk from 'chalk';
import { SfCommandHelp } from './sfCommandHelp';

type Formatter = {
  symbol: string;
  format: chalk.Chalk;
};

const FORMATTERS: Record<string, Formatter> = {
  italics: {
    symbol: '_',
    format: chalk.italic,
  },
  bold: {
    symbol: '**',
    format: chalk.bold,
  },
  code: {
    symbol: '`',
    format: chalk.dim,
  },
};

export default class SfHelp extends Help {
  protected CommandHelpClass: typeof CommandHelp = SfCommandHelp;
  protected commandHelpClass: SfCommandHelp;
  private showShortHelp = false;

  public async showHelp(argv: string[]): Promise<void> {
    this.showShortHelp = argv.includes('-h');
    return await super.showHelp(argv);
  }

  protected getCommandHelpClass(command: Interfaces.Command): CommandHelp {
    this.commandHelpClass = super.getCommandHelpClass(command) as SfCommandHelp;
    this.commandHelpClass.showShortHelp = this.showShortHelp;
    return this.commandHelpClass;
  }

  protected log(...args: string[]): void {
    const formatted = args.map((a) => {
      for (const formatter of Object.values(FORMATTERS)) {
        const symbol = `\\${formatter.symbol.split('').join('\\')}`;
        const regex = new RegExp(`${symbol}(.*?)${symbol}`, 'g');
        const matches = a.match(regex) ?? [];
        for (const match of matches) {
          a = a.replace(match, formatter.format(match.replace(new RegExp(`${symbol}`, 'g'), '')));
        }
      }

      return a;
    });
    super.log(...formatted);
  }
}
