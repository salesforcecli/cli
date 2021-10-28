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

Read the [Get Started with CLI Unification](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_sf_intro.htm) to learn about the new `sf` executable.

# Feedback

To provide feedback, use create a new issue [here](https://github.com/forcedotcom/cli/issues).

# Usage

<!-- usage -->
```sh-session
$ npm install -g @salesforce/cli
$ sf COMMAND
running command...
$ sf (--version|-v|version)
@salesforce/cli/1.2.0 linux-x64 node-v14.18.1
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
* [`sf deploy functions`](#sf-deploy-functions)
* [`sf deploy metadata`](#sf-deploy-metadata)
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
* [`sf login functions jwt`](#sf-login-functions-jwt)
* [`sf login org`](#sf-login-org)
* [`sf login org jwt`](#sf-login-org-jwt)
* [`sf logout`](#sf-logout)
* [`sf logout functions`](#sf-logout-functions)
* [`sf logout org`](#sf-logout-org)
* [`sf plugins`](#sf-plugins)
* [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
* [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin)
* [`sf plugins:link PLUGIN`](#sf-pluginslink-plugin)
* [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin)
* [`sf plugins update`](#sf-plugins-update)
* [`sf retrieve metadata`](#sf-retrieve-metadata)
* [`sf run function`](#sf-run-function)
* [`sf run function start`](#sf-run-function-start)
* [`sf whoami functions`](#sf-whoami-functions)

## `sf config get`

Get the value of a configuration variable.

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
  apiVersion        API version of your project. Default: API version of your Dev Hub org.
  disableTelemetry  Disables the collection of usage and user environment information, etc. Default: true.
  instanceUrl       URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  maxQueryLimit     Maximum number of Salesforce records returned by a CLI command. Default: 10,000.
  restDeploy        Whether deployments use the Metadata REST API (true) or SOAP API (false, default value).
  target-org        Username or alias of the org that all commands run against by default. (sf only)
  target-dev-hub    Username or alias of your default Dev Hub org. (sf only)
```

## `sf config list`

List the configuration variables that you've previously set.

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

Set one or more configuration variables, such as your default org.

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
  apiVersion        API version of your project. Default: API version of your Dev Hub org.
  disableTelemetry  Disables the collection of usage and user environment information, etc. Default: true.
  instanceUrl       URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  maxQueryLimit     Maximum number of Salesforce records returned by a CLI command. Default: 10,000.
  restDeploy        Whether deployments use the Metadata REST API (true) or SOAP API (false, default value).
  target-org        Username or alias of the org that all commands run against by default. (sf only)
  target-dev-hub    Username or alias of your default Dev Hub org. (sf only)
```

## `sf config unset`

Unset local or global configuration variables.

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
  apiVersion        API version of your project. Default: API version of your Dev Hub org.
  disableTelemetry  Disables the collection of usage and user environment information, etc. Default: true.
  instanceUrl       URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  maxQueryLimit     Maximum number of Salesforce records returned by a CLI command. Default: 10,000.
  restDeploy        Whether deployments use the Metadata REST API (true) or SOAP API (false, default value).
  target-org        Username or alias of the org that all commands run against by default. (sf only)
  target-dev-hub    Username or alias of your default Dev Hub org. (sf only)
```

## `sf deploy`

Deploy a project interactively to any Salesforce environment.

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

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/v1.0.5/src/commands/deploy.ts)_

## `sf deploy functions`

```
USAGE
  $ sf deploy functions -o <value> [-b <value>] [--force] [-q]

FLAGS
  -b, --branch=<value>         Deploy the latest commit from a branch different from the currently active branch.
  -o, --connected-org=<value>  (required) Username or alias for the org that the compute environment should be connected
                               to.
  -q, --quiet                  Limit the amount of output displayed from the deploy process.
  --force                      Ignore warnings and overwrite remote repository (not allowed in production).
```

## `sf deploy metadata`

Deploy metadata in source format to an org from your local project.

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
  target-org  Username or alias of the org that all commands run against by default. (sf only)
  apiVersion  API version of your project. Default: API version of your Dev Hub org.

