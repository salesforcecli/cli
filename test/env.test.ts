/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// the below, there's lots of un-awaited promises for testing
/* eslint-disable no-unused-expressions*/
/* eslint-disable @typescript-eslint/require-await*/
import { expect } from 'chai';
import { EnvironmentVariable } from '@salesforce/core';
import { Env } from '../src/util/env';

describe('Env', () => {
  let env: Env;

  beforeEach(() => {
    env = new Env({});
  });

  describe('normalizeAutoupdateDisabled', () => {
    it('should set the oclif autoupdate disabled envar if the legacy one is set', () => {
      env.setBoolean(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE, true);
      env.normalizeAutoupdateDisabled();
      expect(env.getBoolean(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE)).to.be.true;
    });

    it('should set the legacy autoupdate disabled envar if the oclif one is set', () => {
      env.setBoolean(EnvironmentVariable.SFDX_DISABLE_AUTOUPDATE, true);
      env.normalizeAutoupdateDisabled();
      expect(env.getBoolean(EnvironmentVariable.SFDX_AUTOUPDATE_DISABLE)).to.be.true;
    });
  });

  describe('isAutoupdateDisabled', () => {
    it('should not report autoupdate disabled with no envar', () => {
      expect(env.isAutoupdateDisabled()).to.be.false;
    });

    it('should report autoupdate disabled with legacy envar', () => {
      env.setBoolean('SFDX_AUTOUPDATE_DISABLE', true);
      expect(env.isAutoupdateDisabled()).to.be.true;
    });

    it('should report autoupdate disabled with oclif envar', () => {
      env.setBoolean('SFDX_DISABLE_AUTOUPDATE', true);
      expect(env.isAutoupdateDisabled()).to.be.true;
    });
  });

  describe('isAutoupdateDisabledSet', () => {
    it('should not report set with neither envar', () => {
      expect(env.isAutoupdateDisabledSet()).to.be.false;
    });

    it('should report set with legacy envar', () => {
      env.setBoolean('SFDX_AUTOUPDATE_DISABLE', true);
      expect(env.isAutoupdateDisabledSet()).to.be.true;
    });

    it('should report set with oclif envar', () => {
      env.setBoolean('SFDX_DISABLE_AUTOUPDATE', true);
      expect(env.isAutoupdateDisabledSet()).to.be.true;
    });
  });

  describe('isAutoupdateDisabledSet', () => {
    it('should set both autoupdate envars', () => {
      env.setAutoupdateDisabled(true);
      expect(env.getBoolean('SFDX_AUTOUPDATE_DISABLE')).to.be.true;
      expect(env.getBoolean('SFDX_DISABLE_AUTOUPDATE')).to.be.true;
    });
  });

  describe('setUpdateInstructions', () => {
    it('should set update instructions', () => {
      env.setUpdateInstructions('update at your own risk!');
      expect(env.getString('SFDX_UPDATE_INSTRUCTIONS')).to.equal('update at your own risk!');
    });
  });

  describe('isDemoMode', () => {
    it('should report if the cli is not in demo mode', () => {
      expect(env.isDemoMode()).to.be.false;
    });

    it('should report if the cli is in demo mode', () => {
      env.setString('SFDX_ENV', 'demo');
      expect(env.isDemoMode()).to.be.true;
    });
  });

  describe('isInstaller', () => {
    it('should report if the cli is not running from an installer', () => {
      expect(env.isInstaller()).to.be.false;
    });

    it('should report if the cli is running from an installer', () => {
      env.setBoolean('SFDX_INSTALLER', true);
      expect(env.isInstaller()).to.be.true;
    });
  });

  describe('getS3HostOverride', () => {
    it('should return an S3 host override if set', () => {
      env.setString('SFDX_S3_HOST', 'http://example.com');
      expect(env.getS3HostOverride()).to.equal('http://example.com');
    });
  });

  describe('setS3HostOverride', () => {
    it('should set an S3 host override', () => {
      env.setS3HostOverride('http://example.com');
      expect(env.getString('SFDX_S3_HOST')).to.equal('http://example.com');
    });
  });

  describe('isLazyRequireEnabled', () => {
    it('should return false if lazy requires are not enabled', () => {
      expect(env.isLazyRequireEnabled()).to.be.false;
    });

    it('should return true if lazy requires are enabled', () => {
      env.setBoolean('SFDX_LAZY_LOAD_MODULES', true);
      expect(env.isLazyRequireEnabled()).to.be.true;
    });
  });
});
