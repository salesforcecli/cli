import { readdirSync } from 'node:fs';
import { exec } from 'node:child_process';
import os from 'node:os';

const files = readdirSync('.').filter((f) => f.startsWith('sf-v') && f.endsWith('.exe'));

if (files.length === 0) {
  throw new Error('The stampy signed bucket contains no sf files.');
}

files
  .map((f) => ({
    filename: f,
    cli: f.split('-')[0],
    // do it from the end to account for the possibility of the version having a hyphen in it like 2.2.2-beta.0
    sha: f.split('-').at(-2),
  }))
  .map((f) => ({ ...f, shaIndex: f.filename.split('-').indexOf(f.sha) }))
  // version is the part between the cli and the sha
  .map((f) => ({ ...f, version: f.filename.split('-').slice(1, f.shaIndex).join('-').replace('v', '') }))
  .map(
    (f) =>
      `aws s3 cp ${f.filename} s3://dfc-data-production/media/salesforce-cli/${f.cli}/versions/${f.version}/${f.sha}/${f.filename}`
  )
  .map((f) => {
    exec(f, (error, stdout) => {
      // console.log('-vvv-');
      // console.log('Split and filtered stdout:');
      // console.log(stdout.split('\r').filter((l) => l.includes('upload:')));
      // console.log('-^^^-');
      if (error) {
        throw error;
      }
      console.log(
        stdout
          .split('\r')
          .filter((l) => l.includes('upload:'))
          .join()
      );
    });
  });
