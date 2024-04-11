#!/usr/bin/env tsx

async function main() {
  const oclif = await import('@oclif/core');
  oclif.settings.performanceEnabled = true;
  oclif.settings.debug = true;
  const { logger } = await import('../dist/sf-logger.js');
  await oclif.execute({
    development: true,
    dir: import.meta.url,
    loadOptions: {
      root: import.meta.dirname,
      // logger,
    },
  });
}

await main();
