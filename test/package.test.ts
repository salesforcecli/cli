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
  bundleDependencies?: string[];
};

const pjson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as PackageJson;
const dependencies = Object.keys(pjson.dependencies);
const bundled = new Set(pjson.bundleDependencies ?? []);

// the published tarball must contain the dependency tree that was tested in nightly/rc, so our plugins and libraries
// are bundled. An explicit list is used because yarn v1 fails to install packages that depend on a package with
// `bundleDependencies: true`.
describe('package.json bundleDependencies', () => {
  it('bundles every @salesforce and @oclif dependency', () => {
    const unbundled = dependencies.filter((dep) => /^@(salesforce|oclif)\//.test(dep) && !bundled.has(dep));
    expect(unbundled, 'add these to bundleDependencies').to.deep.equal([]);
  });

  it('only bundles dependencies', () => {
    const notDependencies = [...bundled].filter((dep) => !dependencies.includes(dep));
    expect(notDependencies, 'remove these from bundleDependencies').to.deep.equal([]);
  });
});
