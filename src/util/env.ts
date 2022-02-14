/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { EnvVars } from '@salesforce/core';

export class Env extends EnvVars {
  public static SFDX_AUTOUPDATE_DISABLE = 'SFDX_AUTOUPDATE_DISABLE';
  public static SFDX_DISABLE_AUTOUPDATE = 'SFDX_DISABLE_AUTOUPDATE';
  public static SFDX_ENV = 'SFDX_ENV';
  public static SFDX_INSTALLER = 'SFDX_INSTALLER';
  public static SFDX_LAZY_LOAD_MODULES = 'SFDX_LAZY_LOAD_MODULES';
  public static SFDX_NPM_REGISTRY = 'SFDX_NPM_REGISTRY';
  public static SFDX_S3_HOST = 'SFDX_S3_HOST';
  public static SFDX_UPDATE_INSTRUCTIONS = 'SFDX_UPDATE_INSTRUCTIONS';

  public constructor(env = process.env) {
    super(env);
  }
  public isAutoupdateDisabled(): boolean {
    return this.getBoolean(Env.SFDX_AUTOUPDATE_DISABLE) || this.getBoolean(Env.SFDX_DISABLE_AUTOUPDATE);
  }

  public isAutoupdateDisabledSet(): boolean {
    return !!this.getString(Env.SFDX_AUTOUPDATE_DISABLE) || !!this.getString(Env.SFDX_DISABLE_AUTOUPDATE);
  }

  public setAutoupdateDisabled(value: boolean, updateInstructions?: string): void {
    this.setBoolean(Env.SFDX_AUTOUPDATE_DISABLE, value);
    this.setBoolean(Env.SFDX_DISABLE_AUTOUPDATE, value);
    if (updateInstructions) {
      this.setUpdateInstructions(updateInstructions);
    }
  }

  public setUpdateInstructions(value: string): void {
    this.setString(Env.SFDX_UPDATE_INSTRUCTIONS, value);
  }

  public isDemoMode(): boolean {
    return (this.getString(Env.SFDX_ENV, 'production') || '').toLowerCase() === 'demo';
  }

  public isInstaller(): boolean {
    return this.getBoolean(Env.SFDX_INSTALLER);
  }

  public getS3HostOverride(): string {
    return this.getString(Env.SFDX_S3_HOST);
  }

  public setS3HostOverride(value: string): void {
    return this.setString(Env.SFDX_S3_HOST, value);
  }

  public getNpmRegistryOverride(): string {
    return this.getString(Env.SFDX_NPM_REGISTRY);
  }

  public setNpmRegistryOverride(value: string): void {
    return this.setString(Env.SFDX_NPM_REGISTRY, value);
  }

  public isLazyRequireEnabled(): boolean {
    return this.getBoolean(Env.SFDX_LAZY_LOAD_MODULES);
  }

  public normalizeAutoupdateDisabled(): void {
    // Ensure that the legacy envar always causes the oclif counterpart to be set
    if (this.getBoolean(Env.SFDX_AUTOUPDATE_DISABLE)) {
      this.setBoolean(Env.SFDX_DISABLE_AUTOUPDATE, true);
    } else if (this.getBoolean(Env.SFDX_DISABLE_AUTOUPDATE)) {
      this.setBoolean(Env.SFDX_AUTOUPDATE_DISABLE, true);
    }
  }
}

export default new Env();
