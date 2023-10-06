#!/usr/bin/env ts-node

async function main() {
  const oclif = await import('@oclif/core');
  oclif.settings.performanceEnabled = true;
  await oclif.execute({ development: true, dir: import.meta.url });
}

await main();
