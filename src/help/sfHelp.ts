/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { CommandHelp, Help } from '@oclif/core';
import { SfCommandHelp } from './sfCommandHelp';

export default class SfHelp extends Help {
  protected CommandHelpClass: typeof CommandHelp = SfCommandHelp;
}
