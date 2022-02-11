/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { EnvVars, EnvironmentVariable } from '@salesforce/core';

export class Env extends EnvVars {
  public constructor(env = process.env) {
    super(env);
  }
  public isAutoupdateDisabled(): boolean {
    return (
      this.getBoolean(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE) ||
      this.getBoolean(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE)
    );
  }

  public isAutoupdateDisabledSet(): boolean {
    return (
      !!this.getString(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE) ||
      !!this.getString(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE)
    );
  }

  public setAutoupdateDisabled(value: boolean, updateInstructions?: string): void {
    this.setBoolean(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE, value);
    this.setBoolean(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE, value);
    if (updateInstructions) {
      this.setUpdateInstructions(updateInstructions);
    }
  }

  public setUpdateInstructions(value: string): void {
    this.setString(EnvironmentVariable.SFDX_UPDATE_INSTRUCTIONS, value);
  }

  public isDemoMode(): boolean {
    return (this.getString(EnvironmentVariable.SFDX_ENV, 'production') || '').toLowerCase() === 'demo';
  }

  public isInstaller(): boolean {
    return this.getBoolean(EnvironmentVariable.SFDX_INSTALLER);
  }

  public getS3HostOverride(): string {
    return this.getString(EnvironmentVariable.SFDX_S3_HOST);
  }

  public setS3HostOverride(value: string): void {
    return this.setString(EnvironmentVariable.SFDX_S3_HOST, value);
  }

  public getNpmRegistryOverride(): string {
    return this.getString(EnvironmentVariable.SFDX_NPM_REGISTRY);
  }

  public setNpmRegistryOverride(value: string): void {
    return this.setString(EnvironmentVariable.SFDX_NPM_REGISTRY, value);
  }

  public isLazyRequireEnabled(): boolean {
    return this.getBoolean(EnvironmentVariable.SFDX_LAZY_LOAD_MODULES);
  }

  public normalizeAutoupdateDisabled(): void {
    // Ensure that the legacy envar always causes the oclif counterpart to be set
    if (this.getBoolean(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE)) {
      this.setBoolean(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE, true);
    } else if (this.getBoolean(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE)) {
      this.setBoolean(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE, true);
    }
  }
}

export default new Env();
