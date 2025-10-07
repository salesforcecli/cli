/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Config } from '@oclif/core/config';
import Flags from '@oclif/core/flags';
import { expect } from 'chai';
import sinon from 'sinon';

describe('preparse hook test', () => {
  let sandbox: sinon.SinonSandbox;
  let config: Config;

  before(async () => {
    config = await Config.load({ root: path.dirname(fileURLToPath(import.meta.url)) });
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

  const baseArgs = ['arg', '--flags-dir', 'flags'];

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

  it('should not modify argv if the command does not have a --flags-dir flag', async () => {
    const argv = ['arg'];
    const flags = {};
    const results = await config.runHook('preparse', { argv, options: { flags } });
    expect(results.successes[0]).to.be.ok;
    expect(results.successes[0].result).to.deep.equal(argv);
  });

  describe('boolean flags', () => {
    it('should add boolean from directory', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean(),
      };
      makeStubs([{ name: 'bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--bool']);
    });

    it('should add boolean from directory and allow flag overrides', async () => {
      const argv = [...baseArgs, '--bool'];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean(),
      };
      makeStubs([{ name: 'bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--bool']);
    });

    it('should add boolean from directory and allow short char flag overrides', async () => {
      const argv = [...baseArgs, '-b'];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean({ char: 'b' }),
      };
      makeStubs([{ name: 'bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '-b']);
    });

    it('should add --no- boolean from directory', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean({ allowNo: true }),
      };
      makeStubs([{ name: 'no-bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--no-bool']);
    });

    it('should add --no- boolean from directory and allow flag overrides', async () => {
      const argv = [...baseArgs, '--bool'];
      const flags = {
        ...baseFlags,
        bool: Flags.boolean({ allowNo: true }),
      };
      makeStubs([{ name: 'no-bool', content: '' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--bool']);
    });
  });

  describe('string flags', () => {
    it('should add string from directory', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'value']);
    });

    it('should add string from directory to override default', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string({ default: 'default' }),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'value']);
    });

    it('should add string from directory and allow flag overrides', async () => {
      const argv = [...baseArgs, '--str', 'value'];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'value']);
    });

    it('should add string from directory and allow short char flag overrides', async () => {
      const argv = [...baseArgs, '-s', 'value'];
      const flags = {
        ...baseFlags,
        str: Flags.string({ char: 's' }),
      };
      makeStubs([{ name: 'str', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '-s', 'value']);
    });

    it('should handle single line json string', async () => {
      const argv = [...baseArgs];
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
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', JSON.stringify(json)]);
    });

    it('should handle multi line json string', async () => {
      const argv = [...baseArgs];
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
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', JSON.stringify(json)]);
    });

    it('should handle single value with new line', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value\n' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'value']);
    });

    it('should add string from directory using short char as file name', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string({ char: 's' }),
      };
      makeStubs([{ name: 's', content: 'value' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '-s', 'value']);
    });
  });

  describe('multiple flags', () => {
    it('should combine values from directory with values from argv', async () => {
      const argv = [...baseArgs, '--multiple', 'thing1'];
      const flags = {
        ...baseFlags,
        multiple: Flags.string({ multiple: true }),
      };
      makeStubs([{ name: 'multiple', content: 'thing2' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--multiple', 'thing1', '--multiple', 'thing2']);
    });

    it('should add values split by new line', async () => {
      const argv = [...baseArgs, '--multiple', 'thing1'];
      const flags = {
        ...baseFlags,
        multiple: Flags.string({ multiple: true }),
      };
      makeStubs([{ name: 'multiple', content: 'thing2\nthing3' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([
        ...baseArgs,
        '--multiple',
        'thing1',
        '--multiple',
        'thing2',
        '--multiple',
        'thing3',
      ]);
    });

    it('should handle single value with carriage return and new line', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value\r\n' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'value']);
    });

    it('should add values split by carriage return and new line', async () => {
      const argv = [...baseArgs, '--multiple', 'thing1'];
      const flags = {
        ...baseFlags,
        multiple: Flags.string({ multiple: true }),
      };
      makeStubs([{ name: 'multiple', content: 'thing2\r\nthing3' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([
        ...baseArgs,
        '--multiple',
        'thing1',
        '--multiple',
        'thing2',
        '--multiple',
        'thing3',
      ]);
    });
  });

  describe('comment filtering', () => {
    it('should filter full-line comments starting with #', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: '# This is a comment\nactual-value\n# Another comment' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'actual-value']);
    });

    it('should filter full-line comments starting with //', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: '// This is a comment\nactual-value\n// Another comment' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'actual-value']);
    });

    it('should filter comments with leading whitespace', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: '  # Indented hash comment\nactual-value\n\t// Tab-indented slash comment' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', 'actual-value']);
    });

    it('should preserve lines that contain comments but are not full-line comments', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: 'value-with#hash\nvalue-with//slashes' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([
        ...baseArgs,
        '--str',
        'value-with#hash',
        '--str',
        'value-with//slashes',
      ]);
    });

    it('should not filter comments in .json files', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      const jsonContent = {
        comment: '# This should not be filtered',
        slashes: '// This should not be filtered either',
      };
      makeStubs([{ name: 'str.json', content: JSON.stringify(jsonContent, null, 2) }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', JSON.stringify(jsonContent)]);
    });

    it('should preserve whitespace in non-comment lines', async () => {
      const argv = [...baseArgs];
      const flags = {
        ...baseFlags,
        str: Flags.string(),
      };
      makeStubs([{ name: 'str', content: '# Comment\n  value with spaces  \n// Another comment' }]);
      const results = await config.runHook('preparse', { argv, options: { flags } });
      expect(results.successes[0]).to.be.ok;
      expect(results.successes[0].result).to.deep.equal([...baseArgs, '--str', '  value with spaces  ']);
    });
  });
});
