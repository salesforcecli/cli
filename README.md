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
@salesforce/cli/0.0.7 darwin-x64 node-v14.15.4
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sf env:create:compute`](#sf-envcreatecompute)
* [`sf env:delete`](#sf-envdelete)
* [`sf env:display`](#sf-envdisplay)
* [`sf env:list`](#sf-envlist)
* [`sf env:log:tail`](#sf-envlogtail)
* [`sf env:logdrain:add`](#sf-envlogdrainadd)
* [`sf env:logdrain:list`](#sf-envlogdrainlist)
* [`sf env:logdrain:remove`](#sf-envlogdrainremove)
* [`sf env:open`](#sf-envopen)
* [`sf env:var:get KEY`](#sf-envvarget-key)
* [`sf env:var:list`](#sf-envvarlist)
* [`sf env:var:set`](#sf-envvarset)
* [`sf env:var:unset`](#sf-envvarunset)
* [`sf generate:function`](#sf-generatefunction)
* [`sf generate:project`](#sf-generateproject)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf login`](#sf-login)
* [`sf login:functions`](#sf-loginfunctions)
* [`sf login:org`](#sf-loginorg)
* [`sf login:org:jwt`](#sf-loginorgjwt)
* [`sf logout`](#sf-logout)
* [`sf project:deploy`](#sf-projectdeploy)
* [`sf project:deploy:functions`](#sf-projectdeployfunctions)
* [`sf project:deploy:org`](#sf-projectdeployorg)
* [`sf run:function`](#sf-runfunction)
* [`sf run:function:start`](#sf-runfunctionstart)
* [`sf whoami:functions`](#sf-whoamifunctions)

## `sf env:create:compute`

create a compute environment for use with Salesforce Functions

```
USAGE
  $ sf env:create:compute

OPTIONS
  -a, --setalias=setalias            alias for the created environment
  -o, --connected-org=connected-org  username or alias for the org that the compute environment should be connected to
  --json                             format output as json

EXAMPLES
  $ sfdx env:create:compute
  $ sfdx env:create:compute --setalias my-compute-environment
  $ sfdx env:create:compute --connected-org my-scratch-org
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/create/compute.ts)_

## `sf env:delete`

delete an environment

```
USAGE
  $ sf env:delete

OPTIONS
  -c, --confirm=name             confirmation name
  -e, --environment=environment  (required) environment name
  --json                         format output as json

EXAMPLES
  $ sfdx env:delete --environment=billingApp-Scratch1
  $ sfdx env:delete --environment=billingApp-Scratch1 --confirm=billingApp-Scratch1
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/delete.ts)_

## `sf env:display`

Display details about a specific environment

```
USAGE
  $ sf env:display

OPTIONS
  -e, --environment=environment  Environment name or alias to display.
  --json                         format output as json

EXAMPLES
  sf env display -e my-scratch-org
  sf env display -e user@name.com
```

_See code: [@salesforce/plugin-env](https://github.com/salesforcecli/plugin-env/blob/v0.0.7/src/commands/env/display.ts)_

## `sf env:list`

List the environments you’ve created or logged into.

```
USAGE
  $ sf env:list

OPTIONS
  -a, --all               Show all environments, including inactive orgs.
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --json                  format output as json
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)

EXAMPLES
  sf env list
  sf env list --all
```

_See code: [@salesforce/plugin-env](https://github.com/salesforcecli/plugin-env/blob/v0.0.7/src/commands/env/list.ts)_

## `sf env:log:tail`

stream log output for an environment

```
USAGE
  $ sf env:log:tail

OPTIONS
  -e, --environment=environment  (required) environment name to retrieve logs
  --json                         format output as json

EXAMPLE
  sfdx env:log:tail --environment=billingApp-Scratch1
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/log/tail.ts)_

## `sf env:logdrain:add`

Add log drain to a specified environment

```
USAGE
  $ sf env:logdrain:add

OPTIONS
  -e, --environment=environment  (required) environment name
  -u, --url=url                  (required) endpoint that will receive sent logs
  --json                         format output as json

EXAMPLE
  $ sfdx env:logdrain:add --environment=billingApp-Sandbox --url=https://example.com/drain
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/logdrain/add.ts)_

## `sf env:logdrain:list`

List log drains connected to a specified environment

```
USAGE
  $ sf env:logdrain:list

OPTIONS
  -e, --environment=environment  (required) environment name
  --json                         output result in json

EXAMPLE
  $ sfdx env:logdrain:list --environment=billingApp-Sandbox
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/logdrain/list.ts)_

## `sf env:logdrain:remove`

Remove log drain from a specified environment.

```
USAGE
  $ sf env:logdrain:remove

OPTIONS
  -e, --environment=environment  (required) environment name
  -u, --url=url                  (required) logdrain url to remove
  --json                         format output as json

EXAMPLE
  $ sfdx env:logdrain:remove --environment=billingApp-Sandbox --url=syslog://syslog-a.logdna.com:11137
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/logdrain/remove.ts)_

## `sf env:open`

You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production orgs.

```
USAGE
  $ sf env:open

OPTIONS
  -e, --target-env=target-env
      Specify the login user or alias that’s associated with the environment. For scratch orgs, the login user is 
      generated by the command that created the scratch org. You can also set an alias for the scratch org when you create 
      it.

      For Dev Hubs, sandboxes, and production orgs, specify the alias you set when you logged into the org with "sf 
      login".

  -p, --path=path
      Each of your environments is associated with an instance URL, such as https://<mydomian>.my.salesforce.com. To open 
      a specific web page at that URL, specify the portion of the URL after "<URL>/" with the --path flag, such as 
      /apex/YourPage to open a Visualforce page.

  -r, --url-only

  --browser=browser
      Specify a browser by its app name according to your operating system. For example, Chrome’s app name is "google 
      chrome" on macOS, "google-chrome" on Linux and "chrome" on Windows. So to open an environment in Chrome on macOS, 
      specify --browser "google chrome". If you don’t specify --browser, the environment opens in your default browser.

      For convenience, "chrome", "firefox", and "edge" are mapped to the OS specific app name.

  --json
      format output as json

DESCRIPTION
  If you run the command without flags, it attempts to open your default environment in your default web browser.

EXAMPLES
  To open your default environment, run the command without flags:
  sf env open
  This example opens the Visualforce page /apex/StartHere in a scratch org with alias "test-org":
  sf env open --target-env test-org --path /apex/StartHere
  If you want to view the URL for the preceding command, but not launch it in a browser:
  sf env open --target-env test-org --path /apex/StartHere --url-only
  The preceding examples open the environment in your default web browser. To use a different browser, set the --browser 
  flag to its OS-specific name. For example, to use Chrome on macOS:
  sf env open --target-env test-org --path /apex/StartHere --browser "google chrome"
```

_See code: [@salesforce/plugin-env](https://github.com/salesforcecli/plugin-env/blob/v0.0.7/src/commands/env/open.ts)_

## `sf env:var:get KEY`

display a single config value for an environment

```
USAGE
  $ sf env:var:get KEY

OPTIONS
  -e, --environment=environment  (required) environment name
  --json                         format output as json

EXAMPLE
  $ sfdx env:var:get foo --environment=my-environment
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/var/get.ts)_

## `sf env:var:list`

list your config vars in a table

```
USAGE
  $ sf env:var:list

OPTIONS
  -e, --environment=environment  (required) environment name
  --json                         format output as json

EXAMPLE
  $ sfdx env:var:list --environment=my-environment
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/var/list.ts)_

## `sf env:var:set`

sets a single config value for an environment

```
USAGE
  $ sf env:var:set

OPTIONS
  -e, --environment=environment  (required) environment name
  --json                         format output as json

EXAMPLE
  $ sfdx env:var:set foo=bar --environment=my-environment
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/var/set.ts)_

## `sf env:var:unset`

unset a single config value for an environment

```
USAGE
  $ sf env:var:unset

OPTIONS
  -e, --environment=environment  (required) environment name
  --json                         format output as json

EXAMPLE
  $ sfdx env:var:unset foo --environment=my-environment
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/env/var/unset.ts)_

## `sf generate:function`

create a function with basic scaffolding specific to a given language

```
USAGE
  $ sf generate:function

OPTIONS
  -l, --language=(javascript|typescript|java)  (required) language
  -n, --name=name                              (required) function name
  --json                                       format output as json

ALIASES
  $ sf evergreen:function:init

EXAMPLE
  $ sfdx evergreen:function:create MyFunction --language=javascript
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/generate/function.ts)_

## `sf generate:project`

```
USAGE
  $ sf generate:project

OPTIONS
  -n, --name=name  (required) name of the generated project
  --json           format output as json
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/generate/project.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `sf login`

Log in interactively to Salesforce orgs and other services.

```
USAGE
  $ sf login

EXAMPLE
  sf login
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.4/src/commands/login.ts)_

## `sf login:functions`

log into your account

```
USAGE
  $ sf login:functions

EXAMPLE
  $ sfdx login:functions
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/login/functions.ts)_

## `sf login:org`

Allows you to login to a Salesforce org using either the default https://login.salesforce.com portal or a specific instance URL as defined with a flag.

```
USAGE
  $ sf login:org

OPTIONS
  -a, --alias=alias                Set an alias for the account or environment
  -b, --browser=browser            Override system default browser with the specified browser.
  -d, --set-default                Set the org as the default org after login
  -i, --clientid=clientid          OAuth client ID (sometimes called the consumer key)
  -l, --instance-url=instance-url  [default: https://login.salesforce.com] The login url

EXAMPLES
  Login to an org.
  sf login org
  Login to an org and set an alias.
  sf login org --alias MyHub
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.4/src/commands/login/org.ts)_

## `sf login:org:jwt`

Log in to your Salesforce orgs using a JSON web token

```
USAGE
  $ sf login:org:jwt

OPTIONS
  -a, --alias=<value>         Set an alias for the account or environment
  -d, --set-default           Set the org as the default org after login
  -f, --jwt-key-file=<value>  Path to a file containing the private key
  -i, --clientid=<value>      OAuth client ID (sometimes called the consumer key)
  -l, --instance-url=<value>  [default: https://login.salesforce.com] The login url
  -u, --username=<value>      Authentication username

EXAMPLE
  sf login org jwt --jwt-key-file myorg.key --username me@salesforce.com --clientid XXXX
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.4/src/commands/login/org/jwt.ts)_

## `sf logout`

Log out of all Salesforce orgs and environments.

```
USAGE
  $ sf logout

EXAMPLE
  sf logout
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.4/src/commands/logout.ts)_

## `sf project:deploy`

The command first analyzes your project, active or logged-into environments, and local defaults to determine what to deploy and where. The command then prompts you for information about this particular deployment and provides intelligent choices based on its analysis.

```
USAGE
  $ sf project:deploy

OPTIONS
  --interactive

DESCRIPTION
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

EXAMPLE
  sf project:deploy
```

_See code: [@salesforce/plugin-project](https://github.com/salesforcecli/plugin-project/blob/v0.0.5/src/commands/project/deploy.ts)_

## `sf project:deploy:functions`

```
USAGE
  $ sf project:deploy:functions

OPTIONS
  -b, --branch=branch                deploy the latest commit from a branch different from the currently active branch

  -o, --connected-org=connected-org  (required) username or alias for the org that the compute environment should be
                                     connected to

  -q, --quiet                        limit the amount of output displayed from the deploy process

  --force                            ignore warnings and overwrite remote repository (not allowed in production)

  --json                             format output as json
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/project/deploy/functions.ts)_

## `sf project:deploy:org`

You must run this command from wihin a project.

```
USAGE
  $ sf project:deploy:org

OPTIONS
  -d, --deploy-dir=deploy-dir  Root of local directory tree of files to deploy.
  -m, --metadata=metadata      Space-separated list of metadata component names to deploy.
  -t, --target-org=target-org  Username or alias of the org you want to deploy to
  -x, --manifest=manifest      Full file path for manifest (package.xml) of components to deploy.
  --json                       format output as json

DESCRIPTION
  The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your 
  source with the versions in your org.

  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of 
  double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

EXAMPLES
  Deploy the source files in a directory:
  sf project:deploy:org --deploy-dir path/to/source
  Deploy a specific Apex class and the objects whose source is in a directory:
  sf project:deploy:org --deploy-dir "path/to/apex/classes/MyClass.cls,path/to/source/objects"
  Deploy source files in a comma-separated list that contains spaces:
  sf project:deploy:org --deploy-dir "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, 
  path/to/apex/classes"
  Deploy all Apex classes:
  sf project:deploy:org --metadata ApexClass
  Deploy a specific Apex class:
  sf project:deploy:org --metadata ApexClass:MyApexClass
  Deploy all custom objects and Apex classes:
  sf project:deploy:org --metadata "CustomObject,ApexClass"
  Deploy all Apex classes and two specific profiles (one of which has a space in its name):
  sf project:deploy:org --metadata "ApexClass, Profile:My Profile, Profile: AnotherProfile"
  Deploy all components listed in a manifest:
  sf project:deploy:org --manifest path/to/package.xml
```

_See code: [@salesforce/plugin-project-org](https://github.com/salesforcecli/plugin-project-org/blob/v0.0.2/src/commands/project/deploy/org.ts)_

## `sf run:function`

send a cloudevent to a function

```
USAGE
  $ sf run:function

OPTIONS
  -H, --headers=headers              set headers
  -l, --url=url                      (required) url of the function to run
  -o, --connected-org=connected-org  username or alias for the target org; overrides default target org
  -p, --payload=payload              set the payload of the cloudevent. also accepts @file.txt format
  -s, --structured                   set the cloudevent to be emitted as a structured cloudevent (json)
  --json                             format output as json

EXAMPLE

       $ sfdx run:function -l http://localhost:8080 -p '{"id": 12345}'
       $ sfdx run:function -l http://localhost:8080 -p '@file.json'
       $ echo '{"id": 12345}' | sfdx run:function -l http://localhost:8080
       $ sfdx run:function -l http://localhost:8080 -p '{"id": 12345}' --structured
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/run/function.ts)_

## `sf run:function:start`

build and run function image locally

```
USAGE
  $ sf run:function:start

OPTIONS
  -d, --debug-port=debug-port  [default: 9229] port for remote debugging
  -e, --env=env                set environment variables (provided during build and run)
  -p, --port=port              [default: 8080] port for running the function
  -v, --verbose                output additional logs
  --clear-cache                clear associated cache before executing.
  --json                       format output as json

  --network=network            Connect and build containers to a network. This can be useful to build containers which
                               require a local resource.

  --no-pull                    skip pulling builder image before use

EXAMPLE

       $ sfdx run:function:start
       $ sfdx run:function:start -e VAR=VALUE
       $ sfdx run:function:start --network host --no-pull --clear-cache --debug-port 9000 --port 5000
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/run/function/start.ts)_

## `sf whoami:functions`

show information on your account

```
USAGE
  $ sf whoami:functions

OPTIONS
  --json  format output as json

EXAMPLE
  $ sf whoami:functions
```

_See code: [@salesforce/plugin-functions](https://github.com/salesforcecli/plugin-functions/blob/v0.2.16/src/commands/whoami/functions.ts)_
<!-- commandsstop -->
