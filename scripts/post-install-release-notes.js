#!/usr/bin/env node

const { spawn } = await import('node:child_process');
const { join } = await import('node:path');
const { fileURLToPath } = await import('node:url');

async function main() {
  if (process.env.SF_HIDE_RELEASE_NOTES === 'true') process.exit(0);

  /*
   * NOTE: Please read "Notes about the hook scripts" in this PR before making changes:
   * https://github.com/salesforcecli/sfdx-cli/pull/407
   */
  await new Promise((resolve) => {
    const logAndExit = (msg) => {
      console.log('NOTE: This error can be ignored in CI and may be silenced in the future');
      console.log('- Set the SF_HIDE_RELEASE_NOTES env var to "true" to skip this script\n');
      console.log(msg.toString());

      resolve();
    };

    const executable = process.platform === 'win32' ? 'run.cmd' : 'run.js';
    const cmd = spawn(join(fileURLToPath(import.meta.url), '..', '..', 'bin', executable), ['whatsnew', '--hook'], {
      stdio: ['ignore', 'inherit', 'pipe'],
      timeout: 10000,
    });

    cmd.stderr.on('data', (error) => {
      logAndExit(error);
    });

    cmd.on('error', (error) => {
      logAndExit(error);
    });

    // 'exit' fires whether or not the stream is finished
    cmd.on('exit', (code) => {
      resolve();
    });
  });
}

await main();
