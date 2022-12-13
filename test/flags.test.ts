/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { expect } from 'chai';
import { preprocessCliFlags, ProcessLike } from '../src/flags';

describe('CLI flags', () => {
  it('should pass through args it does not recognize', () => {
    const process: ProcessLike = {
      argv: ['force:some:command', '--dev-debug', '--foo', '-f', 'bar'],
      env: {},
    };
    preprocessCliFlags(process);
    expect(process.argv).to.deep.equal(['force:some:command', '--foo', '-f', 'bar']);
  });

  it('should recognize --dev-debug', () => {
    const process: ProcessLike = {
      argv: ['--dev-debug'],
      env: {},
    };
    preprocessCliFlags(process);
    expect(process.argv).not.to.include('--dev-debug');
    expect(process.env.DEBUG).to.equal('*');
    expect(process.env.SF_DEBUG).to.equal('1');
    expect(process.env.SF_ENV).to.equal('development');
    expect(process.env.SFDX_DEBUG).to.equal('1');
    expect(process.env.SFDX_ENV).to.equal('development');
  });

  it('should recognize --dev-debug in any order', () => {
    const process: ProcessLike = {
      argv: ['-a', 'alias', 'var=arg', '--dev-debug'],
      env: {},
    };
    preprocessCliFlags(process);
    expect(process.argv).not.to.include('--dev-debug');
    expect(process.env.DEBUG).to.equal('*');
    expect(process.env.SF_DEBUG).to.equal('1');
    expect(process.env.SF_ENV).to.equal('development');
    expect(process.env.SFDX_DEBUG).to.equal('1');
    expect(process.env.SFDX_ENV).to.equal('development');
    expect(process.argv.length).to.equal(3);
  });

  it('should recognize --dev-debug with a DEBUG filter', () => {
    const process: ProcessLike = {
      argv: ['--dev-debug', '--dev-filter', 'sf:config'],
      env: {},
    };
    preprocessCliFlags(process);
    expect(process.argv).to.deep.equal([]);
    expect(process.argv).not.to.include('sf:Config');
    expect(process.env.DEBUG).to.equal('sf:config');
    expect(process.env.SF_DEBUG).to.equal('1');
    expect(process.env.SF_ENV).to.equal('development');
    expect(process.env.SFDX_DEBUG).to.equal('1');
    expect(process.env.SFDX_ENV).to.equal('development');
  });

  it('should recognize --dev-debug with a DEBUG filter in any order', () => {
    const process: ProcessLike = {
      argv: ['--setdefault', '--dev-filter', 'sf:Config', '--dev-debug'],
      env: {},
    };
    preprocessCliFlags(process);
    expect(process.argv).to.deep.equal(['--setdefault']);
    expect(process.argv).not.to.include('sf:Config');
    expect(process.argv).to.include('--setdefault');
    expect(process.env.DEBUG).to.equal('sf:Config');
    expect(process.env.SF_DEBUG).to.equal('1');
    expect(process.env.SF_ENV).to.equal('development');
    expect(process.env.SFDX_DEBUG).to.equal('1');
    expect(process.env.SFDX_ENV).to.equal('development');
  });

  it('should only set DEBUG if --dev-debug is present', () => {
    const process: ProcessLike = {
      argv: ['--setdefault', '--dev-filter', 'sf:Config'],
      env: {},
    };
    preprocessCliFlags(process);
    expect(process.argv).to.deep.equal(['--setdefault', '--dev-filter', 'sf:Config']);
    expect(process.env.DEBUG).to.undefined;
    expect(process.env.SF_DEBUG).to.be.undefined;
    expect(process.env.SF_ENV).to.undefined;
    expect(process.env.SFDX_DEBUG).to.undefined;
    expect(process.env.SFDX_ENV).to.undefined;
  });
});
