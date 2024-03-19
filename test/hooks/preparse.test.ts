/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import fs from 'node:fs/promises';
import { Config, Flags } from '@oclif/core';
import { expect } from 'chai';
import sinon from 'sinon';

describe('preparse hook test', () => {
  let sandbox: sinon.SinonSandbox;
  let config: Config;

  before(async () => {
    config = await Config.load({ root: import.meta.dirname });
  });

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
  });

  afterEach(async () => {
    sandbox.restore();
  });

  function makeStubs(files: Array<{ name: string; content: string }>) {
    // @ts-expect-error because sinon wants it to be a Dirent[] but node returns string[]
    sandbox.stub(fs, 'readdir').resolves(files.map(({ name }) => name));

    for (const { name, content } of files) {
      sandbox.stub(fs, 'readFile').withArgs(sinon.match(name)).resolves(content);
    }
  }

  const baseFlags = {
    'flags-dir': Flags.directory(),
  };

  it('should not modify argv if --flags-dir is not present', async () => {
    const argv = ['arg'];
    const flags = {
      ...baseFlags,
    };
    const results = await config.runHook('preparse', { argv, options: { flags } });
    expect(results.successes[0]).to.be.ok;
    expect(results.successes[0].result).to.deep.equal(argv);
  });

  it('should not modify argv if --flags-dir is present but no directory is provided', async () => {
    const argv = ['arg', '--flags-dir', '--bool'];
    const flags = {
      ...baseFlags,
      bool: Flags.boolean(),
    };
    const results = await config.runHook('preparse', { argv, options: { flags } });
    expect(results.successes[0]).to.be.ok;
    expect(results.successes[0].result).to.deep.equal(argv);
  });

  it('should not modify argv if --flags-dir is present but non-existent directory is provided', async () => {
    const argv = ['arg', '--flags-dir', 'DOES_NOT_EXIST'];
    const flags = {
      ...baseFlags,
      bool: Flags.boolean(),
    };
    const results = await config.runHook('preparse', { argv, options: { flags } });
    expect(results.successes[0]).to.be.ok;
    expect(results.successes[0].result).to.deep.equal(argv);
  });

  describe('boolean flags', () => {
    it('should add boolean from directory', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean(),
      };
      makeStubs([{ name: 'bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--bool']);
    });

    it('should add boolean from directory and allow flag overrides', async () => {
      const argv = ['arg', '--flags-dir', 'flags', '--bool'];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean(),
      };
      makeStubs([{ name: 'bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--bool']);
    });

    it('should add boolean from directory and allow short char flag overrides', async () => {
      const argv = ['arg', '--flags-dir', 'flags', '-b'];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean({ char: 'b' }),
      };
      makeStubs([{ name: 'bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '-b']);
    });
  });

  describe('string flags', () => {
    it('should add string from directory', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--str', 'value']);
    });

    it('should add string from directory to override default', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        str: Flags.string({ default: 'default' }),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--str', 'value']);
    });

    it('should add string from directory and allow flag overrides', async () => {
      const argv = ['arg', '--flags-dir', 'flags', '--str', 'value'];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--str', 'value']);
    });

    it('should add string from directory and allow short char flag overrides', async () => {
      const argv = ['arg', '--flags-dir', 'flags', '-s', 'value'];
      const flags = {
        ...baseFlags,
        str: Flags.string({ char: 's' }),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '-s', 'value']);
    });

    it('should handle single line json string', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      const json = {
        key: 'value',
        deeply: {
          nested: {
            key: 'value',
          },
        },
      };
      makeStubs([{ name: 'str', content: JSON.stringify(json) }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--str', JSON.stringify(json)]);
    });

    it('should handle multi line json string', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      const json = {
        key: 'value',
        deeply: {
          nested: {
            key: 'value',
          },
        },
      };
      makeStubs([{ name: 'str.json', content: JSON.stringify(json, null, 2) }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--str', JSON.stringify(json)]);
    });

    it('should handle single value with new line', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value\n' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--str', 'value']);
    });

    it('should add string from directory using short char as file name', async () => {
      const argv = ['arg', '--flags-dir', 'flags'];
      const flags = {
        ...baseFlags,
        str: Flags.string({ char: 's' }),
      };
      makeStubs([{ name: 's', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '-s', 'value']);
    });
  });

  describe('multiple flags', () => {
    it('should combine values from directory with values from argv', async () => {
      const argv = ['arg', '--flags-dir', 'flags', '--multiple', 'thing1'];
      const flags = {
        ...baseFlags,
        multiple: Flags.string({ multiple: true }),
      };
      makeStubs([{ name: 'multiple', content: 'thing2' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal(['arg', '--multiple', 'thing1', '--multiple', 'thing2']);
    });

    it('should add values split by new line', async () => {
      const argv = ['arg', '--flags-dir', 'flags', '--multiple', 'thing1'];
      const flags = {
        ...baseFlags,
        multiple: Flags.string({ multiple: true }),
      };
      makeStubs([{ name: 'multiple', content: 'thing2\nthing3' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([
        'arg',
        '--multiple',
        'thing1',
        '--multiple',
        'thing2',
        '--multiple',
        'thing3',
      ]);
    });
  });
});
