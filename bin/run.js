#!/usr/bin/env node

// Pre-process/prune flags before creating or running the actual CLI
(await import('../dist/flags.js')).preprocessCliFlags(process);

// Since the CLI is a single process, we can have a larger amount of max listeners since
// the process gets shut down. Don't set it to 0 (no limit) since we should still be aware
// of rogue event listeners
process.setMaxListeners(parseInt(process.env.SF_MAX_EVENT_LISTENERS, 10) || 1000);

// Don't let other plugins override the CLI specified max listener count
process.setMaxListeners = () => {};

const cli = await import('../dist/cli.js');
await cli.run();
