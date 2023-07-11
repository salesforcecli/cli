#!/usr/bin/env node

const { spawn } = require('child_process');
const { join } = require('path');

if (process.env.SF_HIDE_RELEASE_NOTES === 'true') process.exit(0);

const logAndExit = (msg) => {
  console.log('NOTE: This error can be ignored in CI and may be silenced in the future');
  console.log('- Set the SF_HIDE_RELEASE_NOTES env var to "true" to skip this script\n');
  console.log(msg.toString());

  process.exit(0);
};

/*
 * NOTE: Please read "Notes about the hook scripts" in this PR before making changes:
 * https://github.com/salesforcecli/sfdx-cli/pull/407
 */

var executable = process.platform === 'win32' ? 'run.cmd' : 'run';

var cmd = spawn(join(__dirname, '..', 'bin', executable), ['whatsnew', '--hook'], {
  stdio: ['ignore', 'inherit', 'pipe'],
  timeout: 10000,
});

cmd.stderr.on('data', (error) => {
  logAndExit(error);
});

cmd.on('error', (error) => {
  logAndExit(error);
});

// 'exit' fires whether or not the stream are finished
cmd.on('exit', (code) => {
  process.exit(0);
});
