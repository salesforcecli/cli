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

  // ============================================================================
  // CLI OVERRIDE PRECEDENCE TESTS
  // ============================================================================
  //
  // WHAT WE'RE TESTING:
  // When a user specifies a flag on the CLI AND the same flag exists as a file
  // in --flags-dir, what happens?
  // Per PR #1536 (https://github.com/salesforcecli/cli/pull/1536):
  //    "Flags/values provided by the user will override any flag/values found by
  //     --flags-dir -- unless the flag supports `multiple`, in which case they will
  //     all be combined."
  //
  // HOW FLAGS-DIR WORKS:
  // - Files in flags-dir may be named with the LONG flag name (e.g., "test-level")
  // - File contents become the flag value
  // - The hook inserts these as argv entries AFTER the user's CLI args
  //
  // THE OVERRIDE CHECK:
  // Before inserting a flags-dir value, the hook checks if that flag was already
  // provided on CLI. The check must detect BOTH CLI forms:
  //   - Short/char form:  -l RunLocalTests
  //   - Long form:        --test-level RunLocalTests
  // If either form is found on CLI, the flags-dir file is skipped (for single-
  // value flags). For multiple-value flags, both CLI and flags-dir are combined.
  //
  // WHY ONLY LONG-FORM FILENAMES IN FLAGS-DIR:
  // The override check uses long flag names (e.g., "test-level") to match files.
  // A file named "l" would NOT be recognized as the same flag, so it would always
  // be inserted regardless of what's provided on the CLI. These tests use
  // long-named files only.
  //
  // FLAG TYPES:
  //
  //   Type              | Description          | Real example             | Test flag
  //   ------------------|----------------------|--------------------------|-------------------------
  //   String (single)   | Takes one value      | --test-level RunLocal    | --myflag my-cli-val
  //   String (multiple) | Takes multiple vals  | --source-dir src force   | --myflag my-cli-val
  //   Boolean           | Present or absent    | --dry-run                | --myflag
  //   Boolean (allowNo) | Can be negated       | --wait or --no-wait      | --myflag or --no-myflag
  //
  //   A flag with a "short/char" form has a short, single character version, (e.g. 'm').
  //   Real example: -l is the short/char for --test-level. Our tests use -m for --myflag.
  //
  // TEST MATRIX:
  //
  //   #  | Flag Type         | short/char version?  | flags-dir file (contents)    | CLI argument         | Result
  //   ---|-------------------|----------------------|------------------------------|----------------------|---------------
  //   1  | String (single)   | no                   | myflag    (my-flags-dir-val) | --myflag my-cli-val  | CLI overrides
  //   2  | String (single)   | yes (and uses it)    | myflag    (my-flags-dir-val) | -m my-cli-val        | CLI overrides
  //   3  | String (single)   | yes (doesn't use it) | myflag    (my-flags-dir-val) | --myflag my-cli-val  | CLI overrides *
  //   4  | String (multiple) | no                   | myflag    (my-flags-dir-val) | --myflag my-cli-val  | Combined
  //   5  | String (multiple) | yes (and uses it)    | myflag    (my-flags-dir-val) | -m my-cli-val        | Combined
  //   6  | String (multiple) | yes (doesn't use it) | myflag    (my-flags-dir-val) | --myflag my-cli-val  | Combined
  //   7  | Boolean           | no                   | myflag    (empty)            | --myflag             | CLI overrides
  //   8  | Boolean           | yes (and uses it)    | myflag    (empty)            | -m                   | CLI overrides
  //   9  | Boolean           | yes (doesn't use it) | myflag    (empty)            | --myflag             | CLI overrides *
  //   10 | Boolean (allowNo) | no                   | no-myflag (empty)            | --myflag             | CLI overrides
  //   11 | Boolean (allowNo) | no                   | myflag    (empty)            | --no-myflag          | CLI overrides *
  //   12 | Boolean (allowNo) | yes (and uses it)    | no-myflag (empty)            | -m                   | CLI overrides
  //   13 | Boolean (allowNo) | yes (doesn't use it) | no-myflag (empty)            | --myflag             | CLI overrides *
  //   14 | Boolean (allowNo) | yes (doesn't use it) | myflag    (empty)            | --no-myflag          | CLI overrides *
  //
  //   * = Would have failed with bug from commit c83f81a (used ?? instead of ||)
  //       The bug affected cases where a flag HAS a char defined, but the user
  //       typed the long form on CLI (e.g., --myflag instead of -m).
  //
  // ============================================================================

  describe('CLI override precedence tests', () => {
    describe('String flags (single value) - CLI should override flags-dir', () => {
      it('should override flags-dir value with CLI value (#1:  Flag is for String (single), no short/char version)', async () => {
        const argv = [...baseArgs, '--myflag', 'my-cli-val'];
        const flags = {
          ...baseFlags,
          myflag: Flags.string(), // No char defined
        };
        makeStubs([{ name: 'myflag', content: 'my-flags-dir-val' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--myflag', 'my-cli-val']);
      });

      it('should override flags-dir value with CLI value (#2:  Flag is for String (single), has short/char version (and uses it))', async () => {
        const argv = [...baseArgs, '-m', 'my-cli-val'];
        const flags = {
          ...baseFlags,
          myflag: Flags.string({ char: 'm' }),
        };
        makeStubs([{ name: 'myflag', content: 'my-flags-dir-val' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI value should win - flags-dir value should NOT be added
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '-m', 'my-cli-val']);
      });

      it("should override flags-dir value with CLI value (#3:  Flag is for String (single), has short/char version (doesn't use it))", async () => {
        // (commit c83f81a's bug causes this test to fail)
        const argv = [...baseArgs, '--myflag', 'my-cli-val'];
        const flags = {
          ...baseFlags,
          myflag: Flags.string({ char: 'm' }), // Has char, but CLI uses --myflag not -m
        };
        makeStubs([{ name: 'myflag', content: 'my-flags-dir-val' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI value should win - flags-dir value should NOT be added
        // With bug: would be [...baseArgs, '--myflag', 'my-cli-val', '--myflag', 'my-flags-dir-val']
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--myflag', 'my-cli-val']);
      });
    });

    describe('String flags (multiple: true) - CLI and flags-dir should combine', () => {
      it('should combine flags-dir with CLI value (#4:  Flag is for String (multiple), no short/char version)', async () => {
        const argv = [...baseArgs, '--myflag', 'my-cli-val'];
        const flags = {
          ...baseFlags,
          myflag: Flags.string({ multiple: true }), // No char defined
        };
        makeStubs([{ name: 'myflag', content: 'my-flags-dir-val' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // Both values should be present (combined)
        expect(results.successes[0].result).to.deep.equal([
          ...baseArgs,
          '--myflag',
          'my-cli-val',
          '--myflag',
          'my-flags-dir-val',
        ]);
      });

      it('should combine flags-dir with CLI value (#5:  Flag is for String (multiple), has short/char version (and uses it))', async () => {
        const argv = [...baseArgs, '-m', 'my-cli-val'];
        const flags = {
          ...baseFlags,
          myflag: Flags.string({ multiple: true, char: 'm' }),
        };
        makeStubs([{ name: 'myflag', content: 'my-flags-dir-val' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // Both values should be present (combined)
        expect(results.successes[0].result).to.deep.equal([
          ...baseArgs,
          '-m',
          'my-cli-val',
          '--myflag',
          'my-flags-dir-val',
        ]);
      });

      it("should combine flags-dir with CLI value (#6:  Flag is for String (multiple), has short/char version (doesn't use it))", async () => {
        const argv = [...baseArgs, '--myflag', 'my-cli-val'];
        const flags = {
          ...baseFlags,
          myflag: Flags.string({ multiple: true, char: 'm' }),
        };
        makeStubs([{ name: 'myflag', content: 'my-flags-dir-val' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // Both values should be present (combined)
        expect(results.successes[0].result).to.deep.equal([
          ...baseArgs,
          '--myflag',
          'my-cli-val',
          '--myflag',
          'my-flags-dir-val',
        ]);
      });
    });

    describe('Boolean flags - CLI should override flags-dir', () => {
      it('should override flags-dir value with CLI value (#7:  Flag is for Boolean, no short/char version)', async () => {
        const argv = [...baseArgs, '--myflag'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean(), // No char defined
        };
        makeStubs([{ name: 'myflag', content: '' }]); // Empty file for boolean
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI should win - flags-dir should NOT add duplicate
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--myflag']);
      });

      it('should override flags-dir value with CLI value (#8:  Flag is for Boolean, has short/char version (and uses it))', async () => {
        const argv = [...baseArgs, '-m'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ char: 'm' }),
        };
        makeStubs([{ name: 'myflag', content: '' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI should win - flags-dir should NOT add duplicate
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '-m']);
      });

      it("should override flags-dir value with CLI value (#9:  Flag is for Boolean, has short/char version (doesn't use it))", async () => {
        // (commit c83f81a's bug causes this test to fail)
        const argv = [...baseArgs, '--myflag'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ char: 'm' }), // Has char, but CLI uses --myflag not -m
        };
        makeStubs([{ name: 'myflag', content: '' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI should win - flags-dir should NOT add duplicate
        // With bug: would be [...baseArgs, '--myflag', '--myflag']
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--myflag']);
      });
    });

    describe('Boolean flags (allowNo: true) - CLI should override flags-dir', () => {
      it('should override flags-dir value with CLI value (#10:  Flag is for Boolean (allowNo), no short/char version)', async () => {
        const argv = [...baseArgs, '--myflag'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ allowNo: true }), // No char
        };
        makeStubs([{ name: 'no-myflag', content: '' }]); // Negated file
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI --myflag should win, flags-dir no-myflag should NOT be added
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--myflag']);
      });

      it('should override flags-dir value with CLI value (#11:  Flag is for Boolean (allowNo), no short/char version, --no-myflag)', async () => {
        // (commit c83f81a's bug causes this test to fail)
        const argv = [...baseArgs, '--no-myflag'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ allowNo: true }), // No char
        };
        makeStubs([{ name: 'myflag', content: '' }]); // Positive file
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI --no-myflag should win, flags-dir myflag should NOT be added
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--no-myflag']);
      });

      it('should override flags-dir value with CLI value (#12:  Flag is for Boolean (allowNo), has short/char version (and uses it))', async () => {
        const argv = [...baseArgs, '-m'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ allowNo: true, char: 'm' }),
        };
        makeStubs([{ name: 'no-myflag', content: '' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI -m should win, flags-dir no-myflag should NOT be added
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '-m']);
      });

      it("should override flags-dir value with CLI value (#13:  Flag is for Boolean (allowNo), has short/char version (doesn't use it), --myflag)", async () => {
        // (commit c83f81a's bug causes this test to fail)
        const argv = [...baseArgs, '--myflag'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ allowNo: true, char: 'm' }), // Has char, CLI uses --myflag
        };
        makeStubs([{ name: 'no-myflag', content: '' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI --myflag should win, flags-dir no-myflag should NOT be added
        // With bug: would be [...baseArgs, '--myflag', '--no-myflag']
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--myflag']);
      });

      it("should override flags-dir value with CLI value (#14:  Flag is for Boolean (allowNo), has short/char version (doesn't use it), --no-myflag)", async () => {
        const argv = [...baseArgs, '--no-myflag'];
        const flags = {
          ...baseFlags,
          myflag: Flags.boolean({ allowNo: true, char: 'm' }), // Has char, CLI uses --no-myflag
        };
        makeStubs([{ name: 'myflag', content: '' }]);
        const results = await config.runHook('preparse', { argv, options: { flags } });
        expect(results.successes[0]).to.be.ok;
        // CLI --no-myflag should win, flags-dir myflag should NOT be added
        // With bug: would be [...baseArgs, '--no-myflag', '--myflag']
        expect(results.successes[0].result).to.deep.equal([...baseArgs, '--no-myflag']);
      });
    });
  });
});
