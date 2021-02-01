cli
===

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/salesforcecli/cli/blob/master/package.json)

**[EXPERIMENT]: This Salesforce CLI the focuses on a cleaner user experience for ALL Salesforce functionality. It is in heavy development will be changing rapidly. More information will be added to this repository in the near-future.**

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ sf COMMAND
running command...
$ sf (-v|--version|version)
cli/0.0.0 darwin-x64 node-v14.15.4
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sf hello [FILE]`](#sf-hello-file)
* [`sf help [COMMAND]`](#sf-help-command)

## `sf hello [FILE]`

describe the command here

```
USAGE
  $ sf hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sf hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/salesforcecli/cli/blob/v0.0.0/src/commands/hello.ts)_

## `sf help [COMMAND]`

display help for sf

```
USAGE
  $ sf help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