ENVIRONMENT VARIABLES
  SF_TARGET_ORG          Username or alias of your default org. Overrides the target-org configuration variable.
  SFDX_DEFAULTUSERNAME   Username or alias of your default org. Overrides the defaultusername configuration value.
  SFDX_USE_PROGRESS_BAR  Set to false to disable the progress bar when running force:mdapi:deploy, force:source:deploy,
                         or force:source:push.
```

## `sf env create compute`

Create a compute environment for use with Salesforce Functions.

```
USAGE
  $ sf env create compute [-o <value>] [-a <value> | ]

FLAGS
  -a, --alias=<value>          Alias for the created environment.
  -o, --connected-org=<value>  Username or alias for the org that the compute environment should be connected to.

DESCRIPTION
  Create a compute environment for use with Salesforce Functions.

EXAMPLES
  Create a compute environment to run Salesforce Functions:

    $ sf env create compute

  Connect the environment to a specific org:

    $ sf env create compute --connected-org=org-alias

  Create an alias for the compute environment:

    $ sf env create compute --alias environment-alias
```

## `sf env delete`

Delete an environment.

```
USAGE
  $ sf env delete [-e <value> | ] [--confirm <value>]

FLAGS
  -e, --target-compute=<value>  Environment name.
  --confirm=name...             Confirmation name.

DESCRIPTION
  Delete an environment.

EXAMPLES
  Delete a compute environment:

    $ sf env delete --target-compute environment-alias

  Delete without a confirmation step:

    $ sf env delete --target-compute environment-alias --confirm environment-alias
```

## `sf env display`

Display details about an environment.

```
USAGE
  $ sf env display [--json] [-e <value>]

FLAGS
  -e, --target-env=<value>  Environment alias or login user.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Display details about an environment.

  Specify an environment with either the username you used when you logged into the environment with "sf login", or the
  alias you gave the environment when you created it. Run "sf env list" to view all your environments and their aliases.

  Output depends on the type of environment. For example, scratch org details include the access token, alias, username
  of the associated Dev Hub, the creation and expiration date, the generated scratch org username, and more. Compute
  environment details include the alias, connected orgs, creation date, project name, and more.

EXAMPLES
  Display details about a scratch org with alias my-scratch-org:

    $ sf env display --target-env=my-scratch-org

  Specify a username instead of an alias:

    $ sf env display --target-env=test-123456-abcdefg@example.com

  Specify JSON format and redirect output into a file:

    $ sf env display --target-env=my-scratch-org --json > tmp/MyOrdDesc.json
