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
    throw Error('Please uninstall sfdx');
  }
})();
