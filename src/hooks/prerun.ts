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

import { type Hook } from '@oclif/core/hooks';

const hook: Hook.Prerun = async function ({ Command, config, argv }) {
  if (argv.includes('--json') || process.argv.includes('--json')) return;
  const { plugin } = Command;
  if (!plugin) return;
  if (plugin.type === 'link') return;

  const jitPlugins = config.pjson.oclif.jitPlugins ?? {};
  const deps = config.pjson.dependencies ?? {};

  const specifiedVersion = jitPlugins[plugin.name] ?? deps[plugin.name];
  if (!specifiedVersion) return;

  // Simple semver comparison without external library
  const parseVersion = (version: string): number[] =>
    version
      .replace(/^[^\d]*/, '')
      .split('.')
      .map((n) => parseInt(n, 10) || 0);

  const isLessThan = (version1: string, version2: string): boolean => {
    const v1 = parseVersion(version1);
    const v2 = parseVersion(version2);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
      const num1 = v1[i] || 0;
      const num2 = v2[i] || 0;

      if (num1 < num2) return true;
      if (num1 > num2) return false;
    }
    return false;
  };

  if (isLessThan(plugin.version, specifiedVersion)) {
    const { ux } = await import('@oclif/core/ux');
    ux.warn(
      `Plugin ${plugin.name} (${plugin.version}) is older than the version specified by ${config.bin} (${specifiedVersion})`
    );
  }
};

export default hook;