```

## `sf env list`

List the environments you’ve created or logged into.

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
  the non-scratch orgs you’re logged into, such as sandboxes, Dev Hubs, production orgs, and so on. Scratch orgs and
  compute environments get their own tables.

  The two org tables show similar information, such as aliases, information about the org, and how you authorized
  (logged into) it, such as with a web browser or JWT. The scratch org table also shows the expiration date. For
  non-scratch orgs, the Username column refers to the user you logged into the org with. For scratch orgs it refers to
  the username that was generated for you when you created the scratch org. Your default scratch org or Dev Hub org is
  indicated with the "target-org" or "target-dev-hub" configuration variable, respectively, in the Config column.

  The compute environment table shows the alias, information about the connected orgs, the project name, and more.

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

## `sf env log tail`

Stream log output for an environment.

```
USAGE
  $ sf env log tail [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Compute environment name to retrieve logs.

DESCRIPTION
  Stream log output for an environment.

EXAMPLES
  Stream log output:

    $ sf env log tail --target-compute environment-alias
```

## `sf env logdrain add`

Add log drain to a specified environment.

```
USAGE
  $ sf env logdrain add [-e <value> | ] [-l <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.
  -l, --drain-url=<value>       Endpoint that will receive sent logs.

DESCRIPTION
  Add log drain to a specified environment.

EXAMPLES
  Add a log drain:

    $ sf env logdrain add --target-compute environment-name --url https://path/to/logdrain
```

## `sf env logdrain list`

List log drains connected to a specified environment.

```
USAGE
  $ sf env logdrain list [-e <value> | ] [-j]

FLAGS
  -e, --target-compute=<value>  Environment name.
  -j, --json                    Output list in JSON format.

DESCRIPTION
  List log drains connected to a specified environment.

EXAMPLES
  List log drains:

    $ sf env logdrain list --target-compute environment-alias

  List log drains as json:

    $ sf env logdrain list --target-compute environment-alias --json
```

## `sf env logdrain remove`

Remove log drain from a specified environment.

```
USAGE
  $ sf env logdrain remove [-e <value> | ] [-l <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.
  -l, --drain-url=<value>       Log drain url to remove.

DESCRIPTION
  Remove log drain from a specified environment.

EXAMPLES
  Remove a logdrain:

    $ sf env logdrain remove --target-compute environment-alias --url https://path/to/logdrain
```

## `sf env open`

Open an environment in a web browser.

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

## `sf env var get KEY`

Display a single config variable for an environment.

```
USAGE
  $ sf env var get [KEY] [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

DESCRIPTION
  Display a single config variable for an environment.

EXAMPLES
  Get a config variable:

    $ sf env var get [KEY] --target-compute environment-alias
```

## `sf env var list`

List your environment's config vars in a table.

```
USAGE
  $ sf env var list [-e <value> | ] [-j]

FLAGS
  -e, --target-compute=<value>  Environment name.
  -j, --json                    Output list in JSON format.

DESCRIPTION
  List your environment's config vars in a table.

EXAMPLES
  List config vars:

    $ sf env var list --target-compute environment-alias

  List in JSON format:

    $ sf env var list --target-compute environment-alias --json
```

## `sf env var set`

Set a single config value for an environment.

```
USAGE
  $ sf env var set [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

DESCRIPTION
  Set a single config value for an environment.

EXAMPLES
  Set a config value:

    $ sf env var set [KEY]=[VALUE] --target-compute environment-alias
```

## `sf env var unset`

Unset a single config value for an environment.

```
USAGE
  $ sf env var unset [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

DESCRIPTION
  Unset a single config value for an environment.

EXAMPLES
  Unset a value:

    $ sf env var unset --target-compute environment-alias
```

## `sf generate function`

Create a Salesforce Function with basic scaffolding specific to a given language.

```
USAGE
  $ sf generate function -l javascript|typescript|java [-n <value> | ]

FLAGS
  -l, --language=(javascript|typescript|java)  (required) Language. Can be one of: javascript, typescript, java.
  -n, --function-name=<value>                  Function name. Must start with a capital letter.

DESCRIPTION
  Create a Salesforce Function with basic scaffolding specific to a given language.

EXAMPLES
  Create a JavaScript function:

    $ sf generate function --function-name MyFunction --language javascript
```

## `sf generate project`

Generate a Salesforce DX project.

```
USAGE
  $ sf generate project -n <value> [--json] [-p <value>] [-x] [-s <value>] [-d <value>] [-t standard|empty|analytics]

FLAGS
  -d, --output-dir=<value>           [default: .] Directory to store the newly created project files.
  -n, --name=<value>                 (required) Name of the generated project.
  -p, --default-package-dir=<value>  [default: force-app] Default package directory name.
  -s, --namespace=<value>            Project associated namespace.
  -t, --template=<option>            [default: standard] Template to use to create the project.
                                     <options: standard|empty|analytics>
  -x, --manifest                     Generate a manifest (package.xml) for change-set based development.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Generate a Salesforce DX project.

  A Salesforce DX project has a specific structure and a configuration file (sfdx-project.json) that identifies the
  directory as a Salesforce DX project. This command generates the basic scaffolding to get you started.

  By default, the generated sfdx-project.json file sets the sourceApiVersion property to the default API version
  currently used by Salesforce CLI. To specify a different version, set the apiVersion configuration variable. For
  example:

  sf config set apiVersion=53.0 --global

EXAMPLES
  Generate a project called MyProject:
  ​
  $ sf generate project --name MyProject
  ​

  Generate the minimum number of files and directories:
  ​
  $ sf generate project --name MyProject --template empty
  ​

  Generate the project in /Users/jdoe/sf-projects rather than the current directory:
  ​
  $ sf generate project --name MyProject --template empty --output-dir /Users/jdoe/sf-projects

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory to store the newly created project files.

    The location can be an absolute path or relative to the current working directory.

  -n, --name=<value>  Name of the generated project.

    Creates a project directory with this name. Also sets the "name" property in the sfdx-project.json file to this
    name.

  -p, --default-package-dir=<value>  Default package directory name.

    The default package directory name. Metadata items such as classes and Lightning bundles are placed inside this
    folder.

  -s, --namespace=<value>  Project associated namespace.

    The namespace associated with this project and any connected scratch orgs.

  -t, --template=standard|empty|analytics  Template to use to create the project.

    The template determines the sample configuration files and directories that this command generates. For example, the
    empty template provides these files and directory to get you started.

    - .forceignore
    - config/project-scratch-def.json
    - sfdx-project.json
    - package.json
    - force-app (basic source directory structure)

    The standard template provides a complete force-app directory structure so you know where to put your source. It
    also provides additional files and scripts, especially useful when using Salesforce Extensions for VS Code. For
    example:

    - .gitignore: Use Git for version control.
    - .prettierrc and .prettierignore: Use Prettier to format your Aura components.
    - .vscode/extensions.json: When launched, Visual Studio Code, prompts you to install the recommended extensions for
    your project.
    - .vscode/launch.json: Configures Replay Debugger.
    - .vscode/settings.json: Additional configuration settings.

    The analytics template provides similar files and the force-app/main/default/waveTemplates directory.

  -x, --manifest  Generate a manifest (package.xml) for change-set based development.

    Generates a default manifest (package.xml) for fetching Apex, Visualforce, Lightning components, and static
    resources.
```

## `sf help [COMMAND]`

Display help for sf.

```
USAGE
  $ sf help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.1/src/commands/help.ts)_

## `sf login`

Log interactively into an environment, such as a Salesforce org.

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

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v1.0.4/src/commands/login.ts)_

## `sf login functions`

Log in to Salesforce Functions.

```
USAGE
  $ sf login functions

DESCRIPTION
  Log in to Salesforce Functions.

EXAMPLES
  Log in to Salesforce Functions:

    $ sf login functions
```

## `sf login functions jwt`

Login using JWT instead of default web-based flow. This will authenticate you with both sf and Salesforce Functions.

```
USAGE
  $ sf login functions jwt -u <value> -f <value> -i <value> [-l <value> | ] [--json] [-a <value>] [-d] [-v]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default           Set the org as the default that all org-related commands run against.
  -f, --keyfile=<value>       (required) Path to JWT keyfile.
  -i, --clientid=<value>      (required) OAuth client ID.
  -l, --instance-url=<value>  The login URL of the instance the org lives on.
  -u, --username=<value>      (required) Authentication username.
  -v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.
  --json                      Format output as JSON.

DESCRIPTION
  Login using JWT instead of default web-based flow. This will authenticate you with both sf and Salesforce Functions.

EXAMPLES
  Log in using JWT:

    $ sf login functions jwt --username example@username.org --keyfile file.key --clientid 123456

  Log in and specify the org alias and URL, set as default org and default Dev Hub, and format output as JSON:

    $ sf login functions jwt --username example@username.org --keyfile file.key --clientid 123456 --alias org-alias \
      --set-default --set-default-dev-hub --instance-url https://path/to/instance --json
```

## `sf login org`

Log in to a Salesforce org using the web server flow.

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
  apiVersion   API version of your project. Default: API version of your Dev Hub org.
  instanceUrl  URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.

ENVIRONMENT VARIABLES
  SFDX_INSTANCE_URL  URL of the Salesforce instance that is hosting your org. Default value is
                     https://login.salesforce.com. Overrides the instanceUrl configuration value.
```

## `sf login org jwt`

Log in to a Salesforce org using a JSON web token (JWT).

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
  apiVersion   API version of your project. Default: API version of your Dev Hub org.
  instanceUrl  URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.

ENVIRONMENT VARIABLES
  SFDX_INSTANCE_URL  URL of the Salesforce instance that is hosting your org. Default value is
                     https://login.salesforce.com. Overrides the instanceUrl configuration value.
```

## `sf logout`

Log out interactively from environments, such as Salesforce orgs and compute environments.

```
USAGE
  $ sf logout [--json] [--no-prompt]

FLAGS
  --no-prompt  Don't prompt for confirmation; logs you out of all environments.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Log out interactively from environments, such as Salesforce orgs and compute environments.

  By default, the command prompts you to select which environments you want to log out of. Use --no-prompt to not be
  prompted and log out of all environments.

  Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org
  again, either through the CLI or the Salesforce UI.

EXAMPLES
  Interactively select the environments to log out of:

    $ sf logout

  Log out of all environments, without being prompted:

    $ sf logout --no-prompt
```

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v1.0.4/src/commands/logout.ts)_

## `sf logout functions`

Log out of your Salesforce Functions account.

```
USAGE
  $ sf logout functions

DESCRIPTION
  Log out of your Salesforce Functions account.

EXAMPLES
  Log out:

    $ sf logout functions
```

## `sf logout org`

Log out of a specified Salesforce org.

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
  apiVersion   API version of your project. Default: API version of your Dev Hub org.
  instanceUrl  URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  target-org   Username or alias of the org that all commands run against by default. (sf only)
```

## `sf plugins`

List installed plugins.

```
USAGE
  $ sf plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.1/src/commands/plugins/index.ts)_

## `sf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sf plugins:inspect myplugin
```

## `sf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

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

Links a plugin into the CLI for development.

```
USAGE
  $ sf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ sf plugins:link myplugin
```

## `sf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sf plugins unlink
  $ sf plugins remove
```

## `sf plugins update`

Update installed plugins.

```
USAGE
  $ sf plugins update [-h] [-v]

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `sf retrieve metadata`

Retrieve metadata in source format from an org to your local project.

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
  target-org  Username or alias of the org that all commands run against by default. (sf only)
  apiVersion  API version of your project. Default: API version of your Dev Hub org.

ENVIRONMENT VARIABLES
  SF_TARGET_ORG          Username or alias of your default org. Overrides the target-org configuration variable.
  SFDX_DEFAULTUSERNAME   Username or alias of your default org. Overrides the defaultusername configuration value.
  SFDX_USE_PROGRESS_BAR  Set to false to disable the progress bar when running force:mdapi:deploy, force:source:deploy,
                         or force:source:push.
```

## `sf run function`

Send a cloudevent to a function.

```
USAGE
  $ sf run function [-l <value> | ] [-H <value>] [-p <value>] [-s] [-o <value>]

FLAGS
  -H, --headers=<value>...     Set headers.
  -l, --function-url=<value>   URL of the function to run.
  -o, --connected-org=<value>  Username or alias for the target org; overrides default target org.
  -p, --payload=<value>        Set the payload of the cloudevent as a JSON object or a path to a file via @file.json.
  -s, --structured             Set the cloudevent to be emitted as a structured JSON cloudevent.

DESCRIPTION
  Send a cloudevent to a function.

EXAMPLES
  Run a function:

    $ sf run function --url http://path/to/function

  Run a function with a payload and a JSON response:

    $ sf run function --url http://path/to/function --payload '@file.json' --structured
```

## `sf run function start`

Build and run a Salesforce Function locally.

```
USAGE
  $ sf run function start [-p <value>] [-b <value>] [--clear-cache] [--no-pull] [-e <value>] [--network <value>] [-v]

FLAGS
  -b, --debug-port=<value>  [default: 9229] Port for remote debugging.
  -e, --env=<value>...      Set environment variables (provided during build and run).
  -p, --port=<value>        [default: 8080] Port for running the function.
  -v, --verbose             Output additional logs.
  --clear-cache             Clear associated cache before executing.
  --network=<value>         Connect and build containers to a network. This can be useful to build containers which
                            require a local resource.
  --no-pull                 Skip pulling builder image before use.

DESCRIPTION
  Build and run a Salesforce Function locally.

EXAMPLES
  Build and run a function:

    $ sf run function start

  Run a function on a specific port with additional logs:

    $ sf run function start --port 5000 --verbose

  Add environment variables and specify a network:

    $ sf run function start --env KEY=VALUE --network host
```

## `sf whoami functions`

Show information on your Salesforce Functions login.

```
USAGE
  $ sf whoami functions [-j]

FLAGS
  -j, --json  Output list in JSON format.

DESCRIPTION
  Show information on your Salesforce Functions login.

EXAMPLES
  Get account information:

    $ sf whoami functions

  Show token and output result as JSON:

    $ sf whoami functions --show-token --json
```
<!-- commandsstop -->
