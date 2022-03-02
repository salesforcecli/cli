/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { EnvVars } from '@salesforce/core';

export class Env extends EnvVars {
  public static SF_AUTOUPDATE_DISABLE = 'SF_AUTOUPDATE_DISABLE';
  public static SF_DISABLE_AUTOUPDATE = 'SF_DISABLE_AUTOUPDATE';
  public static SF_ENV = 'SF_ENV';
  public static SF_INSTALLER = 'SF_INSTALLER';
  public static SFDX_INSTALLER = 'SFDX_INSTALLER';
  public static SF_LAZY_LOAD_MODULES = 'SF_LAZY_LOAD_MODULES';
  public static SF_NPM_REGISTRY = 'SF_NPM_REGISTRY';
  public static SF_S3_HOST = 'SF_S3_HOST';
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
    // Check SFDX_INSTALLER instead of SF_INSTALLER until such time sf has its own installers
    return this.getBoolean(Env.SFDX_INSTALLER);
  }

  public getS3HostOverride(): string {
    return this.getString(Env.SF_S3_HOST);
  }

  public setS3HostOverride(value: string): void {
    return this.setString(Env.SF_S3_HOST, value);
  }

  public getNpmRegistryOverride(): string {
    return this.getString(Env.SF_NPM_REGISTRY);
  }

  public setNpmRegistryOverride(value: string): void {
    return this.setString(Env.SF_NPM_REGISTRY, value);
  }

  public isLazyRequireEnabled(): boolean {
    return this.getBoolean(Env.SF_LAZY_LOAD_MODULES);
  }

  public normalizeAutoupdateDisabled(): void {
    // Ensure that the legacy envar always causes the oclif counterpart to be set
    // see https://github.com/oclif/plugin-update/blob/3946fb296a0a95544ab6364b36a1f7422c8aeddf/src/hooks/init.ts#L22
    if (this.getBoolean(Env.SF_AUTOUPDATE_DISABLE)) {
      this.setBoolean(Env.SF_DISABLE_AUTOUPDATE, true);
    } else if (this.getBoolean(Env.SF_DISABLE_AUTOUPDATE)) {
      this.setBoolean(Env.SF_AUTOUPDATE_DISABLE, true);
    }
  }
}

export default new Env();
