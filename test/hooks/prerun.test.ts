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
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect } from 'chai';
import { runHook } from '@oclif/test';
import { Config } from '@oclif/core/config';

function sanitize(stderr: string): string {
  return stderr
    .replaceAll('›   ', ' ')
    .replaceAll('»   ', ' ')
    .split('\n')
    .map((s) => s.trim())
    .join(' ');
}

describe('Prerun Hook', () => {
  const WARNING_REGEX =
    /Warning: Plugin ([^ ]+) \((\d+\.\d+\.\d+(?:-[^)]*)?)\) is older than the version specified by ([^ ]+) \((\d+\.\d+\.\d+(?:-[^)]*)?)\)/;
  let config: Config;

  before(async () => {
    config = await Config.load({ root: dirname(fileURLToPath(import.meta.url)) });
  });

  it('should do nothing when --json is present', async () => {
    const { stderr } = await runHook('prerun', { argv: ['--json'] });
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should do nothing if plugin type is "link"', async () => {
    const command = {
      type: 'link',
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] });
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should do nothing if plugin is not JIT or core', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-foo',
        version: '1.0.0',
      },
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] });
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should warn if plugin version is less than specified version', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '0.0.1',
      },
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] });
    expect(sanitize(stderr)).to.match(WARNING_REGEX);
  });

  it('should not warn if plugin version is greater than specified version', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '10000.0.0',
      },
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] });
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should not warn if plugin version is equal to specified version', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '1.0.0',
      },
    };

    config.pjson.dependencies = {
      ...config.pjson.dependencies,
      '@salesforce/plugin-packaging': '1.0.0',
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] }, config);
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should warn if plugin version is an older prerelease', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '1.0.0-beta.1',
      },
    };

    config.pjson.dependencies = {
      ...config.pjson.dependencies,
      '@salesforce/plugin-packaging': '1.0.0-beta.2',
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] }, config);
    expect(sanitize(stderr)).to.match(WARNING_REGEX);
  });

  it('should not warn if plugin version is a newer prerelease', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '1.0.0-beta.2',
      },
    };

    config.pjson.dependencies = {
      ...config.pjson.dependencies,
      '@salesforce/plugin-packaging': '1.0.0-beta.1',
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] }, config);
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should not warn if plugin version is a newer prerelease and specified version is an older stable release', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '1.0.0-beta.1',
      },
    };

    config.pjson.dependencies = {
      ...config.pjson.dependencies,
      '@salesforce/plugin-packaging': '1.0.0',
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] }, config);
    expect(sanitize(stderr)).to.not.match(WARNING_REGEX);
  });

  it('should warn if plugin version is an older prerelease and specified version is a newer stable release', async () => {
    const command = {
      plugin: {
        type: 'core',
        name: '@salesforce/plugin-packaging',
        version: '1.0.0-beta.1',
      },
    };
    config.pjson.dependencies = {
      ...config.pjson.dependencies,
      '@salesforce/plugin-packaging': '1.0.1',
    };
    const { stderr } = await runHook('prerun', { Command: command, argv: [] }, config);
    expect(sanitize(stderr)).to.match(WARNING_REGEX);
  });
});
