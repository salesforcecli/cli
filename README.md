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
@salesforce/cli/0.0.17 linux-x64 node-v14.17.3
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

GLOBAL FLAGS
  --json  format output as json

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
  -c, --confirm=name...      confirmation name
  -e, --environment=<value>  (required) environment name

GLOBAL FLAGS
  --json  format output as json

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
  --verbose                  verbose display output

GLOBAL FLAGS
  --json  format output as json

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
  -j, --json                          output list in JSON format

  -t, --environment-type=<option>...  filter by one or more environment types (org, scratchorg, compute)
                                      <options: org|scratchorg|compute>

  --all                               show all available envs instead of scoping to active orgs and their connected
                                      compute envs

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

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

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
  -e, --target-env=<value>  Environment login user or alias to open.
  -p, --path=<value>        Path to append to the end of the login URL.
  -r, --url-only            Display the URL, but don’t launch it in a browser.
  --browser=<value>         Browser in which to open the environment.

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  Open an environment in your web browser.

  You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production
  orgs.

  If you run the command without flags, it attempts to open your default environment in your default web browser. Run
  "sf env list" to view your default environment.

  Each of your environments is associated with an instance URL, such as https://login.salesforce.com. To open a specific
  web page, specify the portion of the URL after "<URL>/" with the --path flag, such as /apex/YourPage to open a
  Visualforce page.

EXAMPLES
  Open your default environment:

    $ sf env open

  Open the Visualforce page /apex/StartHere in a scratch org with alias test-org:

    $ sf env open --target-env test-org --path /apex/StartHere

  View the URL but don't launch it in a browser:

    $ sf env open --target-env test-org --path /apex/StartHere --url-only

  Open the environment in the Google Chrome browser:

    $ sf env open --target-env test-org --path /apex/StartHere --browser chrome

FLAG DESCRIPTIONS
  -e, --target-env=<value>  Environment login user or alias to open.

    Specify the login user or alias that’s associated with the environment. For scratch orgs, the login user is
    generated by the command that created the scratch org. You can also set an alias for the scratch org when you create
    it.

    For Dev Hubs, sandboxes, and production orgs, specify the alias you set when you logged into the org with "sf
    login".

  --browser=<value>  Browser in which to open the environment.

    You can specify that the environment open in one of the following browsers: Firefox, Safari, Google Chrome, or
    Windows Edge. If you don’t specify --browser, the environment opens in your default browser.
```

## `sf env var get KEY`

display a single config value for an environment

```
USAGE
  $ sf env var get [KEY] -e <value> [--json]

FLAGS
  -e, --environment=<value>  (required) environment name

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json
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

Logging into an environment authorizes the CLI to run other commands that connect to that environment, such as deploying or retrieving a project to and from an org.

