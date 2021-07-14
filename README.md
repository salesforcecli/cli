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
@salesforce/cli/0.0.20 linux-x64 node-v14.17.3
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sf env display`](#sf-env-display)
* [`sf env list`](#sf-env-list)
* [`sf env open`](#sf-env-open)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf login`](#sf-login)
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
* [`sf project deploy org`](#sf-project-deploy-org)
* [`sf project retrieve org`](#sf-project-retrieve-org)

## `sf env display`

Specify an environment with either the username you used when you ran the "sf login" command or the environment's alias. Run "sf env list" to view all your environments and their aliases.

```
USAGE
  $ sf env display [--json] [-e <value>]

FLAGS
  -e, --environment=<value>  Environment alias or login user.

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  Specify an environment with either the username you used when you ran the "sf login" command or the environment's
  alias. Run "sf env list" to view all your environments and their aliases.

  Output depends on the type of environment. For example, scratch org details include the access token, alias, username
  of the associated Dev Hub, the creation and expiration date, the generated scratch org username, and more.  Compute
  environment details include the associated orgs, the list of functions, the project name, and more.

EXAMPLES
  - Display details about a scratch org with alias my-scratch-org:
   sf env display --environment=my-scratch-org
  - Specify a username instead of an alias:
   sf env display --environment=test-123456-abcdefg@example.com
  - Specify JSON format and redirect output into a file:
   sf env display --environment=my-scratch-org --json > tmp/MyOrdDesc.json
```

## `sf env list`

By default, the command displays only active environments. For orgs, active means unexpired scratch orgs and orgs you’re currently logged into. For compute environments, active means the environments connected to orgs you’re currently logged into. Use the --all flag to list expired or deleted scratch orgs and compute environments that aren’t connected to logged-in orgs. Warning: the latter list could be very long.

```
USAGE
  $ sf env list [--json] [-a] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output
    csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -a, --all          Show all environments, even inactive ones.
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen

  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>

  --sort=<value>     property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  By default, the command displays only active environments. For orgs, active means unexpired scratch orgs and orgs
  you’re currently logged into. For compute environments, active means the environments connected to orgs you’re
  currently logged into. Use the --all flag to list expired or deleted scratch orgs and compute environments that aren’t
  connected to logged-in orgs. Warning: the latter list could be very long.

  Output is displayed in multiple tables, one for each environment type.  For example, the Salesforce Orgs table lists
  the non-scratch orgs you’re logged into, such as sandboxes, Dev Hubs, production orgs, and so on. Scratch orgs and
  compute environments get their own tables.

  For non-scratch orgs, the Username column refers to the user you logged into the org with. For scratch orgs it refers
  to the username that was generated for you when you created the scratch org. The first column indicates the default
  environment for each type.

  Run "sf env display" to view details about a specific environment.

EXAMPLES
  List all environments:

    $ sf env list --all

  Filter the output to list only connected orgs. Rows from only the Salesforce Orgs table are displayed because it’s
  the only table with a "Status" column.

    $ sf env list --filter "Status=Connected"

  List only scratch orgs that expire after May 30, 2021:

    $ sf env list --filter "Expiration>2021-05-30"

  Display only the Alias column and sort the aliases in descending order:

    $ sf env list --sort "-Alias" --columns "Alias"
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

## `sf project retrieve org`

The source you retrieve overwrites the corresponding source files in your local project . This command doesn’t attempt to merge the source from your org with your local source files. If the command detects a conflict, it displays the conflicts but doesn’t complete the process. After reviewing the conflict, rerun the command with the --force-overwrite flag to overwrite your local files.

```
USAGE
  $ sf project retrieve org [--json] [-a <value>] [-n <value>] [-d <value> | [-x <value> | -m <value> | ] | ] [-t <value>]
    [-w <value>]

FLAGS
  -a, --api-version=<value>      target API version for the retrieve
  -d, --source-dir=<value>...    source dir to use instead of the default package dir in sfdx-project.json
  -m, --metadata=<value>...      comma-separated list of metadata component names
  -n, --package-name=<value>...  a comma-separated list of packages to retrieve
  -t, --target-org=<value>       Username or alias of the org you want to retrieve from
  -w, --wait=<value>             [default: 33] wait time for command to finish in minutes
  -x, --manifest=<value>         file path for manifest (package.xml) of components to deploy

GLOBAL FLAGS
  --json  format output as json

DESCRIPTION
  Retrieve source from an org.

  The source you retrieve overwrites the corresponding source files in your local project . This command doesn’t attempt
  to merge the source from your org with your local source files. If the command detects a conflict, it displays the
  conflicts but doesn’t complete the process. After reviewing the conflict, rerun the command with the --force-overwrite
  flag to overwrite your local files.

  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of
  double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

  You must run this command from wihin a project.

EXAMPLES
  Retrieve the source files in a directory:

    $ sf project retrieve org --source-path path/to/source

  Retrieve a specific Apex class and the objects whose source is in a directory:

    $ sf project retrieve org --source-path "path/to/apex/classes/MyClass.cls,path/to/source/objects"

  Retrieve source files in a comma-separated list that contains spaces:

    $ sf project retrieve org --source-path "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, \
      path/to/apex/classes"

  Retrieve all Apex classes:

    $ sf project retrieve org --metadata ApexClass

  Retrieve a specific Apex class:

    $ sf project retrieve org --metadata ApexClass:MyApexClass

  Retrieve all custom objects and Apex classes:

    $ sf project retrieve org --metadata "CustomObject,ApexClass"

  Retrieve all metadata components listed in a manifest:

    $ sf project retrieve org --manifest path/to/package.xml

  Retrieve metadata from a package:

    $ sf project retrieve org --package-names MyPackageName

  Retrieve metadata from multiple packages:

    $ sf project retrieve org --package-names "Package1, PackageName With Spaces, Package3"
```
<!-- commandsstop -->
