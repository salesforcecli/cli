# @salesforce/cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![License](https://img.shields.io/npm/l/@salesforce/cli.svg)](https://github.com/salesforcecli/cli/blob/master/package.json)

<!-- toc -->
* [@salesforce/cli](#salesforcecli)
* [Getting Started](#getting-started)
* [Feedback](#feedback)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Getting Started

Please read the [Getting Started Guide](https://github.com/salesforcecli/cli/wiki) to learn about the new `sf` executable.

# Feedback

To provide feedback, use the issues tab in this repository.

# Usage

<!-- usage -->
```sh-session
$ npm install -g @salesforce/cli
$ sf COMMAND
running command...
$ sf (-v|--version|version)
@salesforce/cli/0.0.41 linux-x64 node-v14.17.6
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sf config get`](#sf-config-get)
* [`sf config list`](#sf-config-list)
* [`sf config set`](#sf-config-set)
* [`sf config unset`](#sf-config-unset)
* [`sf deploy`](#sf-deploy)
* [`sf deploy metadata`](#sf-deploy-metadata)
* [`sf env display`](#sf-env-display)
* [`sf env list`](#sf-env-list)
* [`sf env open`](#sf-env-open)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf login`](#sf-login)
* [`sf login org`](#sf-login-org)
* [`sf login org jwt`](#sf-login-org-jwt)
* [`sf logout`](#sf-logout)
* [`sf logout org`](#sf-logout-org)
* [`sf plugins`](#sf-plugins)
* [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
* [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin)
* [`sf plugins:link PLUGIN`](#sf-pluginslink-plugin)
* [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin)
* [`sf plugins update`](#sf-plugins-update)
* [`sf retrieve metadata`](#sf-retrieve-metadata)

## `sf config get`

Run "sf config list" to see all the configuration variables you've set. Global configuration variable are always displayed; local ones are displayed if you run the command in a project directory. Run "sf config set" to set a configuration variable.

```
USAGE
  $ sf config get [--json] [--verbose]

FLAGS
  --verbose  Display whether the configuration variables are set locally or globally.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Get the value of a configuration variable.

  Run "sf config list" to see all the configuration variables you've set. Global configuration variable are always
  displayed; local ones are displayed if you run the command in a project directory. Run "sf config set" to set a
  configuration variable.

EXAMPLES
  Get the value of the "target-org" configuration variable.

    $ sf config get target-org

  Get multiple configuration variables and display whether they're set locally or globally:

    $ sf config get target-org api-version --verbose

CONFIGURATION VARIABLES
  apiVersion        API version to use when making requests to app server
  disableTelemetry  Disable telemetry
  instanceUrl       Instance URL to use for a command.
  isvDebuggerSid    ISV debugger SID
  isvDebuggerUrl    ISV debugger URL
  maxQueryLimit     Maximum rows to return for a SOQL query.
  restDeploy        Boolean that enables deploy via REST API.
  target-org        The target to be used for any command communicating with an org.
  target-dev-hub    The target to be used for any command communicating with a dev hub org.
```

## `sf config list`

Global configuration variables apply to any directory and are always displayed. If you run this command from a project directory, local configuration variables are also displayed.

```
USAGE
  $ sf config list [--json]

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List the configuration variables that you've previously set.

  Global configuration variables apply to any directory and are always displayed. If you run this command from a project
  directory, local configuration variables are also displayed.

EXAMPLES
  List both global configuration variables and those local to your project:

    $ sf config list
```

## `sf config set`

Use configuration variables to set CLI defaults, such as your default org or the API version you want the CLI to use. For example, if you set the "target-org" configuration variable, you don't need to specify it as a "sf deploy metadata" flag if you're deploying to your default org.

```
USAGE
  $ sf config set [--json] [-g]

FLAGS
  -g, --global  Set the configuration variables globally, so they can be used from any directory.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Set one or more configuration variables, such as your default org.

  Use configuration variables to set CLI defaults, such as your default org or the API version you want the CLI to use.
  For example, if you set the "target-org" configuration variable, you don't need to specify it as a "sf deploy
  metadata" flag if you're deploying to your default org.

  Local configuration variables apply only to your current project. Global variables, specified with the --global flag,
  apply in any directory.

  The resolution order if you've set a flag value in multiple ways is as follows:

  1. Flag value specified at the command line.

  2. Local (project-level) configuration variable.

  3. Global configuration variable.

  Run "sf config list" to see the configuration variables you've already set and their level (local or global).

EXAMPLES
  Set the local target-org configuration variable to an org username:

    $ sf config set target-org=me@my.org

  Set the local target-org configuration variable to an alias:

    $ sf config set target-org=my-scratch-org

  Set the global target-org configuration variable:

    $ sf config set --global target-org=my-scratch-org

CONFIGURATION VARIABLES
  apiVersion        API version to use when making requests to app server
  disableTelemetry  Disable telemetry
  instanceUrl       Instance URL to use for a command.
  isvDebuggerSid    ISV debugger SID
  isvDebuggerUrl    ISV debugger URL
  maxQueryLimit     Maximum rows to return for a SOQL query.
  restDeploy        Boolean that enables deploy via REST API.
  target-org        The target to be used for any command communicating with an org.
  target-dev-hub    The target to be used for any command communicating with a dev hub org.
```

## `sf config unset`

Local configuration variables apply only to your current project. Global configuration variables apply in any directory.

```
USAGE
  $ sf config unset [--json] [-g]

FLAGS
  -g, --global  Unset the configuration variables globally, so they can no longer be used from any directory.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Unset local or global configuration variables.

  Local configuration variables apply only to your current project. Global configuration variables apply in any
  directory.

EXAMPLES
  Unset the local "target-org" configuration variable:

    $ sf config unset target-org

  Unset multiple configuration variables globally:

    $ sf config unset target-org api-version --global

CONFIGURATION VARIABLES
  apiVersion        API version to use when making requests to app server
  disableTelemetry  Disable telemetry
  instanceUrl       Instance URL to use for a command.
  isvDebuggerSid    ISV debugger SID
  isvDebuggerUrl    ISV debugger URL
  maxQueryLimit     Maximum rows to return for a SOQL query.
  restDeploy        Boolean that enables deploy via REST API.
  target-org        The target to be used for any command communicating with an org.
  target-dev-hub    The target to be used for any command communicating with a dev hub org.
```

## `sf deploy`

This command must be run from within a project.

```
USAGE
  $ sf deploy [--interactive]

FLAGS
  --interactive  Force the CLI to prompt for all deployment inputs.

DESCRIPTION
  Deploy a project interactively to any Salesforce environment.

  This command must be run from within a project.

  The command first analyzes your project, your active or logged-into environments, and local defaults to determine what
  to deploy and where to deploy it. The command then prompts you for information about this particular deployment and
  provides intelligent choices based on its analysis.

  For example, if your local project contains a source directory with metadata files in source format, the command asks
  if you want to deploy that Salesforce app to an org. The command lists your connected orgs and asks which one you want
  to deploy to. The list of orgs starts with scratch orgs, ordered by expiration date with the most recently created one
  first, and then Dev Hub and production orgs ordered by name. If the command finds Apex tests, it asks if you want to
  run them and at which level.

  The command stores your responses in the "deploy-options.json" file in your local project directory and uses them as
  defaults when you rerun the command. Specify --interactive to force the command to reprompt.

  Use this command for quick and simple deploys. For more complicated deployments, use the environment-specific
  commands, such as "sf deploy metadata", that provide additional flags.

EXAMPLES
  Deploy a project and use stored values from a previous command run:

    $ sf deploy

  Reprompt for all deployment inputs:

    $ sf deploy --interactive
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/v0.0.23/src/commands/deploy.ts)_

## `sf deploy metadata`

You must run this command from within a project.

```
USAGE
  $ sf deploy metadata [--json] [-m <value> | -x <value> | -d <value>] [-o <value>] [-l
    NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg] [-w <value>]

FLAGS
  -d, --source-dir=<value>...  Path to the local source files to deploy.
  -l, --test-level=<option>    [default: NoTestRun] Deployment Apex testing level.
                               <options: NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg>
  -m, --metadata=<value>...    Metadata component names to deploy.
  -o, --target-org=<value>     Login username or alias for the target org.
  -w, --wait=<value>           [default: 33] Number of minutes to wait for command to complete and display results.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to deploy.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Deploy metadata in source format to an org from your local project.

  You must run this command from within a project.

  This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org.
  This command doesn’t attempt to merge your source with the versions in your org.

  To run the command asynchronously, set --wait to 0, which immediately returns the job ID. This way, you can continue
  to use the CLI.

  To deploy multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with
  multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax
  applies to --manifest and --source-dir.

EXAMPLES
  Deploy the source files in a directory:

    $ sf deploy metadata  --source-dir path/to/source

  Deploy a specific Apex class and the objects whose source is in a directory (both examples are equivalent):

    $ sf deploy metadata --source-dir path/to/apex/classes/MyClass.cls path/to/source/objects
    $ sf deploy metadata --source-dir path/to/apex/classes/MyClass.cls --source-dir path/to/source/objects

  Deploy all Apex classes:

    $ sf deploy metadata --metadata ApexClass

  Deploy a specific Apex class:

    $ sf deploy metadata --metadata ApexClass:MyApexClass

  Deploy all custom objects and Apex classes (both examples are equivalent):

    $ sf deploy metadata --metadata CustomObject ApexClass
    $ sf deploy metadata --metadata CustomObject --metadata ApexClass

  Deploy all Apex classes and a profile that has a space in its name:

    $ sf deploy metadata --metadata ApexClass --metadata "Profile:My Profile"

  Deploy all components listed in a manifest:

    $ sf deploy metadata --manifest path/to/package.xml

  Run the tests that aren’t in any managed packages as part of a deployment:

    $ sf deploy metadata --metadata ApexClass --test-level RunLocalTests

FLAG DESCRIPTIONS
  -d, --source-dir=<value>...  Path to the local source files to deploy.

    The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its subdirectories).

    If you specify this flag, don’t specify --metadata or --manifest.

  -l, --test-level=NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg  Deployment Apex testing level.

    Valid values are:

    - NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as
    sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

    - RunSpecifiedTests — Runs only the tests that you specify with the --run-tests flag. Code coverage requirements
    differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of
    75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
    trigger individually and is different than the overall coverage percentage.

    - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed packages.
    This test level is the default for production deployments that include Apex classes or triggers.

    - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

    If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more
    information, see [Running Tests in a
    Deployment](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm)
    in the "Metadata API Developer Guide".

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.

  -w, --wait=<value>  Number of minutes to wait for command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you.

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to deploy.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

CONFIGURATION VARIABLES
  target-org  The target to be used for any command communicating with an org.
  apiVersion  API version to use when making requests to app server

ENVIRONMENT VARIABLES
  SF_TARGET_ORG          Specifies the username of your default target org you don’t have to use the --target-org CLI
                         parameter. Overrides the value of the target-org runtime configuration value.
  SFDX_DEFAULTUSERNAME   Specifies the username of your default org so you don’t have to use the --targetusername CLI
                         parameter. Overrides the value of the defaultusername runtime configuration value.
  SFDX_USE_PROGRESS_BAR  For force:mdapi:deploy, force:source:deploy, and force:source:push, set to false to disable the
                         progress bar.
```

## `sf env display`

Specify an environment with either the username you used when you ran the "sf login" command or the environment's alias. Run "sf env list" to view all your environments and their aliases.

```
USAGE
  $ sf env display [--json] [-e <value>]

FLAGS
  -e, --target-env=<value>  Environment alias or login user.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Display details about an environment.

  Specify an environment with either the username you used when you ran the "sf login" command or the environment's
  alias. Run "sf env list" to view all your environments and their aliases.

  Output depends on the type of environment. For example, scratch org details include the access token, alias, username
  of the associated Dev Hub, the creation and expiration date, the generated scratch org username, and more. Compute
  environment details include the associated orgs, the list of functions, the project name, and more.

EXAMPLES
  Display details about a scratch org with alias my-scratch-org:

    $ sf env display --target-env=my-scratch-org

  Specify a username instead of an alias:

    $ sf env display --target-env=test-123456-abcdefg@example.com

  Specify JSON format and redirect output into a file:

    $ sf env display --target-env=my-scratch-org --json > tmp/MyOrdDesc.json
```

## `sf env list`

By default, the command displays active environments. For orgs, active means unexpired scratch orgs and orgs you’re currently logged into.

```
USAGE
  $ sf env list [--json] [-a] [--columns <value>] [--csv] [--filter <value>] [--no-header] [--no-truncate]
    [--output csv|json|yaml] [--sort <value>]

FLAGS
  -a, --all             Show all environments, even inactive ones.
  --columns=<value>...  List of columns to display.
  --csv                 Output in csv format [alias: --output=csv]
  --filter=<value>      Filter property by partial string matching.
  --no-header           Hide table header from output.
  --no-truncate         Don't truncate output to fit screen.
  --output=<option>     Format in which to display the output.
                        <options: csv|json|yaml>
  --sort=<value>        Column to sort by (prepend '-' for descending).

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List the environments you’ve created or logged into.

  By default, the command displays active environments. For orgs, active means unexpired scratch orgs and orgs you’re
  currently logged into.

  Output is displayed in multiple tables, one for each environment type. For example, the Salesforce Orgs table lists
  the non-scratch orgs you’re logged into, such as sandboxes, Dev Hubs, production orgs, and so on. Scratch orgs get
  their own table.

  For non-scratch orgs, the Username column refers to the user you logged into the org with. For scratch orgs it refers
  to the username that was generated for you when you created the scratch org. The table also displays the local alias
  for the org, the org's ID, the instance URL that hosts the org, and how you authorized (logged into) the org, either
  using a web browser or JWT. The Config column indicates your default scratch org or Dev Hub org with the target-org or
  target-dev-hub variable, respectively.

  Use the table manipulation flags, such as --filter and --sort, to change how the data is displayed.

  Run "sf env display" to view details about a specific environment.

EXAMPLES
  List all active environments:

    $ sf env list

  List both active and inactive environments:

    $ sf env list --all

  Filter the output to list only orgs you authorized using a web browser; "Auth Method" is the name of a column:

    $ sf env list --filter "Auth Method=web"

  Display only the Aliases column and sort the aliases in descending order:

    $ sf env list --sort "-Aliases" --columns "Aliases"

  Don't truncate the displayed output and instead wrap text that's wider than your terminal:

    $ sf env list --no-truncate

  Display only the table data, not the headers, in comma-separated value (csv) format:

    $ sf env list --csv --no-header
```

## `sf env open`

You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production orgs. Run "sf env list" to view your environments and their aliases and login usernames.

```
USAGE
  $ sf env open [--json] [-p <value>] [-r] [-e <value>] [--browser <value>]

FLAGS
  -e, --target-env=<value>  Login user or alias of the environment to open.
  -p, --path=<value>        Path to append to the end of the login URL.
  -r, --url-only            Display the URL, but don’t launch it in a browser.
  --browser=<value>         Browser in which to open the environment.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Open an environment in a web browser.

  You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production
  orgs. Run "sf env list" to view your environments and their aliases and login usernames.

  Each of your environments is associated with an instance URL, such as https://login.salesforce.com. To open a specific
  web page, specify the portion of the URL after "<URL>/" with the --path flag, such as /apex/YourPage to open a
  Visualforce page.

EXAMPLES
  Open the Visualforce page /apex/StartHere in a scratch org with alias test-org:

    $ sf env open --target-env test-org --path /apex/StartHere

  View the URL but don't launch it in a browser:

    $ sf env open --target-env test-org --path /apex/StartHere --url-only

  Open the environment in the Google Chrome browser:

    $ sf env open --target-env test-org --path /apex/StartHere --browser chrome

FLAG DESCRIPTIONS
  -e, --target-env=<value>  Login user or alias of the environment to open.

    Specify the login user or alias that’s associated with the environment. For scratch orgs, the login user is
    generated by the command that created the scratch org. You can also set an alias for the scratch org when you create
    it.

    For Dev Hubs, sandboxes, and production orgs, specify the alias you set when you logged into the org with "sf
    login".

  --browser=<value>  Browser in which to open the environment.

    You can specify that the environment open in one of the following browsers: Firefox, Safari, Google Chrome, or
    Windows Edge. If you don’t specify --browser, the environment opens in your default browser. The exact names of the
    browser applications differ depending on the operating system you're on; check your documentation for details.
```

## `sf help [COMMAND]`

display help for sf

```
USAGE
  $ sf help [COMMAND] [--json] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all   see all commands in CLI
  --json  Format output as json.

DESCRIPTION
  display help for sf
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v4.0.3/src/commands/help.ts)_

## `sf login`

Logging into an environment authorizes the CLI to run other commands that connect to that environment, such as deploying or retrieving metadata to and from an org.

```
USAGE
  $ sf login

DESCRIPTION
  Log interactively into an environment, such as a Salesforce org.

  Logging into an environment authorizes the CLI to run other commands that connect to that environment, such as
  deploying or retrieving metadata to and from an org.

  The command first prompts you to choose an environment from a list of available ones. It then opens a browser to the
  appropriate login URL, such as https://login.salesforce.com for an org. Then, depending on the environment you choose,
  the command prompts for other actions, such as giving the environment an alias or setting it as your default.

  This command is fully interactive and has no flags other than displaying the command-line help. Each environment has
  its own specific login command, such as "sf login org", which usually provide more flags than this interactive one.
  For more information about the interactive prompts from this command, see the help for the environment-specific
  command, such as "sf login org --help".

EXAMPLES
  Log in interactively:

    $ sf login
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.24/src/commands/login.ts)_

## `sf login org`

Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you log in, you can close the browser window.

```
USAGE
  $ sf login org [--json] [-a <value>] [-b <value>] [-i <value>] [-l <value>] [-d] [-v]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -b, --browser=<value>       Browser in which to open the org.
  -d, --set-default           Set the org as the default that all org-related commands run against.
  -i, --clientid=<value>      OAuth client id (also called consumer key) of your custom connected app.
  -l, --instance-url=<value>  [default: https://login.salesforce.com] URL of the instance that the org lives on.
                              (defaults to https://login.salesforce.com)
  -v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Log in to a Salesforce org using the web server flow.

  Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you
  log in, you can close the browser window.

  Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving
  a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch
  orgs.

  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use
  --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

  By default, this command uses the global out-of-the-box connected app in your org. If you need more security or
  control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app using a
  digital certificate. Make note of the consumer key (also called cliend id) that’s generated for you. Then specify the
  consumer key with the --clientid flag.

EXAMPLES
  Run the command with no flags to open the default Salesforce login page (https://login.salesforce.com):

    $ sf login org

  Log in to your Dev Hub, set it as your default Dev Hub, and set an alias that you reference later when you create a
  scratch org:

    $ sf login org --set-default-dev-hub --alias dev-hub

  Log in to a sandbox and set it as your default org:

    $ sf login org --instance-url https://test.salesforce.com --set-default

  Use --browser to specify a specific browser, such as Google Chrome:

    $ sf login org --instance-url https://test.salesforce.com --set-default --browser chrome

  Use your own connected app by specifying its consumer key (also called client ID):

    $ sf login org --instance-url https://test.salesforce.com --set-default --browser chrome --clientid \
      04580y4051234051

FLAG DESCRIPTIONS
  -b, --browser=<value>  Browser in which to open the org.

    You can log in to an org with one of the following browsers: Firefox, Safari, Google Chrome, or Windows Edge. If you
    don’t specify --browser, the command uses your default browser. The exact names of the browser applications differ
    depending on the operating system you're on; check your documentation for details.

  -l, --instance-url=<value>  URL of the instance that the org lives on. (defaults to https://login.salesforce.com)

    If you specify --instance-url, the value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

    To specify a sandbox, set --instance-url to https://test.salesforce.com.

CONFIGURATION VARIABLES
  apiVersion   API version to use when making requests to app server
  instanceUrl  Instance URL to use for a command.

ENVIRONMENT VARIABLES
  SFDX_INSTANCE_URL  The URL of the Salesforce instance that is hosting your org.
```

## `sf login org jwt`

Use this command in automated environments where you can’t interactively log in with a browser, such as in CI/CD scripts.

```
USAGE
  $ sf login org jwt [--json] [-a <value>] [-l <value>] [-f <value> -u <value> -i <value>] [-d] [-v]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default           Set the org as the default that all org-related commands run against.
  -f, --keyfile=<value>       Path to a file containing the private key.
  -i, --clientid=<value>      OAuth client id (also called consumer key) of your custom connected app.
  -l, --instance-url=<value>  [default: https://login.salesforce.com] URL of the instance that the org lives on.
  -u, --username=<value>      Username of the user logging in.
  -v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.

GLOBAL FLAGS
  --json  Format output as json.

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

  2. Store the private key in a file on your computer. When you run this command, you set the --keyfile flag to this
  file.

  3. Create a custom connected app in your org using the digital certificate. Make note of the consumer key (also called
  client id) that’s generated for you. Be sure the username of the user logging in is approved to use the connected app.
  When you run this command, you set the --clientid flag to the consumer key.

  See https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm for more
  information.

  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use
  --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

EXAMPLES
  Log into an org with username jdoe@example.org and on the default instance URL (https://login.salesforce.org). The
  private key is stored in the file /Users/jdoe/JWT/server.key and the command uses the connected app with consumer
  key (client id) 04580y4051234051.

    $ sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051

  Set the org as the default and give it an alias:

    $ sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \
      --alias ci-org --set-default

  Set the org as the default Dev Hub and give it an alias:

    $ sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \
      --alias ci-dev-hub --set-default-dev-hub

  Log in to a sandbox using URL https://test.salesforce.com:

    $ sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \
      --alias ci-org --set-default --instance-url https://test.salesforce.com

FLAG DESCRIPTIONS
  -l, --instance-url=<value>  URL of the instance that the org lives on.

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

    To specify a sandbox, set --instance-url to https://test.salesforce.com.

CONFIGURATION VARIABLES
  apiVersion   API version to use when making requests to app server
  instanceUrl  Instance URL to use for a command.

ENVIRONMENT VARIABLES
  SFDX_INSTANCE_URL  The URL of the Salesforce instance that is hosting your org.
```

## `sf logout`

By default, the command prompts you to select which environments you want to log out of. Use --no-prompt to not be prompted and log out of all environments.

```
USAGE
  $ sf logout [--json] [--no-prompt]

FLAGS
  --no-prompt  Don't prompt for confirmation.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Log out of all environments, such as Salesforce orgs and compute environments.

  By default, the command prompts you to select which environments you want to log out of. Use --no-prompt to not be
  prompted and log out of all environments.

  Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org
  again, either through the CLI or the Salesforce UI.

EXAMPLES
  Log out of all environments:

    $ sf logout

  Log out of all environments with no prompt:

    $ sf logout --no-prompt
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v0.0.24/src/commands/logout.ts)_

## `sf logout org`

By default, the command prompts you to confirm that you want to log out of the specified org. Use --no-prompt to not be prompted.

```
USAGE
  $ sf logout org -o <value> [--json] [--no-prompt]

FLAGS
  -o, --target-org=<value>  (required) Org alias or username to log out of.
  --no-prompt               Don't prompt for confirmation.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Log out of a specified Salesforce org.

  By default, the command prompts you to confirm that you want to log out of the specified org. Use --no-prompt to not
  be prompted.

  Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org
  again, either through the CLI or the Salesforce UI.

EXAMPLES
  Log out of an org with alias "ci-org":

    $ sf logout org --target-org ci-org

  If your org doesn’t have an alias, specify the username that you used when you logged into it:

    $ sf logout org --target-org jdoe@example.org

CONFIGURATION VARIABLES
  apiVersion   API version to use when making requests to app server
  instanceUrl  Instance URL to use for a command.
  target-org   The target to be used for any command communicating with an org.
```

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

## `sf retrieve metadata`

You must run this command from within a project.

```
USAGE
  $ sf retrieve metadata [--json] [-a <value>] [-x <value> | -m <value> | -d <value>] [-n <value>] [-o <value>] [-w
    <value>]

FLAGS
  -a, --api-version=<value>      Target API version for the retrieve.
  -d, --source-dir=<value>...    File paths for source to retrieve from the org.
  -m, --metadata=<value>...      Metadata component names to retrieve.
  -n, --package-name=<value>...  Package names to retrieve.
  -o, --target-org=<value>       Login username or alias for the target org.
  -w, --wait=<value>             [default: 33] Number of minutes to wait for the command to complete and display results
                                 to the terminal window.
  -x, --manifest=<value>         File path for the manifest (package.xml) that specifies the components to retrieve.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Retrieve metadata in source format from an org to your local project.

  You must run this command from within a project.

  This command doesn't support source-tracking. The source you retrieve overwrites the corresponding source files in
  your local project. This command doesn’t attempt to merge the source from your org with your local source files.

  To retrieve multiple metadata components, either use multiple --metadata <name> flags or use a single --metadata flag
  with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same
  syntax applies to --manifest and --source-dir.

EXAMPLES
  Retrieve the source files in a directory:

    $ sf retrieve metadata --source-dir path/to/source

  Retrieve a specific Apex class and the objects whose source is in a directory (both examples are equivalent):

    $ sf retrieve metadata --source-dir path/to/apex/classes/MyClass.cls path/to/source/objects
    $ sf retrieve metadata --source-dir path/to/apex/classes/MyClass.cls --source-dir path/to/source/objects

  Retrieve all Apex classes:

    $ sf retrieve metadata --metadata ApexClass

  Retrieve a specific Apex class:

    $ sf retrieve metadata --metadata ApexClass:MyApexClass

  Retrieve all custom objects and Apex classes (both examples are equivalent):

    $ sf retrieve metadata --metadata CustomObject ApexClass
    $ sf retrieve metadata --metadata CustomObject --metadata ApexClass

  Retrieve all metadata components listed in a manifest:

    $ sf retrieve metadata --manifest path/to/package.xml

  Retrieve metadata from a package:

    $ sf retrieve metadata --package-name MyPackageName

  Retrieve metadata from multiple packages, one of which has a space in its name (both examples are equivalent):

    $ sf retrieve metadata --package-name Package1 "PackageName With Spaces" Package3
    $ sf retrieve metadata --package-name Package1 --package-name "PackageName With Spaces" --package-name Package3

FLAG DESCRIPTIONS
  -a, --api-version=<value>  Target API version for the retrieve.

    Use this flag to override the default API version, which is the latest version supported the CLI, with the API
    version in your package.xml file.

  -d, --source-dir=<value>...  File paths for source to retrieve from the org.

    The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all source files in the directory and its subdirectories).

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.

  -w, --wait=<value>  Number of minutes to wait for the command to complete and display results to the terminal window.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you.

  -x, --manifest=<value>  File path for the manifest (package.xml) that specifies the components to retrieve.

    If you specify this parameter, don’t specify --metadata or --source-dir.

CONFIGURATION VARIABLES
  target-org  The target to be used for any command communicating with an org.
  apiVersion  API version to use when making requests to app server

ENVIRONMENT VARIABLES
  SF_TARGET_ORG          Specifies the username of your default target org you don’t have to use the --target-org CLI
                         parameter. Overrides the value of the target-org runtime configuration value.
  SFDX_DEFAULTUSERNAME   Specifies the username of your default org so you don’t have to use the --targetusername CLI
                         parameter. Overrides the value of the defaultusername runtime configuration value.
  SFDX_USE_PROGRESS_BAR  For force:mdapi:deploy, force:source:deploy, and force:source:push, set to false to disable the
                         progress bar.
```
<!-- commandsstop -->