```
USAGE
  $ sf login

DESCRIPTION
  Logging into an environment authorizes the CLI to run other commands that connect to that environment, such as
  deploying or retrieving a project to and from an org.

  The command first prompts you to choose an environment from a list of available ones. It then opens a browser to the
  appropriate login URL, such as https://login.salesforce.com for an org. Then, depending on the environment you choose,
  the command prompts for other actions, such as giving the environment an alias or setting it as your default.

  This command is fully interactive and has no flags other than displaying the command-line help. Each environment has
  its own specific login command, such as "sf login org", which usually provide more flags than this interactive one.
  For more information about the interactive prompts from this command, see the help for the environment-specific
  command, such as "sf login org --help".

EXAMPLES
  - Log in interactively:
   sf login
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.6/src/commands/login.ts)_

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

Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you log in, you can close the browser window.

```
USAGE
  $ sf login org [--json] [-a <value>] [-b <value>] [-i <value>] [-l <value>] [-d]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -b, --browser=<value>       Browser in which to open the org.
  -d, --set-default           Set the org as the default that all org-related commands run against.
  -i, --clientid=<value>      OAuth client id (also called consumer key) of your custom connected app.

  -l, --instance-url=<value>  [default: https://login.salesforce.com] URL of the instance that the org lives on.
                              (defaults to https://login.salesforce.com)

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  Log in to a Salesforce org using the web server flow.

  Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you
  log in, you can close the browser window.

  Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving
  a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch
  orgs.



  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default.

  By default, this command uses the global out-of-the-box connected app in your org. If you need more security or
  control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app using a
  digital certificate. Make note of the consumer key (also called cliend id) that’s generated for you. Then specify the
  consumer key with the --clientid flag.

EXAMPLES
  Run the command with no flags to open the default Salesforce login page (https://login.salesforce.com):

    $ sf login org

  Log in to your Dev Hub org and set an alias that you reference later when you create a scratch org:

    $ sf login org --alias dev-hub

  Log in to a sandbox and set it as your default org:

    $ sf login org --instance-url https://test.salesforce.com --set-default

  Use --browser to specify a specific browser, such as Google Chrome:

    $ sf login org --instance-url https://test.salesforce.com --set-default --browser chrome

  Use your own connected app by specifying its consumer key (also called client ID):

    $ sf login org --instance-url https://test.salesforce.com --set-default --browser chrome --clientid \
      04580y4051234051

FLAG DESCRIPTIONS
  -l, --instance-url=<value>  URL of the instance that the org lives on. (defaults to https://login.salesforce.com)

    If you specify --instance-url, the value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

    To specify a sandbox, set --instance-url to https://test.salesforce.com.
```

## `sf login org jwt`

Use this command in automated environments where you can’t interactively log in with a browser, such as in CI/CD scripts.

```
USAGE
  $ sf login org jwt [--json] [-a <value>] [-l <value>] [-f <value> -u <value> -i <value>] [-d]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default           Set the org as the default that all org-related commands run against.
  -f, --jwt-key-file=<value>  Path to a file containing the private key.
  -i, --clientid=<value>      OAuth client id (also called consumer key) of your custom connected app.

  -l, --instance-url=<value>  [default: https://login.salesforce.com] URL of the instance that the org lives on.
                              (defaults to https://login.salesforce.com)

  -u, --username=<value>      Username of the user logging in.

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  Log in to a Salesforce org using a JSON web token (JWT).

  Use this command in automated environments where you can’t interactively log in with a browser, such as in CI/CD
  scripts.

  Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving
  a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch
  orgs.

  Complete these steps before you run this command:

  1. Create a digital certificate (also called digital signature) and the private key to sign the certificate. You can
  use your own key and certificate issued by a certification authority. Or use OpenSSL to create a key and a self-signed
  digital certificate.

  2. Store the private key in a file on your computer. When you run this command, you set the --jwt-key-file flag to
  this file.

  3. Create a custom connected app in your org using the digital certificate. Make note of the consumer key (also called
  cliend id) that’s generated for you. Be sure the username of the user logging in is approved to use the connected app.
  When you run this command, you set the --clientid flag to the consumer key.



  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default.

EXAMPLES
  Log into an org with username jdoe@example.org and on the default instance URL (https://login.salesforce.org). The
  private key is stored in the file /Users/jdoe/JWT/server.key and the command uses the connected app with consumer
  key (client id) 04580y4051234051.

    $ sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid \
      04580y4051234051

  Set the org as the default and gives it an alias:

    $ sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid \
      04580y4051234051 --alias ci-org --set-default

  Log in to a sandbox using URL https://test.salesforce.com:

    $ sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid \
      04580y4051234051 --alias ci-org --set-default --instance-url https://test.salesforce.com

FLAG DESCRIPTIONS
  -l, --instance-url=<value>  URL of the instance that the org lives on. (defaults to https://login.salesforce.com)

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

    To specify a sandbox, set --instance-url to https://test.salesforce.com.
```

## `sf logout`

```
USAGE
  $ sf logout [--json]

GLOBAL FLAGS
  --json  format output as json

EXAMPLES
  - Log out of all environments:
   sf logout
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.6/src/commands/logout.ts)_

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
  --interactive  Force the CLI to prompt for all deployment inputs.

DESCRIPTION
  Deploy a project interactively to any Salesforce environment.

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

GLOBAL FLAGS
  --json  format output as json
```

## `sf project deploy org`

You must run this command from wihin a project.

```
USAGE
  $ sf project deploy org [--json] [-m <value>] [-x <value>] [-d <value>] [--target-org <value>] [-l
    NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg] [--wait <value>]

FLAGS
  -d, --deploy-dir=<value>...  Root of local directory tree of files to deploy.

  -l, --test-level=<option>    [default: NoTestRun] Deployment Apex testing level.
                               <options: NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg>

  -m, --metadata=<value>...    List of metadata component names to deploy.

  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to deploy.

  --target-org=<value>         Username or alias of the org you want to deploy to

  --wait=<value>               [default: 33] Number of minutes to wait for command to complete.

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  Deploy source to an org.

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

FLAG DESCRIPTIONS
  -d, --deploy-dir=<value>...  Root of local directory tree of files to deploy.

    Root of local directory tree of files to deploy.

  -l, --test-level=NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg  Deployment Apex testing level.

    Deployment Apex testing level.

  -m, --metadata=<value>...  List of metadata component names to deploy.

    List of metadata component names to deploy.

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to deploy.

    Full file path for manifest (package.xml) of components to deploy.

  --wait=<value>  Number of minutes to wait for command to complete.

    Default is 33 minutes.
```

## `sf run function`

send a cloudevent to a function

```
USAGE
  $ sf run function -l <value> [--json] [-H <value>] [-p <value>] [-s] [-o <value>]

FLAGS
  -H, --headers=<value>...     set headers
  -l, --url=<value>            (required) url of the function to run
  -o, --connected-org=<value>  username or alias for the target org; overrides default target org
  -p, --payload=<value>        set the payload of the cloudevent. also accepts @file.txt format
  -s, --structured             set the cloudevent to be emitted as a structured cloudevent (json)

GLOBAL FLAGS
  --json  format output as json

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
  -e, --env=<value>...      set environment variables (provided during build and run)
  -p, --port=<value>        [default: 8080] port for running the function
  -v, --verbose             output additional logs
  --clear-cache             clear associated cache before executing.

  --network=<value>         Connect and build containers to a network. This can be useful to build containers which
                            require a local resource.

  --no-pull                 skip pulling builder image before use

GLOBAL FLAGS
  --json  format output as json

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

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  show information on your account

EXAMPLES
  $ sf whoami functions
```
<!-- commandsstop -->
