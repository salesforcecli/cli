/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// the below, there's lots of un-awaited promises for testing
/* eslint-disable no-unused-expressions*/
/* eslint-disable @typescript-eslint/require-await*/
import { Config, Interfaces } from '@oclif/core';
import { LoadOptions } from '@oclif/core/lib/interfaces/config';
import { stubInterface } from '@salesforce/ts-sinon';
import { getString } from '@salesforce/ts-types';
import { expect } from 'chai';
import * as sinon from 'sinon';
import {
  configureAutoUpdate,
  configureUpdateSites,
  create,
  UPDATE_DISABLED_DEMO,
  UPDATE_DISABLED_INSTALLER,
  UPDATE_DISABLED_NPM,
} from '../src/cli';

import { Env } from '../src/util/env';

describe('cli', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('create', () => {
    it('should create a runnable CLI instance', async () => {
      sandbox.stub(Config.prototype, 'load').callsFake(() => Promise.resolve());
      let config: LoadOptions;
      const exec = async (argv?: string[], opts?: LoadOptions): Promise<void> => {
        config = opts;
      };
      const env = new Env({ [Env.SF_LAZY_LOAD_MODULES]: 'false' });
      await create('test', 'test', exec, env).run();
      expect(config).to.exist;
      expect(config).to.have.property('options');
      expect(config).to.have.nested.property('options.version').and.equal('test');
      expect(config).to.have.nested.property('options.channel').and.equal('test');
    });
  });

  describe('env', () => {
    let env: Env;

    beforeEach(() => {
      env = new Env({});
    });

    it('should set the s3 host in the oclif config if overridden in an envar', async () => {
      const s3Host = 'http://example.com:9000/s3';
      const npmRegistry = 'http://example.com:9000/npm';
      const config = stubInterface<Interfaces.Config>(sandbox);
      env.setS3HostOverride(s3Host);
      env.setNpmRegistryOverride(npmRegistry);
      configureUpdateSites(config, env);
      expect(getString(config, 'pjson.oclif.update.s3.host')).to.equal(s3Host);
      expect(getString(config, 'pjson.oclif.warn-if-update-available.registry')).to.equal(npmRegistry);
    });

    it('should default to autoupdate disabled for local dev or npm installs', () => {
      configureAutoUpdate(env);

      expect(env.getBoolean('SF_AUTOUPDATE_DISABLE')).to.be.true;
      expect(env.getString(Env.SF_UPDATE_INSTRUCTIONS)).to.equal(UPDATE_DISABLED_NPM);
    });

    it('should allow autoupdate to be explicitly enabled for local dev (for testing autoupdates)', () => {
      env.setBoolean('SF_AUTOUPDATE_DISABLE', false);
      configureAutoUpdate(env);

      expect(env.getBoolean('SF_AUTOUPDATE_DISABLE')).to.be.false;
      expect(env.getString(Env.SF_UPDATE_INSTRUCTIONS)).to.be.undefined;
    });

    it('should default to autoupdate enabled for binary installs', () => {
      env.setBoolean('SFDX_INSTALLER', true);
      configureAutoUpdate(env);

      expect(env.getBoolean('SF_AUTOUPDATE_DISABLE')).to.be.false;
      expect(env.getString(Env.SF_UPDATE_INSTRUCTIONS)).to.be.undefined;
    });

    it('should have autoupdate disabled for binary installs when SF_AUTOUPDATE_DISABLE is set to true', () => {
      env.setBoolean('SFDX_INSTALLER', true);
      env.setBoolean('SF_AUTOUPDATE_DISABLE', true);
      configureAutoUpdate(env);

      expect(env.getBoolean('SF_AUTOUPDATE_DISABLE')).to.be.true;
      expect(env.getString(Env.SF_UPDATE_INSTRUCTIONS)).to.equal(UPDATE_DISABLED_INSTALLER);
    });

    it('should have autoupdate disabled when in demo mode', () => {
      env.setString('SF_ENV', 'DEMO');
      configureAutoUpdate(env);

      expect(env.getBoolean('SF_AUTOUPDATE_DISABLE')).to.be.true;
      expect(env.getString(Env.SF_UPDATE_INSTRUCTIONS)).to.equal(UPDATE_DISABLED_DEMO);
    });
  });
});
