/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CommandHelp, HelpSection, HelpSectionRenderer } from '@oclif/core/help';
import { Command } from '@oclif/core/command';
import Interfaces from '@oclif/core/interfaces';
type SectionType = { header: string; generate: HelpSectionRenderer };

export class SfCommandHelp extends CommandHelp {
  private shortHelp = false;
  public constructor(
    public command: Command.Loadable,
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
      return sections.filter(({ header }) => ['USAGE', 'ARGUMENTS', 'FLAGS'].includes(header));
    }
    const additionalSfSections: SectionType[] = [
      {
        header: 'CONFIGURATION VARIABLES',
        generate: ({ cmd }) => cmd.configurationVariablesSection as HelpSection,
      },
      {
        header: 'ENVIRONMENT VARIABLES',
        generate: ({ cmd }) => cmd.envVariablesSection as HelpSection,
      },
      {
        header: 'ERROR CODES',
        generate: ({ cmd }) => cmd.errorCodes as HelpSection,
      },
    ];
    const flagsIndex =
      (sections.findIndex((section) => section.header === 'FLAG DESCRIPTIONS') || sections.length - 1) + 1;
    sections.splice(flagsIndex, 0, additionalSfSections[0]);
    sections.splice(flagsIndex + 1, 0, additionalSfSections[1]);
    sections.splice(flagsIndex + 2, 0, additionalSfSections[2]);
    return sections;
  }
}
