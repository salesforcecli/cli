/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Command, Flags } from '@oclif/core';

export default class Hello extends Command {
  public static description = 'describe the command here';

  public static examples = [
    `$ sf hello
hello world from ./src/hello.ts!
`,
  ];

  public static flags = {
    help: Flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  };

  public static args = [{ name: 'file' }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Hello);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from ./src/commands/hello.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file as string}`);
    }
  }
}
