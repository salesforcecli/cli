# cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/salesforcecli/cli/blob/master/package.json)

**[EXPERIMENT]: This Salesforce CLI the focuses on a cleaner user experience for ALL Salesforce functionality. It is in heavy development will be changing rapidly. More information will be added to this repository in the near-future.**

<!-- toc -->
* [cli](#cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @salesforce/cli
$ sf COMMAND
running command...
$ sf (-v|--version|version)
@salesforce/cli/0.0.1 linux-x64 node-v14.17.0
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sf env:connect`](#sf-envconnect)
* [`sf env:list`](#sf-envlist)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf login`](#sf-login)

## `sf env:connect`

connect to a Salesforce account or environment

```
USAGE
  $ sf env:connect

OPTIONS
  -f, --jwt-key-file=jwt-key-file  path to a file containing the private key
  -i, --client-id=client-id        OAuth client ID (sometimes called the consumer key)
  -r, --instance-url=instance-url  [default: https://login.salesforce.com] the login URL
  -u, --username=username          authentication username

EXAMPLE
```

_See code: [@salesforce/plugin-env](https://github.com/salesforcecli/plugin-env/blob/v0.0.1/src/commands/env/connect.ts)_

## `sf env:list`

list environments

```
USAGE
  $ sf env:list

OPTIONS
  -a, --all               show all environments regardless of whether they're connected or not
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)

EXAMPLES
  sf env list
  sf env list --all
```

_See code: [@salesforce/plugin-env](https://github.com/salesforcecli/plugin-env/blob/v0.0.1/src/commands/env/list.ts)_

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

## `sf login`

can I see my stuff please

```
USAGE
  $ sf login

OPTIONS
  -r, --login-url=login-url  [default: https://login.salesforce.com] the login url

EXAMPLE
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.1/src/commands/login/index.ts)_
<!-- commandsstop -->
