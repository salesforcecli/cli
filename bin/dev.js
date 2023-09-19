#!/usr/bin/env ts-node

void (async () => {
  const oclif = await import('@oclif/core');
  oclif.settings.performanceEnabled = true;
  await oclif.execute({ development: true, dir: import.meta.url });
})();
