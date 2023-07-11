# @salesforce/cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![License](https://img.shields.io/npm/l/@salesforce/cli.svg)](https://github.com/salesforcecli/cli/blob/master/package.json)


# Getting Started

- Read the [sf Plugin Developer Guide](https://github.com/salesforcecli/cli/wiki/Quick-Introduction-to-Developing-sf-Plugins) to learn how to develop a `sf` plugin.
- Are you migrating an `sfdx` plugin to `sf`?  Then check out the [migration section](https://github.com/salesforcecli/cli/wiki/Migrate-Plugins-Built-for-sfdx) of the developer guide.
- Read [this section of the Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm) for easy instructions on how to move from your `sfdx` (v7) installation to `sf` (v2).

# Feedback

To provide feedback, use create a new issue [here](https://github.com/forcedotcom/cli/issues).

# Usage

<!-- usage -->

```sh-session
$ npm install -g @salesforce/cli
$ sf COMMAND
running command...
$ sf (--version|-v)
@salesforce/cli/1.46.0 linux-x64 node-v14.20.0
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```

<!-- usagestop -->

# Architecture

See [architecture page](ARCHITECTURE.md) for diagrams of the Salesforce CLI.

# Commands

<!-- commands -->

- [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
- [`sf config get`](#sf-config-get)
- [`sf config list`](#sf-config-list)
- [`sf config set`](#sf-config-set)
- [`sf config unset`](#sf-config-unset)
- [`sf deploy`](#sf-deploy)
- [`sf deploy functions`](#sf-deploy-functions)
- [`sf deploy metadata`](#sf-deploy-metadata)
- [`sf deploy metadata cancel`](#sf-deploy-metadata-cancel)
- [`sf deploy metadata preview`](#sf-deploy-metadata-preview)
- [`sf deploy metadata quick`](#sf-deploy-metadata-quick)
- [`sf deploy metadata report`](#sf-deploy-metadata-report)
- [`sf deploy metadata resume`](#sf-deploy-metadata-resume)
- [`sf deploy metadata validate`](#sf-deploy-metadata-validate)
- [`sf env compute collaborator add`](#sf-env-compute-collaborator-add)
- [`sf env create compute`](#sf-env-create-compute)
- [`sf env create sandbox`](#sf-env-create-sandbox)
- [`sf env create scratch`](#sf-env-create-scratch)
- [`sf env delete`](#sf-env-delete)
- [`sf env delete sandbox`](#sf-env-delete-sandbox)
- [`sf env delete scratch`](#sf-env-delete-scratch)
- [`sf env display`](#sf-env-display)
- [`sf env list`](#sf-env-list)
- [`sf env log`](#sf-env-log)
- [`sf env log tail`](#sf-env-log-tail)
- [`sf env logdrain add`](#sf-env-logdrain-add)
- [`sf env logdrain list`](#sf-env-logdrain-list)
- [`sf env logdrain remove`](#sf-env-logdrain-remove)
- [`sf env open`](#sf-env-open)
- [`sf env resume sandbox`](#sf-env-resume-sandbox)
- [`sf env resume scratch`](#sf-env-resume-scratch)
- [`sf env var get KEY`](#sf-env-var-get-key)
- [`sf env var list`](#sf-env-var-list)
- [`sf env var set`](#sf-env-var-set)
- [`sf env var unset`](#sf-env-var-unset)
- [`sf generate function`](#sf-generate-function)
- [`sf generate metadata field`](#sf-generate-metadata-field)
- [`sf generate metadata platformevent`](#sf-generate-metadata-platformevent)
- [`sf generate metadata sobject`](#sf-generate-metadata-sobject)
- [`sf generate metadata tab`](#sf-generate-metadata-tab)
- [`sf generate project`](#sf-generate-project)
- [`sf help [COMMAND]`](#sf-help-command)
- [`sf info:releasenotes:display [-v <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sf-inforeleasenotesdisplay--v-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sf login`](#sf-login)
- [`sf login functions`](#sf-login-functions)
- [`sf login functions jwt`](#sf-login-functions-jwt)
- [`sf login org`](#sf-login-org)
- [`sf login org jwt`](#sf-login-org-jwt)
- [`sf logout`](#sf-logout)
- [`sf logout functions`](#sf-logout-functions)
- [`sf logout org`](#sf-logout-org)
- [`sf plugins`](#sf-plugins)
- [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin)
- [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
- [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin-1)
- [`sf plugins:link PLUGIN`](#sf-pluginslink-plugin)
- [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin)
- [`sf plugins:trust:verify -n <string> [-r <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sf-pluginstrustverify--n-string--r-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin-1)
- [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin-2)
- [`sf plugins update`](#sf-plugins-update)
- [`sf retrieve metadata`](#sf-retrieve-metadata)
- [`sf retrieve metadata preview`](#sf-retrieve-metadata-preview)
- [`sf run function`](#sf-run-function)
- [`sf run function start`](#sf-run-function-start)
- [`sf run function start container`](#sf-run-function-start-container)
- [`sf run function start local`](#sf-run-function-start-local)
- [`sf search`](#sf-search)
- [`sf update [CHANNEL]`](#sf-update-channel)
- [`sf version`](#sf-version)
- [`sf whatsnew [-v <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sf-whatsnew--v-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sf whoami functions`](#sf-whoami-functions)

## `sf autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ sf autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ sf autocomplete

  $ sf autocomplete bash

  $ sf autocomplete zsh

  $ sf autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.0/src/commands/autocomplete/index.ts)_

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
  apiVersion        API version of your project. Default: API version of your Dev Hub org. (sfdx only)
  disableTelemetry  Disables the collection of usage and user environment information, etc. Default: false. (sfdx only)
  instanceUrl       URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)
  maxQueryLimit     Maximum number of Salesforce records returned by a CLI command. Default: 10,000. (sfdx only)
  restDeploy        Whether deployments use the Metadata REST API (true) or SOAP API (false, default value). (sfdx only)
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
  apiVersion        API version of your project. Default: API version of your Dev Hub org. (sfdx only)
  disableTelemetry  Disables the collection of usage and user environment information, etc. Default: false. (sfdx only)
  instanceUrl       URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)
  maxQueryLimit     Maximum number of Salesforce records returned by a CLI command. Default: 10,000. (sfdx only)
  restDeploy        Whether deployments use the Metadata REST API (true) or SOAP API (false, default value). (sfdx only)
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
  apiVersion        API version of your project. Default: API version of your Dev Hub org. (sfdx only)
  disableTelemetry  Disables the collection of usage and user environment information, etc. Default: false. (sfdx only)
  instanceUrl       URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)
  maxQueryLimit     Maximum number of Salesforce records returned by a CLI command. Default: 10,000. (sfdx only)
  restDeploy        Whether deployments use the Metadata REST API (true) or SOAP API (false, default value). (sfdx only)
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

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/v1.6.1/src/commands/deploy.ts)_

## `sf deploy functions`

Deploy a Salesforce Function to an org from your local project.

```
USAGE
  $ sf deploy functions -o <value> [--json] [-b <value>] [--force] [-q]

FLAGS
  -b, --branch=<value>         Deploy the latest commit from a branch different from the currently active branch.
  -o, --connected-org=<value>  (required) Username or alias for the org that the compute environment should be connected
                               to.
  -q, --quiet                  Limit the amount of output displayed from the deploy process.
  --force                      Ignore warnings and overwrite remote repository (not allowed in production).

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Deploy a Salesforce Function to an org from your local project.

  You must run this command from within a git repository. Only committed changes to Functions are deployed. The active
  branch is deployed unless specified otherwise with `--branch`.

EXAMPLES
  Deploy a Salesforce Function:

    $ sf deploy functions --connected-org org-alias

  Deploy to 'deploy-branch':

    $ sf deploy functions --connected-org org-alias --branch deploy-branch

  Overwrite the remote repository:

    $ sf deploy functions --connected-org org-alias --force
```

## `sf deploy metadata`

Deploy metadata to an org from your local project.

```
USAGE
  $ sf deploy metadata [--json] [-a <value>] [--async | -w <value>] [--concise | --verbose] [--dry-run] [-c] [-r]
    [-g] [-x <value> | -d <value> | -m <value> | --metadata-dir <value>] [--single-package ] [-o <value>] [-t <value>]
    [-l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg]

FLAGS
  -a, --api-version=<value>    Target API version for the deploy.
  -c, --ignore-conflicts       Ignore conflicts and deploy local files, even if they overwrite changes in the org.
  -d, --source-dir=<value>...  Path to the local source files to deploy.
  -g, --ignore-warnings        Ignore warnings and allow a deployment to complete successfully.
  -l, --test-level=<option>    [default: NoTestRun] Deployment Apex testing level.
                               <options: NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg>
  -m, --metadata=<value>...    Metadata component names to deploy.
  -o, --target-org=<value>     Login username or alias for the target org.
  -r, --ignore-errors          Ignore any errors and don’t roll back deployment.
  -t, --tests=<value>...       Apex tests to run when --test-level is RunSpecifiedTests.
  -w, --wait=<minutes>         Number of minutes to wait for command to complete and display results.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to deploy.
  --async                      Run the command asynchronously.
  --concise                    Show concise output of the deploy result.
  --dry-run                    Validate deploy and run Apex tests but don’t save to the org.
  --metadata-dir=<value>       Root of directory or zip file of metadata formatted files to deploy.
  --single-package             Indicates that the metadata zip file points to a directory structure for a single
                               package.
  --verbose                    Show verbose output of the deploy result.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Deploy metadata to an org from your local project.

  You must run this command from within a project.

  Metadata components are deployed in source format by default. Deploy them in metadata format by specifying the
  --metadata-dir flag, which specifies the root directory or ZIP file that contains the metadata formatted files you
  want to deploy.

  If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production
  org, never allow source tracking. You can also use the "--no-track-source" flag when you create a scratch or sandbox
  org to disable source tracking.

  To deploy multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with
  multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax
  applies to --manifest and --source-dir.

EXAMPLES
  Deploy local changes not in the org:

    $ sf deploy metadata

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
  -a, --api-version=<value>  Target API version for the deploy.

    Use this flag to override the default API version with the API version of your package.xml file. The default API
    version is the latest version supported by the CLI.

  -c, --ignore-conflicts  Ignore conflicts and deploy local files, even if they overwrite changes in the org.

    This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as
    production orgs.

  -d, --source-dir=<value>...  Path to the local source files to deploy.

    The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its subdirectories).

    If you specify this flag, don’t specify --metadata or --manifest.

  -g, --ignore-warnings  Ignore warnings and allow a deployment to complete successfully.

    If a warning occurs and this flag is set to true, the success status of the deployment is set to true. When this
    flag is set to false, success is set to false, and the warning is treated like an error.

  -l, --test-level=NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg  Deployment Apex testing level.

    Valid values are:

    - NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as
    sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

    - RunSpecifiedTests — Runs only the tests that you specify with the --run-tests flag. Code coverage requirements
    differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of
    75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
    trigger individually and is different than the overall coverage percentage.

    - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked
    packages. This test level is the default for production deployments that include Apex classes or triggers.

    - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

    If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more
    information, see [Running Tests in a
    Deployment](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm)
    in the "Metadata API Developer Guide".

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.

  -r, --ignore-errors  Ignore any errors and don’t roll back deployment.

    When deploying to a production org, keep this flag set to false (default value). When set to true, components
    without errors are deployed and components with errors are skipped, and could result in an inconsistent production
    org.

  -t, --tests=<value>...  Apex tests to run when --test-level is RunSpecifiedTests.

    Separate multiple test names with commas, and enclose the entire flag value in double quotes if a test contains a
    space.

  -w, --wait=<minutes>  Number of minutes to wait for command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you and
    returns the job ID. To resume the deployment, run "sf deploy metadata resume". To check the status of the
    deployment, run "sf deploy metadata report".

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to deploy.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

  --async  Run the command asynchronously.

    The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the
    CLI. To resume the deployment, run "sf deploy metadata resume". To check the status of the deployment, run "sf
    deploy metadata report".

CONFIGURATION VARIABLES
  target-org       Username or alias of the org that all commands run against by default. (sf only)
  org-api-version  API version of your project. Default: API version of your Dev Hub org.

ENVIRONMENT VARIABLES
  SF_TARGET_ORG        Username or alias of your default org. Overrides the target-org configuration variable.
  SF_USE_PROGRESS_BAR  Set to false to disable the progress bar when running the metadata deploy command.

ERROR CODES
  Succeeded (0)          The deploy succeeded.
  Canceled (1)           The deploy was canceled.
  Failed (1)             The deploy failed.
  SucceededPartial (68)  The deploy partially succeeded.
  InProgress (69)        The deploy is in progress.
  Pending (69)           The deploy is pending.
  Canceling (69)         The deploy is being canceled.
```

## `sf deploy metadata cancel`

Cancel a deploy operation.

```
USAGE
  $ sf deploy metadata cancel [--json] [--async | -w <value>] [-i <value>] [-r]

FLAGS
  -i, --job-id=<value>   Job ID of the deploy operation you want to cancel.
  -r, --use-most-recent  Use the job ID of the most recent deploy operation.
  -w, --wait=<minutes>   Number of minutes to wait for the command to complete and display results.
  --async                Run the command asynchronously.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Cancel a deploy operation.

  Use this command to cancel a deploy operation that hasn't yet completed in the org. Deploy operations include standard
  deploys, quick deploys, deploy validations, and deploy cancellations.

  Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
  recent deploy operation.

EXAMPLES
  Cancel a deploy operation using a job ID:

    $ sf deploy metadata cancel --job-id 0Af0x000017yLUFCA2

  Cancel the most recent deploy operation:

    $ sf deploy metadata cancel --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deploy operation you want to cancel.

    These commands return a job ID if they time out or you specified the --async flag:

    - sf deploy metadata
    - sf deploy metadata validate
    - sf deploy metadata quick
    - sf deploy metadata cancel

    The job ID is valid for 10 days from when you started the deploy operation.

  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

    For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less.
    If your most recent deploy operations was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To
    resume watching the cancellation, run "sf deploy metadata resume". To check the status of the cancellation, run "sf
    deploy metadata report".

  --async  Run the command asynchronously.

    The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To
    resume watching the cancellation, run "sf deploy metadata resume". To check the status of the cancellation, run "sf
    deploy metadata report".
```

## `sf deploy metadata preview`

Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

```
USAGE
  $ sf deploy metadata preview [--json] [-c] [-x <value> | -d <value> | -m <value>] [-o <value>]

FLAGS
  -c, --ignore-conflicts       Ignore conflicts and deploy local files, even if they overwrite changes in the org.
  -d, --source-dir=<value>...  Path to the local source files to preview.
  -m, --metadata=<value>...    Metadata component names to preview.
  -o, --target-org=<value>     Login username or alias for the target org.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to preview.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

  You must run this command from within a project.

  The command outputs a table that describes what will happen if you run the "sf deploy metadata" command. The table
  lists the metadata components that will be deployed and deleted. The table also lists the current conflicts between
  files in your local project and components in the org. Finally, the table lists the files that won't be deployed
  because they're included in your .forceignore file.

  If your org allows source tracking, then this command considers conflicts between the org and local. Some orgs, such
  as production orgs, never allow source tracking. Use the "--no-track-source" flag when you create a scratch or sandbox
  org to disable source tracking.

  To preview the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single
  --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double
  quotes. The same syntax applies to --manifest and --source-dir.

EXAMPLES
  NOTE: The commands to preview a deployment and actually deploy it use similar flags. We provide a few preview examples here, but see the help for "sf deploy metadata" for more examples that you can adapt for previewing.

  Preview the deployment of source files in a directory, such as force-app:

    $ sf deploy metadata preview  --source-dir force-app

  Preview the deployment of all Apex classes:

    $ sf deploy metadata preview --metadata ApexClass

  Preview deployment of a specific Apex class:

    $ sf deploy metadata preview --metadata ApexClass:MyApexClass

  Preview deployment of all components listed in a manifest:

    $ sf deploy metadata preview --manifest path/to/package.xml

FLAG DESCRIPTIONS
  -c, --ignore-conflicts  Ignore conflicts and deploy local files, even if they overwrite changes in the org.

    This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as
    production orgs.

  -d, --source-dir=<value>...  Path to the local source files to preview.

    The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its subdirectories).

    If you specify this flag, don’t specify --metadata or --manifest.

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to preview.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.
```

## `sf deploy metadata quick`

Quickly deploy a validated deployment to an org.

```
USAGE
  $ sf deploy metadata quick [--json] [--async | -w <value>] [--concise | --verbose] [-i <value>] [-o <value>] [-r]

FLAGS
  -i, --job-id=<value>      Job ID of the deployment you want to quick deploy.
  -o, --target-org=<value>  Login username or alias for the target org.
  -r, --use-most-recent     Use the job ID of the most recently validated deployment.
  -w, --wait=<minutes>      Number of minutes to wait for the command to complete and display results.
  --async                   Run the command asynchronously.
  --concise                 Show concise output of the deploy result.
  --verbose                 Show verbose output of the deploy result.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Quickly deploy a validated deployment to an org.

  Before you run this command, first create a validated deployment with the "sf deploy metadata validate" command, which
  returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command.
  Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently
  validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

  Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These
  tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the
  deployment to your production org take several hours and you don’t want to risk a failed deploy.

  This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org.
  This command doesn’t attempt to merge your source with the versions in your org.

EXAMPLES
  Run a quick deploy to your default org using a job ID:

    $ sf deploy metadata quick --job-id 0Af0x000017yLUFCA2

  Asynchronously run a quick deploy of the most recently validated deployment to an org with alias "my-prod-org":

    $ sf deploy metadata quick --async --use-most-recent --target-org my-prod-org

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deployment you want to quick deploy.

    The job ID is valid for 10 days from when you started the validation.

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.

  -r, --use-most-recent  Use the job ID of the most recently validated deployment.

    For performance reasons, this flag uses only job IDs that were validated in the past 3 days or less. If your most
    recent deployment validation was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To
    resume watching the deploy, run "sf deploy metadata resume". To check the status of the deploy, run "sf deploy
    metadata report".

  --async  Run the command asynchronously.

    The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To
    resume watching the deploy, run "sf deploy metadata resume". To check the status of the deploy, run "sf deploy
    metadata report".

ERROR CODES
  Succeeded (0)          The deploy succeeded.
  Canceled (1)           The deploy was canceled.
  Failed (1)             The deploy failed.
  SucceededPartial (68)  The deploy partially succeeded.
  InProgress (69)        The deploy is in progress.
  Pending (69)           The deploy is pending.
  Canceling (69)         The deploy is being canceled.
```

## `sf deploy metadata report`

Check the status of a deploy operation.

```
USAGE
  $ sf deploy metadata report [--json] [-i <value>] [-r]

FLAGS
  -i, --job-id=<value>   Job ID of the deploy operation you want to check the status of.
  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Check the status of a deploy operation.

  Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

  Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
  recent deploy operation.

EXAMPLES
  Check the status using a job ID:

    $ sf deploy metadata report --job-id 0Af0x000017yLUFCA2

  Check the status of the most recent deploy operation:

    $ sf deploy metadata report --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deploy operation you want to check the status of.

    These commands return a job ID if they time out or you specified the --async flag:

    - sf deploy metadata
    - sf deploy metadata validate
    - sf deploy metadata quick
    - sf deploy metadata cancel

    The job ID is valid for 10 days from when you started the deploy operation.

  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

    For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less.
    If your most recent operation was more than 3 days ago, this flag won't find a job ID.
```

## `sf deploy metadata resume`

Resume watching a deploy operation.

```
USAGE
  $ sf deploy metadata resume [--json] [--concise | --verbose] [-i <value>] [-r] [-w <value>]

FLAGS
  -i, --job-id=<value>   Job ID of the deploy operation you want to resume.
  -r, --use-most-recent  Use the job ID of the most recent deploy operation.
  -w, --wait=<minutes>   Number of minutes to wait for the command to complete and display results.
  --concise              Show concise output of the deploy operation result.
  --verbose              Show verbose output of the deploy operation result.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Resume watching a deploy operation.

  Use this command to resume watching a deploy operation if the original command times out or you specified the --async
  flag. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations. This
  command doesn't resume the original operation itself, because the operation always continues after you've started it,
  regardless of whether you're watching it or not.

  Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
  recent deploy operation.

EXAMPLES
  Resume watching a deploy operation using a job ID:

    $ sf deploy metadata resume --job-id 0Af0x000017yLUFCA2

  Resume watching the most recent deploy operation:

    $ sf deploy metadata resume --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deploy operation you want to resume.

    These commands return a job ID if they time out or you specified the --async flag:

    - sf deploy metadata
    - sf deploy metadata validate
    - sf deploy metadata quick
    - sf deploy metadata cancel

    The job ID is valid for 10 days from when you started the deploy operation.

  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

    For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less.
    If your most recent operation was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To
    resume watching the deploy operation, run this command again. To check the status of the deploy operation, run "sf
    deploy metadata report".

ENVIRONMENT VARIABLES
  SF_USE_PROGRESS_BAR  Set to false to disable the progress bar when running the metadata deploy command.

ERROR CODES
  Succeeded (0)          The deploy succeeded.
  Canceled (1)           The deploy was canceled.
  Failed (1)             The deploy failed.
  SucceededPartial (68)  The deploy partially succeeded.
  InProgress (69)        The deploy is in progress.
  Pending (69)           The deploy is pending.
  Canceling (69)         The deploy is being canceled.
```

## `sf deploy metadata validate`

Validate a metadata deployment without actually executing it.

```
USAGE
  $ sf deploy metadata validate [--json] [-a <value>] [--async] [--concise | --verbose] [-x <value>] [-m <value>] [-d <value>]
    [--single-package --metadata-dir <value>] [-o <value>] [-t <value>] [-l
    RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests] [-w <value>]

FLAGS
  -a, --api-version=<value>    Target API version for the validation.
  -d, --source-dir=<value>...  Path to the local source files to validate for deployment.
  -l, --test-level=<option>    [default: RunLocalTests] Deployment Apex testing level.
                               <options: RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests>
  -m, --metadata=<value>...    Metadata component names to validate for deployment.
  -o, --target-org=<value>     Login username or alias for the target org.
  -t, --tests=<value>...       Apex tests to run when --test-level is RunSpecifiedTests.
  -w, --wait=<minutes>         Number of minutes to wait for the command to complete and display results.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to validate for deployment.
  --async                      Run the command asynchronously.
  --concise                    Show concise output of the validation result.
  --metadata-dir=<value>       Root of directory or zip file of metadata formatted files to deploy.
  --single-package             Indicates that the metadata zip file points to a directory structure for a single
                               package.
  --verbose                    Show verbose output of the validation result.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Validate a metadata deployment without actually executing it.

  Use this command to verify whether a deployment will succeed without actually deploying the metadata to your org. This
  command is similar to "sf deploy metadata", except you're required to run Apex tests, and the command returns a job ID
  rather than executing the deployment. If the validation succeeds, then you pass this job ID to the "sf deploy metadata
  quick" command to actually deploy the metadata. This quick deploy takes less time because it skips running Apex tests.
  The job ID is valid for 10 days from when you started the validation. Validating first is useful if the deployment to
  your production org take several hours and you don’t want to risk a failed deploy.

  You must run this command from within a project.

  This command doesn't support source-tracking. When you quick deploy with the resulting job ID, the source you deploy
  overwrites the corresponding metadata in your org.

  To validate the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single
  --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double
  quotes. The same syntax applies to --manifest and --source-dir.

EXAMPLES
  NOTE: These examples focus on validating large deployments. See the help for "sf deploy metadata" for examples of deploying smaller sets of metadata which you can also use to validate.

  Validate the deployment of all source files in a directory to the default org:

    $ sf deploy metadata validate --source-dir path/to/source

  Asynchronously validate the deployment and run all tests in the org with alias "my-prod-org"; command immediately
  returns the job ID:

    $ sf deploy metadata validate --source-dir path/to/source --async --test-level RunAllTestsInOrg --target-org \
      my-prod-org

  Validate the deployment of all components listed in a manifest:

    $ sf deploy metadata validate --manifest path/to/package.xml

FLAG DESCRIPTIONS
  -a, --api-version=<value>  Target API version for the validation.

    Use this flag to override the default API version with the API version of your package.xml file. The default API
    version is the latest version supported by the CLI.

  -d, --source-dir=<value>...  Path to the local source files to validate for deployment.

    The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its subdirectories).

    If you specify this flag, don’t specify --metadata or --manifest.

  -l, --test-level=RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests  Deployment Apex testing level.

    Valid values are:

    - RunSpecifiedTests — Runs only the tests that you specify with the --run-tests flag. Code coverage requirements
    differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of
    75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
    trigger individually and is different than the overall coverage percentage.

    - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked
    packages. This test level is the default for production deployments that include Apex classes or triggers.

    - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

    If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more
    information, see [Running Tests in a
    Deployment](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm)
    in the "Metadata API Developer Guide".

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you and
    returns the job ID. To resume watching the validation, run "sf deploy metadata resume". To check the status of the
    validation, run "sf deploy metadata report".

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to validate for deployment.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

  --async  Run the command asynchronously.

    The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the
    CLI. To resume watching the validation, run "sf deploy metadata resume". To check the status of the validation, run
    "sf deploy metadata report".

CONFIGURATION VARIABLES
  target-org       Username or alias of the org that all commands run against by default. (sf only)
  org-api-version  API version of your project. Default: API version of your Dev Hub org.

ENVIRONMENT VARIABLES
  SF_TARGET_ORG        Username or alias of your default org. Overrides the target-org configuration variable.
  SF_USE_PROGRESS_BAR  Set to false to disable the progress bar when running the metadata deploy command.

ERROR CODES
  Succeeded (0)          The deploy succeeded.
  Canceled (1)           The deploy was canceled.
  Failed (1)             The deploy failed.
  SucceededPartial (68)  The deploy partially succeeded.
  InProgress (69)        The deploy is in progress.
  Pending (69)           The deploy is pending.
  Canceling (69)         The deploy is being canceled.
```

## `sf env compute collaborator add`

Add a Heroku user as a collaborator on this Functions account, allowing them to attach Heroku add-ons to compute environments.

```
USAGE
  $ sf env compute collaborator add -h <value>

FLAGS
  -h, --heroku-user=<value>  (required) Email address of the Heroku user you're adding as a collaborator.

EXAMPLES
  Add a Heroku user as a collaborator on this Functions account.

    $ sf env compute collaborator add --heroku-user example@heroku.com
```

## `sf env create compute`

Create a compute environment for use with Salesforce Functions.

```
USAGE
  $ sf env create compute [--json] [-o <value>] [-a <value>]

FLAGS
  -a, --alias=<value>          Alias for the created environment.
  -o, --connected-org=<value>  Username or alias for the org that the compute environment should be connected to.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Create a compute environment for use with Salesforce Functions.

  Compute environments must be connected to a Salesforce org. By default the command uses your local environment's
  connected org. Use the '--connected-org' flag to specify a specific org. Run 'sf env list' to see a list of
  environments.

EXAMPLES
  Create a compute environment to run Salesforce Functions:

    $ sf env create compute

  Connect the environment to a specific org:

    $ sf env create compute --connected-org=org-alias

  Create an alias for the compute environment:

    $ sf env create compute --alias environment-alias
```

## `sf env create sandbox`

Create a sandbox org.

```
USAGE
  $ sf env create sandbox [--json] [-f <value> | -n <value> | -l Developer|Developer_Pro|Partial|Full] [-s] [-a <value>]
    [-w <value> | --async] [-i <value> | ] [-c <value> | ] [-o <value>] [--no-prompt] [--no-track-source]

FLAGS
  -a, --alias=<value>                                        Alias for the sandbox org.
  -c, --clone=<value>                                        Name of the sandbox org to clone.
  -f, --definition-file=<value>                              Path to a sandbox definition file.
  -i, --poll-interval=<seconds>                              Number of seconds to wait between retries.
  -l, --license-type=(Developer|Developer_Pro|Partial|Full)  [default: Developer] Type of sandbox license.
  -n, --name=<value>                                         Name of the sandbox org.
  -o, --target-org=<value>                                   Username or alias of the production org that contains the
                                                             sandbox license.
  -s, --set-default                                          Set the sandbox org as your default org.
  -w, --wait=<minutes>                                       Number of minutes to wait for the sandbox org to be ready.
  --async                                                    Request the sandbox creation, but don't wait for it to
                                                             complete.
  --no-prompt                                                Don't prompt for confirmation about the sandbox
                                                             configuration.
  --no-track-source                                          Do not use source tracking for this sandbox.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Create a sandbox org.

  There are two ways to create a sandbox org: specify a definition file that contains the sandbox options or use the
  --name and --license-type flags to specify the two required options. If you want to set an option other than name or
  license type, such as apexClassId, you must use a definition file.

EXAMPLES
  Create a sandbox org using a definition file and give it the alias "MyDevSandbox". The production org that contains
  the sandbox license has the alias "prodOrg".

    $ sf env create sandbox -f config/dev-sandbox-def.json --alias MyDevSandbox --target-org prodOrg

  Create a sandbox org by directly specifying its name and type of license (Developer) instead of using a definition
  file. Set the sandbox org as your default.

    $ sf env create sandbox --name mysandbox --license-type Developer --alias MyDevSandbox --target-org prodOrg \
      --set-default

FLAG DESCRIPTIONS
  -a, --alias=<value>  Alias for the sandbox org.

    When you create a sandbox, the generated usernames are based on the usernames present in the production org. To
    ensure uniqueness, the new usernames are appended with the name of the sandbox. For example, the username
    "user@example.com" in the production org results in the username "user@example.com.mysandbox" in a sandbox named
    "mysandbox". When you set an alias for a sandbox org, it's assigned to the resulting username of the user running
    this command.

  -c, --clone=<value>  Name of the sandbox org to clone.

    The value of clone must be an existing sandbox in the same target-org.

  -f, --definition-file=<value>  Path to a sandbox definition file.

    The sandbox definition file is a blueprint for the sandbox. You can create different definition files for each
    sandbox type that you use in the development process. See
    <https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm> for all
    the options you can specify in the defintion file.

  -n, --name=<value>  Name of the sandbox org.

    The name must be a unique alphanumeric string (10 or fewer characters) to identify the sandbox. You can’t reuse a
    name while a sandbox is in the process of being deleted.

  -o, --target-org=<value>  Username or alias of the production org that contains the sandbox license.

    When it creates the sandbox org, Salesforce copies the metadata, and optionally data, from your production org to
    the new sandbox org.

  -w, --wait=<minutes>  Number of minutes to wait for the sandbox org to be ready.

    If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays
    the "sf env resume sandbox" command you run to check the status of the create. The displayed command includes the
    job ID for the running sandbox creation.

  --async  Request the sandbox creation, but don't wait for it to complete.

    The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue
    to use the CLI. To check the status of the sandbox creation, run "sf env resume sandbox".

  --no-track-source  Do not use source tracking for this sandbox.

    We recommend you enable source tracking in Developer and Developer Pro sandbox, which is why it's the default
    behavior. Source tracking allows you to track the changes you make to your metadata, both in your local project and
    in the sandbox, and to detect any conflicts between the two.

    To disable source tracking in the new sandbox, specify the --no-track-source flag. The main reason to disable source
    tracking is for performance. For example, while you probably want to deploy metadata and run Apex tests in your
    CI/CD jobs, you probably don't want to incur the costs of source tracking (checking for conflicts, polling the
    SourceMember object, various file system operations.) This is a good use case for disabling source tracking in the
    sandbox.
```

## `sf env create scratch`

Create a scratch org.

```
USAGE
  $ sf env create scratch [--json] [-a <value>] [--async] [-d] [-f <value>] [-v <value>] [-c] [-e
    developer|enterprise|group|professional|partner-developer|partner-enterprise|partner-group|partner-professional]
    [-m] [-y <value>] [-w <value>] [--api-version <value>] [-i <value>] [-t]

FLAGS
  -a, --alias=<value>            Alias for the scratch org.
  -d, --set-default              Set the scratch org as your default org
  -e, --edition=<option>         Salesforce edition of the scratch org.
                                 <options: developer|enterprise|group|professional|partner-developer|partner-enterprise|
                                 partner-group|partner-professional>
  -f, --definition-file=<value>  Path to a scratch org definition file.
  -i, --client-id=<value>        Consumer key of the Dev Hub connected app.
  -t, --[no-]track-source        Use source tracking for this scratch org. Set --no-track-source to disable source
                                 tracking.
  -v, --target-dev-hub=<value>   Username or alias of the Dev Hub org.
  -w, --wait=<minutes>           Number of minutes to wait for the scratch org to be ready.
  -y, --duration-days=<days>     Number of days before the org expires.
  --api-version=<value>          Override the api version used for api requests made by this command
  --async                        Request the org, but don't wait for it to complete.

PACKAGING FLAGS
  -c, --no-ancestors  Don't include second-generation managed package (2GP) ancestors in the scratch org.
  -m, --no-namespace  Create the scratch org with no namespace, even if the Dev Hub has a namespace.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Create a scratch org.

  There are two ways to create a scratch org: specify a definition file that contains the options or use the --edition
  flag to specify the one required option. If you want to set options other than the edition, such as org features or
  settings, you must use a definition file.

  You must specify a Dev Hub to create a scratch org, either with the --target-dev-hub flag or by setting your default
  Dev Hub with the target-dev-hub configuration variable.

EXAMPLES
  Create a Developer edition scratch org using your default Dev Hub and give the scratch org an alias:

    $ sf env create scratch --edition=developer --alias my-scratch-org

  Specify the Dev Hub using its alias and a scratch org definition file. Set the scratch org as your default and
  specify that it expires in 3 days:

    $ sf env create scratch --target-dev-hub=MyHub --definition-file config/project-scratch-def.json --set-default \
      --duration-days 3

FLAG DESCRIPTIONS
  -a, --alias=<value>  Alias for the scratch org.

    New scratch orgs include one administrator by default. The admin user's username is auto-generated and looks
    something like test-wvkpnfm5z113@example.com. When you set an alias for a new scratch org, it's assigned this
    username.

  -e, --edition=developer|enterprise|group|professional|partner-developer|partner-enterprise|partner-group|partner-professional

    Salesforce edition of the scratch org.

    The editions that begin with "partner-" are available only if the Dev Hub org is a Partner Business Org.

  -f, --definition-file=<value>  Path to a scratch org definition file.

    The scratch org definition file is a blueprint for the scratch org. It mimics the shape of an org that you use in
    the development life cycle, such as acceptance testing, packaging, or production. See
    <https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm> for
    all the option you can specify in the definition file.

  -t, --[no-]track-source  Use source tracking for this scratch org. Set --no-track-source to disable source tracking.

    We recommend you enable source tracking in scratch orgs, which is why it's the default behavior. Source tracking
    allows you to track the changes you make to your metadata, both in your local project and in the scratch org, and to
    detect any conflicts between the two.

    To disable source tracking in the new scratch org, specify the --no-track-source flag. The main reason to disable
    source tracking is for performance. For example, while you probably want to deploy metadata and run Apex tests in
    your CI/CD jobs, you probably don't want to incur the costs of source tracking (checking for conflicts, polling the
    SourceMember object, various file system operations.) This is a good use case for disabling source tracking in the
    scratch org.

  -v, --target-dev-hub=<value>  Username or alias of the Dev Hub org.

    Overrides the value of the target-dev-hub configuration variable, if set.

  -w, --wait=<minutes>  Number of minutes to wait for the scratch org to be ready.

    If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays
    the job ID. To resume the scratch org creation, run the env resume scratch command and pass it the job ID.

  --async  Request the org, but don't wait for it to complete.

    The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue
    to use the CLI. To resume the scratch org creation, run "sf env resume scratch".
```

## `sf env delete`

Delete an environment.

```
USAGE
  $ sf env delete [--json] [-e <value> | ] [--confirm <value>]

FLAGS
  -e, --target-compute=<value>  Environment name.
  --confirm=name...             Confirmation name.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Delete an environment.

  You must include the name of the environment to delete using '--target-compute'. Run 'sf env list' to see a list of
  environments.

  Running this command will prompt a confirmation. If you want to skip this confirmation, use the '--confirm' flag and
  the environment alias to skip confirmation.

EXAMPLES
  Delete a compute environment:

    $ sf env delete --target-compute environment-alias

  Delete without a confirmation step:

    $ sf env delete --target-compute environment-alias --confirm environment-alias
```

## `sf env delete sandbox`

Delete a sandbox.

```
USAGE
  $ sf env delete sandbox [--json] [-o <value>] [-p]

FLAGS
  -o, --target-org=<value>  Sandbox alias or login user.
  -p, --no-prompt           Don't prompt the user to confirm the deletion.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Delete a sandbox.

  Specify a sandbox with either the username you used when you logged into it with "sf login", or the alias you gave the
  sandbox when you created it. Run "sf env list" to view all your environments, including sandboxes, and their aliases.

EXAMPLES
  Delete a sandbox with alias my-sandbox:

    $ sf env delete sandbox --target-org=my-sandbox

  Specify a username instead of an alias:

    $ sf env delete sandbox --target-org=myusername@example.com.qa

  Delete the sandbox without prompting to confirm :

    $ sf env delete sandbox --target-org=my-sandbox --no-prompt
```

## `sf env delete scratch`

Delete a scratch org.

```
USAGE
  $ sf env delete scratch [--json] [-o <value>] [-p]

FLAGS
  -o, --target-org=<value>  Scratch org alias or login user.
  -p, --no-prompt           Don't prompt the user to confirm the deletion.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Delete a scratch org.

  Specify a scratch org with either the username you used when you logged into it with "sf login", or the alias you gave
  the scratch org when you created it. Run "sf env list" to view all your environments, including scratch orgs, and
  their aliases.

EXAMPLES
  Delete a scratch org with alias my-scratch-org:

    $ sf env delete scratch --target-org=my-scratch-org

  Specify a username instead of an alias:

    $ sf env delete scratch --target-org=test-123456-abcdefg@example.com

  Delete the scratch org without prompting to confirm :

    $ sf env delete scratch --target-org=my-scratch-org --no-prompt
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

## `sf env log`

Stream log output for an environment.

```
USAGE
  $ sf env log [-e <value> | ] [-n <value>]

FLAGS
  -e, --target-compute=<value>  Compute environment name to retrieve logs.
  -n, --num=<value>             Number of lines to display.

EXAMPLES
  Stream log output:

    $ sf env log --target-compute environment-alias
```

## `sf env log tail`

Stream log output for an environment.

```
USAGE
  $ sf env log tail [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Compute environment name to retrieve logs.

EXAMPLES
  Stream log output:

    $ sf env log tail --target-compute environment-alias
```

## `sf env logdrain add`

Add log drain to a specified environment.

```
USAGE
  $ sf env logdrain add [--json] [-e <value> | ] [-l <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.
  -l, --drain-url=<value>       Endpoint that will receive sent logs.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Add log drain to a specified environment.

  Both '--target-compute' and '--url' are required flags. '--url' should be a HTTP or HTTPS URL that can receive the log
  drain messages.

EXAMPLES
  Add a log drain:

    $ sf env logdrain add --target-compute environment-name --url https://path/to/logdrain
```

## `sf env logdrain list`

List log drains connected to a specified environment.

```
USAGE
  $ sf env logdrain list [--json] [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
  --json  Format output as json.

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
  $ sf env logdrain remove [--json] [-e <value> | ] [-l <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.
  -l, --drain-url=<value>       Log drain url to remove.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Remove log drain from a specified environment.

  Both '--target-compute' and '--drain-url' are required flags.

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

## `sf env resume sandbox`

Check the status of a sandbox creation, and log in to it if it's ready.

```
USAGE
  $ sf env resume sandbox [--json] [-w <value>] [-n <value> | -i <value>] [-l] [-o <value>]

FLAGS
  -i, --job-id=<value>      Job ID of the incomplete sandbox creation that you want to check the status of.
  -l, --use-most-recent     Use the most recent sandbox create request.
  -n, --name=<value>        Name of the sandbox org.
  -o, --target-org=<value>  Username or alias of the production org that contains the sandbox license.
  -w, --wait=<minutes>      Number of minutes to wait for the sandbox org to be ready.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Check the status of a sandbox creation, and log in to it if it's ready.

  Sandbox creation can take a long time. If the original "sf env create sandbox" command either times out, or you
  specified the --async flag, the command displays a job ID. Use this job ID to check whether the sandbox creation is
  complete, and if it is, the command then logs into it.

  You can also use the sandbox name to check the status or the --use-most-recent flag to use the job ID of the most
  recent sandbox creation.

EXAMPLES
  Check the status of a sandbox creation using its name and specify a production org with alias "prodOrg":

    $ sf env resume sandbox --name mysandbox --target-org prodOrg

  Check the status using the job ID:

    $ sf env resume sandbox --job-id 0GRxxxxxxxx

  Check the status of the most recent sandbox create request:

    $ sf env resume sandbox --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the incomplete sandbox creation that you want to check the status of.

    The job ID is valid for 24 hours after you start the sandbox creation.

  -o, --target-org=<value>  Username or alias of the production org that contains the sandbox license.

    When it creates the sandbox org, Salesforce copies the metadata, and optionally data, from your production org to
    the new sandbox org.

  -w, --wait=<minutes>  Number of minutes to wait for the sandbox org to be ready.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you and
    returns the job ID. To resume checking the sandbox creation, rerun this command.
```

## `sf env resume scratch`

Resume the creation of an incomplete scratch org.

```
USAGE
  $ sf env resume scratch [--json] [-i <value>] [-r]

FLAGS
  -i, --job-id=<value>   Job ID of the incomplete scratch org create that you want to resume.
  -r, --use-most-recent  Use the job ID of the most recent incomplete scratch org.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Resume the creation of an incomplete scratch org.

  When the original "sf env create scratch" command either times out or is run with the --async flag, it displays a job
  ID.

  Run this command by either passing it a job ID or using the --use-most-recent flag to specify the most recent
  incomplete scratch org.

EXAMPLES
  Resume a scratch org create with a job ID:

    $ sf env resume scratch --job-id 2SR3u0000008fBDGAY

  Resume your most recent incomplete scratch org:

    $ sf env resume scratch --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the incomplete scratch org create that you want to resume.

    The job ID is the same as the record ID of the incomplete scratch org in the ScratchOrgInfo object of the Dev Hub.

    The job ID is valid for 24 hours after you start the scratch org creation.
```

## `sf env var get KEY`

Display a single config variable for an environment.

```
USAGE
  $ sf env var get [KEY] [--json] [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Display a single config variable for an environment.

  You must provide the '--target-compute' flag and the key to retrieve.

EXAMPLES
  Get a config variable:

    $ sf env var get [KEY] --target-compute environment-alias
```

## `sf env var list`

List your environment's config vars in a table.

```
USAGE
  $ sf env var list [--json] [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List your environment's config vars in a table.

  Use the '--json' flag to return config vars in JSON format.

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
  $ sf env var set [--json] [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
  --json  Format output as json.

EXAMPLES
  Set a config value:

    $ sf env var set [KEY]=[VALUE] --target-compute environment-alias
```

## `sf env var unset`

Unset a single config value for an environment.

```
USAGE
  $ sf env var unset [--json] [-e <value> | ]

FLAGS
  -e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Unset a single config value for an environment.

  Run 'sf env var list' to see a list of config values that can be unset.

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

  Both '--language' and '--name' are required flags. Function names must start with a capital letter.

EXAMPLES
  Create a JavaScript function:

    $ sf generate function --function-name myfunction --language javascript
```

## `sf generate metadata field`

Generate metadata source files for a new custom field on a specified object.

```
USAGE
  $ sf generate metadata field -l <value> [-o <value>]

FLAGS
  -l, --label=<value>   (required) The field's label.
  -o, --object=<value>  The directory that contains the object's source files.

DESCRIPTION
  Generate metadata source files for a new custom field on a specified object.

  This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the
  field's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other field
  properties, such as its API name.

  You can generate a custom field on either a standard object, such as Account, or a custom object. In both cases, the
  source files for the object must already exist in your local project before you run this command. If you create a
  relationship field, the source files for the parent object must also exist in your local directory.  Use the command
  "sf metadata retrieve -m CustomObject:<object>" to retrieve source files for both standard and custom objects from
  your org.  To create a custom object, run the "sf generate metadata sobject" command or use the Object Manager UI in
  your Salesforce org.

EXAMPLES
  Create a field with the specified label; the command prompts you for the object:

    $ sf generate metadata field --label "My Field"

  Specify the local path to the object's folder:

    $ sf generate metadata field --label "My Field" --object force-app/main/default/objects/MyObject__c

FLAG DESCRIPTIONS
  -o, --object=<value>  The directory that contains the object's source files.

    The object source files in your local project are grouped in a directoy with the same name as the object. Custom
    object names always end in "__c". An example of the object directory for the Account standard object is
    "force-app/main/default/objects/Account" An example custom object directory is
    "force-app/main/default/objects/MyObject__c"

    If you don't specify this flag, the command prompts you to choose from your local objects.
```

## `sf generate metadata platformevent`

Generate metadata source files for a new platform event.

```
USAGE
  $ sf generate metadata platformevent -l <value>

FLAGS
  -l, --label=<value>  (required) The platform event's label.

DESCRIPTION
  Generate metadata source files for a new platform event.

  This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the
  event's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other event
  properties, such as its API name.

EXAMPLES
  Create a platform event with the specified label:

    $ sf generate metadata platformevent --label "My Platform Event"
```

## `sf generate metadata sobject`

Generate metadata source files for a new custom object.

```
USAGE
  $ sf generate metadata sobject -l <value> [-f]

FLAGS
  -f, --use-default-features  Enable all optional features without prompting.
  -l, --label=<value>         (required) The custom object's label.

DESCRIPTION
  Generate metadata source files for a new custom object.

  This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the
  object's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other
  object properties, such as its API name and plural label.

  All Salesforce objects are required to have a Name field, so this command also prompts you for the label and type of
  the Name field. Run the "sf metadata generate field" command to create additional fields for the object.

  To reduce the number of prompts, use the "--use-default-features" flag to automatically enable some features, such as
  reporting and search on the object.

EXAMPLES
  Create a custom object with the specified label and be prompted for additional information:

    $ sf generate metadata sobject --label "My Object"

  Create a custom object and enable optional features without prompting:

    $ sf generate metadata sobject --label "My Object" --use-default-features

FLAG DESCRIPTIONS
  -f, --use-default-features  Enable all optional features without prompting.

    Enables these features:

    * Search: Allows users to find the custom object's records when they search, including SOSL.
    * Feeds: Enables feed tracking.
    * Reports: Allows reporting of the data in the custom object records.
    * History: Enables object history tracking.
    * Activities: Allows users to associate tasks and scheduled calendar events related to the custom object records.
    * Bulk API: With Sharing and Streaming API, classifies the custom object as an Enterprise Application object.
    * Sharing: With Bulk API and Streaming API, classifies the custom object as an Enterprise Application object.
    * Streaming API: With Bulk API and Sharing, classifies the custom object as an Enterprise Application object.
```

## `sf generate metadata tab`

Generate the metadata source files for a new custom tab on a custom object.

```
USAGE
  $ sf generate metadata tab -o <value> -d <value> -i <value> [--json]

FLAGS
  -d, --directory=<value>  (required) Path to a "tabs" directory that will contain the source files for your new tab.
  -i, --icon=<value>       (required) [default: 1] Number from 1 to 100 that specifies the color scheme and icon for the
                           custom tab.
  -o, --object=<value>     (required) API name of the custom object you're generating a tab for.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Generate the metadata source files for a new custom tab on a custom object.

  Custom tabs let you display custom object data or other web content in Salesforce. Custom tabs appear in Salesforce as
  an item in the app’s navigation bar and in the App Launcher.

  This command must be run in a Salesforce DX project directory. You must pass all required information to it with the
  required flags. The source files for the custom object for which you're generating a tab don't need to exist in your
  local project.

EXAMPLES
  Create a tab on the MyObject__c custom object:

    $ sf generate metadata tab --object MyObject__c --icon 54 --directory force-app/main/default/tabs

FLAG DESCRIPTIONS
  -i, --icon=<value>  Number from 1 to 100 that specifies the color scheme and icon for the custom tab.

    See https://lightningdesignsystem.com/icons/\#custom for the available icons.

  -o, --object=<value>  API name of the custom object you're generating a tab for.

    The API name for a custom object always ends in "__c", such as "MyObject__c".
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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `sf info:releasenotes:display [-v <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Display Salesforce CLI release notes on the command line.

```
USAGE
  $ sf info releasenotes display [-v <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -v, --version=<value>                                                             CLI version or tag for which to
                                                                                    display release notes.
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  Display Salesforce CLI release notes on the command line.

ALIASES
  $ sf whatsnew

EXAMPLES
  Display release notes for the currently installed CLI version:

  $ sf info releasenotes display

  Display release notes for CLI version 7.120.0:

  $ sf info releasenotes display --version 7.120.0

  Display release notes for the CLI version that corresponds to a tag (stable, stable-rc, latest, latest-rc, rc):

  $ sf info releasenotes display --version latest
```

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

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v1.1.2/src/commands/login.ts)_

## `sf login functions`

Log in to Salesforce Functions.

```
USAGE
  $ sf login functions

DESCRIPTION
  Log in to Salesforce Functions.

  This step is required to develop or deploy Salesforce Functions.

EXAMPLES
  Log in to Salesforce Functions:

    $ sf login functions
```

## `sf login functions jwt`

Login using JWT instead of default web-based flow. This will authenticate you with both sf and Salesforce Functions.

```
USAGE
  $ sf login functions jwt -u <value> -f <value> -i <value> [--json] [-l <value> | ] [-a <value>] [-d] [-v]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default           Set the org as the default that all org-related commands run against.
  -f, --keyfile=<value>       (required) Path to JWT keyfile.
  -i, --clientid=<value>      (required) OAuth client ID.
  -l, --instance-url=<value>  The login URL of the instance the org lives on.
  -u, --username=<value>      (required) Authentication username.
  -v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Login using JWT instead of default web-based flow. This will authenticate you with both sf and Salesforce Functions.

  Use this command when executing from a script.

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

    $ sf login org --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default

  Use --browser to specify a specific browser, such as Google Chrome:

    $ sf login org --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default \
      --browser chrome

  Use your own connected app by specifying its consumer key (also called client ID):

    $ sf login org --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default \
      --browser chrome --clientid 04580y4051234051

FLAG DESCRIPTIONS
  -b, --browser=<value>  Browser in which to open the org.

    You can log in to an org with one of the following browsers: Firefox, Safari, Google Chrome, or Windows Edge. If you
    don’t specify --browser, the command uses your default browser. The exact names of the browser applications differ
    depending on the operating system you're on; check your documentation for details.

  -l, --instance-url=<value>  URL of the instance that the org lives on. (defaults to https://login.salesforce.com)

    If you specify --instance-url, the value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

    To specify a sandbox, set --instance-url to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

CONFIGURATION VARIABLES
  apiVersion   API version of your project. Default: API version of your Dev Hub org. (sfdx only)
  instanceUrl  URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)

ENVIRONMENT VARIABLES
  SF_INSTANCE_URL  URL of the Salesforce instance that is hosting your org. Default value is
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

  Log in to a sandbox using URL https://MyDomainName--SandboxName.sandbox.my.salesforce.com:

    $ sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \
      --alias ci-org --set-default --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com

FLAG DESCRIPTIONS
  -l, --instance-url=<value>  URL of the instance that the org lives on.

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

    To specify a sandbox, set --instance-url to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

CONFIGURATION VARIABLES
  apiVersion   API version of your project. Default: API version of your Dev Hub org. (sfdx only)
  instanceUrl  URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)

ENVIRONMENT VARIABLES
  SF_INSTANCE_URL  URL of the Salesforce instance that is hosting your org. Default value is
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

_See code: [@salesforce/plugin-login](https://github.com/salesforcecli/plugin-login/blob/v1.1.2/src/commands/logout.ts)_

## `sf logout functions`

Log out of your Salesforce Functions account.

```
USAGE
  $ sf logout functions [--json]

GLOBAL FLAGS
  --json  Format output as json.

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
  apiVersion   API version of your project. Default: API version of your Dev Hub org. (sfdx only)
  instanceUrl  URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)
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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `sf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
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

## `sf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
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
  -h, --help     Show CLI help.
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
  -h, --help     Show CLI help.
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
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sf plugins unlink
  $ sf plugins remove
```

## `sf plugins:trust:verify -n <string> [-r <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Validate a digital signature for a npm package.

```
USAGE
  $ sf plugins trust verify -n <string> [-r <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -n, --npm=<value>                                                                 (required) Specify the npm name.
                                                                                    This can include a tag/version.
  -r, --registry=<value>                                                            The registry name. The behavior is
                                                                                    the same as npm.
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  Validate a digital signature for a npm package.

EXAMPLES
  $ sf plugins trust verify --npm @scope/npmName --registry http://my.repo.org:4874

  $ sf plugins trust verify --npm @scope/npmName
```

## `sf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sf plugins unlink
  $ sf plugins remove
```

## `sf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
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
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `sf retrieve metadata`

Retrieve metadata from an org to your local project.

```
USAGE
  $ sf retrieve metadata [--json] [-a <value>] [-c] [-x <value> | -m <value> | -d <value>] [-n <value>]
    [--single-package -t <value>] [-o <value>] [-w <value>] [-z ] [--zip-file-name <value> ]

FLAGS
  -a, --api-version=<value>          Target API version for the retrieve.
  -c, --ignore-conflicts             Ignore conflicts and retrieve and save files to your local filesystem, even if they
                                     overwrite your local changes.
  -d, --source-dir=<value>...        File paths for source to retrieve from the org.
  -m, --metadata=<value>...          Metadata component names to retrieve.
  -n, --package-name=<value>...      Package names to retrieve.
  -o, --target-org=<value>           Login username or alias for the target org.
  -t, --target-metadata-dir=<value>  Directory that will contain the retrieved metadata format files or ZIP.
  -w, --wait=<value>                 Number of minutes to wait for the command to complete and display results to the
                                     terminal window.
  -x, --manifest=<value>             File path for the manifest (package.xml) that specifies the components to retrieve.
  -z, --unzip                        Extract all files from the retrieved zip file.
  --single-package                   Indicates that the zip file points to a directory structure for a single package.
  --zip-file-name=<value>            File name to use for the retrieved zip file.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Retrieve metadata from an org to your local project.

  You must run this command from within a project.

  Metadata components are retrieved in source format by default. Retrieve them in metadata format by specifying the
  --target-metadata-dir flag, which retrieves the components into a ZIP file in the specified directory.

  If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production
  org, never allow source tracking. You can also use the "--no-track-source" flag when you create a scratch or sandbox
  org to disable source tracking.

  To retrieve multiple metadata components, either use multiple --metadata <name> flags or use a single --metadata flag
  with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same
  syntax applies to --manifest and --source-dir.

EXAMPLES
  Retrieve remote changes:

    $ sf retrieve metadata

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

  Retrieve the metadata components listed in the force-app directory, but retrieve them in metadata format into a ZIP
  file in the "output" directory:

    $ sf retrieve metadata --source-dir force-app --target-metadata-dir output

  Retrieve in metadata format and automatically extract the contents into the "output" directory:

    $ sf retrieve metadata --source-dir force-app --target-metadata-dir output --unzip

FLAG DESCRIPTIONS
  -a, --api-version=<value>  Target API version for the retrieve.

    Use this flag to override the default API version, which is the latest version supported the CLI, with the API
    version in your package.xml file.

  -c, --ignore-conflicts

    Ignore conflicts and retrieve and save files to your local filesystem, even if they overwrite your local changes.

    This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as
    production orgs.

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
  target-org       Username or alias of the org that all commands run against by default. (sf only)
  org-api-version  API version of your project. Default: API version of your Dev Hub org.

ENVIRONMENT VARIABLES
  SF_TARGET_ORG        Username or alias of your default org. Overrides the target-org configuration variable.
  SF_USE_PROGRESS_BAR  Set to false to disable the progress bar when running the metadata deploy command.
```

## `sf retrieve metadata preview`

Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

```
USAGE
  $ sf retrieve metadata preview [--json] [-c] [-o <value>]

FLAGS
  -c, --ignore-conflicts    Ignore conflicts and preview the retrieve of remote components, even if they will overwrite
                            local changes.
  -o, --target-org=<value>  Login username or alias for the target org.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

  You must run this command from within a project.

  The command outputs a table that describes what will happen if you run the "sf retrieve metadata" command. The table
  lists the metadata components that will be retrieved and deleted. The table also lists the current conflicts between
  files in your local project and components in the org. Finally, the table lists the files that won't be retrieved
  because they're included in your .forceignore file.

  If your org allows source tracking, then this command considers conflicts between the org and local. Some orgs, such
  as production orgs, never allow source tracking. Use the "--no-track-source" flag when you create a scratch or sandbox
  org to disable source tracking.

EXAMPLES
  Preview the retrieve of all changes from the org:

    $ sf retrieve metadata preview

  Preview the retrieve when ignoring any conflicts:

    $ sf retrieve metadata preview --ignore-conflicts

FLAG DESCRIPTIONS
  -c, --ignore-conflicts

    Ignore conflicts and preview the retrieve of remote components, even if they will overwrite local changes.

    This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as
    production orgs.

  -o, --target-org=<value>  Login username or alias for the target org.

    Overrides your default org.
```

## `sf run function`

Send a cloudevent to a function.

```
USAGE
  $ sf run function [--json] [-l <value> | ] [-H <value>] [-p <value>] [-s] [-o <value>]

FLAGS
  -H, --headers=<value>...     Set headers.
  -l, --function-url=<value>   URL of the function to run.
  -o, --connected-org=<value>  Username or alias for the target org; overrides default target org.
  -p, --payload=<value>        Set the payload of the cloudevent as a JSON object or a path to a file via @file.json.
  -s, --structured             Set the cloudevent to be emitted as a structured JSON cloudevent.

GLOBAL FLAGS
  --json  Format output as json.

EXAMPLES
  Run a function:

    $ sf run function --url http://path/to/function

  Run a function with a payload and a JSON response:

    $ sf run function --url http://path/to/function --payload '@file.json' --structured
```

## `sf run function start`

Build and run a Salesforce Function.

```
USAGE
  $ sf run function start [-b <value>] [-l javascript|typescript|java|auto] [-p <value>] [-v]

FLAGS
  -b, --debug-port=<value>                          [default: 9229] Port for remote debugging.
  -l, --language=(javascript|typescript|java|auto)  [default: auto] The language that the function runs in.
  -p, --port=<value>                                [default: 8080] Port for running the function.
  -v, --verbose                                     Output additional logs.

DESCRIPTION
  Build and run a Salesforce Function.

  Run this command from the directory of your Salesforce Functions project.

  This command will run the target function locally (on the same operating system as this CLI), just like the `local`
  subcommand.

  Previously, this command ran functions in a container. Container mode is still supported via the `container`
  subcommand. Arguments relevant to container mode are still accepted, but are deprecated, ignored, and will be dropped
  in a future release.

EXAMPLES
  Build a function and start the invoker

    $ sf run function start

  Start the invoker with a specific language and port

    $ sf run function start --port 5000 --language javascript
```

## `sf run function start container`

Build and run a Salesforce Function in a container.

```
USAGE
  $ sf run function start container [-p <value>] [-b <value>] [--clear-cache] [--no-pull] [-e <value>] [--network
  <value>] [-v]

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
  Build and run a Salesforce Function in a container.

  Run this command from the directory of your Salesforce Functions project.

EXAMPLES
  Build and run a function:

    $ sf run function start container

  Run a function on a specific port with additional logs:

    $ sf run function start container --port 5000 --verbose

  Add environment variables and specify a network:

    $ sf run function start container --env KEY=VALUE --network host
```

## `sf run function start local`

Build and run a Salesforce Function locally.

```
USAGE
  $ sf run function start local [-p <value>] [-b <value>] [-l javascript|typescript|java|auto]

FLAGS
  -b, --debug-port=<value>                          [default: 9229] Port to use for debbugging the function.
  -l, --language=(javascript|typescript|java|auto)  [default: auto] The language that the function runs in.
  -p, --port=<value>                                [default: 8080] Port to bind the invoker to.

DESCRIPTION
  Build and run a Salesforce Function locally.

EXAMPLES
  Build a function and start the invoker

    $ sf run function start local

  Start the invoker with a specific language and port

    $ sf run function start local --port 5000 --language javascript
```

## `sf search`

Search for a command.

```
USAGE
  $ sf search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code: [@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/v0.0.1/dist/commands/search.ts)_

## `sf update [CHANNEL]`

update the sf CLI

```
USAGE
  $ sf update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the sf CLI

EXAMPLES
  Update to the stable channel:

    $ sf update stable

  Update to a specific version:

    $ sf update --version 1.0.0

  Interactively select version:

    $ sf update --interactive

  See available versions:

    $ sf update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.0.0/src/commands/update.ts)_

## `sf version`

```
USAGE
  $ sf version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.1.2/src/commands/version.ts)_

## `sf whatsnew [-v <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Display Salesforce CLI release notes on the command line.

```
USAGE
  $ sf whatsnew [-v <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -v, --version=<value>                                                             CLI version or tag for which to
                                                                                    display release notes.
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  Display Salesforce CLI release notes on the command line.

ALIASES
  $ sf whatsnew

EXAMPLES
  Display release notes for the currently installed CLI version:

  $ sf whatsnew

  Display release notes for CLI version 7.120.0:

  $ sf whatsnew --version 7.120.0

  Display release notes for the CLI version that corresponds to a tag (stable, stable-rc, latest, latest-rc, rc):

  $ sf whatsnew --version latest
```

## `sf whoami functions`

Show information on your Salesforce Functions login.

```
USAGE
  $ sf whoami functions [--json]

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show information on your Salesforce Functions login.

  Returns your email and ID. Use '--show-token' to show your Salesforce Functions token.

EXAMPLES
  Get account information:

    $ sf whoami functions

  Show token and output result as JSON:

    $ sf whoami functions --show-token --json
```

<!-- commandsstop -->
