const { execSync } = require('child_process');

(() => {
  const testCliNotVersion = (cli, version) => {
    try {
      return execSync(`${cli} --version`).toString('utf-8').includes(version);
    } catch (e) {
      // if cli isn't installed it'll throw, but that's ok for us
      return false;
    }
  };
  // test sfdx is installed
  if (testCliNotVersion('sfdx', 'sfdx-cli/7.')) {
    throw Error('"sf@2.x" has a bin alias for "sfdx", please uninstall sfdx-cli first. See https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm for more information');
  }
})();
