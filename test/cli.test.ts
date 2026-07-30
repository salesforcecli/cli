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
// the below, there's lots of un-awaited promises for testing

import { expect } from 'chai';
import {
  configureAutoUpdate,
  UPDATE_DISABLED_DEMO,
  UPDATE_DISABLED_INSTALLER,
  UPDATE_DISABLED_NPM,
} from '../src/cli.js';

import { Env } from '../src/util/env.js';

describe('cli', () => {
  describe('env', () => {
    let env: Env;

    beforeEach(() => {
      env = new Env({});
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
