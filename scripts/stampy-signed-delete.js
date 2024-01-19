import { readdirSync } from 'node:fs';
import { exec } from 'node:child_process';

readdirSync('.')
  .filter((f) => f.startsWith('sf-v') && f.endsWith('.exe'))
  .flatMap((f) =>
    [process.env.STAMPY_UNSIGNED_BUCKET, process.env.STAMPY_SIGNED_BUCKET].map((b) => `aws s3 rm ${b}/${f}`)
  )
  .map((c) => {
    exec(c, (error, stdout) => {
      if (error) {
        console.error(`exec error: ${error}`);
      }
      console.log(stdout);
    });
  });
