#!/usr/bin/env node

// Pre-process/prune flags before creating or running the actual CLI
(await import('../dist/flags.js')).preprocessCliFlags(process);

const oclif = await import('@oclif/core');
const { createRequire } = await import('module');
const pjson = createRequire(import.meta.url)('../package.json');

const cli = await import('../dist/cli.js');

async function main() {
  // Since the CLI is a single process, we can have a larger amount of max listeners since
  // the process gets shut down. Don't set it to 0 (no limit) since we should still be aware
  // of rouge event listeners
  process.setMaxListeners(parseInt(process.env.SF_MAX_EVENT_LISTENERS, 10) || 1000);

  // Don't let other plugins override the CLI specified max listener count
  process.setMaxListeners = () => {};

  cli
    .create({ version: pjson.version, bin: pjson.oclif.bin, channel: 'stable' })
    .run()
    .then(async () => {
      await oclif.flush();
    })
    .catch(async (err) => {
      await oclif.handle(err);
    });
}

await main();
