/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CommandHelp, HelpSection, HelpSectionRenderer, Interfaces } from '@oclif/core';
import { SfCommandInterface } from '@salesforce/command';
type SectionType = { header: string; generate: HelpSectionRenderer };

export class SfCommandHelp extends CommandHelp {
  private shortHelp = false;
  public constructor(
    public command: Interfaces.Command,
    public config: Interfaces.Config,
    public opts: Interfaces.HelpOptions
  ) {
    super(command, config, opts);
  }

  public get showShortHelp(): boolean {
    return this.shortHelp;
  }

  public set showShortHelp(shortHelp: boolean) {
    this.shortHelp = shortHelp;
  }

  protected sections(): SectionType[] {
    const sections = super.sections();
    if (this.shortHelp) {
      return sections.filter(({ header }) => ['SUMMARY', 'USAGE', 'ARGUMENTS', 'FLAGS'].includes(header));
    }
    const additionaSfSections: SectionType[] = [
      {
        header: 'CONFIGURATION VARIABLES',
        generate: ({ cmd }): HelpSection => {
          const sfCommand = cmd as SfCommandInterface;
          return sfCommand.configurationVariablesSection;
        },
      },
      {
        header: 'ENVIRONMENT VARIABLES',
        generate: ({ cmd }): HelpSection => {
          const sfCommand = cmd as SfCommandInterface;
          return sfCommand.envVariablesSection;
        },
      },
      {
        header: 'ERROR CODES',
        generate: ({ cmd }): HelpSection => {
          const sfCommand = cmd as SfCommandInterface;
          return sfCommand.errorCodes;
        },
      },
    ];
    const flagsIndex =
      (sections.findIndex((section) => section.header === 'FLAG DESCRIPTIONS') || sections.length - 1) + 1;
    sections.splice(flagsIndex, 0, additionaSfSections[0]);
    sections.splice(flagsIndex + 1, 0, additionaSfSections[1]);
    sections.splice(flagsIndex + 2, 0, additionaSfSections[2]);
    return sections;
  }
}
