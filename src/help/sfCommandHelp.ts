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
