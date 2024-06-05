#!/usr/bin/env ts-node

async function main() {
  const { settings } = await import('@oclif/core/settings');
  const { execute } = await import('@oclif/core/execute');

  settings.performanceEnabled = true;
  await execute({ development: true, dir: import.meta.url });
}

await main();
