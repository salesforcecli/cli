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

import { readFileSync } from 'node:fs';
import { expect } from 'chai';

type PackageJson = {
  dependencies: Record<string, string>;
  bundleDependencies: string[];
};

const pjson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as PackageJson;

describe('package.json', () => {
  // the published tarball must contain the exact dependency tree that was tested in nightly/rc,
  // so every dependency is bundled. An explicit list is used because yarn v1 fails to install
  // packages that depend on a package with `bundleDependencies: true`.
  it('bundles every dependency', () => {
    expect(pjson.bundleDependencies).to.have.members(Object.keys(pjson.dependencies));
  });
});
