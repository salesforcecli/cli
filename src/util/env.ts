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
import { EnvVars } from '@salesforce/core/envVars';

export class Env extends EnvVars {
  public static SF_AUTOUPDATE_DISABLE = 'SF_AUTOUPDATE_DISABLE';
  public static SF_DISABLE_AUTOUPDATE = 'SF_DISABLE_AUTOUPDATE';
  public static SF_ENV = 'SF_ENV';
  public static SF_INSTALLER = 'SF_INSTALLER';
  public static SF_NPM_REGISTRY = 'SF_NPM_REGISTRY';
  public static SF_UPDATE_INSTRUCTIONS = 'SF_UPDATE_INSTRUCTIONS';

  public constructor(env = process.env) {
    super(env);
  }
  public isAutoupdateDisabled(): boolean {
    return this.getBoolean(Env.SF_AUTOUPDATE_DISABLE) || this.getBoolean(Env.SF_DISABLE_AUTOUPDATE);
  }

  public isAutoupdateDisabledSet(): boolean {
    return !!this.getString(Env.SF_AUTOUPDATE_DISABLE) || !!this.getString(Env.SF_DISABLE_AUTOUPDATE);
  }

  public setAutoupdateDisabled(value: boolean, updateInstructions?: string): void {
    this.setBoolean(Env.SF_AUTOUPDATE_DISABLE, value);
    this.setBoolean(Env.SF_DISABLE_AUTOUPDATE, value);
    if (updateInstructions) {
      this.setUpdateInstructions(updateInstructions);
    }
  }

  public setUpdateInstructions(value: string): void {
    this.setString(Env.SF_UPDATE_INSTRUCTIONS, value);
  }

  public isDemoMode(): boolean {
    return (this.getString(Env.SF_ENV, 'production') || '').toLowerCase() === 'demo';
  }

  public isInstaller(): boolean {
    return this.getBoolean(Env.SF_INSTALLER);
  }

  public normalizeAutoupdateDisabled(): void {
    // Ensure that the legacy envvar always causes the oclif counterpart to be set
    // see https://github.com/oclif/plugin-update/blob/3946fb296a0a95544ab6364b36a1f7422c8aeddf/src/hooks/init.ts#L22
    if (this.getBoolean(Env.SF_AUTOUPDATE_DISABLE)) {
      this.setBoolean(Env.SF_DISABLE_AUTOUPDATE, true);
    } else if (this.getBoolean(Env.SF_DISABLE_AUTOUPDATE)) {
      this.setBoolean(Env.SF_AUTOUPDATE_DISABLE, true);
    }
  }
}

export default new Env();
