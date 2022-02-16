/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { expect } from 'chai';
import { checkNodeVersion, isVersion } from '../src/versions';

describe('versions', () => {
  it('should fail because node version too old', () => {
    const fn = () => checkNodeVersion('v16.0.0', '16.0.1', true);
    expect(fn).to.throw('Unsupported Node.js version');
  });
  it('should succeed because node version just right', () => {
    const fn = () => checkNodeVersion('16.0.1', 'v16.0.0', true);
    expect(fn).to.not.throw();
  });
  it('should succeed because node versions are equal', () => {
    const fn = () => checkNodeVersion('v16.0.1', 'v16.0.1', true);
    expect(fn).to.not.throw();
  });
  describe('is semantic version', () => {
    it('should be a semantic version', () => {
      expect(isVersion('16.0.0')).to.be.true;
    });
    it('should not be a semantic version', () => {
      expect(isVersion('v16.0.0')).to.be.true;
    });
  });
});
