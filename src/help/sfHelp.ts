/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CommandHelp, Help, Interfaces } from '@oclif/core';
import { SfCommandHelp } from './sfCommandHelp';

export default class SfHelp extends Help {
  protected CommandHelpClass: typeof CommandHelp = SfCommandHelp;
  protected commandHelpClass: SfCommandHelp;
  private argv: string[];

  public showHelp(argv: string[]): Promise<void> {
    this.argv = argv;
    return super.showHelp(argv);
  }

  protected getCommandHelpClass(command: Interfaces.Command): CommandHelp {
    this.commandHelpClass = super.getCommandHelpClass(command) as SfCommandHelp;
    this.commandHelpClass.setArgv(this.argv);
    return this.commandHelpClass;
  }
}
