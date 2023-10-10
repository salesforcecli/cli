/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// the below, there's lots of un-awaited promises for testing

import { Config, Interfaces } from '@oclif/core';
import { stubInterface } from '@salesforce/ts-sinon';
import { getString } from '@salesforce/ts-types';
import { expect } from 'chai';
import { createSandbox } from 'sinon';
import { Doctor } from '@salesforce/plugin-info';
import {
  configureAutoUpdate,
  configureUpdateSites,
  create,
  UPDATE_DISABLED_DEMO,
  UPDATE_DISABLED_INSTALLER,
  UPDATE_DISABLED_NPM,
} from '../src/cli.js';

import { Env } from '../src/util/env.js';

describe('cli', () => {
  const sandbox = createSandbox();

  let doctorInitStub: sinon.SinonStub;

  beforeEach(() => {
    doctorInitStub = sandbox.stub(Doctor, 'init');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('create', () => {
    it('should create a runnable CLI instance', async () => {
      sandbox.stub(Config.prototype, 'load').callsFake(() => Promise.resolve());
      let config: Interfaces.LoadOptions;
      const exec = async (argv?: string[], opts?: Interfaces.LoadOptions): Promise<void> => {
        config = opts;
      };
      const env = new Env({});
      await create({
        version: 'test',
        channel: 'test',
        bin: 'test',
        run: exec,
        env,
      }).run();
      expect(config).to.exist;
      expect(config).to.have.property('options');
      expect(config).to.have.nested.property('options.version').and.equal('test');
      expect(config).to.have.nested.property('options.channel').and.equal('test');

      expect(doctorInitStub.called).to.be.false;
    });
  });

  describe('env', () => {
    let env: Env;

    beforeEach(() => {
      env = new Env({});
    });

    it('should set the npm the oclif config if overridden in an envar', async () => {
      const npmRegistry = 'http://example.com:9000/npm';
      const config = stubInterface<Interfaces.Config>(sandbox);
      env.setNpmRegistryOverride(npmRegistry);
      configureUpdateSites(config, env);
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
      env.setBoolean('SF_INSTALLER', true);
      configureAutoUpdate(env);

      expect(env.getBoolean('SF_AUTOUPDATE_DISABLE')).to.be.false;
      expect(env.getString(Env.SF_UPDATE_INSTRUCTIONS)).to.be.undefined;
    });

    it('should have autoupdate disabled for binary installs when SF_AUTOUPDATE_DISABLE is set to true', () => {
      env.setBoolean('SF_INSTALLER', true);
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
