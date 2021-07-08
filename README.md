# cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![License](https://img.shields.io/npm/l/@salesforce/cli.svg)](https://github.com/salesforcecli/cli/blob/master/package.json)

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
@salesforce/cli/0.0.10 linux-x64 node-v14.17.3
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sf env create compute`](#sf-env-create-compute)
* [`sf env delete`](#sf-env-delete)
* [`sf env display`](#sf-env-display)
* [`sf env list`](#sf-env-list)
* [`sf env log tail`](#sf-env-log-tail)
* [`sf env logdrain add`](#sf-env-logdrain-add)
* [`sf env logdrain list`](#sf-env-logdrain-list)
* [`sf env logdrain remove`](#sf-env-logdrain-remove)
* [`sf env open`](#sf-env-open)
* [`sf env var get KEY`](#sf-env-var-get-key)
* [`sf env var list`](#sf-env-var-list)
* [`sf env var set`](#sf-env-var-set)
* [`sf env var unset`](#sf-env-var-unset)
* [`sf generate function`](#sf-generate-function)
* [`sf generate project`](#sf-generate-project)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf login`](#sf-login)
* [`sf login functions`](#sf-login-functions)
* [`sf login org`](#sf-login-org)
* [`sf login org jwt`](#sf-login-org-jwt)
* [`sf logout`](#sf-logout)
* [`sf plugins`](#sf-plugins)
* [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
* [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin)
* [`sf plugins:link PLUGIN`](#sf-pluginslink-plugin)
* [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin)
* [`sf plugins update`](#sf-plugins-update)
* [`sf project deploy`](#sf-project-deploy)
* [`sf project deploy functions`](#sf-project-deploy-functions)
* [`sf project deploy org`](#sf-project-deploy-org)
* [`sf run function`](#sf-run-function)
* [`sf run function start`](#sf-run-function-start)
* [`sf whoami functions`](#sf-whoami-functions)

## `sf env create compute`

create a compute environment for use with Salesforce Functions

```
USAGE
  $ sf env create compute [--json] [-o <value>] [-a <value>]

FLAGS
  -a, --setalias=<value>       alias for the created environment
  -o, --connected-org=<value>  username or alias for the org that the compute environment should be connected to
  --json                       format output as json

DESCRIPTION
  create a compute environment for use with Salesforce Functions

EXAMPLES
  $ sfdx env:create:compute

  $ sfdx env:create:compute --setalias my-compute-environment

  $ sfdx env:create:compute --connected-org my-scratch-org
```

## `sf env delete`

delete an environment

```
USAGE
  $ sf env delete -e <value> [--json] [-c <value>]

FLAGS
  -c, --confirm=name         confirmation name
  -e, --environment=<value>  (required) environment name
  --json                     format output as json

DESCRIPTION
  delete an environment

EXAMPLES
  $ sfdx env:delete --environment=billingApp-Scratch1

  $ sfdx env:delete --environment=billingApp-Scratch1 --confirm=billingApp-Scratch1
```

## `sf env display`

display details for an environment

```
USAGE
  $ sf env display -e <value> [--json] [--verbose]

FLAGS
  -e, --environment=<value>  (required) environment name
  --json                     format output as json
  --verbose                  verbose display output

DESCRIPTION
  display details for an environment

EXAMPLES
  $ sfdx env:display --environment=billingApp-Scratch1
```

## `sf env list`

List all environments by type

```
USAGE
  $ sf env list [-j] [--all] [-t org|scratchorg|compute]

FLAGS
  -j, --json                       output list in JSON format

  -t, --environment-type=<option>  filter by one or more environment types (org, scratchorg, compute)
                                   <options: org|scratchorg|compute>

  --all                            show all available envs instead of scoping to active orgs and their connected compute
                                   envs

DESCRIPTION
  List all environments by type

EXAMPLES
  $ sfdx env:list

  $ sfdx env:list --all

  $ sfdx env:list --environment-type org --environment-type compute
```

## `sf env log tail`

stream log output for an environment

```
USAGE
  $ sf env log tail -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name to retrieve logs
  --json                     format output as json

DESCRIPTION
  stream log output for an environment

EXAMPLES
  $ sfdx env:log:tail --environment=billingApp-Scratch1
```

## `sf env logdrain add`

Add log drain to a specified environment

```
USAGE
  $ sf env logdrain add -e <value> -u <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  -u, --url=<value>          (required) endpoint that will receive sent logs
  --json                     format output as json

DESCRIPTION
  Add log drain to a specified environment

EXAMPLES
  $ sfdx env:logdrain:add --environment=billingApp-Sandbox --url=https://example.com/drain
```

## `sf env logdrain list`

List log drains connected to a specified environment

```
USAGE
  $ sf env logdrain list -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  --json                     output result in json

DESCRIPTION
  List log drains connected to a specified environment

EXAMPLES
  $ sfdx env:logdrain:list --environment=billingApp-Sandbox
```

## `sf env logdrain remove`

Remove log drain from a specified environment.

```
USAGE
  $ sf env logdrain remove -e <value> -u <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  -u, --url=<value>          (required) logdrain url to remove
  --json                     format output as json

DESCRIPTION
  Remove log drain from a specified environment.

EXAMPLES
  $ sfdx env:logdrain:remove --environment=billingApp-Sandbox --url=syslog://syslog-a.logdna.com:11137
```

## `sf env open`

You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production orgs.

```
USAGE
  $ sf env open [--json] [-p <value>] [-r] [-e <value>] [--browser <value>]

FLAGS
  -e, --target-env=<value>
      Specify the login user or alias that’s associated with the environment. For scratch orgs, the login user is
      generated by the command that created the scratch org. You can also set an alias for the scratch org when you create
      it.

      For Dev Hubs, sandboxes, and production orgs, specify the alias you set when you logged into the org with "sf
      login".

  -p, --path=<value>
      Each of your environments is associated with an instance URL, such as https://<mydomian>.my.salesforce.com. To open
      a specific web page at that URL, specify the portion of the URL after "<URL>/" with the --path flag, such as
      /apex/YourPage to open a Visualforce page.

  -r, --url-only

  --browser=<value>
      Specify a browser by its app name according to your operating system. For example, Chrome’s app name is "google
      chrome" on macOS, "google-chrome" on Linux and "chrome" on Windows. So to open an environment in Chrome on macOS,
      specify --browser "google chrome". If you don’t specify --browser, the environment opens in your default browser.

      For convenience, "chrome", "firefox", and "edge" are mapped to the OS specific app name.

  --json
      format output as json

DESCRIPTION
  You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production
  orgs.

  If you run the command without flags, it attempts to open your default environment in your default web browser.

EXAMPLES
  To open your default environment, run the command without flags:

    $ sf env open

  This example opens the Visualforce page /apex/StartHere in a scratch org with alias "test-org":

    $ sf env open --target-env test-org --path /apex/StartHere

  If you want to view the URL for the preceding command, but not launch it in a browser:

    $ sf env open --target-env test-org --path /apex/StartHere --url-only

  The preceding examples open the environment in your default web browser. To use a different browser, set the
  --browser flag to its OS-specific name. For example, to use Chrome on macOS:

    $ sf env open --target-env test-org --path /apex/StartHere --browser "google chrome"
```

## `sf env var get KEY`

display a single config value for an environment

```
USAGE
  $ sf env var get [KEY] -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  --json                     format output as json

DESCRIPTION
  display a single config value for an environment

EXAMPLES
  $ sfdx env:var:get foo --environment=my-environment
```

## `sf env var list`

list your config vars in a table

```
USAGE
  $ sf env var list -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  --json                     format output as json

DESCRIPTION
  list your config vars in a table

EXAMPLES
  $ sfdx env:var:list --environment=my-environment
```

## `sf env var set`

sets a single config value for an environment

```
USAGE
  $ sf env var set -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  --json                     format output as json

DESCRIPTION
  sets a single config value for an environment

EXAMPLES
  $ sfdx env:var:set foo=bar --environment=my-environment
```

## `sf env var unset`

unset a single config value for an environment

```
USAGE
  $ sf env var unset -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name
  --json                     format output as json

DESCRIPTION
  unset a single config value for an environment

EXAMPLES
  $ sfdx env:var:unset foo --environment=my-environment
```

## `sf generate function`

create a function with basic scaffolding specific to a given language

```
USAGE
  $ sf generate function -n <value> -l javascript|typescript|java [--json]

FLAGS
  -l, --language=(javascript|typescript|java)  (required) language
  -n, --name=<value>                           (required) function name
  --json                                       format output as json

DESCRIPTION
  create a function with basic scaffolding specific to a given language

ALIASES
  $ sf evergreen function init

EXAMPLES
  $ sfdx evergreen:function:create MyFunction --language=javascript
```

## `sf generate project`

```
USAGE
  $ sf generate project -n <value> [--json]

FLAGS
  -n, --name=<value>  (required) name of the generated project
  --json              format output as json
```

## `sf help [COMMAND]`

display help for sf

```
USAGE
  $ sf help [COMMAND] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all  see all commands in CLI

DESCRIPTION
  display help for sf
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `sf login`

Log in interactively to Salesforce orgs and other services.

```
USAGE
  $ sf login

DESCRIPTION
  Log in interactively to Salesforce orgs and other services.

EXAMPLES
  $ sf login
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.4/src/commands/login.ts)_

## `sf login functions`

log into your account

```
USAGE
  $ sf login functions

DESCRIPTION
  log into your account

EXAMPLES
  $ sfdx login:functions
```

## `sf login org`

Allows you to login to a Salesforce org using either the default https://login.salesforce.com portal or a specific instance URL as defined with a flag.

```
USAGE
  $ sf login org [-a <value>] [-b <value>] [-i <value>] [-l <value>] [-d]

FLAGS
  -a, --alias=<value>         Set an alias for the account or environment
  -b, --browser=<value>       Override system default browser with the specified browser.
  -d, --set-default           Set the org as the default org after login
  -i, --clientid=<value>      OAuth client ID (sometimes called the consumer key)
  -l, --instance-url=<value>  [default: https://login.salesforce.com] The login url

DESCRIPTION
  Allows you to login to a Salesforce org using either the default https://login.salesforce.com portal or a specific
  instance URL as defined with a flag.

EXAMPLES
  Login to an org.

    $ sf login org

  Login to an org and set an alias.

    $ sf login org --alias MyHub
```

## `sf login org jwt`

Log in to your Salesforce orgs using a JSON web token

```
USAGE
  $ sf login org jwt [-a <value>] [-i <value>] [-l <value>] [-f <value>] [-d] [-u <value>]

FLAGS
  -a, --alias=<value>         Set an alias for the account or environment
  -d, --set-default           Set the org as the default org after login
  -f, --jwt-key-file=<value>  Path to a file containing the private key
  -i, --clientid=<value>      OAuth client ID (sometimes called the consumer key)
  -l, --instance-url=<value>  [default: https://login.salesforce.com] The login url
  -u, --username=<value>      Authentication username

DESCRIPTION
  Log in to your Salesforce orgs using a JSON web token

EXAMPLES
  $ sf login org jwt --jwt-key-file myorg.key --username me@salesforce.com --clientid XXXX
```

## `sf logout`

Log out of all Salesforce orgs and environments.

```
USAGE
  $ sf logout

DESCRIPTION
  Log out of all Salesforce orgs and environments.

EXAMPLES
  $ sf logout
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.4/src/commands/logout.ts)_

## `sf plugins`

list installed plugins

```
USAGE
  $ sf plugins [--core]

FLAGS
  --core  show core plugins

DESCRIPTION
  list installed plugins

EXAMPLES
  $ sf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/index.ts)_

## `sf plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ sf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  displays installation properties of a plugin

EXAMPLES
  $ sf plugins:inspect myplugin
```

## `sf plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ sf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

FLAGS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  installs a plugin into the CLI

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sf plugins add

EXAMPLES
  $ sf plugins:install myplugin 

  $ sf plugins:install https://github.com/someuser/someplugin

  $ sf plugins:install someuser/someplugin
```

## `sf plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ sf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  links a plugin into the CLI for development

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ sf plugins:link myplugin
```

## `sf plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ sf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  removes a plugin from the CLI

ALIASES
  $ sf plugins unlink
  $ sf plugins remove
```

## `sf plugins update`

update installed plugins

```
USAGE
  $ sf plugins update [-h] [-v]

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  update installed plugins
```

## `sf project deploy`

The command first analyzes your project, active or logged-into environments, and local defaults to determine what to deploy and where. The command then prompts you for information about this particular deployment and provides intelligent choices based on its analysis.

```
USAGE
  $ sf project deploy [--interactive]

FLAGS
  --interactive

DESCRIPTION
  The command first analyzes your project, active or logged-into environments, and local defaults to determine what to
  deploy and where. The command then prompts you for information about this particular deployment and provides
  intelligent choices based on its analysis.

  For example, if your local project contains a package directory with metadata source files, the command asks if you
  want to deploy that Salesforce app to an org. The command lists your connected orgs and asks which one you want to
  deploy to.  If the command finds Apex tests, it asks if you want to run them and at which level.

  Similarly, if the command finds a local functions directory, the command prompts if you want to deploy it and to which
  compute environment. The command prompts and connects you to a compute environment of your choice if you’re not
  currently connected to any.

  This command must be run from within a project.

  The command stores your responses in a local file and uses them as defaults when you rerun the command. Specify
  --interactive to force the command to reprompt.

  Use this command for quick and simple deploys. For more complicated deployments, use the environment-specific
  commands, such as "sf project deploy org", that provide additional flags.

EXAMPLES
  $ sf project deploy
```

## `sf project deploy functions`

```
USAGE
  $ sf project deploy functions -o <value> [--json] [-b <value>] [--force] [-q]

FLAGS
  -b, --branch=<value>         deploy the latest commit from a branch different from the currently active branch

  -o, --connected-org=<value>  (required) username or alias for the org that the compute environment should be connected
                               to

  -q, --quiet                  limit the amount of output displayed from the deploy process

  --force                      ignore warnings and overwrite remote repository (not allowed in production)

  --json                       format output as json
```

## `sf project deploy org`

You must run this command from wihin a project.

```
USAGE
  $ sf project deploy org [--json] [-m <value>] [-x <value>] [-d <value>] [-t <value>]

FLAGS
  -d, --deploy-dir=<value>  Root of local directory tree of files to deploy.
  -m, --metadata=<value>    Space-separated list of metadata component names to deploy.
  -t, --target-org=<value>  Username or alias of the org you want to deploy to
  -x, --manifest=<value>    Full file path for manifest (package.xml) of components to deploy.
  --json                    format output as json

DESCRIPTION
  You must run this command from wihin a project.

  The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your
  source with the versions in your org.

  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of
  double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

EXAMPLES
  Deploy the source files in a directory:

    $ sf project deploy org --deploy-dir path/to/source

  Deploy a specific Apex class and the objects whose source is in a directory:

    $ sf project deploy org --deploy-dir "path/to/apex/classes/MyClass.cls,path/to/source/objects"

  Deploy source files in a comma-separated list that contains spaces:

    $ sf project deploy org --deploy-dir "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, \
      path/to/apex/classes"

  Deploy all Apex classes:

    $ sf project deploy org --metadata ApexClass

  Deploy a specific Apex class:

    $ sf project deploy org --metadata ApexClass:MyApexClass

  Deploy all custom objects and Apex classes:

    $ sf project deploy org --metadata "CustomObject,ApexClass"

  Deploy all Apex classes and two specific profiles (one of which has a space in its name):

    $ sf project deploy org --metadata "ApexClass, Profile:My Profile, Profile: AnotherProfile"

  Deploy all components listed in a manifest:

    $ sf project deploy org --manifest path/to/package.xml
```

## `sf run function`

send a cloudevent to a function

```
USAGE
  $ sf run function -l <value> [--json] [-H <value>] [-p <value>] [-s] [-o <value>]

FLAGS
  -H, --headers=<value>        set headers
  -l, --url=<value>            (required) url of the function to run
  -o, --connected-org=<value>  username or alias for the target org; overrides default target org
  -p, --payload=<value>        set the payload of the cloudevent. also accepts @file.txt format
  -s, --structured             set the cloudevent to be emitted as a structured cloudevent (json)
  --json                       format output as json

DESCRIPTION
  send a cloudevent to a function

EXAMPLES
      $ sfdx run:function -l http://localhost:8080 -p '{"id": 12345}'
      $ sfdx run:function -l http://localhost:8080 -p '@file.json'
      $ echo '{"id": 12345}' | sfdx run:function -l http://localhost:8080
      $ sfdx run:function -l http://localhost:8080 -p '{"id": 12345}' --structured
```

## `sf run function start`

build and run function image locally

```
USAGE
  $ sf run function start [--json] [-p <value>] [-d <value>] [--clear-cache] [--no-pull] [-e <value>] [--network
    <value>] [-v]

FLAGS
  -d, --debug-port=<value>  [default: 9229] port for remote debugging
  -e, --env=<value>         set environment variables (provided during build and run)
  -p, --port=<value>        [default: 8080] port for running the function
  -v, --verbose             output additional logs
  --clear-cache             clear associated cache before executing.
  --json                    format output as json

  --network=<value>         Connect and build containers to a network. This can be useful to build containers which
                            require a local resource.

  --no-pull                 skip pulling builder image before use

DESCRIPTION
  build and run function image locally

EXAMPLES
      $ sfdx run:function:start
      $ sfdx run:function:start -e VAR=VALUE
      $ sfdx run:function:start --network host --no-pull --clear-cache --debug-port 9000 --port 5000
```

## `sf whoami functions`

show information on your account

```
USAGE
  $ sf whoami functions [--json]

FLAGS
  --json  format output as json

DESCRIPTION
  show information on your account

EXAMPLES
  $ sf whoami functions
```
<!-- commandsstop -->
