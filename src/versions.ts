/* eslint-disable */
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// Note: Leave this file as ES5 js for compatibility with earlier Node.js versions
'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pjson = require('../package.json');

/**
 * Determines whether or not a tag string is a semantic version.
 *
 * @param {*} tag The possible version string
 * @returns {boolean} True, if the string is recognized as a semantic version
 */
export function isVersion(tag) {
  if (!tag) {
    return false;
  }
  // From https://github.com/sindresorhus/semver-regex
  const SEMVER_REGEX =
    /^v?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-]+(?:\.[\da-z-]+)*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?$/gi;
  return SEMVER_REGEX.test(tag.toString());
}

module.exports.isVersion = isVersion;

/**
 * Compares two semantic version strings.
 *
 * @param {string} a The first version
 * @param {string} b The second version
 * @returns {number} < 0 if a < b, 0 if a == b, > 0 if a > b
 */
export function compareVersions(a, b) {
  a = a || '0';
  b = b || '0';
  const ignore = /-.*$/;
  const partsA = a.replace(ignore, '').split('.');
  const partsB = b.replace(ignore, '').split('.');
  const len = Math.max(partsA.length, partsB.length);
  const diffInLength = partsA.length - partsB.length;
  if (diffInLength < 0) {
    for (let i = partsA.length; i < len; i++) {
      partsA[i] = '0';
    }
  } else {
    for (let i = partsB.length; i < len; i++) {
      partsB[i] = '0';
    }
  }
  let diff;
  for (let i = 0; i < len; i++) {
    diff = parseInt(partsA[i], 10) - parseInt(partsB[i], 10);
    if (diff) {
      return diff;
    }
  }
  return 0;
}

module.exports.compareVersions = compareVersions;

/**
 * Checks the current Node version for compatibility before launching the CLI.
 */
export function checkNodeVersion(
  currentVersion = process.versions.node,
  requiredVersion = pjson.engines.node.slice(2)
) {
  if (module.exports.compareVersions(currentVersion, requiredVersion) < 0) {
    // eslint-disable-next-line no-console
    console.error(
      'Unsupported Node.js version ' + currentVersion + ', ' + 'version ' + requiredVersion + ' or later is required.'
    );
    process.exit(1);
  }
}

module.exports.checkNodeVersion = checkNodeVersion;
