# @salesforce/cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@salesforce/cli.svg)](https://npmjs.org/package/@salesforce/cli)
[![License](https://img.shields.io/npm/l/@salesforce/cli.svg)](https://github.com/salesforcecli/cli/blob/master/package.json)

# Getting Started

- Read the [sf Plugin Developer Guide](https://github.com/salesforcecli/cli/wiki/Quick-Introduction-to-Developing-sf-Plugins) to learn how to develop a `sf` plugin.
- Are you migrating an `sfdx` plugin to `sf`? Then check out the [migration section](https://github.com/salesforcecli/cli/wiki/Migrate-Plugins-Built-for-sfdx) of the developer guide.
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
@salesforce/cli/2.57.7 linux-x64 node-v20.16.0
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

- [`sf alias list`](#sf-alias-list)
- [`sf alias set`](#sf-alias-set)
- [`sf alias unset`](#sf-alias-unset)
- [`sf analytics generate template`](#sf-analytics-generate-template)
- [`sf apex generate class`](#sf-apex-generate-class)
- [`sf apex generate trigger`](#sf-apex-generate-trigger)
- [`sf apex get log`](#sf-apex-get-log)
- [`sf apex get test`](#sf-apex-get-test)
- [`sf apex list log`](#sf-apex-list-log)
- [`sf apex run`](#sf-apex-run)
- [`sf apex run test`](#sf-apex-run-test)
- [`sf apex tail log`](#sf-apex-tail-log)
- [`sf api request graphql`](#sf-api-request-graphql)
- [`sf api request rest ENDPOINT`](#sf-api-request-rest-endpoint)
- [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
- [`sf commands`](#sf-commands)
- [`sf config get`](#sf-config-get)
- [`sf config list`](#sf-config-list)
- [`sf config set`](#sf-config-set)
- [`sf config unset`](#sf-config-unset)
- [`sf data create file`](#sf-data-create-file)
- [`sf data create record`](#sf-data-create-record)
- [`sf data delete bulk`](#sf-data-delete-bulk)
- [`sf data delete record`](#sf-data-delete-record)
- [`sf data delete resume`](#sf-data-delete-resume)
- [`sf data export tree`](#sf-data-export-tree)
- [`sf data get record`](#sf-data-get-record)
- [`sf data import tree`](#sf-data-import-tree)
- [`sf data query`](#sf-data-query)
- [`sf data query resume`](#sf-data-query-resume)
- [`sf data resume`](#sf-data-resume)
- [`sf data search`](#sf-data-search)
- [`sf data update record`](#sf-data-update-record)
- [`sf data upsert bulk`](#sf-data-upsert-bulk)
- [`sf data upsert resume`](#sf-data-upsert-resume)
- [`sf doctor`](#sf-doctor)
- [`sf force data bulk delete`](#sf-force-data-bulk-delete)
- [`sf force data bulk status`](#sf-force-data-bulk-status)
- [`sf force data bulk upsert`](#sf-force-data-bulk-upsert)
- [`sf help [COMMAND]`](#sf-help-command)
- [`sf info releasenotes display`](#sf-info-releasenotes-display)
- [`sf lightning generate app`](#sf-lightning-generate-app)
- [`sf lightning generate component`](#sf-lightning-generate-component)
- [`sf lightning generate event`](#sf-lightning-generate-event)
- [`sf lightning generate interface`](#sf-lightning-generate-interface)
- [`sf lightning generate test`](#sf-lightning-generate-test)
- [`sf org assign permset`](#sf-org-assign-permset)
- [`sf org assign permsetlicense`](#sf-org-assign-permsetlicense)
- [`sf org create sandbox`](#sf-org-create-sandbox)
- [`sf org create scratch`](#sf-org-create-scratch)
- [`sf org create user`](#sf-org-create-user)
- [`sf org delete sandbox`](#sf-org-delete-sandbox)
- [`sf org delete scratch`](#sf-org-delete-scratch)
- [`sf org disable tracking`](#sf-org-disable-tracking)
- [`sf org display`](#sf-org-display)
- [`sf org display user`](#sf-org-display-user)
- [`sf org enable tracking`](#sf-org-enable-tracking)
- [`sf org generate password`](#sf-org-generate-password)
- [`sf org list`](#sf-org-list)
- [`sf org list auth`](#sf-org-list-auth)
- [`sf org list limits`](#sf-org-list-limits)
- [`sf org list metadata`](#sf-org-list-metadata)
- [`sf org list metadata-types`](#sf-org-list-metadata-types)
- [`sf org list sobject record-counts`](#sf-org-list-sobject-record-counts)
- [`sf org list users`](#sf-org-list-users)
- [`sf org login access-token`](#sf-org-login-access-token)
- [`sf org login device`](#sf-org-login-device)
- [`sf org login jwt`](#sf-org-login-jwt)
- [`sf org login sfdx-url`](#sf-org-login-sfdx-url)
- [`sf org login web`](#sf-org-login-web)
- [`sf org logout`](#sf-org-logout)
- [`sf org open`](#sf-org-open)
- [`sf org refresh sandbox`](#sf-org-refresh-sandbox)
- [`sf org resume sandbox`](#sf-org-resume-sandbox)
- [`sf org resume scratch`](#sf-org-resume-scratch)
- [`sf package create`](#sf-package-create)
- [`sf package delete`](#sf-package-delete)
- [`sf package install`](#sf-package-install)
- [`sf package install report`](#sf-package-install-report)
- [`sf package installed list`](#sf-package-installed-list)
- [`sf package list`](#sf-package-list)
- [`sf package uninstall`](#sf-package-uninstall)
- [`sf package uninstall report`](#sf-package-uninstall-report)
- [`sf package update`](#sf-package-update)
- [`sf package version create`](#sf-package-version-create)
- [`sf package version create list`](#sf-package-version-create-list)
- [`sf package version create report`](#sf-package-version-create-report)
- [`sf package version delete`](#sf-package-version-delete)
- [`sf package version displayancestry`](#sf-package-version-displayancestry)
- [`sf package version list`](#sf-package-version-list)
- [`sf package version promote`](#sf-package-version-promote)
- [`sf package version report`](#sf-package-version-report)
- [`sf package version update`](#sf-package-version-update)
- [`sf package1 version create`](#sf-package1-version-create)
- [`sf package1 version create get`](#sf-package1-version-create-get)
- [`sf package1 version display`](#sf-package1-version-display)
- [`sf package1 version list`](#sf-package1-version-list)
- [`sf plugins`](#sf-plugins)
- [`sf plugins discover`](#sf-plugins-discover)
- [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
- [`sf plugins install PLUGIN`](#sf-plugins-install-plugin)
- [`sf plugins link PATH`](#sf-plugins-link-path)
- [`sf plugins reset`](#sf-plugins-reset)
- [`sf plugins trust verify`](#sf-plugins-trust-verify)
- [`sf plugins uninstall [PLUGIN]`](#sf-plugins-uninstall-plugin)
- [`sf plugins update`](#sf-plugins-update)
- [`sf project convert mdapi`](#sf-project-convert-mdapi)
- [`sf project convert source`](#sf-project-convert-source)
- [`sf project convert source-behavior`](#sf-project-convert-source-behavior)
- [`sf project delete source`](#sf-project-delete-source)
- [`sf project delete tracking`](#sf-project-delete-tracking)
- [`sf project deploy cancel`](#sf-project-deploy-cancel)
- [`sf project deploy preview`](#sf-project-deploy-preview)
- [`sf project deploy quick`](#sf-project-deploy-quick)
- [`sf project deploy report`](#sf-project-deploy-report)
- [`sf project deploy resume`](#sf-project-deploy-resume)
- [`sf project deploy start`](#sf-project-deploy-start)
- [`sf project deploy validate`](#sf-project-deploy-validate)
- [`sf project generate`](#sf-project-generate)
- [`sf project generate manifest`](#sf-project-generate-manifest)
- [`sf project list ignored`](#sf-project-list-ignored)
- [`sf project reset tracking`](#sf-project-reset-tracking)
- [`sf project retrieve preview`](#sf-project-retrieve-preview)
- [`sf project retrieve start`](#sf-project-retrieve-start)
- [`sf schema generate field`](#sf-schema-generate-field)
- [`sf schema generate platformevent`](#sf-schema-generate-platformevent)
- [`sf schema generate sobject`](#sf-schema-generate-sobject)
- [`sf schema generate tab`](#sf-schema-generate-tab)
- [`sf search`](#sf-search)
- [`sf sobject describe`](#sf-sobject-describe)
- [`sf sobject list`](#sf-sobject-list)
- [`sf static-resource generate`](#sf-static-resource-generate)
- [`sf update [CHANNEL]`](#sf-update-channel)
- [`sf version`](#sf-version)
- [`sf visualforce generate component`](#sf-visualforce-generate-component)
- [`sf visualforce generate page`](#sf-visualforce-generate-page)
- [`sf which`](#sf-which)

## `sf alias list`

List all aliases currently set on your local computer.

```
USAGE
  $ sf alias list [--json] [--flags-dir <value>]

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List all aliases currently set on your local computer.

  Aliases are global, which means that you can use all the listed aliases in any Salesforce DX project on your computer.

ALIASES
  $ sf force alias list

EXAMPLES
  List all the aliases you've set:

    $ sf alias list
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/alias/list.ts)_

## `sf alias set`

Set one or more aliases on your local computer.

```
USAGE
  $ sf alias set [--json] [--flags-dir <value>]

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Set one or more aliases on your local computer.

  Aliases are user-defined short names that make it easier to use the CLI. For example, users often set an alias for a
  scratch org usernames because they're long and unintuitive. Check the --help of a CLI command to determine where you
  can use an alias.

  You can associate an alias with only one value at a time. If you set an alias multiple times, the alias points to the
  most recent value. Aliases are global; after you set an alias, you can use it in any Salesforce DX project on your
  computer.

  Use quotes to specify an alias value that contains spaces. You typically use an equal sign to set your alias, although
  you don't need it if you're setting a single alias in a command.

ALIASES
  $ sf force alias set

EXAMPLES
  Set an alias for a scratch org username:

    $ sf alias set my-scratch-org=test-sadbiytjsupn@example.com

  Set multiple aliases with a single command:

    $ sf alias set my-scratch-org=test-sadbiytjsupn@example.com my-other-scratch-org=test-ss0xut7txzxf@example.com

  Set an alias that contains spaces:

    $ sf alias set my-alias='alias with spaces'

  Set a single alias without using an equal sign:

    $ sf alias set my-scratch-org test-ss0xut7txzxf@example.com
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/alias/set.ts)_

## `sf alias unset`

Unset one or more aliases that are currently set on your local computer.

```
USAGE
  $ sf alias unset [--json] [--flags-dir <value>] [-a] [-p]

FLAGS
  -a, --all        Unset all currently set aliases.
  -p, --no-prompt  Don't prompt the user for confirmation when unsetting all aliases.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Unset one or more aliases that are currently set on your local computer.

  Aliases are global, so when you unset one it's no longer available in any Salesforce DX project.

ALIASES
  $ sf force alias unset

EXAMPLES
  Unset an alias:

    $ sf alias unset my-alias

  Unset multiple aliases with a single command:

    $ sf alias unset my-alias my-other-alias

  Unset all aliases:

    $ sf alias unset --all [--no-prompt]
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/alias/unset.ts)_

## `sf analytics generate template`

Generate a simple Analytics template.

```
USAGE
  $ sf analytics generate template -n <value> [--json] [--flags-dir <value>] [-d <value>] [--api-version <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the Analytics template.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a simple Analytics template.

  The metadata files associated with the Analytics template must be contained in a parent directory called
  "waveTemplates" in your package directory. Either run this command from an existing directory of this name, or use the
  --output-dir flag to generate one or point to an existing one.

ALIASES
  $ sf force analytics template create

EXAMPLES
  Generate the metadata files for a simple Analytics template file called myTemplate in the
  force-app/main/default/waveTemplates directory:

    $ sf analytics generate template --name myTemplate --output-dir force-app/main/default/waveTemplates

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/analytics/generate/template.ts)_

## `sf apex generate class`

Generate an Apex class.

```
USAGE
  $ sf apex generate class -n <value> [--json] [--flags-dir <value>] [-t
    ApexException|ApexUnitTest|BasicUnitTest|DefaultApexClass|InboundEmailService] [-d <value>] [--api-version <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated Apex class.
  -t, --template=<option>    [default: DefaultApexClass] Template to use for file creation.
                             <options: ApexException|ApexUnitTest|BasicUnitTest|DefaultApexClass|InboundEmailService>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate an Apex class.

  Generates the Apex *.cls file and associated metadata file. These files must be contained in a parent directory called
  "classes" in your package directory. Either run this command from an existing directory of this name, or use the
  --output-dir flag to generate one or point to an existing one.

ALIASES
  $ sf force apex class create

EXAMPLES
  Generate two metadata files associated with the MyClass Apex class (MyClass.cls and MyClass.cls-meta.xml) in the
  current directory:

    $ sf apex generate class --name MyClass

  Similar to previous example, but generates the files in the "force-app/main/default/classes" directory:

    $ sf apex generate class --name MyClass --output-dir force-app/main/default/classes

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Apex class.

    The name can be up to 40 characters and must start with a letter.

  -t, --template=ApexException|ApexUnitTest|BasicUnitTest|DefaultApexClass|InboundEmailService

    Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/apex/generate/class.ts)_

## `sf apex generate trigger`

Generate an Apex trigger.

```
USAGE
  $ sf apex generate trigger -n <value> [--json] [--flags-dir <value>] [-t ApexTrigger] [-d <value>] [--api-version
    <value>] [-s <value>] [-e before insert|before update|before delete|after insert|after update|after delete|after
    undelete...]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -e, --event=<option>...    [default: before insert] Events that fire the trigger.
                             <options: before insert|before update|before delete|after insert|after update|after
                             delete|after undelete>
  -n, --name=<value>         (required) Name of the generated Apex trigger
  -s, --sobject=<value>      [default: SOBJECT] Salesforce object to generate a trigger on.
  -t, --template=<option>    [default: ApexTrigger] Template to use for file creation.
                             <options: ApexTrigger>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate an Apex trigger.

  Generates the Apex trigger *.trigger file and associated metadata file. These files must be contained in a parent
  directory called "triggers" in your package directory. Either run this command from an existing directory of this
  name, or use the --output-dir flag to generate one or point to an existing one.

  If you don't specify the --sobject flag, the .trigger file contains the generic placeholder SOBJECT; replace it with
  the Salesforce object you want to generate a trigger for. If you don't specify --event, "before insert" is used.

ALIASES
  $ sf force apex trigger create

EXAMPLES
  Generate two files associated with the MyTrigger Apex trigger (MyTrigger.trigger and MyTrigger.trigger-meta.xml) in
  the current directory:

    $ sf apex generate trigger --name MyTrigger

  Similar to the previous example, but generate the files in the "force-app/main/default/triggers" directory:

    $ sf apex generate trigger --name MyTrigger --output-dir force-app/main/default/triggers

  Generate files for a trigger that fires on the Account object before and after an insert:

    $ sf apex generate trigger --name MyTrigger --sobject Account --event "before insert,after insert"

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Apex trigger

    The name can be up to 40 characters and must start with a letter.

  -t, --template=ApexTrigger  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/apex/generate/trigger.ts)_

## `sf apex get log`

Fetch the specified log or given number of most recent logs from the org.

```
USAGE
  $ sf apex get log -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-i <value>] [-n <value>]
    [-d <value>]

FLAGS
  -d, --output-dir=<value>   Directory for saving the log files.
  -i, --log-id=<value>       ID of the specific log to display.
  -n, --number=<value>       Number of the most recent logs to display.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Fetch the specified log or given number of most recent logs from the org.

  To get the IDs for your debug logs, run "sf apex log list". Executing this command without flags returns the most
  recent log.

ALIASES
  $ sf force apex log get

EXAMPLES
  Fetch the log in your default org using an ID:

    $ sf apex get log --log-id <log id>

  Fetch the log in the org with the specified username using an ID:

    $ sf apex get log --log-id <log id> --target-org me@my.org

  Fetch the two most recent logs in your default org:

    $ sf apex get log --number 2

  Similar to previous example, but save the two log files in the specified directory:

    $ sf apex get log --output-dir /Users/sfdxUser/logs --number 2

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the log files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.
```

_See code: [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex/blob/3.4.5/src/commands/apex/get/log.ts)_

## `sf apex get test`

Display test results for a specific asynchronous test run.

```
USAGE
  $ sf apex get test -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>] [-c] [-d <value>]
    [-r human|tap|junit|json] [--concise]

FLAGS
  -c, --code-coverage           Retrieve code coverage results.
  -d, --output-dir=<value>      Directory in which to store test result files.
  -i, --test-run-id=<value>     (required) ID of the test run.
  -o, --target-org=<value>      (required) Username or alias of the target org. Not required if the `target-org`
                                configuration variable is already set.
  -r, --result-format=<option>  [default: human] Format of the test results.
                                <options: human|tap|junit|json>
      --api-version=<value>     Override the api version used for api requests made by this command
      --concise                 Display only failed test results; works with human-readable output only.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display test results for a specific asynchronous test run.

  Provide a test run ID to display test results for an enqueued or completed asynchronous test run. The test run ID is
  displayed after running the "sf apex test run" command.

ALIASES
  $ sf force apex test report

EXAMPLES
  Display test results for your default org using a test run ID:

    $ sf apex get test --test-run-id <test run id>

  Similar to previous example, but output the result in JUnit format:

    $ sf apex get test --test-run-id <test run id> --result-format junit

  Also retrieve code coverage results and output in JSON format:

    $ sf apex get test --test-run-id <test run id> --code-coverage --json

  Specify a directory in which to save the test results from the org with the specified username (rather than your
  default org):

    $ sf apex get test --test-run-id <test run id> --code-coverage --output-dir <path to outputdir> --target-org \
      me@myorg'
```

_See code: [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex/blob/3.4.5/src/commands/apex/get/test.ts)_

## `sf apex list log`

Display a list of IDs and general information about debug logs.

```
USAGE
  $ sf apex list log -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display a list of IDs and general information about debug logs.

  Run this command in a project to list the IDs and general information for all debug logs in your default org.

  To fetch a specific log from your org, obtain the ID from this command's output, then run the “sf apex log get”
  command.

ALIASES
  $ sf force apex log list

EXAMPLES
  List the IDs and information about the debug logs in your default org:

    $ sf apex list log

  Similar to previous example, but use the org with the specified username:

    $ sf apex list log --target-org me@my.org
```

_See code: [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex/blob/3.4.5/src/commands/apex/list/log.ts)_

## `sf apex run`

Execute anonymous Apex code entered on the command line or from a local file.

```
USAGE
  $ sf apex run -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-f <value>]

FLAGS
  -f, --file=<value>         Path to a local file that contains Apex code.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Execute anonymous Apex code entered on the command line or from a local file.

  If you don’t run this command from within a Salesforce DX project, you must specify the —-target-org flag.

  To execute your code interactively, run this command with no flags. At the prompt, enter all your Apex code; press
  CTRL-D when you're finished. Your code is then executed in a single execute anonymous request.
  For more information, see "Anonymous Blocks" in the Apex Developer Guide.

ALIASES
  $ sf force apex execute

EXAMPLES
  Execute the Apex code that's in the ~/test.apex file in the org with the specified username:

    $ sf apex run --target-org testusername@salesforce.org --file ~/test.apex

  Similar to previous example, but execute the code in your default org:

    $ sf apex run --file ~/test.apex

  Run the command with no flags to start interactive mode; the code will execute in your default org when you exit. At
  the prompt, start type Apex code and press the Enter key after each line. Press CTRL+D when finished.

    $ sf apex run
```

_See code: [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex/blob/3.4.5/src/commands/apex/run.ts)_

## `sf apex run test`

Invoke Apex tests in an org.

```
USAGE
  $ sf apex run test -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-d <value>] [-l
    RunLocalTests|RunAllTestsInOrg|RunSpecifiedTests] [-n <value>... | -s <value>... | -t <value>...] [-r
    human|tap|junit|json] [-w <value>] [-y] [-v -c] [--concise]

FLAGS
  -c, --code-coverage           Retrieve code coverage results.
  -d, --output-dir=<value>      Directory in which to store test run files.
  -l, --test-level=<option>     Level of tests to run; default is RunLocalTests.
                                <options: RunLocalTests|RunAllTestsInOrg|RunSpecifiedTests>
  -n, --class-names=<value>...  Apex test class names to run; default is all classes.
  -o, --target-org=<value>      (required) Username or alias of the target org. Not required if the `target-org`
                                configuration variable is already set.
  -r, --result-format=<option>  [default: human] Format of the test results.
                                <options: human|tap|junit|json>
  -s, --suite-names=<value>...  Apex test suite names to run.
  -t, --tests=<value>...        Apex test class names or IDs and, if applicable, test methods to run; default is all
                                tests.
  -v, --detailed-coverage       Display detailed code coverage per test.
  -w, --wait=<value>            Sets the streaming client socket timeout in minutes; specify a longer wait time if
                                timeouts occur frequently.
  -y, --synchronous             Runs test methods from a single Apex class synchronously; if not specified, tests are
                                run asynchronously.
      --api-version=<value>     Override the api version used for api requests made by this command
      --concise                 Display only failed test results; works with human-readable output only.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Invoke Apex tests in an org.

  Specify which tests to run by using the --class-names, --suite-names, or --tests flags. Alternatively, use the
  --test-level flag to run all the tests in your org, local tests, or specified tests.

  To see code coverage results, use the --code-coverage flag with --result-format. The output displays a high-level
  summary of the test run and the code coverage values for classes in your org. If you specify human-readable result
  format, use the --detailed-coverage flag to see detailed coverage results for each test method run.

  By default, Apex tests run asynchronously and immediately return a test run ID. You can use the --wait flag to specify
  the number of minutes to wait; if the tests finish in that timeframe, the command displays the results. If the tests
  haven't finished by the end of the wait time, the command displays a test run ID. Use the "sf apex get test
  --test-run-id" command to get the results.

  NOTE: The testRunCoverage value (JSON and JUnit result formats) is a percentage of the covered lines and total lines
  from all the Apex classes evaluated by the tests in this run.

ALIASES
  $ sf force apex test run

EXAMPLES
  Run all Apex tests and suites in your default org:

    $ sf apex run test

  Run the specified Apex test classes in your default org and display results in human-readable form:

    $ sf apex run test --class-names MyClassTest --class-names MyOtherClassTest --result-format human

  Run the specified Apex test suites in your default org and include code coverage results and additional details:

    $ sf apex run test --suite-names MySuite --suite-names MyOtherSuite --code-coverage --detailed-coverage

  Run the specified Apex tests in your default org and display results in human-readable output:

    $ sf apex run test --tests MyClassTest.testCoolFeature --tests MyClassTest.testAwesomeFeature --tests \
      AnotherClassTest --tests namespace.TheirClassTest.testThis --result-format human

  Run all tests in the org with the specified username with the specified test level; save the output to the specified
  directory:

    $ sf apex run test --test-level RunLocalTests --output-dir <path to outputdir> --target-org me@my.org

  Run all tests in the org asynchronously:

    $ sf apex run test --target-org myscratch

  Run all tests synchronously; the command waits to display the test results until all tests finish:

    $ sf apex run test --synchronous

  Run specific tests using the --test-level flag:

    $ sf apex run test --test-level RunLocalTests

  Run Apex tests on all the methods in the specified class; output results in Test Anything Protocol (TAP) format and
  request code coverage results:

    $ sf apex run test --class-names TestA --class-names TestB --result-format tap --code-coverage

  Run Apex tests on methods specified using the standard Class.method notation; if you specify a test class without a
  method, the command runs all methods in the class:

    $ sf apex run test --tests TestA.excitingMethod --tests TestA.boringMethod --tests TestB

  Run Apex tests on methods specified using the standard Class.method notation with a namespace:

    $ sf apex run test --tests ns.TestA.excitingMethod --tests ns.TestA.boringMethod --tests ns.TestB

FLAG DESCRIPTIONS
  -l, --test-level=RunLocalTests|RunAllTestsInOrg|RunSpecifiedTests  Level of tests to run; default is RunLocalTests.

    Here's what the levels mean:

    - RunSpecifiedTests — Only the tests that you specify in the runTests option are run. Code coverage requirements
    differ from the default coverage requirements when using this test level. The executed tests must cover each class
    and trigger in the deployment package for a minimum of 75% code coverage. This coverage is computed for each class
    and triggers individually, and is different than the overall coverage percentage.
    - RunLocalTests — All local tests in your org, including tests that originate from no-namespaced unlocked packages,
    are run. The tests that originate from installed managed packages and namespaced unlocked packages aren't run. This
    test level is the default for production deployments that include Apex classes or triggers.
    - RunAllTestsInOrg — All tests are run. The tests include all tests in your org.

  -n, --class-names=<value>...  Apex test class names to run; default is all classes.

    If you select --class-names, you can't specify --suite-names or --tests.
    For multiple classes, repeat the flag for each.
    --class-names Class1 --class-names Class2

  -s, --suite-names=<value>...  Apex test suite names to run.

    If you select --suite-names, you can't specify --class-names or --tests.
    For multiple suites, repeat the flag for each.
    --suite-names Suite1 --suite-names Suite2

  -t, --tests=<value>...  Apex test class names or IDs and, if applicable, test methods to run; default is all tests.

    If you specify --tests, you can't specify --class-names or --suite-names
    For multiple tests, repeat the flag for each.
    --tests Test1 --tests Test2
```

_See code: [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex/blob/3.4.5/src/commands/apex/run/test.ts)_

## `sf apex tail log`

Activate debug logging and display logs in the terminal.

```
USAGE
  $ sf apex tail log -o <value> [--flags-dir <value>] [--api-version <value>] [-c] [-d <value> | -s]

FLAGS
  -c, --color                Apply default colors to noteworthy log lines.
  -d, --debug-level=<value>  Debug level to set on the DEVELOPER_LOG trace flag for your user.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --skip-trace-flag      Skip trace flag setup. Assumes that a trace flag and debug level are fully set up.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.

DESCRIPTION
  Activate debug logging and display logs in the terminal.

  You can also pipe the logs to a file.

ALIASES
  $ sf force apex log tail

EXAMPLES
  Activate debug logging:

    $ sf apex tail log

  Specify a debug level:

    $ sf apex tail log --debug-level MyDebugLevel

  Skip the trace flag setup and apply default colors:

    $ sf apex tail log --color --skip-trace-flag
```

_See code: [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex/blob/3.4.5/src/commands/apex/tail/log.ts)_

## `sf api request graphql`

Execute GraphQL statements

```
USAGE
  $ sf api request graphql -o <value> --body file [--json] [--flags-dir <value>] [--api-version <value>] [-S Example:
    report.xlsx | -i]

FLAGS
  -S, --stream-to-file=Example: report.xlsx  Stream responses to a file.
  -i, --include                              Include the HTTP response status and headers in the output.
  -o, --target-org=<value>                   (required) Username or alias of the target org. Not required if the
                                             `target-org` configuration variable is already set.
      --api-version=<value>                  Override the api version used for api requests made by this command
      --body=file                            (required) File or content with GraphQL statement. Specify "-" to read from
                                             standard input.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Execute GraphQL statements

  Run any valid GraphQL statement via the /graphql
  [API](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-about.html)

EXAMPLES
  - Runs the graphql query directly via the command line
    sf api request graphql --body "query accounts { uiapi { query { Account { edges { node { Id \n Name { value } } } } } } }"
  - Runs a mutation to create an Account, with an `example.txt` file, containing
    mutation AccountExample{
      uiapi {
        AccountCreate(input: {
          Account: {
            Name: "Trailblazer Express"
          }
        }) {
          Record {
            Id
            Name {
              value
            }
          }
        }
      }
    }
  $ sf api request graphql --body example.txt
  will create a new account returning specified fields (Id, Name)
```

_See code: [@salesforce/plugin-api](https://github.com/salesforcecli/plugin-api/blob/1.2.1/src/commands/api/request/graphql.ts)_

## `sf api request rest ENDPOINT`

Make an authenticated HTTP request to Salesforce REST API and print the response.

```
USAGE
  $ sf api request rest ENDPOINT -o <value> [--flags-dir <value>] [--api-version <value>] [-i | -S Example:
    report.xlsx] [-X GET|POST|PUT|PATCH|HEAD|DELETE|OPTIONS|TRACE] [-H key:value...] [--body file]

ARGUMENTS
  ENDPOINT  Salesforce API endpoint

FLAGS
  -H, --header=key:value...                  HTTP header in "key:value" format.
  -S, --stream-to-file=Example: report.xlsx  Stream responses to a file.
  -X, --method=<option>                      [default: GET] HTTP method for the request.
                                             <options: GET|POST|PUT|PATCH|HEAD|DELETE|OPTIONS|TRACE>
  -i, --include                              Include the HTTP response status and headers in the output.
  -o, --target-org=<value>                   (required) Username or alias of the target org. Not required if the
                                             `target-org` configuration variable is already set.
      --api-version=<value>                  Override the api version used for api requests made by this command
      --body=file                            File to use as the body for the request. Specify "-" to read from standard
                                             input; specify "" for an empty body.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.

EXAMPLES
  - List information about limits in the org with alias "my-org":
    sf api request rest 'limits' --target-org my-org
  - List all endpoints
    sf api request rest '/'
  - Get the response in XML format by specifying the "Accept" HTTP header:
    sf api request rest 'limits' --target-org my-org --header 'Accept: application/xml'
  - POST to create an Account object
    sf api request rest 'sobjects/account' --body "{\"Name\" : \"Account from REST API\",\"ShippingCity\" : \"Boise\"}" --method POST
  - or with a file 'info.json' containing
    {
      "Name": "Demo",
      "ShippingCity": "Boise"
    }
  $ sf api request rest 'sobjects/account' --body info.json --method POST
  - Update object
    sf api request rest 'sobjects/account/<Account ID>' --body "{\"BillingCity\": \"San Francisco\"}" --method PATCH
```

_See code: [@salesforce/plugin-api](https://github.com/salesforcecli/plugin-api/blob/1.2.1/src/commands/api/request/rest.ts)_

## `sf autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ sf autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ sf autocomplete

  $ sf autocomplete bash

  $ sf autocomplete zsh

  $ sf autocomplete powershell

  $ sf autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/3.2.2/src/commands/autocomplete/index.ts)_

## `sf commands`

List all sf commands.

```
USAGE
  $ sf commands [--json] [-c id|plugin|summary|type... | --tree] [--deprecated] [-x | ] [--hidden]
    [--no-truncate | ] [--sort id|plugin|summary|type | ]

FLAGS
  -c, --columns=<option>...  Only show provided columns (comma-separated).
                             <options: id|plugin|summary|type>
  -x, --extended             Show extra columns.
      --deprecated           Show deprecated commands.
      --hidden               Show hidden commands.
      --no-truncate          Do not truncate output.
      --sort=<option>        [default: id] Property to sort by.
                             <options: id|plugin|summary|type>
      --tree                 Show tree of commands.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all sf commands.
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/4.0.13/src/commands/commands.ts)_

## `sf config get`

Get the value of a configuration variable.

```
USAGE
  $ sf config get [--json] [--flags-dir <value>] [--verbose]

FLAGS
  --verbose  Display whether the configuration variables are set locally or globally.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Get the value of a configuration variable.

  Run "sf config list" to see the configuration variables you've already set and their level (local or global).

  Run "sf config set" to set a configuration variable. For the full list of available configuration variables, see
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm.

ALIASES
  $ sf force config get

EXAMPLES
  Get the value of the "target-org" configuration variable.

    $ sf config get target-org

  Get multiple configuration variables and display whether they're set locally or globally:

    $ sf config get target-org api-version --verbose

CONFIGURATION VARIABLES
  org-instance-url               URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  org-api-version                API version of your project. Default: API version of your Dev Hub org.
  target-dev-hub                 Username or alias of your default Dev Hub org. (sf only)
  target-org                     Username or alias of the org that all commands run against by default. (sf only)
  org-isv-debugger-sid           ISV debugger SID.
  org-isv-debugger-url           ISV debugger URL.
  org-custom-metadata-templates  A valid repository URL or directory for the custom org metadata templates.
  org-max-query-limit            Maximum number of Salesforce records returned by a CLI command. Default: 10,000.
  org-capitalize-record-types    Whether record types are capitalized on scratch org creation.
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/config/get.ts)_

## `sf config list`

List the configuration variables that you've previously set.

```
USAGE
  $ sf config list [--json] [--flags-dir <value>]

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List the configuration variables that you've previously set.

  A config variable can be global or local, depending on whether you used the --global flag when you set it. Local
  config variables apply only to the current project and override global config variables, which apply to all projects.
  You can set all config variables as environment variables. Environment variables override their equivalent local and
  global config variables.

  The output of this command takes into account your current context. For example, let's say you run this command from a
  Salesforce DX project in which you've locally set the "target-org" config variable. The command displays the local
  value, even if you've also set "target-org" globally. If you haven't set the config variable locally, then the global
  value is displayed, if set. If you set the SF_TARGET_ORG environment variable, it's displayed as such and overrides
  any locally or globally set "target-org" config variable.

  For the full list of available configuration variables, see
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm.

ALIASES
  $ sf force config list

EXAMPLES
  List the global and local configuration variables that apply to your current context:

    $ sf config list
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/config/list.ts)_

## `sf config set`

Set one or more configuration variables, such as your default org.

```
USAGE
  $ sf config set [--json] [--flags-dir <value>] [-g]

FLAGS
  -g, --global  Set the configuration variables globally, so they can be used from any Salesforce DX project.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Set one or more configuration variables, such as your default org.

  Use configuration variables to set CLI defaults, such as your default org or the API version you want the CLI to use.
  For example, if you set the "target-org" configuration variable, you don't need to specify it as a "sf deploy
  metadata" flag if you're deploying to your default org.

  Local configuration variables apply only to your current project. Global variables, specified with the --global flag,
  apply in any Salesforce DX project.

  The resolution order if you've set a flag value in multiple ways is as follows:

  1. Flag value specified at the command line.
  2. Local (project-level) configuration variable.
  3. Global configuration variable.

  Run "sf config list" to see the configuration variables you've already set and their level (local or global).

  If you're setting a single config variable, you don't need to use an equal sign between the variable and value. But
  you must use the equal sign if setting multiple config variables.

  For the full list of available configuration variables, see
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm.

ALIASES
  $ sf force config set

EXAMPLES
  Set the local target-org configuration variable to an org username:

    $ sf config set target-org me@my.org

  Set the local target-org configuration variable to an alias:

    $ sf config set target-org my-scratch-org

  Set the global target-org and target-dev-hub configuration variables using aliases:

    $ sf config set --global target-org=my-scratch-org target-dev-hub=my-dev-hub

CONFIGURATION VARIABLES
  org-instance-url               URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  org-api-version                API version of your project. Default: API version of your Dev Hub org.
  target-dev-hub                 Username or alias of your default Dev Hub org. (sf only)
  target-org                     Username or alias of the org that all commands run against by default. (sf only)
  org-isv-debugger-sid           ISV debugger SID.
  org-isv-debugger-url           ISV debugger URL.
  org-custom-metadata-templates  A valid repository URL or directory for the custom org metadata templates.
  org-max-query-limit            Maximum number of Salesforce records returned by a CLI command. Default: 10,000.
  org-capitalize-record-types    Whether record types are capitalized on scratch org creation.
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/config/set.ts)_

## `sf config unset`

Unset local or global configuration variables.

```
USAGE
  $ sf config unset [--json] [--flags-dir <value>] [-g]

FLAGS
  -g, --global  Unset the configuration variables globally.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Unset local or global configuration variables.

  Local configuration variables apply only to your current project. Global configuration variables apply in any
  Salesforce DX project.

  For the full list of available configuration variables, see
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm.

ALIASES
  $ sf force config unset

EXAMPLES
  Unset the local "target-org" configuration variable:

    $ sf config unset target-org

  Unset multiple configuration variables globally:

    $ sf config unset target-org api-version --global

CONFIGURATION VARIABLES
  org-instance-url               URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com.
  org-api-version                API version of your project. Default: API version of your Dev Hub org.
  target-dev-hub                 Username or alias of your default Dev Hub org. (sf only)
  target-org                     Username or alias of the org that all commands run against by default. (sf only)
  org-isv-debugger-sid           ISV debugger SID.
  org-isv-debugger-url           ISV debugger URL.
  org-custom-metadata-templates  A valid repository URL or directory for the custom org metadata templates.
  org-max-query-limit            Maximum number of Salesforce records returned by a CLI command. Default: 10,000.
  org-capitalize-record-types    Whether record types are capitalized on scratch org creation.
```

_See code: [@salesforce/plugin-settings](https://github.com/salesforcecli/plugin-settings/blob/2.3.15/src/commands/config/unset.ts)_

## `sf data create file`

Upload a local file to an org.

```
USAGE
  $ sf data create file -o <value> -f <value> [--json] [--flags-dir <value>] [--api-version <value>] [-t <value>] [-i
    <value>]

FLAGS
  -f, --file=<value>         (required) Path of file to upload.
  -i, --parent-id=<value>    ID of the record to attach the file to.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -t, --title=<value>        New title given to the file (ContentDocument) after it's uploaded.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Upload a local file to an org.

  This command always creates a new file in the org; you can't update an existing file. After a successful upload, the
  command displays the ID of the new ContentDocument record which represents the uploaded file.

  By default, the uploaded file isn't attached to a record; in the Salesforce UI the file shows up in the Files tab. You
  can optionally attach the file to an existing record, such as an account, as long as you know its record ID.

  You can also give the file a new name after it's been uploaded; by default its name in the org is the same as the
  local file name.

EXAMPLES
  Upload the local file "resources/astro.png" to your default org:

    $ sf data create file --file resources/astro.png

  Give the file a different filename after it's uploaded to the org with alias "my-scratch":

    $ sf data create file --file resources/astro.png --title AstroOnABoat.png --target-org my-scratch

  Attach the file to a record in the org:

    $ sf data create file --file path/to/astro.png --parent-id a03fakeLoJWPIA3
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/create/file.ts)_

## `sf data create record`

Create and insert a record into a Salesforce or Tooling API object.

```
USAGE
  $ sf data create record -o <value> -s <value> -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [-t]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce or Tooling API object that you're inserting a record
                             into.
  -t, --use-tooling-api      Use Tooling API so you can insert a record in a Tooling API object.
  -v, --values=<value>       (required) Values for the flags in the form <fieldName>=<value>, separate multiple pairs
                             with spaces.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create and insert a record into a Salesforce or Tooling API object.

  You must specify a value for all required fields of the object.

  When specifying fields, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double
  quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

  This command inserts a record into Salesforce objects by default. Use the --use-tooling-api flag to insert into a
  Tooling API object.

ALIASES
  $ sf force data record create

EXAMPLES
  Insert a record into the Account object of your default org; only the required Name field has a value:

    $ sf data create record --sobject Account --values "Name=Acme"

  Insert an Account record with values for two fields, one value contains a space; the command uses the org with alias
  "my-scratch":

    $ sf data create record --sobject Account --values "Name='Universal Containers' Website=www.example.com" \
      --target-org my-scratch

  Insert a record into the Tooling API object TraceFlag:

    $ sf data create record --use-tooling-api --sobject TraceFlag --values "DebugLevelId=7dl170000008U36AAE \
      StartDate=2022-12-15T00:26:04.000+0000 ExpirationDate=2022-12-15T00:56:04.000+0000 LogType=CLASS_TRACING \
      TracedEntityId=01p17000000R6bLAAS"
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/create/record.ts)_

## `sf data delete bulk`

Bulk delete records from an org using a CSV file. Uses Bulk API 2.0.

```
USAGE
  $ sf data delete bulk -o <value> -f <value> -s <value> [--json] [--flags-dir <value>] [--api-version <value>] [-w
    <value> | -a] [--verbose] [--hard-delete]

FLAGS
  -a, --async                Run the command asynchronously.
  -f, --file=<value>         (required) CSV file that contains the IDs of the records to update or delete.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce object, either standard or custom, that you want to
                             update or delete records from.
  -w, --wait=<value>         [default: 0 minutes] Number of minutes to wait for the command to complete before
                             displaying the results.
      --api-version=<value>  Override the api version used for api requests made by this command
      --hard-delete          Mark the records as immediately eligible for deletion by your org. If you don't specify
                             this flag, the deleted records go into the Recycle Bin.
      --verbose              Print verbose output of failed records if result is available.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Bulk delete records from an org using a CSV file. Uses Bulk API 2.0.

  The CSV file must have only one column ("Id") and then the list of record IDs you want to delete, one ID per line.

  When you execute this command, it starts a job, displays the ID, and then immediately returns control of the terminal
  to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command
  outputs the IDs. Use the job ID to check the status of the job with the "sf data delete resume" command.

EXAMPLES
  Bulk delete Account records from your default org using the list of IDs in the "files/delete.csv" file:

    $ sf data delete bulk --sobject Account --file files/delete.csv

  Bulk delete records from a custom object in an org with alias my-scratch and wait 5 minutes for the command to
  complete:

    $ sf data delete bulk --sobject MyObject__c --file files/delete.csv --wait 5 --target-org my-scratch

FLAG DESCRIPTIONS
  --hard-delete

    Mark the records as immediately eligible for deletion by your org. If you don't specify this flag, the deleted
    records go into the Recycle Bin.

    You must have the "Bulk API Hard Delete" system permission to use this flag. The permission is disabled by default
    and can be enabled only by a system administrator.
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/delete/bulk.ts)_

## `sf data delete record`

Deletes a single record from a Salesforce or Tooling API object.

```
USAGE
  $ sf data delete record -o <value> -s <value> [--json] [--flags-dir <value>] [--api-version <value>] [-i <value>] [-w
    <value>] [-t]

FLAGS
  -i, --record-id=<value>    ID of the record you’re deleting.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce or Tooling API object that you're deleting a record
                             from.
  -t, --use-tooling-api      Use Tooling API so you can delete a record from a Tooling API object.
  -w, --where=<value>        List of <fieldName>=<value> pairs that identify the record you want to delete.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Deletes a single record from a Salesforce or Tooling API object.

  Specify the record you want to delete with either its ID or with a list of field-value pairs that identify the record.
  If your list of fields identifies more than one record, the delete fails; the error displays how many records were
  found.

  When specifying field-value pairs, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of
  double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

  This command deletes a record from Salesforce objects by default. Use the --use-tooling-api flag to delete from a
  Tooling API object.

ALIASES
  $ sf force data record delete

EXAMPLES
  Delete a record from Account with the specified (truncated) ID:

    $ sf data delete record --sobject Account --record-id 00180XX

  Delete a record from Account whose name equals "Acme":

    $ sf data delete record --sobject Account --where "Name=Acme"

  Delete a record from Account identified with two field values, one that contains a space; the command uses the org
  with alias "my-scratch":

    $ sf data delete record --sobject Account --where "Name='Universal Containers' Phone='(123) 456-7890'" \
      --target-org myscratch

  Delete a record from the Tooling API object TraceFlag with the specified (truncated) ID:

    $ sf data delete record --use-tooling-api --sobject TraceFlag --record-id 7tf8c
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/delete/record.ts)_

## `sf data delete resume`

Resume a bulk delete job that you previously started. Uses Bulk API 2.0.

```
USAGE
  $ sf data delete resume [--json] [--flags-dir <value>] [-o <value>] [--use-most-recent | -i <value>] [--wait <value>]
    [--api-version <value>]

FLAGS
  -i, --job-id=<value>       ID of the job you want to resume.
  -o, --target-org=<value>   Username or alias of the target org. Not required if the "target-org" configuration
                             variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command
      --use-most-recent      Use the ID of the most recently-run bulk job.
      --wait=<value>         [default: 0 minutes] Number of minutes to wait for the command to complete before
                             displaying the results.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Resume a bulk delete job that you previously started. Uses Bulk API 2.0.

  The command uses the job ID returned by the "sf data delete bulk" command or the most recently-run bulk delete job.

EXAMPLES
  Resume a bulk delete job from your default org using an ID:

    $ sf data delete resume --job-id 750xx000000005sAAA

  Resume the most recently run bulk delete job for an org with alias my-scratch:

    $ sf data delete resume --use-most-recent --target-org my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/delete/resume.ts)_

## `sf data export tree`

Export data from an org into one or more JSON files.

```
USAGE
  $ sf data export tree -o <value> -q <value> [--json] [--flags-dir <value>] [--api-version <value>] [-p] [-x <value>]
    [-d <value>]

FLAGS
  -d, --output-dir=<value>   Directory in which to generate the JSON files; default is current directory.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --plan                 Generate multiple sObject tree files and a plan definition file for aggregated import.
  -q, --query=<value>        (required) SOQL query, or filepath of a file that contains the query, to retrieve records.
  -x, --prefix=<value>       Prefix of generated files.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Export data from an org into one or more JSON files.

  Specify a SOQL query, either directly at the command line or read from a file, to retrieve the data you want to
  export. The exported data is written to JSON files in sObject tree format, which is a collection of nested,
  parent-child records with a single root record. Use these JSON files to import data into an org with the "sf data
  import tree" command.

  If your SOQL query references multiple objects, the command generates a single JSON file by default. You can specify
  the --plan flag to generate separate JSON files for each object and a plan definition file that aggregates them. You
  then specify just this plan definition file when you import the data into an org.

  The SOQL query can return a maximum of 2,000 records. For more information, see the REST API Developer Guide.
  (https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm).

ALIASES
  $ sf force data tree export
  $ sf data export beta tree

EXAMPLES
  Export records retrieved with the specified SOQL query into a single JSON file in the current directory; the command
  uses your default org:

    $ sf data export tree --query "SELECT Id, Name, (SELECT Name, Address__c FROM Properties__r) FROM Broker__c"

  Export data using a SOQL query in the "query.txt" file and generate JSON files for each object and a plan that
  aggregates them:

    $ sf data export tree --query query.txt --plan

  Prepend "export-demo" before each generated file and generate the files in the "export-out" directory; run the
  command on the org with alias "my-scratch":

    $ sf data export tree --query query.txt --plan --prefix export-demo --output-dir export-out --target-org \
      my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/export/tree.ts)_

## `sf data get record`

Retrieve and display a single record of a Salesforce or Tooling API object.

```
USAGE
  $ sf data get record -o <value> -s <value> [--json] [--flags-dir <value>] [--api-version <value>] [-i <value>] [-w
    <value>] [-t]

FLAGS
  -i, --record-id=<value>    ID of the record you’re retrieving.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce or Tooling API object that you're retrieving a record
                             from.
  -t, --use-tooling-api      Use Tooling API so you can retrieve a record from a Tooling API object.
  -w, --where=<value>        List of <fieldName>=<value> pairs that identify the record you want to display.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Retrieve and display a single record of a Salesforce or Tooling API object.

  Specify the record you want to retrieve with either its ID or with a list of field-value pairs that identify the
  record. If your list of fields identifies more than one record, the command fails; the error displays how many records
  were found.

  When specifying field-value pairs, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of
  double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

  The command displays all the record's fields and their values, one field per terminal line. Fields with no values are
  displayed as "null".

  This command retrieves a record from Salesforce objects by default. Use the --use-tooling-api flag to retrieve from a
  Tooling API object.

ALIASES
  $ sf force data record get

EXAMPLES
  Retrieve and display a record from Account with the specified (truncated) ID:

    $ sf data get record --sobject Account --record-id 00180XX

  Retrieve a record from Account whose name equals "Acme":

    $ sf data get record --sobject Account --where "Name=Acme"

  Retrieve a record from Account identified with two field values, one that contains a space; the command uses the org
  with alias "my-scratch":

    $ sf data get record --sobject Account --where "Name='Universal Containers' Phone='(123) 456-7890'" --target-org \
      myscratch

  Retrieve a record from the Tooling API object TraceFlag with the specified (truncated) ID:

    $ sf data get record --use-tooling-api --sobject TraceFlag --record-id 7tf8c
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/get/record.ts)_

## `sf data import tree`

Import data from one or more JSON files into an org.

```
USAGE
  $ sf data import tree -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-f <value>...] [-p <value>]

FLAGS
  -f, --files=<value>...     Comma-separated and in-order JSON files that contain the records, in sObject tree format,
                             that you want to insert.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --plan=<value>         Plan definition file to insert multiple data files.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Import data from one or more JSON files into an org.

  The JSON files that contain the data are in sObject tree format, which is a collection of nested, parent-child records
  with a single root record. Use the "sf data export tree" command to generate these JSON files.

  If you used the --plan flag when exporting the data to generate a plan definition file, use the --plan flag to
  reference the file when you import. If you're not using a plan, use the --files flag to list the files. If you specify
  multiple JSON files that depend on each other in a parent-child relationship, be sure you list them in the correct
  order.

ALIASES
  $ sf force data tree import
  $ sf data import beta tree

EXAMPLES
  Import the records contained in two JSON files into the org with alias "my-scratch":

    $ sf data import tree --files Contact.json,Account.json --target-org my-scratch

  Import records using a plan definition file into your default org:

    $ sf data import tree --plan Account-Contact-plan.json

FLAG DESCRIPTIONS
  -p, --plan=<value>  Plan definition file to insert multiple data files.

    Unlike when you use the `--files` flag, the files listed in the plan definition file **can** contain more then 200
    records. When the CLI executes the import, it automatically batches the records to comply with the 200 record limit
    set by the API.

    The order in which you list the files in the plan definition file matters. Specifically, records with lookups to
    records in another file should be listed AFTER that file. For example, let's say you're loading Account and Contact
    records, and the contacts have references to those accounts. Be sure you list the Accounts file before the Contacts
    file.

    The plan definition file has the following schema:

    - items(object) - SObject Type: Definition of records to be insert per SObject Type
    - sobject(string) - Name of SObject: Child file references must have SObject roots of this type
    - files(array) - Files: An array of files paths to load
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/import/tree.ts)_

## `sf data query`

Execute a SOQL query.

```
USAGE
  $ sf data query -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-q <value>] [-f <value>]
    [-t | -b] [-w <value> ] [--async ] [--all-rows] [-r human|csv|json]

FLAGS
  -b, --bulk                    Use Bulk API 2.0 to run the query.
  -f, --file=<value>            File that contains the SOQL query.
  -o, --target-org=<value>      (required) Username or alias of the target org. Not required if the `target-org`
                                configuration variable is already set.
  -q, --query=<value>           SOQL query to execute.
  -r, --result-format=<option>  [default: human] Format to display the results; the --json flag overrides this flag.
                                <options: human|csv|json>
  -t, --use-tooling-api         Use Tooling API so you can run queries on Tooling API objects.
  -w, --wait=<value>            Time to wait for the command to finish, in minutes.
      --all-rows                Include deleted records. By default, deleted records are not returned.
      --api-version=<value>     Override the api version used for api requests made by this command
      --async                   Use Bulk API 2.0, but don't wait for the job to complete.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Execute a SOQL query.

  Specify the SOQL query at the command line with the --query flag or read the query from a file with the --file flag.

  If your query returns more than 10,000 records, specify the --bulk flag. The command then runs the query using Bulk
  API 2.0, which has higher limits than the default API used by the command.

  When using --bulk, the command waits 3 minutes by default for the query to complete. Use the --wait parameter to
  specify a different number of minutes to wait, or set --wait to 0 to immediately return control to the terminal. If
  you set --wait to 0, or you use the --async flag, or the command simply times out, the command displays an ID. Pass
  this ID to the the "data query resume" command using the --bulk-query-id flag to get the results; pass the ID to the
  "data resume" command to get the job status.

ALIASES
  $ sf force data soql query

EXAMPLES
  Specify a SOQL query at the command line; the command uses your default org:

    $ sf data query --query "SELECT Id, Name, Account.Name FROM Contact"

  Read the SOQL query from a file called "query.txt"; the command uses the org with alias "my-scratch":

    $ sf data query --file query.txt --target-org my-scratch

  Use Tooling API to run a query on the ApexTrigger Tooling API object:

    $ sf data query --query "SELECT Name FROM ApexTrigger" --use-tooling-api

  Use Bulk API 2.0 to run a query that returns many rows, and return control to the terminal immediately:

    $ sf data query --query "SELECT Id FROM Contact" --bulk --wait 0
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/query.ts)_

## `sf data query resume`

View the status of a bulk query.

```
USAGE
  $ sf data query resume [--json] [--flags-dir <value>] [-o <value>] [--api-version <value>] [-r human|csv|json] [-i
    <value>] [--use-most-recent]

FLAGS
  -i, --bulk-query-id=<value>   Job ID of the bulk query.
  -o, --target-org=<value>      Username or alias of the target org. Not required if the "target-org" configuration
                                variable is already set.
  -r, --result-format=<option>  [default: human] Format to display the results; the --json flag overrides this flag.
                                <options: human|csv|json>
      --api-version=<value>     Override the api version used for api requests made by this command
      --use-most-recent         Use the most recent bulk query ID from cache.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  View the status of a bulk query.

  Run this command using the job ID returned from the "sf data query --bulk" command.

ALIASES
  $ sf force data soql bulk report

EXAMPLES
  View the status of a bulk query with the specified ID:

    $ sf data query resume --bulk-query-id 7500x000005BdFzXXX
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/query/resume.ts)_

## `sf data resume`

View the status of a bulk data load job or batch.

```
USAGE
  $ sf data resume -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>] [-b <value>]

FLAGS
  -b, --batch-id=<value>     ID of the batch whose status you want to view; you must also specify the job ID.
  -i, --job-id=<value>       (required) ID of the job whose status you want to view.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  View the status of a bulk data load job or batch.

  Run this command using the job ID or batch ID returned from the "sf data delete bulk" or "sf data upsert bulk"
  commands.

EXAMPLES
  View the status of a bulk load job:

    $ sf data resume --job-id 750xx000000005sAAA

  View the status of a bulk load job and a specific batches:

    $ sf data resume --job-id 750xx000000005sAAA --batch-id 751xx000000005nAAA
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/resume.ts)_

## `sf data search`

Execute a SOSL text-based search query.

```
USAGE
  $ sf data search -o <value> [--flags-dir <value>] [--api-version <value>] [-q <value>] [-f <value>] [-r
    human|csv|json | --json]

FLAGS
  -f, --file=<value>            File that contains the SOSL query.
  -o, --target-org=<value>      (required) Username or alias of the target org. Not required if the `target-org`
                                configuration variable is already set.
  -q, --query=<value>           SOSL query to execute.
  -r, --result-format=<option>  [default: human] Format to display the results, or to write to disk if you specify
                                "csv".
                                <options: human|csv|json>
      --api-version=<value>     Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Execute a SOSL text-based search query.

  Specify the SOSL query at the command line with the --query flag or read the query from a file with the --file flag.

  By default, the results are written to the terminal in human-readable format. If you specify `--result-format csv`,
  the output is written to one or more CSV (comma-separated values) files. The file names correspond to the Salesforce
  objects in the results, such as Account.csv. Both `--result-format human` and `--result-format json` display only to
  the terminal.

EXAMPLES
  Specify a SOSL query at the command line; the command uses your default org:

    $ sf data search --query "FIND {Anna Jones} IN Name Fields RETURNING Contact (Name, Phone)"

  Read the SOSL query from a file called "query.txt"; the command uses the org with alias "my-scratch":

    $ sf data search --file query.txt --target-org my-scratch

  Similar to the previous example, but write the results to one or more CSV files, depending on the Salesforce objects
  in the results:

    $ sf data search --file query.txt --target-org my-scratch --result-format csv
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/search.ts)_

## `sf data update record`

Updates a single record of a Salesforce or Tooling API object.

```
USAGE
  $ sf data update record -o <value> -s <value> -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [-i
    <value>] [-w <value>] [-t]

FLAGS
  -i, --record-id=<value>    ID of the record you’re updating.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce or Tooling API object that contains the record you're
                             updating.
  -t, --use-tooling-api      Use Tooling API so you can update a record in a Tooling API object.
  -v, --values=<value>       (required) Fields that you're updating, in the format of <fieldName>=<value> pairs.
  -w, --where=<value>        List of <fieldName>=<value> pairs that identify the record you want to update.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Updates a single record of a Salesforce or Tooling API object.

  Specify the record you want to update with either its ID or with a list of field-value pairs that identify the record.
  If your list of fields identifies more than one record, the update fails; the error displays how many records were
  found.

  When using field-value pairs for both identifying the record and specifiyng the new field values, use the format
  <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose
  values that contain spaces in single quotes.

  This command updates a record in Salesforce objects by default. Use the --use-tooling-api flag to update a Tooling API
  object.

ALIASES
  $ sf force data record update

EXAMPLES
  Update the Name field of an Account record with the specified (truncated) ID:

    $ sf data update record --sobject Account --record-id 001D0 --values "Name=NewAcme"

  Update the Name field of an Account record whose current name is 'Old Acme':

    $ sf data update record --sobject Account --where "Name='Old Acme'" --values "Name='New Acme'"

  Update the Name and Website fields of an Account record with the specified (truncated) ID:

    $ sf data update record --sobject Account --record-id 001D0 --values "Name='Acme III' Website=www.example.com"

  Update the ExpirationDate field of a record of the Tooling API object TraceFlag using the specified (truncated) ID:

    $ sf data update record -t --sobject TraceFlag --record-id 7tf170000009cUBAAY --values \
      "ExpirationDate=2017-12-01T00:58:04.000+0000"
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/update/record.ts)_

## `sf data upsert bulk`

Bulk upsert records to an org from a CSV file. Uses Bulk API 2.0.

```
USAGE
  $ sf data upsert bulk -o <value> -f <value> -s <value> -i <value> [--json] [--flags-dir <value>] [--api-version
    <value>] [-w <value> | -a] [--verbose]

FLAGS
  -a, --async                Run the command asynchronously.
  -f, --file=<value>         (required) CSV file that contains the IDs of the records to update or delete.
  -i, --external-id=<value>  (required) Name of the external ID field, or the Id field.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce object, either standard or custom, that you want to
                             update or delete records from.
  -w, --wait=<value>         [default: 0 minutes] Number of minutes to wait for the command to complete before
                             displaying the results.
      --api-version=<value>  Override the api version used for api requests made by this command
      --verbose              Print verbose output of failed records if result is available.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Bulk upsert records to an org from a CSV file. Uses Bulk API 2.0.

  An upsert refers to inserting a record into a Salesforce object if the record doesn't already exist, or updating it if
  it does exist.

  When you execute this command, it starts a job, displays the ID, and then immediately returns control of the terminal
  to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command
  outputs the IDs. Use the job and batch IDs to check the status of the job with the "sf data upsert resume" command.

  See "Prepare CSV Files" in the Bulk API Developer Guide for details on formatting your CSV file.
  (https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm)

EXAMPLES
  Bulk upsert records to the Contact object in your default org:

    $ sf data upsert bulk --sobject Contact --file files/contacts.csv --external-id Id

  Bulk upsert records to a custom object in an org with alias my-scratch and wait 5 minutes for the command to
  complete:

    $ sf data upsert bulk --sobject MyObject__c --file files/file.csv --external-id MyField__c --wait 5 --target-org \
      my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/upsert/bulk.ts)_

## `sf data upsert resume`

Resume a bulk upsert job that you previously started. Uses Bulk API 2.0.

```
USAGE
  $ sf data upsert resume [--json] [--flags-dir <value>] [-o <value>] [--use-most-recent | -i <value>] [--wait <value>]
    [--api-version <value>]

FLAGS
  -i, --job-id=<value>       ID of the job you want to resume.
  -o, --target-org=<value>   Username or alias of the target org. Not required if the "target-org" configuration
                             variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command
      --use-most-recent      Use the ID of the most recently-run bulk job.
      --wait=<value>         [default: 0 minutes] Number of minutes to wait for the command to complete before
                             displaying the results.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Resume a bulk upsert job that you previously started. Uses Bulk API 2.0.

  The command uses the job ID returned from the "sf data upsert bulk" command or the most recently-run bulk upsert job.

EXAMPLES
  Resume a bulk upsert job from your default org using an ID:

    $ sf data upsert resume --job-id 750xx000000005sAAA

  Resume the most recently run bulk upsert job for an org with alias my-scratch:

    $ sf data upsert resume --use-most-recent --target-org my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/data/upsert/resume.ts)_

## `sf doctor`

Gather CLI configuration data and run diagnostic tests to discover and report potential problems in your environment.

```
USAGE
  $ sf doctor [--json] [--flags-dir <value>] [-c <value>] [-p <value>] [-d <value>] [-i]

FLAGS
  -c, --command=<value>     Command to run in debug mode; results are written to a log file.
  -d, --output-dir=<value>  Directory to save all created files rather than the current working directory.
  -i, --create-issue        Create a new issue on our GitHub repo and attach all diagnostic results.
  -p, --plugin=<value>      Specific plugin on which to run diagnostics.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Gather CLI configuration data and run diagnostic tests to discover and report potential problems in your environment.

  When you run the doctor command without parameters, it first displays a diagnostic overview of your environment. It
  then writes a detailed diagnosis to a JSON file in the current directory. Use the --outputdir to specify a different
  directory. To run diagnostic tests on a specific plugin, use the --plugin parameter. If the plugin isn't listening to
  the doctor, then you get a warning.

  Use the --command parameter to run a specific command in debug mode; the doctor writes both stdout and stderr to
  \*.log files that you can provide to Salesforce Customer Support or attach to a GitHub issue.

  Plugin providers can also implement their own doctor diagnostic tests by listening to the "sf-doctor" event and
  running plugin specific tests that are then included in the doctor diagnostics log.

EXAMPLES
  Run CLI doctor diagnostics:

    $ sf doctor

  Run CLI doctor diagnostics and the specified command, and write the debug output to a file:

    $ sf doctor --command "force:org:list --all"

  Run CLI doctor diagnostics for a specific plugin:

    $ sf doctor --plugin @salesforce/plugin-source
```

_See code: [@salesforce/plugin-info](https://github.com/salesforcecli/plugin-info/blob/3.4.2/src/commands/doctor.ts)_

## `sf force data bulk delete`

Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.

```
USAGE
  $ sf force data bulk delete -o <value> -f <value> -s <value> [--json] [--flags-dir <value>] [--api-version <value>] [-w
    <value>]

FLAGS
  -f, --file=<value>         (required) CSV file that contains the IDs of the records to delete.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the Salesforce object, either standard or custom, that you want to
                             delete records from.
  -w, --wait=<value>         [default: 0 minutes] Number of minutes to wait for the command to complete before
                             displaying the results.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.

  The CSV file must have only one column ("Id") and then the list of record IDs you want to delete, one ID per line.

  When you execute this command, it starts a job and one or more batches, displays their IDs, and then immediately
  returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of
  minutes; if it times out, the command outputs the IDs. Use the job and batch IDs to check the status of the job with
  the "sf force data bulk status" command. A single job can contain many batches, depending on the length of the CSV
  file.

EXAMPLES
  Bulk delete Account records from your default org using the list of IDs in the "files/delete.csv" file:

    $ sf force data bulk delete --sobject Account --file files/delete.csv

  Bulk delete records from a custom object in an org with alias my-scratch and wait 5 minutes for the command to
  complete:

    $ sf force data bulk delete --sobject MyObject__c --file files/delete.csv --wait 5 --target-org my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/force/data/bulk/delete.ts)_

## `sf force data bulk status`

View the status of a bulk data load job or batch. Uses Bulk API 1.0.

```
USAGE
  $ sf force data bulk status -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>] [-b <value>]

FLAGS
  -b, --batch-id=<value>     ID of the batch whose status you want to view; you must also specify the job ID.
  -i, --job-id=<value>       (required) ID of the job whose status you want to view.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  View the status of a bulk data load job or batch. Uses Bulk API 1.0.

  Run this command using the job ID or batch ID returned from the "sf force data bulk delete" or "sf force data bulk
  upsert" commands.

EXAMPLES
  View the status of a bulk load job in your default org:

    $ sf force data bulk status --job-id 750xx000000005sAAA

  View the status of a bulk load job and a specific batches in an org with alias my-scratch:

    $ sf force data bulk status --job-id 750xx000000005sAAA --batch-id 751xx000000005nAAA --target-org my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/force/data/bulk/status.ts)_

## `sf force data bulk upsert`

Bulk upsert records to an org from a CSV file. Uses Bulk API 1.0.

```
USAGE
  $ sf force data bulk upsert -o <value> -i <value> -f <value> -s <value> [--json] [--flags-dir <value>] [--api-version
    <value>] [-w <value>] [-r]

FLAGS
  -f, --file=<value>         (required) CSV file that contains the records to upsert.
  -i, --external-id=<value>  (required) Name of the external ID field, or the Id field.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -r, --serial               Run batches in serial mode.
  -s, --sobject=<value>      (required) API name of the Salesforce object, either standard or custom, that you want to
                             upsert records to.
  -w, --wait=<value>         [default: 0 minutes] Number of minutes to wait for the command to complete before
                             displaying the results.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Bulk upsert records to an org from a CSV file. Uses Bulk API 1.0.

  An upsert refers to inserting a record into a Salesforce object if the record doesn't already exist, or updating it if
  it does exist.

  When you execute this command, it starts a job and one or more batches, displays their IDs, and then immediately
  returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of
  minutes; if it times out, the command outputs the IDs. Use the job and batch IDs to check the status of the job with
  the "sf force data bulk status" command. A single job can contain many batches, depending on the length of the CSV
  file.

  See "Prepare CSV Files" in the Bulk API Developer Guide for details on formatting your CSV file.
  (https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_preparing.htm)

  By default, the job runs the batches in parallel, which we recommend. You can run jobs serially by specifying the
  --serial flag. But don't process data in serial mode unless you know this would otherwise result in lock timeouts and
  you can't reorganize your batches to avoid the locks.

EXAMPLES
  Bulk upsert records to the Contact object in your default org:

    $ sf --sobject Contact --file files/contacts.csv --external-id Id

  Bulk upsert records to a custom object in an org with alias my-scratch and wait 5 minutes for the command to
  complete:

    $ sf force data bulk upsert --sobject MyObject__c --file files/file.csv --external-id MyField__c --wait 5 \
      --target-org my-scratch
```

_See code: [@salesforce/plugin-data](https://github.com/salesforcecli/plugin-data/blob/3.6.3/src/commands/force/data/bulk/upsert.ts)_

## `sf help [COMMAND]`

Display help for sf.

```
USAGE
  $ sf help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.10/src/commands/help.ts)_

## `sf info releasenotes display`

Display Salesforce CLI release notes on the command line.

```
USAGE
  $ sf info releasenotes display [--json] [--flags-dir <value>] [-v <value>]

FLAGS
  -v, --version=<value>  CLI version or tag for which to display release notes.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display Salesforce CLI release notes on the command line.

  By default, this command displays release notes for the currently installed CLI version on your computer. Use the
  --version flag to view release notes for a different release.

ALIASES
  $ sf whatsnew

EXAMPLES
  Display release notes for the currently installed CLI version:

    $ sf info releasenotes display stable, stable-rc, latest, latest-rc, rc

  Display release notes for CLI version 7.120.0:

    $ sf info releasenotes display --version 7.120.0 stable, stable-rc, latest, latest-rc, rc

  Display release notes for the CLI version that corresponds to a tag (stable, stable-rc, latest, latest-rc, rc):

    $ sf info releasenotes display --version latest
```

_See code: [@salesforce/plugin-info](https://github.com/salesforcecli/plugin-info/blob/3.4.2/src/commands/info/releasenotes/display.ts)_

## `sf lightning generate app`

Generate a Lightning App.

```
USAGE
  $ sf lightning generate app -n <value> [--json] [--flags-dir <value>] [-t DefaultLightningApp] [-d <value>] [--api-version
    <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated Lightning App.
  -t, --template=<option>    [default: DefaultLightningApp] Template to use for file creation.
                             <options: DefaultLightningApp>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Lightning App.

  Generates a Lightning App bundle in the specified directory or the current working directory. The bundle consists of
  multiple files in a folder with the designated name.

ALIASES
  $ sf force lightning app create

EXAMPLES
  Generate the metadata files for a Lightning app bundle called "myapp" in the current directory:

    $ sf lightning generate app --name myapp

  Similar to the previous example, but generate the files in the "force-app/main/default/aura" directory:

    $ sf lightning generate app --name myapp --output-dir force-app/main/default/aura

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Lightning App.

    The name can be up to 40 characters and must start with a letter.

  -t, --template=DefaultLightningApp  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/lightning/generate/app.ts)_

## `sf lightning generate component`

Generate a bundle for an Aura component or a Lightning web component.

```
USAGE
  $ sf lightning generate component -n <value> [--json] [--flags-dir <value>] [-t
    default|analyticsDashboard|analyticsDashboardWithStep] [-d <value>] [--api-version <value>] [--type aura|lwc]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated Lightning Component.
  -t, --template=<option>    [default: default] Template to use for file creation.
                             <options: default|analyticsDashboard|analyticsDashboardWithStep>
      --api-version=<value>  Override the api version used for api requests made by this command
      --type=<option>        [default: aura] Type of the component bundle.
                             <options: aura|lwc>

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a bundle for an Aura component or a Lightning web component.

  Generates the bundle in the specified directory or the current working directory. The bundle consists of multiple
  files in a directory with the designated name. Lightning web components are contained in the directory with name
  "lwc", Aura components in "aura".

  To generate a Lightning web component, pass "--type lwc" to the command. If you don’t specify --type, Salesforce CLI
  generates an Aura component by default.

ALIASES
  $ sf force lightning component create

EXAMPLES
  Generate the metadata files for an Aura component bundle in the current directory:

    $ sf lightning generate component --name mycomponent

  Generate a Lightning web component bundle in the current directory:

    $ sf lightning generate component --name mycomponent --type lwc

  Generate an Aura component bundle in the "force-app/main/default/aura" directory:

    $ sf lightning generate component --name mycomponent --output-dir force-app/main/default/aura

  Generate a Lightning web component bundle in the "force-app/main/default/lwc" directory:

    $ sf lightning generate component --name mycomponent --type lwc --output-dir force-app/main/default/lwc

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Lightning Component.

    The name can be up to 40 characters and must start with a letter.

  -t, --template=default|analyticsDashboard|analyticsDashboardWithStep  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/lightning/generate/component.ts)_

## `sf lightning generate event`

Generate a Lightning Event.

```
USAGE
  $ sf lightning generate event -n <value> [--json] [--flags-dir <value>] [-t DefaultLightningEvt] [-d <value>] [--api-version
    <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated Lightning Event.
  -t, --template=<option>    [default: DefaultLightningEvt] Template to use for file creation.
                             <options: DefaultLightningEvt>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Lightning Event.

  Generates a Lightning Event bundle in the specified directory or the current working directory. The bundle consists of
  multiple files in a folder with the designated name.

ALIASES
  $ sf force lightning event create

EXAMPLES
  Generate the metadata files for a Lightning event bundle called "myevent" in the current directory:

    $ sf lightning generate event --name myevent

  Similar to previous example, but generate the files in the "force-app/main/default/aura" directory:

    $ sf lightning generate event --name myevent --output-dir force-app/main/default/aura

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Lightning Event.

    The name can be up to 40 characters and must start with a letter.

  -t, --template=DefaultLightningEvt  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/lightning/generate/event.ts)_

## `sf lightning generate interface`

Generate a Lightning Interface.

```
USAGE
  $ sf lightning generate interface -n <value> [--json] [--flags-dir <value>] [-t DefaultLightningIntf] [-d <value>]
    [--api-version <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated Lightning Interface.
  -t, --template=<option>    [default: DefaultLightningIntf] Template to use for file creation.
                             <options: DefaultLightningIntf>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Lightning Interface.

  Generates a Lightning Interface bundle in the specified directory or the current working directory. The bundle
  consists of multiple files in a folder with the designated name.

ALIASES
  $ sf force lightning interface create

EXAMPLES
  Generate the metadata files for a Lightning interface bundle called "myinterface" in the current directory:

    $ sf lightning generate interface --name myinterface

  Similar to the previous example but generate the files in the "force-app/main/default/aura" directory:

    $ sf lightning generate interface --name myinterface --output-dir force-app/main/default/aura

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Lightning Interface.

    The name can be up to 40 characters and must start with a letter.

  -t, --template=DefaultLightningIntf  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/lightning/generate/interface.ts)_

## `sf lightning generate test`

Generate a Lightning test.

```
USAGE
  $ sf lightning generate test -n <value> [--json] [--flags-dir <value>] [-t DefaultLightningTest] [-d <value>]
    [--api-version <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated Lightning Test.
  -t, --template=<option>    [default: DefaultLightningTest] Template to use for file creation.
                             <options: DefaultLightningTest>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Lightning test.

  Generates the test in the specified directory or the current working directory. The .resource file and associated
  metadata file are generated.

ALIASES
  $ sf force lightning test create

EXAMPLES
  Generate the metadata files for the Lightning test called MyLightningTest in the current directory:

    $ sf lightning generate test --name MyLightningTest

  Similar to the previous example but generate the files in the "force-app/main/default/lightningTests" directory:

    $ sf lightning generate test --name MyLightningTest --output-dir force-app/main/default/lightningTests

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Lightning Test.

    Name of the new Lightning test; can be up to 40 characters and must start with a letter.

  -t, --template=DefaultLightningTest  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/lightning/generate/test.ts)_

## `sf org assign permset`

Assign a permission set to one or more users of a scratch org.

```
USAGE
  $ sf org assign permset -n <value>... -o <value> [--json] [--flags-dir <value>] [-b <value>...] [--api-version
  <value>]

FLAGS
  -b, --on-behalf-of=<value>...  Username or alias to assign the permission set to.
  -n, --name=<value>...          (required) Permission set to assign.
  -o, --target-org=<value>       (required) Scratch org alias or login user.
      --api-version=<value>      Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Assign a permission set to one or more users of a scratch org.

  To specify an alias for the --target-org or --on-behalf-of flags, use the CLI username alias, such as the one you set
  with the "alias set" command. Don't use the value of the Alias field of the User Salesforce object for the org user.

  To assign multiple permission sets, either set multiple --name flags or a single --name flag with multiple names
  separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to
  --on-behalf-of.

EXAMPLES
  Assign two permission sets called DreamHouse and CloudHouse to original admin user of your default scratch org:

    $ sf org assign permset --name DreamHouse --name CloudHouse

  Assign the Dreamhouse permission set to the original admin user of the scratch org with alias "my-scratch":

    $ sf org assign permset --name DreamHouse --target-org my-scratch

  Assign the Dreamhouse permission set to the specified list of users of your default scratch org:

    $ sf org assign permset --name DreamHouse --on-behalf-of user1@my.org --on-behalf-of user2 --on-behalf-of user
```

_See code: [@salesforce/plugin-user](https://github.com/salesforcecli/plugin-user/blob/3.5.26/src/commands/org/assign/permset.ts)_

## `sf org assign permsetlicense`

Assign a permission set license to one or more users of a scratch org.

```
USAGE
  $ sf org assign permsetlicense -n <value>... -o <value> [--json] [--flags-dir <value>] [-b <value>...] [--api-version
  <value>]

FLAGS
  -b, --on-behalf-of=<value>...  Usernames or alias to assign the permission set license to.
  -n, --name=<value>...          (required) Name of the permission set license to assign.
  -o, --target-org=<value>       (required) Scratch org alias or login user.
      --api-version=<value>      Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Assign a permission set license to one or more users of a scratch org.

  To specify an alias for the --target-org or --on-behalf-of flags, use the CLI username alias, such as the one you set
  with the "alias set" command. Don't use the value of the Alias field of the User Salesforce object for the org user.

  To assign multiple permission sets, either set multiple --name flags or a single --name flag with multiple names
  separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to
  --on-behalf-of.

EXAMPLES
  Assign the DreamHouse permission set license to original admin user of your default scratch org:

    $ sf org assign permsetlicense --name DreamHouse

  Assign two permission set licenses to the original admin user of the scratch org with alias "my-scratch":

    $ sf org assign permsetlicense --name DreamHouse --name CloudHouse --target-org my-scratch

  Assign the Dreamhouse permission set license to the specified list of users of your default scratch org:

    $ sf org assign permsetlicense --name DreamHouse --on-behalf-of user1@my.org --on-behalf-of user2 --on-behalf-of \
      user3
```

_See code: [@salesforce/plugin-user](https://github.com/salesforcecli/plugin-user/blob/3.5.26/src/commands/org/assign/permsetlicense.ts)_

## `sf org create sandbox`

Create a sandbox org.

```
USAGE
  $ sf org create sandbox -o <value> [--json] [--flags-dir <value>] [-f <value>] [-s] [-a <value>] [-w <minutes> |
    --async] [-i <seconds> | ] [-n <value>] [-c <value> | -l Developer|Developer_Pro|Partial|Full] [--no-prompt]
    [--no-track-source]

FLAGS
  -a, --alias=<value>            Alias for the sandbox org.
  -c, --clone=<value>            Name of the sandbox org to clone.
  -f, --definition-file=<value>  Path to a sandbox definition file.
  -i, --poll-interval=<seconds>  Number of seconds to wait between retries.
  -l, --license-type=<option>    Type of sandbox license.
                                 <options: Developer|Developer_Pro|Partial|Full>
  -n, --name=<value>             Name of the sandbox org.
  -o, --target-org=<value>       (required) Username or alias of the production org that contains the sandbox license.
  -s, --set-default              Set the sandbox org as your default org.
  -w, --wait=<minutes>           Number of minutes to wait for the sandbox org to be ready.
      --async                    Request the sandbox creation, but don't wait for it to complete.
      --no-prompt                Don't prompt for confirmation about the sandbox configuration.
      --no-track-source          Do not use source tracking for this sandbox.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a sandbox org.

  There are two ways to create a sandbox org: specify a definition file that contains the sandbox options or use the
  --name and --license-type flags to specify the two required options. If you want to set an option other than name or
  license type, such as apexClassId, you must use a definition file.

  You can also use this command to clone an existing sandbox. Use the --clone flag to specify the existing sandbox name
  and the --name flag to the name of the new sandbox.

ALIASES
  $ sf env create sandbox

EXAMPLES
  Create a sandbox org using a definition file and give it the alias "MyDevSandbox". The production org that contains
  the sandbox license has the alias "prodOrg".

    $ sf org create sandbox --definition-file config/dev-sandbox-def.json --alias MyDevSandbox --target-org prodOrg

  Create a sandbox org by directly specifying its name and type of license (Developer) instead of using a definition
  file. Set the sandbox org as your default.

    $ sf org create sandbox --name mysandbox --license-type Developer --alias MyDevSandbox --target-org prodOrg \
      --set-default

  Clone the existing sandbox with name "ExistingSandbox" and name the new sandbox "NewClonedSandbox". Set the new
  sandbox as your default org. Wait for 30 minutes for the sandbox creation to complete.

    $ sf org create sandbox --clone ExistingSandbox --name NewClonedSandbox --target-org prodOrg --alias \
      MyDevSandbox --set-default --wait 30

FLAG DESCRIPTIONS
  -a, --alias=<value>  Alias for the sandbox org.

    When you create a sandbox, the generated usernames are based on the usernames present in the production org. To
    ensure uniqueness, the new usernames are appended with the name of the sandbox. For example, the username
    "user@example.com" in the production org results in the username "user@example.com.mysandbox" in a sandbox named
    "mysandbox". When you set an alias for a sandbox org, it's assigned to the resulting username of the user running
    this command.

  -c, --clone=<value>  Name of the sandbox org to clone.

    The value of --clone must be an existing sandbox. The existing sandbox, and the new sandbox specified with the
    --name flag, must both be associated with the production org (--target-org) that contains the sandbox licenses.

  -f, --definition-file=<value>  Path to a sandbox definition file.

    The sandbox definition file is a blueprint for the sandbox. You can create different definition files for each
    sandbox type that you use in the development process. See
    <https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm> for all
    the options you can specify in the definition file.

  -n, --name=<value>  Name of the sandbox org.

    The name must be a unique alphanumeric string (10 or fewer characters) to identify the sandbox. You can’t reuse a
    name while a sandbox is in the process of being deleted.

  -o, --target-org=<value>  Username or alias of the production org that contains the sandbox license.

    When it creates the sandbox org, Salesforce copies the metadata, and optionally data, from your production org to
    the new sandbox org.

  -w, --wait=<minutes>  Number of minutes to wait for the sandbox org to be ready.

    If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays
    the "sf org resume sandbox" command you run to check the status of the create. The displayed command includes the
    job ID for the running sandbox creation.

  --async  Request the sandbox creation, but don't wait for it to complete.

    The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue
    to use the CLI. To check the status of the sandbox creation, run "sf org resume sandbox".

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

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/create/sandbox.ts)_

## `sf org create scratch`

Create a scratch org.

```
USAGE
  $ sf org create scratch -v <value> [--json] [--flags-dir <value>] [-a <value>] [--async] [-d] [-f <value>] [-c] [-e
    developer|enterprise|group|professional|partner-developer|partner-enterprise|partner-group|partner-professional]
    [-m] [-y <days>] [-w <minutes>] [--api-version <value>] [-i <value>] [-t] [--username <value>] [--description
    <value>] [--name <value>] [--release preview|previous] [--admin-email <value>] [--source-org <value>]

FLAGS
  -a, --alias=<value>            Alias for the scratch org.
  -d, --set-default              Set the scratch org as your default org
  -f, --definition-file=<value>  Path to a scratch org definition file.
  -i, --client-id=<value>        Consumer key of the Dev Hub connected app.
  -t, --[no-]track-source        Use source tracking for this scratch org. Set --no-track-source to disable source
                                 tracking.
  -v, --target-dev-hub=<value>   (required) Username or alias of the Dev Hub org.
  -w, --wait=<minutes>           Number of minutes to wait for the scratch org to be ready.
  -y, --duration-days=<days>     Number of days before the org expires.
      --api-version=<value>      Override the api version used for api requests made by this command
      --async                    Request the org, but don't wait for it to complete.

PACKAGING FLAGS
  -c, --no-ancestors  Don't include second-generation managed package (2GP) ancestors in the scratch org.
  -m, --no-namespace  Create the scratch org with no namespace, even if the Dev Hub has a namespace.

DEFINITION FILE OVERRIDE FLAGS
  -e, --edition=<option>     Salesforce edition of the scratch org. Overrides the value of the "edition" option in the
                             definition file, if set.
                             <options: developer|enterprise|group|professional|partner-developer|partner-enterprise|part
                             ner-group|partner-professional>
      --admin-email=<value>  Email address that will be applied to the org's admin user. Overrides the value of the
                             "adminEmail" option in the definition file, if set.
      --description=<value>  Description of the scratch org in the Dev Hub. Overrides the value of the "description"
                             option in the definition file, if set.
      --name=<value>         Name of the org, such as "Acme Company". Overrides the value of the "orgName" option in the
                             definition file, if set.
      --release=<option>     Release of the scratch org as compared to the Dev Hub release.
                             <options: preview|previous>
      --source-org=<value>   15-character ID of the org whose shape the new scratch org will be based on. Overrides the
                             value of the "sourceOrg" option in the definition file, if set.
      --username=<value>     Username of the scratch org admin user. Overrides the value of the "username" option in the
                             definition file, if set.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a scratch org.

  There are two ways to create a scratch org: either specify a definition file that contains the options or use the
  --edition flag to specify the one required option.

  For either method, you can also use these flags; if you use them with --definition-file, they override their
  equivalent option in the scratch org definition file:

  * --description
  * --name  (equivalent to the "orgName" option)
  * --username
  * --release
  * --edition
  * --admin-email (equivalent to the "adminEmail" option)
  * --source-org (equivalent to the "sourceOrg" option)

  If you want to set options other than the preceding ones, such as org features or settings, you must use a definition
  file.

  You must specify a Dev Hub to create a scratch org, either with the --target-dev-hub flag or by setting your default
  Dev Hub with the target-dev-hub configuration variable.

ALIASES
  $ sf env create scratch

EXAMPLES
  Create a Developer edition scratch org using your default Dev Hub and give the scratch org an alias:

    $ sf org create scratch --edition developer --alias my-scratch-org

  Create a scratch org with a definition file. Specify the Dev Hub using its alias, set the scratch org as your
  default, and specify that it expires in 3 days:

    $ sf org create scratch --target-dev-hub MyHub --definition-file config/project-scratch-def.json --set-default \
      --duration-days 3

  Create a preview Enterprise edition scratch org; for use only during Salesforce release transition periods:

    $ sf org create scratch --edition enterprise --alias my-scratch-org --target-dev-hub MyHub --release preview

FLAG DESCRIPTIONS
  -a, --alias=<value>  Alias for the scratch org.

    New scratch orgs include one administrator by default. The admin user's username is auto-generated and looks
    something like test-wvkpnfm5z113@example.com. When you set an alias for a new scratch org, it's assigned this
    username.

  -e, --edition=developer|enterprise|group|professional|partner-developer|partner-enterprise|partner-group|partner-professional

    Salesforce edition of the scratch org. Overrides the value of the "edition" option in the definition file, if set.

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
    the job ID. To resume the scratch org creation, run the org resume scratch command and pass it the job ID.

  --async  Request the org, but don't wait for it to complete.

    The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue
    to use the CLI. To resume the scratch org creation, run "sf org resume scratch".

  --release=preview|previous  Release of the scratch org as compared to the Dev Hub release.

    By default, scratch orgs are on the same release as the Dev Hub. During Salesforce release transition periods, you
    can override this default behavior and opt in or out of the new release.

  --username=<value>

    Username of the scratch org admin user. Overrides the value of the "username" option in the definition file, if set.

    The username must be unique within the entire scratch org and sandbox universe. You must add your own logic to
    ensure uniqueness.

    Omit this flag to have Salesforce generate a unique username for your org.
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/create/scratch.ts)_

## `sf org create user`

Create a user for a scratch org.

```
USAGE
  $ sf org create user -o <value> [--json] [--flags-dir <value>] [-a <value>] [-f <value>] [-s] [--api-version
    <value>]

FLAGS
  -a, --set-alias=<value>        Set an alias for the created username to reference in other CLI commands.
  -f, --definition-file=<value>  File path to a user definition file for customizing the new user.
  -o, --target-org=<value>       (required) Username or alias of the target org. Not required if the `target-org`
                                 configuration variable is already set.
  -s, --set-unique-username      Force the username, if specified in the definition file or at the command line, to be
                                 unique by appending the org ID.
      --api-version=<value>      Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a user for a scratch org.

  A scratch org includes one administrator user by default. For testing purposes, however, you sometimes need to create
  additional users.

  The easiest way to create a user is to let this command assign default or generated characteristics to the new user.
  If you want to customize your new user, create a definition file and specify it with the --definition-file flag. In
  the file, you can include all the User sObject (SSalesforce object) fields and Salesforce DX-specific options, as
  described in "User Definition File for Customizing a Scratch Org User"
  (https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm).
  You can also specify these options on the command line.

  If you don't customize your new user, this command creates a user with the following default characteristics:

  * The username is the existing administrator’s username prepended with a timestamp, such as
  1505759162830_test-wvkpnfm5z113@example.com.
  * The user’s profile is Standard User.
  * The values of the required fields of the User sObject are the corresponding values of the administrator user.
  * The user has no password.

  Use the --set-alias flag to assign a simple name to the user that you can reference in later CLI commands. This alias
  is local and different from the Alias field of the User sObject record of the new user, which you set in the Setup UI.

  When this command completes, it displays the new username and user ID. Run the "org display user" command to get more
  information about the new user.

  After the new user has been created, Salesforce CLI automatically authenticates it to the scratch org so the new user
  can immediately start using the scratch org. The CLI uses the same authentication method that was used on the
  associated Dev Hub org. Due to Hyperforce limitations, the scratch org user creation fails if the Dev Hub
  authentication used the JWT flow and the scratch org is on Hyperforce. For this reason, if you plan to create scratch
  org users, authenticate to the Dev Hub org with either the "org login web" or "org login sfdx-url" command, and not
  "org login jwt".

  For more information about user limits, defaults, and other considerations when creating a new scratch org user, see
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users.htm.

ALIASES
  $ sf force user create

EXAMPLES
  Create a user for your default scratch org and let this command generate a username, user ID, and other
  characteristics:

    $ sf org create user

  Create a user with alias "testuser1" using a user definition file. Set the "profileName" option to "Chatter Free
  User", which overrides the value in the defintion file if it also exists there. Create the user for the scratch org
  with alias "my-scratch":

    $ sf org create user --set-alias testuser1 --definition-file config/project-user-def.json profileName='Chatter \
      Free User' --target-org my-scratch

  Create a user by specifying the username, email, and perm set assignment at the command line; command fails if the
  username already exists in Salesforce:

    $ sf org create user username=testuser1@my.org email=me@my.org permsets=DreamHouse

  Create a user with a definition file, set the email value as specified (overriding any value in the definition
  file), and generate a password for the user. If the username in the definition file isn't unique, the command
  appends the org ID to make it unique:

    $ sf org create user --definition-file config/project-user-def.json email=me@my.org generatepassword=true \
      --set-unique-username

FLAG DESCRIPTIONS
  -f, --definition-file=<value>  File path to a user definition file for customizing the new user.

    The user definition file uses JSON format and can include any Salesforce User sObject field and Salesforce
    DX-specific options. See
    https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm
    for more information.

  -s, --set-unique-username

    Force the username, if specified in the definition file or at the command line, to be unique by appending the org
    ID.

    The new user’s username must be unique across all Salesforce orgs and in the form of an email address. If you let
    this command generate a username for you, it's guaranteed to be unique. If you specify an existing username in a
    definition file, the command fails. Set this flag to force the username to be unique; as a result, the username
    might be different than what you specify in the definition file.
```

_See code: [@salesforce/plugin-user](https://github.com/salesforcecli/plugin-user/blob/3.5.26/src/commands/org/create/user.ts)_

## `sf org delete sandbox`

Delete a sandbox.

```
USAGE
  $ sf org delete sandbox -o <value> [--json] [--flags-dir <value>] [-p]

FLAGS
  -o, --target-org=<value>  (required) Username or alias of the target org. Not required if the `target-org`
                            configuration variable is already set.
  -p, --no-prompt           Don't prompt the user to confirm the deletion.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Delete a sandbox.

  Salesforce CLI marks the org for deletion in the production org that contains the sandbox licenses and then deletes
  all local references to the org from your computer.
  Specify a sandbox with either the username you used when you logged into it, or the alias you gave the sandbox when
  you created it. Run "sf org list" to view all your orgs, including sandboxes, and their aliases.
  Both the sandbox and the associated production org must already be authenticated with the CLI to successfully delete
  the sandbox.

ALIASES
  $ sf env delete sandbox

EXAMPLES
  Delete a sandbox with alias my-sandbox:

    $ sf org delete sandbox --target-org my-sandbox

  Specify a username instead of an alias:

    $ sf org delete sandbox --target-org myusername@example.com.qa

  Delete the sandbox without prompting to confirm:

    $ sf org delete sandbox --target-org my-sandbox --no-prompt
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/delete/sandbox.ts)_

## `sf org delete scratch`

Delete a scratch org.

```
USAGE
  $ sf org delete scratch -o <value> [--json] [--flags-dir <value>] [-p]

FLAGS
  -o, --target-org=<value>  (required) Username or alias of the target org. Not required if the `target-org`
                            configuration variable is already set.
  -p, --no-prompt           Don't prompt the user to confirm the deletion.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Delete a scratch org.

  Salesforce CLI marks the org for deletion in the Dev Hub org and then deletes all local references to the org from
  your computer.
  Specify a scratch org with either the username or the alias you gave the scratch org when you created it. Run "sf org
  list" to view all your orgs, including scratch orgs, and their aliases.

ALIASES
  $ sf env delete scratch

EXAMPLES
  Delete a scratch org with alias my-scratch-org:

    $ sf org delete scratch --target-org my-scratch-org

  Specify a username instead of an alias:

    $ sf org delete scratch --target-org test-123456-abcdefg@example.com

  Delete the scratch org without prompting to confirm :

    $ sf org delete scratch --target-org my-scratch-org --no-prompt
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/delete/scratch.ts)_

## `sf org disable tracking`

Prevent Salesforce CLI from tracking changes in your source files between your project and an org.

```
USAGE
  $ sf org disable tracking -o <value> [--json] [--flags-dir <value>]

FLAGS
  -o, --target-org=<value>  (required) Username or alias of the target org. Not required if the `target-org`
                            configuration variable is already set.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Prevent Salesforce CLI from tracking changes in your source files between your project and an org.

  Disabling source tracking has no direct effect on the org, it affects only your local environment. Specifically,
  Salesforce CLI stores the setting in the org's local configuration file so that no source tracking operations are
  executed when working with the org.

EXAMPLES
  Disable source tracking for an org with alias "myscratch":

    $ sf org disable tracking --target-org myscratch

  Disable source tracking for an org using a username:

    $ sf org disable tracking --target-org you@example.com

  Disable source tracking for your default org:

    $ sf org disable tracking
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/disable/tracking.ts)_

## `sf org display`

Display information about an org.

```
USAGE
  $ sf org display -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [--verbose]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command
      --verbose              Display the sfdxAuthUrl property.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display information about an org.

  Output includes your access token, client Id, connected status, org ID, instance URL, username, and alias, if
  applicable.

  Use --verbose to include the SFDX auth URL. WARNING: The SFDX auth URL contains sensitive information, such as a
  refresh token that can be used to access an org. Don't share or distribute this URL or token.

  Including --verbose displays the sfdxAuthUrl property only if you authenticated to the org using "org login web" (not
  "org login jwt").

ALIASES
  $ sf force org display

EXAMPLES
  Display information about your default org:

    $ sf org display

  Display information, including the sfdxAuthUrl property, about the org with alias TestOrg1:

    $ sf org display --target-org TestOrg1 --verbose
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/display.ts)_

## `sf org display user`

Display information about a Salesforce user.

```
USAGE
  $ sf org display user -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display information about a Salesforce user.

  Output includes the profile name, org ID, access token, instance URL, login URL, and alias if applicable. The
  displayed alias is local and different from the Alias field of the User sObject record of the new user, which you set
  in the Setup UI.

ALIASES
  $ sf force user display

EXAMPLES
  Display information about the admin user of your default scratch org:

    $ sf org display user

  Display information about the specified user and output in JSON format:

    $ sf org display user --target-org me@my.org --json
```

_See code: [@salesforce/plugin-user](https://github.com/salesforcecli/plugin-user/blob/3.5.26/src/commands/org/display/user.ts)_

## `sf org enable tracking`

Allow Salesforce CLI to track changes in your source files between your project and an org.

```
USAGE
  $ sf org enable tracking -o <value> [--json] [--flags-dir <value>]

FLAGS
  -o, --target-org=<value>  (required) Username or alias of the target org. Not required if the `target-org`
                            configuration variable is already set.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Allow Salesforce CLI to track changes in your source files between your project and an org.

  Enabling source tracking has no direct effect on the org, it affects only your local environment. Specifically,
  Salesforce CLI stores the setting in the org's local configuration file so that source tracking operations are
  executed when working with the org.

  This command throws an error if the org doesn't support tracking. Examples of orgs that don't support source tracking
  include Developer Edition orgs, production orgs, Partial Copy sandboxes, and Full sandboxes.

EXAMPLES
  Enable source tracking for an org with alias "myscratch":

    $ sf org enable tracking --target-org myscratch

  Enable source tracking for an org using a username:

    $ sf org enable tracking --target-org you@example.com

  Enable source tracking for your default org:

    $ sf org enable tracking
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/enable/tracking.ts)_

## `sf org generate password`

Generate a random password for scratch org users.

```
USAGE
  $ sf org generate password -o <value> [--json] [--flags-dir <value>] [-b <value>...] [-l <value>] [-c <value>]
    [--api-version <value>]

FLAGS
  -b, --on-behalf-of=<value>...  Comma-separated list of usernames or aliases to assign the password to; must have been
                                 created locally with the "org create user" command.
  -c, --complexity=<value>       [default: 5] Level of password complexity or strength; the higher the value, the
                                 stronger the password.
  -l, --length=<value>           [default: 13] Number of characters in the generated password; valid values are between
                                 8 and 100.
  -o, --target-org=<value>       (required) Username or alias of the target org. Not required if the `target-org`
                                 configuration variable is already set.
      --api-version=<value>      Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a random password for scratch org users.

  By default, new scratch orgs contain one admin user with no password. Use this command to generate or change a
  password for this admin user. After it's set, you can’t unset a password, you can only change it.

  You can also use the --on-behalf-of flag to generate a password for a scratch org user that you've created locally
  with the "org create user" command. This command doesn't work for users you created in the scratch org using Setup.

  To change the password strength, set the --complexity flag to a value between 0 and 5. Each value specifies the types
  of characters used in the generated password:

  0 - lower case letters only
  1 - lower case letters and numbers only
  2 - lower case letters and symbols only
  3 - lower and upper case letters and numbers only
  4 - lower and upper case letters and symbols only
  5 - lower and upper case letters and numbers and symbols only

  To see a password that was previously generated, run "org display user".

EXAMPLES
  Generate a password for the original admin user of your default scratch org:

    $ sf org generate password

  Generate a password that contains 12 characters for the original admin user of the scratch org with alias
  "my-scratch":

    $ sf org generate password --length 12 --target-org my-scratch

  Generate a password for your default scratch org admin user that uses lower and upper case letters and numbers only:

    $ sf org generate password --complexity 3

  Generate a password for the specified users in the default scratch org; these users must have been created locally
  with the "org create user" command:

    $ sf org generate password --on-behalf-of user1@my.org --on-behalf-of user2@my.org --on-behalf-of user3@my.org
```

_See code: [@salesforce/plugin-user](https://github.com/salesforcecli/plugin-user/blob/3.5.26/src/commands/org/generate/password.ts)_

## `sf org list`

List all orgs you’ve created or authenticated to.

```
USAGE
  $ sf org list [--json] [--flags-dir <value>] [--verbose] [--all] [--clean] [-p] [--skip-connection-status]

FLAGS
  -p, --no-prompt               Don't prompt for confirmation.
      --all                     Include expired, deleted, and unknown-status scratch orgs.
      --clean                   Remove all local org authorizations for non-active scratch orgs. Use "org logout" to
                                remove non-scratch orgs.
      --skip-connection-status  Skip retrieving the connection status of non-scratch orgs.
      --verbose                 List more information about each org.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force org list

EXAMPLES
  List all orgs you've created or authenticated to:

    $ sf org list

  List all orgs, including expired, deleted, and unknown-status orgs; don't include the connection status:

    $ sf org list --skip-connection-status --all

  List orgs and remove local org authorization info about non-active scratch orgs:

    $ sf org list --clean
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/list.ts)_

## `sf org list auth`

List authorization information about the orgs you created or logged into.

```
USAGE
  $ sf org list auth [--json] [--flags-dir <value>]

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List authorization information about the orgs you created or logged into.

  This command uses local authorization information that Salesforce CLI caches when you create a scratch org or log into
  an org. The command doesn't actually connect to the orgs to verify that they're still active. As a result, this
  command executes very quickly. If you want to view live information about your authorized orgs, such as their
  connection status, use the "org list" command.

ALIASES
  $ sf force auth list
  $ sf auth list

EXAMPLES
  List local authorization information about your orgs:

    $ sf org list auth
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/list/auth.ts)_

## `sf org list limits`

Display information about limits in your org.

```
USAGE
  $ sf org list limits -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display information about limits in your org.

  For each limit, this command returns the maximum allocation and the remaining allocation based on usage. See this
  topic for a description of each limit:
  https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_limits.htm.

ALIASES
  $ sf force limits api display
  $ sf limits api display

EXAMPLES
  Display limits in your default org:

    $ sf org list limits

  Display limits in the org with alias "my-scratch-org":

    $ sf org list limits --target-org my-scratch-org
```

_See code: [@salesforce/plugin-limits](https://github.com/salesforcecli/plugin-limits/blob/3.3.27/src/commands/org/list/limits.ts)_

## `sf org list metadata`

List the metadata components and properties of a specified type.

```
USAGE
  $ sf org list metadata -o <value> -m <value> [--json] [--flags-dir <value>] [--api-version <value>] [-f <value>]
    [--folder <value>]

FLAGS
  -f, --output-file=<value>    Pathname of the file in which to write the results.
  -m, --metadata-type=<value>  (required) Metadata type to be retrieved, such as CustomObject; metadata type names are
                               case-sensitive.
  -o, --target-org=<value>     (required) Username or alias of the target org. Not required if the `target-org`
                               configuration variable is already set.
      --api-version=<value>    API version to use; default is the most recent API version.
      --folder=<value>         Folder associated with the component; required for components that use folders; folder
                               names are case-sensitive.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List the metadata components and properties of a specified type.

  Use this command to identify individual components in your manifest file or if you want a high-level view of
  particular metadata types in your org. For example, you can use this command to return a list of names of all the
  CustomObject or Layout components in your org, then use this information in a retrieve command that returns a subset
  of these components.

  The username that you use to connect to the org must have the Modify All Data or Modify Metadata Through Metadata API
  Functions permission.

ALIASES
  $ sf force mdapi listmetadata

EXAMPLES
  List the CustomObject components, and their properties, in the org with alias "my-dev-org":

    $ sf org list metadata --metadata-type CustomObject --target-org my-dev-org

  List the CustomObject components in your default org, write the output to the specified file, and use API version
  57.0:

    $ sf org list metadata --metadata-type CustomObject --api-version 57.0 --output-file /path/to/outputfilename.txt

  List the Dashboard components in your default org that are contained in the "folderSales" folder, write the output
  to the specified file, and use API version 57.0:

    $ sf org list metadata --metadata-type Dashboard --folder folderSales --api-version 57.0 --output-file \
      /path/to/outputfilename.txt

FLAG DESCRIPTIONS
  --api-version=<value>  API version to use; default is the most recent API version.

    Override the api version used for api requests made by this command

  --folder=<value>

    Folder associated with the component; required for components that use folders; folder names are case-sensitive.

    Examples of metadata types that use folders are Dashboard, Document, EmailTemplate, and Report.
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/list/metadata.ts)_

## `sf org list metadata-types`

Display details about the metadata types that are enabled for your org.

```
USAGE
  $ sf org list metadata-types -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-f <value>]

FLAGS
  -f, --output-file=<value>  Pathname of the file in which to write the results.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  API version to use; default is the most recent API version.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display details about the metadata types that are enabled for your org.

  The information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that
  define an app, and many other metadata types. Use this information to identify the syntax needed for a <name> element
  in a manifest file (package.xml).

  The username that you use to connect to the org must have the Modify All Data or Modify Metadata Through Metadata API
  Functions permission.

ALIASES
  $ sf force mdapi describemetadata

EXAMPLES
  Display information about all known and enabled metadata types in the org with alias "my-dev-org" using API version
  57.0:

    $ sf org list metadata-types --api-version 57.0 --target-org my-dev-org

  Display only the metadata types that aren't yet supported by Salesforce CLI in your default org and write the
  results to the specified file:

    $ sf org list metadata-types --output-file /path/to/outputfilename.txt --filter-known

FLAG DESCRIPTIONS
  -f, --output-file=<value>  Pathname of the file in which to write the results.

    Directing the output to a file makes it easier to extract relevant information for your package.xml manifest file.
    The default output destination is the terminal or command window console.

  --api-version=<value>  API version to use; default is the most recent API version.

    Override the api version used for api requests made by this command
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/list/metadata-types.ts)_

## `sf org list sobject record-counts`

Display record counts for the specified standard or custom objects.

```
USAGE
  $ sf org list sobject record-counts -o <value> [--json] [--flags-dir <value>] [-s <value>...] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>...   [default: ] API name of the standard or custom object for which to display record counts.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display record counts for the specified standard or custom objects.

  Use this command to get an approximate count of the records in standard or custom objects in your org. These record
  counts are the same as the counts listed in the Storage Usage page in the Setup UI. The record counts are approximate
  because they're calculated asynchronously and your org's storage usage isn't updated immediately. To display all
  available record counts, run the command without the --sobject flag.

ALIASES
  $ sf force limits recordcounts display
  $ sf limits recordcounts display

EXAMPLES
  Display all available record counts in your default org:

    $ sf org list sobject record-counts

  Display record counts for the Account, Contact, Lead, and Opportunity objects in your default org:

    $ sf org list sobject record-counts --sobject Account --sobject Contact --sobject Lead --sobject Opportunity

  Display record counts for the Account and Lead objects for the org with alias "my-scratch-org":

    $ sf org list sobject record-counts --sobject Account --sobject Lead --target-org my-scratch-org
```

_See code: [@salesforce/plugin-limits](https://github.com/salesforcecli/plugin-limits/blob/3.3.27/src/commands/org/list/sobject/record-counts.ts)_

## `sf org list users`

List all locally-authenticated users of an org.

```
USAGE
  $ sf org list users -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List all locally-authenticated users of an org.

  For scratch orgs, the list includes any users you've created with the "org create user" command; the original scratch
  org admin user is marked with "(A)". For other orgs, the list includes the users you used to authenticate to the org.

ALIASES
  $ sf force user list

EXAMPLES
  List the locally-authenticated users of your default org:

    $ sf org list users

  List the locally-authenticated users of the specified org:

    $ sf org list users --target-org me@my.org
```

_See code: [@salesforce/plugin-user](https://github.com/salesforcecli/plugin-user/blob/3.5.26/src/commands/org/list/users.ts)_

## `sf org login access-token`

Authorize an org using an existing Salesforce access token.

```
USAGE
  $ sf org login access-token -r <value> [--json] [--flags-dir <value>] [-d] [-s] [-a <value>] [-p]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default-dev-hub   Set the authenticated org as the default Dev Hub.
  -p, --no-prompt             Don't prompt for confirmation.
  -r, --instance-url=<value>  (required) URL of the instance that the org lives on.
  -s, --set-default           Set the authenticated org as the default that all org-related commands run against.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Authorize an org using an existing Salesforce access token.

  By default, the command runs interactively and asks you for the access token. If you previously authorized the org,
  the command prompts whether you want to overwrite the local file. Specify --no-prompt to not be prompted.

  To use the command in a CI/CD script, set the SF_ACCESS_TOKEN environment variable to the access token. Then run the
  command with the --no-prompt parameter.

ALIASES
  $ sf force auth accesstoken store
  $ sf auth accesstoken store

EXAMPLES
  Authorize an org on https://mycompany.my.salesforce.com; the command prompts you for the access token:

    $ sf org login access-token --instance-url https://mycompany.my.salesforce.com

  Authorize the org without being prompted; you must have previously set the SF_ACCESS_TOKEN environment variable to
  the access token:

    $ sf org login access-token --instance-url https://dev-hub.my.salesforce.com --no-prompt

FLAG DESCRIPTIONS
  -r, --instance-url=<value>  URL of the instance that the org lives on.

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

    To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/login/access-token.ts)_

## `sf org login device`

Authorize an org using a device code.

```
USAGE
  $ sf org login device [--json] [--flags-dir <value>] [-i <value>] [-r <value>] [-d] [-s] [-a <value>]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default-dev-hub   Set the authenticated org as the default Dev Hub.
  -i, --client-id=<value>     OAuth client ID (also called consumer key) of your custom connected app.
  -r, --instance-url=<value>  URL of the instance that the org lives on.
  -s, --set-default           Set the authenticated org as the default that all org-related commands run against.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Authorize an org using a device code.

  Use this command to allow a device to connect to an org.

  When you run this command, it first displays an 8-digit device code and the URL for verifying the code on your org.
  The default instance URL is https://login.salesforce.com, so if the org you're authorizing is on a different instance,
  use the --instance-url. The command waits while you complete the verification. Open a browser and navigate to the
  displayed verification URL, enter the code, then click Connect. If you aren't already logged into your org, log in,
  and then you're prompted to allow the device to connect to the org. After you successfully authorize the org, you can
  close the browser window.

ALIASES
  $ sf force auth device login
  $ sf auth device login

EXAMPLES
  Authorize an org using a device code, give the org the alias TestOrg1, and set it as your default Dev Hub org:

    $ sf org login device --set-default-dev-hub --alias TestOrg1

  Authorize an org in which you've created a custom connected app with the specified client ID (consumer key):

    $ sf org login device --client-id <OAuth client id>

  Authorize a sandbox org with the specified instance URL:

    $ sf org login device --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com

FLAG DESCRIPTIONS
  -r, --instance-url=<value>  URL of the instance that the org lives on.

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

    To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/login/device.ts)_

## `sf org login jwt`

Log in to a Salesforce org using a JSON web token (JWT).

```
USAGE
  $ sf org login jwt -o <value> -f <value> -i <value> [--json] [--flags-dir <value>] [-r <value>] [-d] [-s] [-a
    <value>]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -d, --set-default-dev-hub   Set the authenticated org as the default Dev Hub.
  -f, --jwt-key-file=<value>  (required) Path to a file containing the private key.
  -i, --client-id=<value>     (required) OAuth client ID (also called consumer key) of your custom connected app.
  -o, --username=<value>      (required) Username of the user logging in.
  -r, --instance-url=<value>  URL of the instance that the org lives on.
  -s, --set-default           Set the authenticated org as the default that all org-related commands run against.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

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
  client id) that’s generated for you. Be sure the username of the user logging in is approved to use the connected app.
  When you run this command, you set the --client-id flag to the consumer key.

  See https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm for more
  information.

  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use
  --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

ALIASES
  $ sf force auth jwt grant
  $ sf auth jwt grant

EXAMPLES
  Log into an org with username jdoe@example.org and on the default instance URL (https://login.salesforce.com). The
  private key is stored in the file /Users/jdoe/JWT/server.key and the command uses the connected app with consumer
  key (client id) 04580y4051234051.

    $ sf org login jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --client-id \
      04580y4051234051

  Set the org as the default and give it an alias:

    $ sf org login jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --client-id \
      04580y4051234051 --alias ci-org --set-default

  Set the org as the default Dev Hub and give it an alias:

    $ sf org login jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --client-id \
      04580y4051234051 --alias ci-dev-hub --set-default-dev-hub

  Log in to a sandbox using URL https://MyDomainName--SandboxName.sandbox.my.salesforce.com:

    $ sf org login jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --client-id \
      04580y4051234051 --alias ci-org --set-default --instance-url \
      https://MyDomainName--SandboxName.sandbox.my.salesforce.com

FLAG DESCRIPTIONS
  -r, --instance-url=<value>  URL of the instance that the org lives on.

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

    To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/login/jwt.ts)_

## `sf org login sfdx-url`

Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin).

```
USAGE
  $ sf org login sfdx-url [--json] [--flags-dir <value>] [-f <value>] [-u <value>] [-d] [-s] [-a <value>]

FLAGS
  -a, --alias=<value>           Alias for the org.
  -d, --set-default-dev-hub     Set the authenticated org as the default Dev Hub.
  -f, --sfdx-url-file=<value>   Path to a file that contains the Salesforce DX authorization URL.
  -s, --set-default             Set the authenticated org as the default that all org-related commands run against.
  -u, --sfdx-url-stdin=<value>  Pipe the Salesforce DX authorization URL through standard input (stdin).

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin).

  The Salesforce DX (SFDX) authorization URL must have the format
  "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>". NOTE: The SFDX authorization URL uses the "force"
  protocol, and not "http" or "https". Also, the "instanceUrl" inside the SFDX authorization URL doesn't include the
  protocol ("https://").

  You have three options when creating the authorization file. The easiest option is to redirect the output of the "sf
  org display --verbose --json" command into a file. For example, using an org with alias my-org that you've already
  authorized:

  $ sf org display --target-org my-org --verbose --json > authFile.json

  The resulting JSON file contains the URL in the "sfdxAuthUrl" property of the "result" object. You can then reference
  the file when running this command:

  $ sf org login sfdx-url --sfdx-url-file authFile.json

  NOTE: The "sf org display --verbose" command displays the refresh token only for orgs authorized with the web server
  flow, and not the JWT bearer flow.

  You can also create a JSON file that has a top-level property named sfdxAuthUrl whose value is the authorization URL.
  Finally, you can create a normal text file that includes just the URL and nothing else.

  Alternatively, you can pipe the SFDX authorization URL through standard input by specifying the --sfdx-url-stdin flag.

ALIASES
  $ sf force auth sfdxurl store
  $ sf auth sfdxurl store

EXAMPLES
  Authorize an org using the SFDX authorization URL in the files/authFile.json file:

    $ sf org login sfdx-url --sfdx-url-file files/authFile.json

  Similar to previous example, but set the org as your default and give it an alias MyDefaultOrg:

    $ sf org login sfdx-url --sfdx-url-file files/authFile.json --set-default --alias MyDefaultOrg

  Pipe the SFDX authorization URL from stdin:
  $ echo url | sf org login sfdx-url --sfdx-url-stdin
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/login/sfdx-url.ts)_

## `sf org login web`

Log in to a Salesforce org using the web server flow.

```
USAGE
  $ sf org login web [--json] [--flags-dir <value>] [-b chrome|edge|firefox] [-i <value>] [-r <value>] [-d] [-s]
    [-a <value>]

FLAGS
  -a, --alias=<value>         Alias for the org.
  -b, --browser=<option>      Browser in which to open the org.
                              <options: chrome|edge|firefox>
  -d, --set-default-dev-hub   Set the authenticated org as the default Dev Hub.
  -i, --client-id=<value>     OAuth client ID (also called consumer key) of your custom connected app.
  -r, --instance-url=<value>  URL of the instance that the org lives on.
  -s, --set-default           Set the authenticated org as the default that all org-related commands run against.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Log in to a Salesforce org using the web server flow.

  Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you
  log in, you can close the browser window.

  Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving
  metadata. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch
  orgs.

  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use
  --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

  By default, this command uses the global out-of-the-box connected app in your org. If you need more security or
  control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app using a
  digital certificate. Make note of the consumer key (also called cliend id) that’s generated for you. Then specify the
  consumer key with the --client-id flag.

ALIASES
  $ sf force auth web login
  $ sf auth web login

EXAMPLES
  Run the command with no flags to open the default Salesforce login page (https://login.salesforce.com):

    $ sf org login web

  Log in to your Dev Hub, set it as your default Dev Hub, and set an alias that you reference later when you create a
  scratch org:

    $ sf org login web --set-default-dev-hub --alias dev-hub

  Log in to a sandbox and set it as your default org:

    $ sf org login web --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default

  Use --browser to specify a specific browser, such as Google Chrome:

    $ sf org login web --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default \
      --browser chrome

  Use your own connected app by specifying its consumer key (also called client ID):

    $ sf org login web --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default \
      --browser chrome --client-id 04580y4051234051

FLAG DESCRIPTIONS
  -b, --browser=chrome|edge|firefox  Browser in which to open the org.

    If you don’t specify --browser, the command uses your default browser. The exact names of the browser applications
    differ depending on the operating system you're on; check your documentation for details.

  -r, --instance-url=<value>  URL of the instance that the org lives on.

    If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

    To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

    To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/login/web.ts)_

## `sf org logout`

Log out of a Salesforce org.

```
USAGE
  $ sf org logout [--json] [--flags-dir <value>] [-a | -o <value>] [-p]

FLAGS
  -a, --all                 Include all authenticated orgs.
  -o, --target-org=<value>  Username or alias of the target org.
  -p, --no-prompt           Don't prompt for confirmation.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Log out of a Salesforce org.

  If you run this command with no flags and no default org set in your config or environment, it first displays a list
  of orgs you've created or logged into, with none of the orgs selected. Use the arrow keys to scroll through the list
  and the space bar to select the orgs you want to log out of. Press Enter when you're done; the command asks for a
  final confirmation before logging out of the selected orgs.

  The process is similar if you specify --all, except that in the initial list of orgs, they're all selected. Use
  --target-org to logout of a specific org. In both these cases by default, you must still confirm that you want to log
  out. Use --no-prompt to never be asked for confirmation when also using --all or --target-org.

  Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org
  again, either through the CLI or the Salesforce UI.

ALIASES
  $ sf force auth logout
  $ sf auth logout

EXAMPLES
  Interactively select the orgs to log out of:

    $ sf org logout

  Log out of the org with username me@my.org:

    $ sf org logout --target-org me@my.org

  Log out of all orgs after confirmation:

    $ sf org logout --all

  Logout of the org with alias my-scratch and don't prompt for confirmation:

    $ sf org logout --target-org my-scratch --no-prompt

FLAG DESCRIPTIONS
  -a, --all  Include all authenticated orgs.

    All orgs includes Dev Hubs, sandboxes, DE orgs, and expired, deleted, and unknown-status scratch orgs.
```

_See code: [@salesforce/plugin-auth](https://github.com/salesforcecli/plugin-auth/blob/3.6.51/src/commands/org/logout.ts)_

## `sf org open`

Open your default scratch org, or another specified org, in a browser.

```
USAGE
  $ sf org open -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [--private | -r | -b
    chrome|edge|firefox] [-p <value> | -f <value>]

FLAGS
  -b, --browser=<option>     Browser where the org opens.
                             <options: chrome|edge|firefox>
  -f, --source-file=<value>  Path to an ApexPage or FlexiPage to open in Lightning App Builder.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --path=<value>         Navigation URL path to open a specific page.
  -r, --url-only             Display navigation URL, but don’t launch browser.
      --api-version=<value>  Override the api version used for api requests made by this command
      --private              Open the org in the default browser using private (incognito) mode.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Open your default scratch org, or another specified org, in a browser.

  To open a specific page, specify the portion of the URL after "https://mydomain.my.salesforce.com" as the value for
  the --path flag. For example, specify "--path lightning" to open Lightning Experience, or specify "--path
  /apex/YourPage" to open a Visualforce page.

  Use the --source-file to open a Lightning Page from your local project in Lightning App Builder. Lightning page files
  have the suffix .flexipage-meta.xml, and are stored in the "flexipages" directory.

  To generate a URL but not launch it in your browser, specify --url-only.

  To open in a specific browser, use the --browser flag. Supported browsers are "chrome", "edge", and "firefox". If you
  don't specify --browser, the org opens in your default browser.

ALIASES
  $ sf force org open
  $ sf force source open

EXAMPLES
  Open your default org in your default browser:

    $ sf org open

  Open your default org in an incognito window of your default browser:

    $ sf org open --private

  Open the org with alias MyTestOrg1 in the Firefox browser:

    $ sf org open --target-org MyTestOrg1 --browser firefox

  Display the navigation URL for the Lightning Experience page for your default org, but don't open the page in a
  browser:

    $ sf org open --url-only --path lightning

  Open a local Lightning page in your default org's Lightning App Builder:

    $ sf org open --source-file force-app/main/default/flexipages/Hello.flexipage-meta.xml

  Open a local Flow in Flow Builder:

    $ sf org open --source-file force-app/main/default/flows/Hello.flow-meta.xml
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/open.ts)_

## `sf org refresh sandbox`

Refresh a sandbox org using the sandbox name.

```
USAGE
  $ sf org refresh sandbox -o <value> [--json] [--flags-dir <value>] [--no-auto-activate] [-w <minutes> | --async] [-i
    <seconds> | ] [-n <value>] [-f <value>] [--no-prompt]

FLAGS
  -f, --definition-file=<value>  Path to a sandbox definition file for overriding its configuration when you refresh it.
  -i, --poll-interval=<seconds>  Number of seconds to wait between status polling requests.
  -n, --name=<value>             Name of the existing sandbox org in your production org that you want to refresh.
  -o, --target-org=<value>       (required) Username or alias of the production org that contains the sandbox license.
  -w, --wait=<minutes>           Number of minutes to poll for sandbox refresh status.
      --async                    Request the sandbox refresh, but don't wait for it to complete.
      --no-auto-activate         Disable auto-activation of the sandbox after a successful refresh.
      --no-prompt                Don't prompt for confirmation about the sandbox refresh.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Refresh a sandbox org using the sandbox name.

  Refreshing a sandbox copies the metadata, and optionally data, from your source org to the refreshed sandbox org. You
  can optionally specify a definition file if you want to change the configuration of the refreshed sandbox, such as its
  license type or template ID.

  You're not allowed to change the sandbox name when you refresh it with this command. If you want to change the sandbox
  name, first delete it with the "org delete sandbox" command. And then recreate it with the "org create sandbox"
  command and give it a new name.

EXAMPLES
  Refresh the sandbox named "devSbx1". The production org that contains the sandbox license has the alias "prodOrg".

    $ sf org refresh sandbox --name devSbx1 --target-org prodOrg

  Refresh the sandbox named "devSbx2", and override the configuration of the refreshed sandbox with the properties in
  the specified defintion file. The default target org is the production org, so you don't need to specify the
  `--target-org` flag in this case.

    $ sf org refresh sandbox --name devSbx2 --definition-file devSbx2-config.json

  Refresh the sandbox using the name defined in the definition file. The production org that contains the sandbox
  license has the alias "prodOrg".

    $ sf org refresh sandbox --definition-file devSbx3-config.json --target-org prodOrg

FLAG DESCRIPTIONS
  -f, --definition-file=<value>  Path to a sandbox definition file for overriding its configuration when you refresh it.

    The sandbox definition file is a blueprint for the sandbox; use the file to change the sandbox configuration during
    a refresh. If you don't want to change the sandbox configuration when you refresh it, then simply use the --name
    flag to specify the sandbox and don't use this flag. See
    <https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm> for all
    the options you can specify in the definition file.

  -w, --wait=<minutes>  Number of minutes to poll for sandbox refresh status.

    If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays
    the "sf org resume sandbox" command for you run to check the status of the refresh. The displayed command includes
    the job ID for the running sandbox refresh.

  --async  Request the sandbox refresh, but don't wait for it to complete.

    The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue
    to use the CLI. To check the status of the sandbox refresh, run "sf org resume sandbox".

  --no-auto-activate  Disable auto-activation of the sandbox after a successful refresh.

    By default, a sandbox auto-activates after a refresh. Use this flag to control sandbox activation manually.
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/refresh/sandbox.ts)_

## `sf org resume sandbox`

Check the status of a sandbox creation, and log in to it if it's ready.

```
USAGE
  $ sf org resume sandbox [--json] [--flags-dir <value>] [-w <minutes>] [-n <value> | -i <value>] [-l] [-o <value>]

FLAGS
  -i, --job-id=<value>      Job ID of the incomplete sandbox creation that you want to check the status of.
  -l, --use-most-recent     Use the most recent sandbox create request.
  -n, --name=<value>        Name of the sandbox org.
  -o, --target-org=<value>  Username or alias of the production org that contains the sandbox license.
  -w, --wait=<minutes>      [default: 0 minutes] Number of minutes to wait for the sandbox org to be ready.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Check the status of a sandbox creation, and log in to it if it's ready.

  Sandbox creation can take a long time. If the original "sf org create sandbox" command either times out, or you
  specified the --async flag, the command displays a job ID. Use this job ID to check whether the sandbox creation is
  complete, and if it is, the command then logs into it.

  You can also use the sandbox name to check the status or the --use-most-recent flag to use the job ID of the most
  recent sandbox creation.

ALIASES
  $ sf env resume sandbox

EXAMPLES
  Check the status of a sandbox creation using its name and specify a production org with alias "prodOrg":

    $ sf org resume sandbox --name mysandbox --target-org prodOrg

  Check the status using the job ID:

    $ sf org resume sandbox --job-id 0GRxxxxxxxx

  Check the status of the most recent sandbox create request:

    $ sf org resume sandbox --use-most-recent

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

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/resume/sandbox.ts)_

## `sf org resume scratch`

Resume the creation of an incomplete scratch org.

```
USAGE
  $ sf org resume scratch [--json] [--flags-dir <value>] [-i <value>] [-r]

FLAGS
  -i, --job-id=<value>   Job ID of the incomplete scratch org create that you want to resume.
  -r, --use-most-recent  Use the job ID of the most recent incomplete scratch org.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Resume the creation of an incomplete scratch org.

  When the original "sf org create scratch" command either times out or is run with the --async flag, it displays a job
  ID.

  Run this command by either passing it a job ID or using the --use-most-recent flag to specify the most recent
  incomplete scratch org.

ALIASES
  $ sf env resume scratch

EXAMPLES
  Resume a scratch org create with a job ID:

    $ sf org resume scratch --job-id 2SR3u0000008fBDGAY

  Resume your most recent incomplete scratch org:

    $ sf org resume scratch --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the incomplete scratch org create that you want to resume.

    The job ID is the same as the record ID of the incomplete scratch org in the ScratchOrgInfo object of the Dev Hub.

    The job ID is valid for 24 hours after you start the scratch org creation.
```

_See code: [@salesforce/plugin-org](https://github.com/salesforcecli/plugin-org/blob/4.5.4/src/commands/org/resume/scratch.ts)_

## `sf package create`

Create a package.

```
USAGE
  $ sf package create -v <value> -n <value> -t Managed|Unlocked -r <value> [--json] [--flags-dir <value>]
    [--api-version <value>] [-d <value>] [-e] [--org-dependent] [-o <value>]

FLAGS
  -d, --description=<value>                  Description of the package.
  -e, --no-namespace                         Create the package with no namespace; available only for unlocked packages.
  -n, --name=<value>                         (required) Name of the package to create.
  -o, --error-notification-username=<value>  Active Dev Hub user designated to receive email notifications for package
                                             errors.
  -r, --path=<value>                         (required) Path to directory that contains the contents of the package.
  -t, --package-type=<option>                (required) Type of package.
                                             <options: Managed|Unlocked>
  -v, --target-dev-hub=<value>               (required) Username or alias of the Dev Hub org. Not required if the
                                             `target-dev-hub` configuration variable is already set.
      --api-version=<value>                  Override the api version used for api requests made by this command
      --org-dependent                        Depends on unpackaged metadata in the installation org; applies to unlocked
                                             packages only.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a package.

  First, use this command to create a package. Then create a package version.

  If you don’t have a namespace defined in your sfdx-project.json file, use --no-namespace.

  Your --name value must be unique within your namespace.

  Run 'sf package list to list all packages in the Dev Hub org.

ALIASES
  $ sf force package create

EXAMPLES
  Create an unlocked package from the files in the "force-app" directory; uses your default Dev Hub org:

    $ sf package create --name MyUnlockedPackage --package-type Unlocked --path force-app

  Create a managed packaged from the "force-app" directory files, give the package a description, and use the
  specified Dev Hub org:

    $ sf package create --name MyManagedPackage --description "Your Package Descripton" --package-type Managed \
      --path force-app --target-dev-hub devhub@example.com

FLAG DESCRIPTIONS
  -e, --no-namespace  Create the package with no namespace; available only for unlocked packages.

    This flag is useful when you’re migrating an existing org to packages. But use a namespaced package for new
    metadata.

  -o, --error-notification-username=<value>

    Active Dev Hub user designated to receive email notifications for package errors.

    Email notifications include information about unhandled Apex exceptions, and install, upgrade, or uninstall failures
    associated with your package.

  -t, --package-type=Managed|Unlocked  Type of package.

    The options for package type are Managed and Unlocked (Managed=DeveloperManagedSubscriberManaged,
    Unlocked=DeveloperControlledSubscriberEditable). These options determine upgrade and editability rules.

  --org-dependent  Depends on unpackaged metadata in the installation org; applies to unlocked packages only.

    Use Source Tracking in Sandboxes to develop your org-dependent unlocked package. For more information, see "Create
    Org-Dependent Unlocked Packages" in the Salesforce DX Developer Guide.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/create.ts)_

## `sf package delete`

Delete a package.

```
USAGE
  $ sf package delete -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-n]

FLAGS
  -n, --no-prompt               Don’t prompt before deleting the package.
  -p, --package=<value>         (required) ID (starts with 0Ho) or alias of the package to delete.
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Delete a package.

  Specify the ID or alias of the package you want to delete.

  Delete unlocked and second-generation managed packages. Before you delete a package, first delete all associated
  package versions.

ALIASES
  $ sf force package delete

EXAMPLES
  Delete a package using its alias from your default Dev Hub org:

    $ sf package delete --package "Your Package Alias"

  Delete a package using its ID from the specified Dev Hub org:

    $ sf package delete --package 0Ho... --target-dev-hub devhub@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/delete.ts)_

## `sf package install`

Install or upgrade a version of a package in the target org.

```
USAGE
  $ sf package install -o <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-w <value>] [-k
    <value>] [-b <value>] [-r] [-a all|package] [-s AllUsers|AdminsOnly] [-t DeprecateOnly|Mixed|Delete]

FLAGS
  -a, --apex-compile=<option>     [default: all] Compile all Apex in the org and package, or only Apex in the package;
                                  unlocked packages only.
                                  <options: all|package>
  -b, --publish-wait=<value>      Maximum number of minutes to wait for the Subscriber Package Version ID to become
                                  available in the target org before canceling the install request.
  -k, --installation-key=<value>  Installation key for key-protected package (default: null).
  -o, --target-org=<value>        (required) Username or alias of the target org. Not required if the `target-org`
                                  configuration variable is already set.
  -p, --package=<value>           (required) ID (starts with 04t) or alias of the package version to install.
  -r, --no-prompt                 Don't prompt for confirmation.
  -s, --security-type=<option>    [default: AdminsOnly] Security access type for the installed package. Available
                                  options are AdminsOnly and AllUsers.
                                  <options: AllUsers|AdminsOnly>
  -t, --upgrade-type=<option>     [default: Mixed] Upgrade type for the package installation; available only for
                                  unlocked packages.
                                  <options: DeprecateOnly|Mixed|Delete>
  -w, --wait=<value>              Number of minutes to wait for installation status.
      --api-version=<value>       Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Install or upgrade a version of a package in the target org.

  To install or upgrade a package, specify a specific version of the package using the 04t package ID. The package and
  the version you specified installs in your default target org unless you supply the username for a different target
  org.

  When upgrading an unlocked package, include the --upgrade-type value to specify whether any removed components are
  deprecated or deleted. To delete components that can be safely deleted and deprecate the others, specify
  "--upgrade-type Mixed" (the default). To deprecate all removed components, specify "--upgrade-type DeprecateOnly". To
  delete all removed components, except for custom objects and custom fields, that don't have dependencies, specify
  "--upgrade-type Delete". (Note: This option can result in the loss of data that is associated with the deleted
  components.)

ALIASES
  $ sf force package install

EXAMPLES
  Install or upgrade a package version with the specified ID in the org with username "me@example.com":

    $ sf package install --package 04t... --target-org me@example.com

  Install or upgrade a package version with the specified alias into your default org:

    $ sf package install --package awesome_package_alias

  Install or upgrade a package version with an alias that includes spaces into your default org:

    $ sf package install --package "Awesome Package Alias"

  Upgrade an unlocked package version with the specified ID and deprecate all removed components:

    $ sf package install --package 04t... --upgrade-type DeprecateOnly

FLAG DESCRIPTIONS
  -a, --apex-compile=all|package

    Compile all Apex in the org and package, or only Apex in the package; unlocked packages only.

    Applies to unlocked packages only. Specifies whether to compile all Apex in the org and package, or only the Apex in
    the package.

    For package installs into production orgs, or any org that has Apex Compile on Deploy enabled, the platform compiles
    all Apex in the org after the package install or upgrade operation completes.

    This approach assures that package installs and upgrades don’t impact the performance of an org, and is done even if
    --apex-compile package is specified.

  -r, --no-prompt  Don't prompt for confirmation.

    Allows the following without an explicit confirmation response: 1) Remote Site Settings and Content Security Policy
    websites to send or receive data, and 2) --upgrade-type Delete to proceed.

  -t, --upgrade-type=DeprecateOnly|Mixed|Delete

    Upgrade type for the package installation; available only for unlocked packages.

    For unlocked package upgrades, set this flag to one of these values:

    - DeprecateOnly: Mark all removed components as deprecated.
    - Mixed: Delete removed components, except for custom objects and custom fields, that don't have dependencies.
    - Delete: Delete all removed components that can be safely deleted, and deprecate the other components.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/install.ts)_

## `sf package install report`

Retrieve the status of a package installation request.

```
USAGE
  $ sf package install report -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -i, --request-id=<value>   (required) ID of the package install request you want to check; starts with 0Hf.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package install report

EXAMPLES
  Retrieve the status of a package installation request with the specified ID on your default org:

    $ sf package install report --request-id 0Hf...

  Similar to previous example, except use the org with username me@example.com:

    $ sf package install report --request-id 0Hf... --target-org me@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/install/report.ts)_

## `sf package installed list`

List the org’s installed packages.

```
USAGE
  $ sf package installed list -o <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package installed list

EXAMPLES
  List the installed packages in your default org:

    $ sf package installed list

  List the installed packages in the org with username me@example.com:

    $ sf package installed list --target-org me@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/installed/list.ts)_

## `sf package list`

List all packages in the Dev Hub org.

```
USAGE
  $ sf package list -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [--verbose]

FLAGS
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command
      --verbose                 Display extended package detail.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List all packages in the Dev Hub org.

  Description

ALIASES
  $ sf force package list

EXAMPLES
  List all packages in the specified Dev Hub org:

    $ sf package list --target-dev-hub devhub@example.com

  List all packages details in the specified Dev Hub org, and show extended details about each package:

    $ sf package list --target-dev-hub devhub@example.com --verbose
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/list.ts)_

## `sf package uninstall`

Uninstall a second-generation package from the target org.

```
USAGE
  $ sf package uninstall -o <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-w <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --package=<value>      (required) ID (starts with 04t) or alias of the package version to uninstall.
  -w, --wait=<value>         Number of minutes to wait for uninstall status.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Uninstall a second-generation package from the target org.

  Specify the package ID for a second-generation package.

  To list the org’s installed packages, run "sf package installed list".

  To uninstall a first-generation package, from Setup, enter Installed Packages in the Quick Find box, then select
  Installed Packages.

ALIASES
  $ sf force package uninstall

EXAMPLES
  Uninstall a package with specified ID from an org with username me@example.com:

    $ sf package uninstall --package 04t... --target-org me@example.com

  Uninstall a package with the specified alias from your default org:

    $ sf package uninstall --package undesirable_package_alias

  Uninstall a package with an alias that contains spaces from your default org:

    $ sf package uninstall --package "Undesirable Package Alias"
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/uninstall.ts)_

## `sf package uninstall report`

Retrieve the status of a package uninstall request.

```
USAGE
  $ sf package uninstall report -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -i, --request-id=<value>   (required) ID of the package uninstall request you want to check; starts with 06y.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package uninstall report

EXAMPLES
  Retrieve the status of a package uninstall in your default org using the specified request ID:

    $ sf package uninstall report --request-id 06y...

  Similar to previous example, but use the org with username me@example.com:

    $ sf package uninstall report --request-id 06y... --target-org me@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/uninstall/report.ts)_

## `sf package update`

Update package details.

```
USAGE
  $ sf package update -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-n <value>] [-d
    <value>] [-o <value>] [--enable-app-analytics]

FLAGS
  -d, --description=<value>                  New description of the package.
  -n, --name=<value>                         New name of the package.
  -o, --error-notification-username=<value>  Active Dev Hub user designated to receive email notifications for package
                                             errors.
  -p, --package=<value>                      (required) ID (starts with 0Ho) or alias of the package to update.
  -v, --target-dev-hub=<value>               (required) Username or alias of the Dev Hub org. Not required if the
                                             `target-dev-hub` configuration variable is already set.
      --api-version=<value>                  Override the api version used for api requests made by this command
      --[no-]enable-app-analytics            Enable AppExchange App Analytics usage data collection on this managed
                                             package and its components.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Update package details.

  Specify a new value for each option you want to update.

  Run "sf package list" to list all packages in the Dev Hub org.

ALIASES
  $ sf force package update

EXAMPLES
  Update the name of the package with the specified alias; uses your default Dev Hub org:

    $ sf package update --package "Your Package Alias" --name "New Package Name"

  Update the description of the package with the specified ID; uses the specified Dev Hub org:

    $ sf package update --package 0Ho... --description "New Package Description" --target-dev-hub devhub@example.com

FLAG DESCRIPTIONS
  -o, --error-notification-username=<value>

    Active Dev Hub user designated to receive email notifications for package errors.

    Email notifications include information about unhandled Apex exceptions, and install, upgrade, or uninstall failures
    associated with your package.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/update.ts)_

## `sf package version create`

Create a package version in the Dev Hub org.

```
USAGE
  $ sf package version create -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [-b <value>] [-c |
    --skip-validation] [-f <value>] [-k <value>] [-x] [-p <value>] [-d <value>] [--post-install-script <value>]
    [--post-install-url <value>] [--releasenotes-url <value>] [--skip-ancestor-check] [--async-validation | ] [-t
    <value>] [--uninstall-script <value>] [-e <value>] [-a <value>] [-n <value>] [-w <value>] [--language <value>]
    [--verbose]

FLAGS
  -a, --version-name=<value>         Name of the package version to be created; overrides the sfdx-project.json value.
  -b, --branch=<value>               Name of the branch in your source control system that the package version is based
                                     on.
  -c, --code-coverage                Calculate and store the code coverage percentage by running the packaged Apex tests
                                     included in this package version.
  -d, --path=<value>                 Path to the directory that contains the contents of the package.
  -e, --version-description=<value>  Description of the package version to be created; overrides the sfdx-project.json
                                     value.
  -f, --definition-file=<value>      Path to a definition file similar to scratch org definition file that contains the
                                     list of features and org preferences that the metadata of the package version
                                     depends on.
  -k, --installation-key=<value>     Installation key for key-protected package. (either --installation-key or
                                     --installation-key-bypass is required)
  -n, --version-number=<value>       Version number of the package version to be created; overrides the
                                     sfdx-project.json value.
  -p, --package=<value>              ID (starts with 0Ho) or alias of the package to create a version of.
  -t, --tag=<value>                  Package version’s tag.
  -v, --target-dev-hub=<value>       (required) Username or alias of the Dev Hub org. Not required if the
                                     `target-dev-hub` configuration variable is already set.
  -w, --wait=<value>                 Number of minutes to wait for the package version to be created.
  -x, --installation-key-bypass      Bypass the installation key requirement. (either --installation-key or
                                     --installation-key-bypass is required)
      --api-version=<value>          Override the api version used for api requests made by this command
      --async-validation             Return a new package version before completing package validations.
      --language=<value>             Language for the package.
      --post-install-script=<value>  Name of the post-install script; applies to managed packages only.
      --post-install-url=<value>     Post-install instructions URL.
      --releasenotes-url=<value>     Release notes URL.
      --skip-ancestor-check          Overrides ancestry requirements, which allows you to specify a package ancestor
                                     that isn’t the highest released package version.
      --skip-validation              Skip validation during package version creation; you can’t promote unvalidated
                                     package versions.
      --uninstall-script=<value>     Uninstall script name; applies to managed packages only.
      --verbose                      Display verbose command output.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a package version in the Dev Hub org.

  The package version is based on the package contents in the specified directory.

  To retrieve details about a package version create request, including status and package version ID (04t), run "sf
  package version create report -i 08c...".

  We recommend that you specify the --installation-key parameter to protect the contents of your package and to prevent
  unauthorized installation of your package.

  To list package version creation requests in the org, run "sf package version create list".
  To promote a package version to released, you must use the --code-coverage parameter. The package must also meet the
  code coverage requirements. This requirement applies to both managed and unlocked packages.

  We don’t calculate code coverage for org-dependent unlocked packages, or for package versions that specify
  --skip-validation.

ALIASES
  $ sf force package version create

EXAMPLES
  Create a package version from the contents of the "common" directory and give it an installation key of
  "password123"; uses your default Dev Hub org:

    $ sf package version create --path common --installation-key password123

  Create a package version from a package with the specified alias; uses the Dev Hub org with username
  devhub@example.com:

    $ sf package version create --package "Your Package Alias" --installation-key password123 --target-dev-hub \
      devhub@example.com

  Create a package version from a package with the specified ID:

    $ sf package version create --package 0Ho... --installation-key password123

  Create a package version and skip the validation step:

    $ sf package version create --path common --installation-key password123 --skip-validation

  Create a package version and perform package validations asynchronously:

    $ sf package version create --path common --installation-key password123 --async-validation

FLAG DESCRIPTIONS
  -c, --code-coverage

    Calculate and store the code coverage percentage by running the packaged Apex tests included in this package
    version.

    Before you can promote and release a managed or unlocked package version, the Apex code must meet a minimum 75% code
    coverage requirement. We don’t calculate code coverage for org-dependent unlocked packages or for package versions
    that specify --skip-validation.

  -f, --definition-file=<value>

    Path to a definition file similar to scratch org definition file that contains the list of features and org
    preferences that the metadata of the package version depends on.

    For a patch version, the features specified in this file are ignored, and instead the features specified for the
    ancestor version are used.

  -n, --version-number=<value>

    Version number of the package version to be created; overrides the sfdx-project.json value.

    For information about the format of the version number, see
    https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm.

  -x, --installation-key-bypass

    Bypass the installation key requirement. (either --installation-key or --installation-key-bypass is required)

    If you bypass this requirement, anyone can install your package.

  --async-validation  Return a new package version before completing package validations.

    Specifying async validation returns the package version earlier in the process, allowing you to install and test the
    new version right away. If your development team is using continuous integration (CI) scripts, async validation can
    reduce your overall CI run time.

  --language=<value>  Language for the package.

    Specify the language using a language code listed under "Supported Languages" in Salesforce Help. If no language is
    specified, the language defaults to the language of the Dev Hub user who created the package.

  --post-install-script=<value>  Name of the post-install script; applies to managed packages only.

    The post-install script is an Apex class within this package that is run in the installing org after installations
    or upgrades of this package version.

  --post-install-url=<value>  Post-install instructions URL.

    The contents of the post-installation instructions URL are displayed in the UI after installation of the package
    version.

  --releasenotes-url=<value>  Release notes URL.

    This link is displayed in the package installation UI to provide release notes for this package version to
    subscribers.

  --skip-validation  Skip validation during package version creation; you can’t promote unvalidated package versions.

    Skips validation of dependencies, package ancestors, and metadata during package version creation. Skipping
    validation reduces the time it takes to create a new package version, but you can promote only validated package
    versions. Skipping validation can suppress important errors that can surface at a later stage. You can specify skip
    validation or code coverage, but not both. Code coverage is calculated during validation.

  --uninstall-script=<value>  Uninstall script name; applies to managed packages only.

    The uninstall script is an Apex class within this package that is run in the installing org after uninstallations of
    this package.

  --verbose  Display verbose command output.

    Display verbose command output. When polling for the status of the creation, this will output status and timeout
    data on a separate line for each poll request, which is useful in CI systems where timeouts can occur with long
    periods of no output from commands.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/create.ts)_

## `sf package version create list`

List package version creation requests.

```
USAGE
  $ sf package version create list -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [-c <value>] [-s
    Queued|InProgress|Success|Error] [--show-conversions-only] [--verbose]

FLAGS
  -c, --created-last-days=<value>  Number of days since the request was created, starting at 00:00:00 of first day to
                                   now. Use 0 for today.
  -s, --status=<option>            Status of the version creation request, used to filter the list.
                                   <options: Queued|InProgress|Success|Error>
  -v, --target-dev-hub=<value>     (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                   configuration variable is already set.
      --api-version=<value>        Override the api version used for api requests made by this command
      --show-conversions-only      Filter the list output to display only converted package version.
      --verbose                    Displays additional information at a slight performance cost, such as the version
                                   name and number for each package version create request.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List package version creation requests.

  Shows the details of each request to create a package version in the Dev Hub org.

  All filter parameters are applied using the AND logical operator (not OR).

  To get information about a specific request, run "sf package version create report" and supply the request ID.

ALIASES
  $ sf force package version create list

EXAMPLES
  List all package version creation requests in your default Dev Hub org:

    $ sf package version create list

  List package version creation requests from the last 3 days in the Dev Hub org with username devhub@example.com:

    $ sf package version create list --created-last-days 3 --target-dev-hub

  List package version creation requests with status Error:

    $ sf package version create list --status Error

  List package version creation requests with status InProgress:

    $ sf package version create list --status InProgress

  List package version creation requests with status Success that were created today:

    $ sf package version create list --created-last-days 0 --status Success
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/create/list.ts)_

## `sf package version create report`

Retrieve details about a package version creation request.

```
USAGE
  $ sf package version create report -v <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -i, --package-create-request-id=<value>  (required) ID (starts with 08c) of the package version creation request you
                                           want to display.
  -v, --target-dev-hub=<value>             (required) Username or alias of the Dev Hub org. Not required if the
                                           `target-dev-hub` configuration variable is already set.
      --api-version=<value>                Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Retrieve details about a package version creation request.

  Specify the request ID for which you want to view details. If applicable, the command displays errors related to the
  request.

  To show all requests in the org, run "sf package version create list".

ALIASES
  $ sf force package version create report

EXAMPLES
  Retrieve details about the package version creation request with the specified ID; uses your default Dev Hub org:

    $ sf package version create report --package-create-request-id 08c...

  Retrieve details about the specified package version creation request in the Dev Hub org with username
  devhub@example.com:

    $ sf package version create report --package-create-request-id 08c... --target-dev-hub devhub@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/create/report.ts)_

## `sf package version delete`

Delete a package version.

```
USAGE
  $ sf package version delete -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-n]

FLAGS
  -n, --no-prompt               Don’t prompt before deleting the package version.
  -p, --package=<value>         (required) ID (starts with 04t) or alias of the package version to delete.
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Delete a package version.

  Specify the ID or alias of the package version you want to delete. In second-generation managed packaging, only beta
  package versions can be deleted. Before deleting a package version, review the considerations outlined in
  https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_deletion.htm.

ALIASES
  $ sf force package version delete

EXAMPLES
  Delete a package version with the specified alias using your default Dev Hub org:

    $ sf package version delete --package "Your Package Alias"

  Delete a package version with the specified ID using the Dev Hub org with username "devhub@example.com":

    $ sf package version delete --package 04t... --target-org devhub@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/delete.ts)_

## `sf package version displayancestry`

Display the ancestry tree for a 2GP managed package version.

```
USAGE
  $ sf package version displayancestry -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [--dot-code]
    [--verbose]

FLAGS
  -p, --package=<value>         (required) ID or alias of the package (starts with 0Ho) or package version (starts with
                                04t) to display ancestry for.
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command
      --dot-code                Display the ancestry tree in DOT code.
      --verbose                 Display both the package version ID (starts with 04t) and the version number
                                (major.minor.patch.build) in the ancestry tree.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package version displayancestry

EXAMPLES
  Display the ancestry tree for a package version with the specified alias, using your default Dev Hub org:

    $ sf package version displayancestry --package package_version_alias

  Similar to previous example, but display the output in DOT code:

    $ sf package version displayancestry --package package_version_alias --dot-code

  Display the ancestry tree for a package with the specified ID, using the Dev Hub org with username
  devhub@example.com:

    $ sf package version displayancestry --package OHo... --target-dev-hub devhub@example.com

  Display the ancestry tree of a package version with the specified ID, using your default Dev Hub org:

    $ sf package version displayancestry --package 04t...

FLAG DESCRIPTIONS
  -p, --package=<value>

    ID or alias of the package (starts with 0Ho) or package version (starts with 04t) to display ancestry for.

    If you specify a package ID (starts with 0Ho) or alias, the ancestor tree for every package version associated with
    the package ID is displayed. If you specify a package version (starts with 04t) or alias, the ancestry tree of the
    specified package version is displayed.

  --dot-code  Display the ancestry tree in DOT code.

    You can use the DOT code output in graph visualization software to create tree visualizations.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/displayancestry.ts)_

## `sf package version list`

List all package versions in the Dev Hub org.

```
USAGE
  $ sf package version list -v <value> [--json] [--flags-dir <value>] [--api-version <value>] [-c <value>] [--concise]
    [--show-conversions-only] [-m <value>] [-p <value>] [-r] [-b <value>] [-o <value>] [--verbose]

FLAGS
  -b, --branch=<value>              Branch in your source control system used to filter the results; only package
                                    versions based on the specified branch are listed.
  -c, --created-last-days=<value>   Number of days since the request was created, starting at 00:00:00 of first day to
                                    now. Use 0 for today.
  -m, --modified-last-days=<value>  Number of days since the items were modified, starting at 00:00:00 of first day to
                                    now. Use 0 for today.
  -o, --order-by=<value>            Package version fields used to order the list.
  -p, --packages=<value>            Comma-delimited list of packages (aliases or 0Ho IDs) to list.
  -r, --released                    Display released versions only (IsReleased=true).
  -v, --target-dev-hub=<value>      (required) Username or alias of the Dev Hub org. Not required if the
                                    `target-dev-hub` configuration variable is already set.
      --api-version=<value>         Override the api version used for api requests made by this command
      --concise                     Display limited package version details.
      --show-conversions-only       Filter the list output to display only converted package version.
      --verbose                     Display extended package version details.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List all package versions in the Dev Hub org.

  Description

ALIASES
  $ sf force package version list

EXAMPLES
  List package versions in your default Dev Hub org that were created in the last 3 days; show only the released
  versions and order the list using the PatchVersion field. Display extended details about each package version:

    $ sf package version list --verbose --created-last-days 3 --released --order-by PatchVersion

  List the released package versions for the two specified packages that were modified today; use the Dev Hub org with
  username devhub@example.com:

    $ sf package version list --packages 0Ho000000000000,0Ho000000000001 --released --modified-last-days 0 \
      --target-dev-hub devhub@example.com

  List all released package versions in your default Dev Hub org:

    $ sf package version list --released

  List package versions that were modified today in your default Dev Hub org; show limited details about each one:

    $ sf package version list --concise --modified-last-days 0

  List package versions that are based on the "featureA" branch in your source control system that were modified today
  in your default Dev Hub org; show limited details about each one:

    $ sf package version list --concise --modified-last-days 0 --branch featureA

  List released package versions that were created in the last 3 days in your default Dev Hub org; show limited
  details:

    $ sf package version list --concise --created-last-days 3 --released

  List released package versions that were modified today for the two packages with specified aliases in your default
  Dev Hub org:

    $ sf package version list --packages exp-mgr,exp-mgr-util --released --modified-last-days 0
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/list.ts)_

## `sf package version promote`

Promote a package version to released.

```
USAGE
  $ sf package version promote -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-n]

FLAGS
  -n, --no-prompt               Don't prompt to confirm setting the package version as released.
  -p, --package=<value>         (required) ID (starts with 04t) or alias of the package version to promote.
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Promote a package version to released.

  Supply the ID or alias of the package version you want to promote. Promotes the package version to released status.

ALIASES
  $ sf force package version promote

EXAMPLES
  Promote the package version with the specified ID to released; uses your default Dev Hub org:

    $ sf package version promote --package 04t...

  Promote the package version with the specified alias to released; uses the Dev Hub org with username
  devhub@example.com:

    $ sf package version promote --package awesome_package_alias --target-dev-hub devhub@example.com

  Promote the package version with an alias that has spaces to released:

    $ sf package version promote --package "Awesome Package Alias"
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/promote.ts)_

## `sf package version report`

Retrieve details about a package version in the Dev Hub org.

```
USAGE
  $ sf package version report -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [--verbose]

FLAGS
  -p, --package=<value>         (required) ID (starts with 04t) or alias of the package to retrieve details for.
  -v, --target-dev-hub=<value>  (required) Username or alias of the Dev Hub org. Not required if the `target-dev-hub`
                                configuration variable is already set.
      --api-version=<value>     Override the api version used for api requests made by this command
      --verbose                 Display extended package version details.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Retrieve details about a package version in the Dev Hub org.

  To update package version values, run "sf package version update".

ALIASES
  $ sf force package version report

EXAMPLES
  Retrieve details about the package version with the specified ID from your default Dev Hub org:

    $ sf package version report --package 04t...

  Retrieve details about the package version with the specified alias (that contains spaces) from the Dev Hub org with
  username devhub@example.com:

    $ sf package version report --package "Your Package Alias" --target-dev-hub devhub@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/report.ts)_

## `sf package version update`

Update a package version.

```
USAGE
  $ sf package version update -v <value> -p <value> [--json] [--flags-dir <value>] [--api-version <value>] [-a <value>] [-e
    <value>] [-b <value>] [-t <value>] [-k <value>]

FLAGS
  -a, --version-name=<value>         New package version name.
  -b, --branch=<value>               New package version branch.
  -e, --version-description=<value>  New package version description.
  -k, --installation-key=<value>     New installation key for key-protected package (default: null)
  -p, --package=<value>              (required) ID (starts with 04t) or alias of the package to update a version of.
  -t, --tag=<value>                  New package version tag.
  -v, --target-dev-hub=<value>       (required) Username or alias of the Dev Hub org. Not required if the
                                     `target-dev-hub` configuration variable is already set.
      --api-version=<value>          Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Update a package version.

  Specify a new value for each option you want to update.

  To display details about a package version, run "sf package version display".

ALIASES
  $ sf force package version update

EXAMPLES
  Update the package version that has the specified alias (that contains spaces) with a new installation key
  "password123"; uses your default Dev Hub org:

    $ sf package version update --package "Your Package Alias" --installation-key password123

  Update the package version that has the specified ID with a new branch and tag; use the Dev Hub org with username
  devhub@example.com:

    $ sf package version update --package 04t... --branch main --tag 'Release 1.0.7' --target-dev-hub \
      devhub@example.com

  Update the package version that has the specified ID with a new description:

    $ sf package version update --package 04t... --version-description "New Package Version Description"
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package/version/update.ts)_

## `sf package1 version create`

Create a first-generation package version in the release org.

```
USAGE
  $ sf package1 version create -o <value> -i <value> -n <value> [--json] [--flags-dir <value>] [--api-version <value>] [-d
    <value>] [-v <value>] [-m] [-r <value>] [-p <value>] [-k <value>] [-w <value>]

FLAGS
  -d, --description=<value>        Package version description.
  -i, --package-id=<value>         (required) ID of the metadata package (starts with 033) of which you’re creating a
                                   new version.
  -k, --installation-key=<value>   Installation key for key-protected package (default: null).
  -m, --managed-released           Create a managed package version.
  -n, --name=<value>               (required) Package version name.
  -o, --target-org=<value>         (required) Username or alias of the target org. Not required if the `target-org`
                                   configuration variable is already set.
  -p, --post-install-url=<value>   Post install URL.
  -r, --release-notes-url=<value>  Release notes URL.
  -v, --version=<value>            Package version in major.minor format, for example, 3.2.
  -w, --wait=<value>               Minutes to wait for the package version to be created (default: 2 minutes).
      --api-version=<value>        Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a first-generation package version in the release org.

  The package version is based on the contents of the specified metadata package. Omit --managed-released if you want to
  create an unmanaged package version.

ALIASES
  $ sf force package1 version create

EXAMPLES
  Create a first-generation package version from the package with the specified ID and name the package version
  "example"; use your default org:

    $ sf package1 version create --package-id 033... --name example

  Same as previous example, but provide a description and wait for 30 minutes for the package version to be created;
  use the specified org:

    $ sf package1 version create --package-id 033... --name example --description "example description" --wait 30 \
      --target-org myorg@example.com

FLAG DESCRIPTIONS
  -m, --managed-released  Create a managed package version.

    To create a beta version, don’t include this parameter.

  -p, --post-install-url=<value>  Post install URL.

    The contents of the post-installation instructions URL are displayed in the UI after installation of the package
    version.

  -r, --release-notes-url=<value>  Release notes URL.

    This link is displayed in the package installation UI to provide release notes for this package version to
    subscribers.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package1/version/create.ts)_

## `sf package1 version create get`

Retrieve the status of a package version creation request.

```
USAGE
  $ sf package1 version create get -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -i, --request-id=<value>   (required) ID of the PackageUploadRequest (starts with 0HD).
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package1 version create get

EXAMPLES
  Get the status of the creation request for the package version with the specified ID in your default org:

    $ sf package1 version create get --request-id 0HD...

  Same as previous example, but use the specified org:

    $ sf package1 version create get --request-id 0HD... --target-org myorg@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package1/version/create/get.ts)_

## `sf package1 version display`

Display details about a first-generation package version.

```
USAGE
  $ sf package1 version display -o <value> -i <value> [--json] [--flags-dir <value>] [--api-version <value>]

FLAGS
  -i, --package-version-id=<value>  (required) ID (starts with 04t) of the metadata package version whose details you
                                    want to display.
  -o, --target-org=<value>          (required) Username or alias of the target org. Not required if the `target-org`
                                    configuration variable is already set.
      --api-version=<value>         Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package1 version display

EXAMPLES
  Display details about the first-generation package version with the specified ID in your default org:

    $ sf package1 version display --package-version-id 04t...

  Same as previous example, but use the specified org:

    $ sf package1 version display --package-version-id 04t... --target-org myorg@example.com
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package1/version/display.ts)_

## `sf package1 version list`

List package versions for the specified first-generation package or for the org.

```
USAGE
  $ sf package1 version list -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-i <value>]

FLAGS
  -i, --package-id=<value>   Metadata package ID (starts with 033) whose package versions you want to list.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

ALIASES
  $ sf force package1 version list

EXAMPLES
  List all first-generation package versions in your default org:

    $ sf package1 version list

  List package versions for the specified first-generation package in the specifief org:

    $ sf package1 version list --package-id 033... --target-org myorg@example.com

FLAG DESCRIPTIONS
  -i, --package-id=<value>  Metadata package ID (starts with 033) whose package versions you want to list.

    If not specified, shows all versions for all packages (managed and unmanaged) in the org.
```

_See code: [@salesforce/plugin-packaging](https://github.com/salesforcecli/plugin-packaging/blob/2.8.0/src/commands/package1/version/list.ts)_

## `sf plugins`

List installed plugins.

```
USAGE
  $ sf plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/index.ts)_

## `sf plugins discover`

See a list of 3rd-party sf plugins you can install.

```
USAGE
  $ sf plugins discover [--json] [--flags-dir <value>]

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

EXAMPLES
  $ sf plugins discover
```

_See code: [@salesforce/plugin-marketplace](https://github.com/salesforcecli/plugin-marketplace/blob/1.2.24/src/commands/plugins/discover.ts)_

## `sf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sf plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sf plugins inspect @salesforce/plugin-packaging
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/inspect.ts)_

## `sf plugins install PLUGIN`

Installs a plugin into sf.

```
USAGE
  $ sf plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into sf.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ sf plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ sf plugins install @salesforce/plugin-packaging

  Install a plugin from a github url.

    $ sf plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ sf plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/install.ts)_

## `sf plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ sf plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ sf plugins link @salesforce/plugin-packaging
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/link.ts)_

## `sf plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ sf plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/reset.ts)_

## `sf plugins trust verify`

Validate a digital signature.

```
USAGE
  $ sf plugins trust verify -n <value> [--json] [--flags-dir <value>] [-r <value>]

FLAGS
  -n, --npm=<value>       (required) Specify the npm name. This can include a tag/version.
  -r, --registry=<value>  The registry name. The behavior is the same as npm.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Validate a digital signature.

  Verifies the digital signature on an npm package matches the signature and key stored at the expected URLs.

EXAMPLES
  $ sf plugins trust verify --npm @scope/npmName --registry https://npm.pkg.github.com

  $ sf plugins trust verify --npm @scope/npmName
```

_See code: [@salesforce/plugin-trust](https://github.com/salesforcecli/plugin-trust/blob/3.7.25/src/commands/plugins/trust/verify.ts)_

## `sf plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ sf plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sf plugins unlink
  $ sf plugins remove

EXAMPLES
  $ sf plugins uninstall @salesforce/plugin-packaging
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/uninstall.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/update.ts)_

## `sf project convert mdapi`

Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

```
USAGE
  $ sf project convert mdapi -r <value> [--json] [--flags-dir <value>] [--api-version <value>] [-d <value>] [-p <value>...
    | -x <value> | -m <value>...]

FLAGS
  -d, --output-dir=<value>       Directory to store your files in after they’re converted to source format; can be an
                                 absolute or relative path.
  -m, --metadata=<value>...      Metadata component names to convert.
  -p, --metadata-dir=<value>...  Root of directory or zip file of metadata formatted files to convert.
  -r, --root-dir=<value>         (required) Root directory that contains the Metadata API–formatted metadata.
  -x, --manifest=<value>         File path to manifest (package.xml) of metadata types to convert.
      --api-version=<value>      Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

  To use Salesforce CLI to work with components that you retrieved via Metadata API, first convert your files from the
  metadata format to the source format using this command.

  To convert files from the source format back to the metadata format, run "sf project convert source".

  To convert multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with
  multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax
  applies to --manifest and --source-dir.

ALIASES
  $ sf force mdapi convert

EXAMPLES
  Convert metadata formatted files in the specified directory into source formatted files; writes converted files to
  your default package directory:

    $ sf project convert mdapi --root-dir path/to/metadata

  Similar to previous example, but writes converted files to the specified output directory:

    $ sf project convert mdapi --root-dir path/to/metadata --output-dir path/to/outputdir

FLAG DESCRIPTIONS
  -p, --metadata-dir=<value>...  Root of directory or zip file of metadata formatted files to convert.

    The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its sub-directories).

    If you specify this flag, don’t specify --manifest or --metadata. If the comma-separated list you’re supplying
    contains spaces, enclose the entire comma-separated list in one set of double quotes.

  -x, --manifest=<value>  File path to manifest (package.xml) of metadata types to convert.

    If you specify this parameter, don’t specify --metadata or --source-dir.
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/convert/mdapi.ts)_

## `sf project convert source`

Convert source-formatted files into metadata that you can deploy using Metadata API.

```
USAGE
  $ sf project convert source [--json] [--flags-dir <value>] [--api-version <value>] [-r <value>] [-d <value>] [-n <value>]
    [-p <value>... | -x <value> | -m <value>...]

FLAGS
  -d, --output-dir=<value>     [default: metadataPackage_1724785521500] Output directory to store the Metadata
                               API–formatted files in.
  -m, --metadata=<value>...    Metadata component names to convert.
  -n, --package-name=<value>   Name of the package to associate with the metadata-formatted files.
  -p, --source-dir=<value>...  Paths to the local source files to convert.
  -r, --root-dir=<value>       Source directory other than the default package to convert.
  -x, --manifest=<value>       Path to the manifest (package.xml) file that specifies the metadata types to convert.
      --api-version=<value>    API Version to use in the generated project's manifest. By default, will use the version
                               from sfdx-project.json

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Convert source-formatted files into metadata that you can deploy using Metadata API.

  To convert source-formatted files into the metadata format, so that you can deploy them using Metadata API, run this
  command. Then deploy the metadata using "sf project deploy".

  To convert Metadata API–formatted files into the source format, run "sf project convert mdapi".

  To specify a package name that includes spaces, enclose the name in single quotes.

  To convert multiple components, either set multiple --metadata <name> flags or a single --metadata flag with multiple
  names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to
  --manifest and --source-dir.

ALIASES
  $ sf force source convert

EXAMPLES
  Convert source-formatted files in the specified directory into metadata-formatted files; writes converted files into
  a new directory:

    $ sf project convert source --root-dir path/to/source

  Similar to previous example, but writes converted files to the specified output directory and associates the files
  with the specified package:

    $ sf project convert source --root-dir path/to/source --output-dir path/to/outputdir --package-name 'My Package'

FLAG DESCRIPTIONS
  -p, --source-dir=<value>...  Paths to the local source files to convert.

    The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its sub-directories).

    If you specify this parameter, don’t specify --manifest or --metadata.

  -x, --manifest=<value>  Path to the manifest (package.xml) file that specifies the metadata types to convert.

    If you specify this parameter, don’t specify --metadata or --source-dir.

  --api-version=<value>

    API Version to use in the generated project's manifest. By default, will use the version from sfdx-project.json

    Override the api version used for api requests made by this command
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/convert/source.ts)_

## `sf project convert source-behavior`

Enable a behavior of your project source files, and then update your Salesforce DX project to implement the behavior.

```
USAGE
  $ sf project convert source-behavior -b
    decomposeCustomLabelsBeta2|decomposeCustomLabelsBeta|decomposePermissionSetBeta|decomposeSharingRulesBeta|decomposeW
    orkflowBeta [--json] [--flags-dir <value>] [--dry-run] [--preserve-temp-dir] [-o <value>]

FLAGS
  -b, --behavior=<option>   (required) Behavior to enable; the values correspond to the possible values of the
                            "sourceBehaviorOption" option in the "sfdx-project.json" file.
                            <options: decomposeCustomLabelsBeta2|decomposeCustomLabelsBeta|decomposePermissionSetBeta|de
                            composeSharingRulesBeta|decomposeWorkflowBeta>
  -o, --target-org=<value>  Username or alias of the target org.
      --dry-run             Display what the command would do, but don't make any actual changes.
      --preserve-temp-dir   Don't delete the metadata API format temporary directory that this command creates. Useful
                            for debugging.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Enable a behavior of your project source files, and then update your Salesforce DX project to implement the behavior.

  Specifically, this command updates the "sourceBehaviorOption" option in the "sfdx-project.json" file and then converts
  the associated local source files in your project as needed.

  For example, run this command with the "--behavior decomposePermissionSetBeta" flag to start decomposing permission
  sets when you deploy or retrieve them. Decomposing means breaking up the monolithic metadata API format XML file that
  corresponds to a metadata component into smaller XML files and directories based on its subtypes. Permission sets are
  not decomposed by default; you must opt-in to start decomposing them by using this command. When the command finishes,
  your "sfdx-project.json" file is updated to always decompose permission sets, and the existing permission set files in
  your local package directories are converted into the new decomposed format. You run this command only once for a
  given behavior change.

  For more information about the possible values for the --behavior flag, see the "sourceBehaviorOptions" section in the
  https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm topic.

EXAMPLES
  Update your Salesforce DX project to decompose custom permission sets:

    $ sf project convert source-behavior --behavior decomposePermissionSetBeta

  Display what the command would do, but don't change any existing files:

    $ sf project convert source-behavior --behavior decomposePermissionSetBeta --dry-run

  Keep the temporary directory that contains the interim metadata API formatted files:

    $ sf project convert source-behavior --behavior decomposePermissionSetBeta --dry-run --preserve-temp-dir
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/convert/source-behavior.ts)_

## `sf project delete source`

Delete source from your project and from a non-source-tracked org.

```
USAGE
  $ sf project delete source -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-w <value>] [--tests
    <value>...] [-l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg] [-r] [-m <value>...] [-p <value>...] [-f
    [-t | -c]] [--verbose]

FLAGS
  -c, --check-only             Validate delete command but don't delete anything from the org or the local project.
  -f, --force-overwrite        Ignore conflict warnings and overwrite changes to the org.
  -m, --metadata=<value>...    Metadata components to delete.
  -o, --target-org=<value>     (required) Username or alias of the target org. Not required if the `target-org`
                               configuration variable is already set.
  -p, --source-dir=<value>...  Source file paths to delete.
  -r, --no-prompt              Don't prompt for delete confirmation.
  -t, --track-source           If the delete succeeds, update the source tracking information.
  -w, --wait=<value>           Number of minutes to wait for the command to finish.
      --api-version=<value>    Override the api version used for api requests made by this command
      --verbose                Verbose output of the delete result.

TEST FLAGS
  -l, --test-level=<option>  Deployment Apex testing level.
                             <options: NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg>
      --tests=<value>...     Apex tests to run when --test-level is RunSpecifiedTests.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Delete source from your project and from a non-source-tracked org.

  Use this command to delete components from orgs that don’t have source tracking. To remove deleted items from orgs
  that have source tracking enabled, "sf project deploy start".

  When you run this command, both the local source file and the metadata component in the org are deleted.

  To delete multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with
  multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax
  applies to --manifest and --source-dir.

ALIASES
  $ sf force source delete

EXAMPLES
  Delete all local Apex source files and all Apex classes from the org with alias "my-scratch":

    $ sf project delete source --metadata ApexClass --target-org my-scratch

  Delete a specific Apex class and a Profile that has a space in it from your default org; don't prompt for
  confirmation:

    $ sf project delete source --metadata ApexClass:MyFabulousApexClass --metadata "Profile: My Profile" --no-prompt

  Run the tests that aren’t in any managed packages as part of the deletion; if the delete succeeds, and the org has
  source-tracking enabled, update the source tracking information:

    $ sf project delete source --metadata ApexClass --test-level RunLocalTests --track-source

  Delete the Apex source files in a directory and the corresponding components from your default org:

    $ sf project delete source --source-dir force-app/main/default/classes

FLAG DESCRIPTIONS
  -c, --check-only  Validate delete command but don't delete anything from the org or the local project.

    IMPORTANT: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained
    certain terms to avoid any effect on customer implementations.

    Validates the deleted metadata and runs all Apex tests, but prevents the deletion from being saved to the org.

    If you change a field type from Master-Detail to Lookup or vice versa, that change isn’t supported when using the
    --check-only parameter to test a deletion (validation). This kind of change isn’t supported for test deletions to
    avoid the risk of data loss or corruption. If a change that isn’t supported for test deletions is included in a
    deletion package, the test deletion fails and issues an error.

    If your deletion package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the
    changes prior to deploying to Production by performing a full deletion to another test Sandbox. A full deletion
    includes a validation of the changes as part of the deletion process.

    Note: A Metadata API deletion that includes Master-Detail relationships deletes all detail records in the Recycle
    Bin in the following cases.

    1. For a deletion with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before
    proceeding to delete the Master-Detail field, or the deletion fails. During the deletion, detail records are
    permanently deleted from the Recycle Bin and cannot be recovered.

    2. For a deletion that converts a Lookup field relationship to a Master-Detail relationship, detail records must
    reference a master record or be soft-deleted (sent to the Recycle Bin) for the deletion to succeed. However, a
    successful deletion permanently deletes any detail records in the Recycle Bin.

  -l, --test-level=NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg  Deployment Apex testing level.

    Valid values are:

    - NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as
    sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

    - RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ
    from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75%
    code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
    trigger individually and is different than the overall coverage percentage.

    - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked
    packages. This test level is the default for production deployments that include Apex classes or triggers.

    - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

    If you don’t specify a test level, the default behavior depends on the contents of your deployment package and
    target org. For more information, see “Running Tests in a Deployment” in the Metadata API Developer Guide.

  -m, --metadata=<value>...  Metadata components to delete.

    If you specify this parameter, don’t specify --source-dir.

  -p, --source-dir=<value>...  Source file paths to delete.

    The supplied paths can be a single file (in which case the operation is applied to only one file) or a folder (in
    which case the operation is applied to all metadata types in the directory and its sub-directories).

    If you specify this parameter, don’t specify --metadata.

  -w, --wait=<value>  Number of minutes to wait for the command to finish.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you.

  --tests=<value>...  Apex tests to run when --test-level is RunSpecifiedTests.

    If a test name contains a space, enclose it in double quotes.
    For multiple test names, use one of the following formats:

    - Repeat the flag for multiple test names: --tests Test1 --tests Test2 --tests "Test With Space"
    - Separate the test names with spaces: --tests Test1 Test2 "Test With Space"
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/delete/source.ts)_

## `sf project delete tracking`

Delete all local source tracking information.

```
USAGE
  $ sf project delete tracking -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-p]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --no-prompt            Don't prompt for source tracking override confirmation.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Delete all local source tracking information.

  WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

  Deletes all local source tracking information. When you next run 'project deploy preview', Salesforce CLI displays all
  local and remote files as changed, and any files with the same name are listed as conflicts.

ALIASES
  $ sf force source tracking clear

EXAMPLES
  Delete local source tracking for the org with alias "my-scratch":

    $ sf project delete tracking --target-org my-scratch
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/delete/tracking.ts)_

## `sf project deploy cancel`

Cancel a deploy operation.

```
USAGE
  $ sf project deploy cancel [--json] [--flags-dir <value>] [-o <value>] [--async | -w <minutes>] [-i <value>] [-r]

FLAGS
  -i, --job-id=<value>      Job ID of the deploy operation you want to cancel.
  -o, --target-org=<value>  Username or alias of the target org.
  -r, --use-most-recent     Use the job ID of the most recent deploy operation.
  -w, --wait=<minutes>      Number of minutes to wait for the command to complete and display results.
      --async               Run the command asynchronously.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Cancel a deploy operation.

  Use this command to cancel a deploy operation that hasn't yet completed in the org. Deploy operations include standard
  deploys, quick deploys, deploy validations, and deploy cancellations.

  Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
  recent deploy operation.

ALIASES
  $ sf deploy metadata cancel

EXAMPLES
  Cancel a deploy operation using a job ID:

    $ sf project deploy cancel --job-id 0Af0x000017yLUFCA2

  Cancel the most recent deploy operation:

    $ sf project deploy cancel --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deploy operation you want to cancel.

    These commands return a job ID if they time out or you specified the --async flag:

    - sf project deploy start
    - sf project deploy validate
    - sf project deploy quick
    - sf project deploy cancel

    The job ID is valid for 10 days from when you started the deploy operation.

  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

    For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less.
    If your most recent deploy operations was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To
    resume watching the cancellation, run "sf project deploy resume". To check the status of the cancellation, run "sf
    project deploy report".

  --async  Run the command asynchronously.

    The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To
    resume watching the cancellation, run "sf project deploy resume". To check the status of the cancellation, run "sf
    project deploy report".
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/cancel.ts)_

## `sf project deploy preview`

Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

```
USAGE
  $ sf project deploy preview -o <value> [--json] [--flags-dir <value>] [-c] [-x <value> | -d <value>... | -m <value>...]
    [--concise]

FLAGS
  -c, --ignore-conflicts       Don't display conflicts in preview of the deployment.
  -d, --source-dir=<value>...  Path to the local source files to preview.
  -m, --metadata=<value>...    Metadata component names to preview.
  -o, --target-org=<value>     (required) Username or alias of the target org. Not required if the `target-org`
                               configuration variable is already set.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to preview.
      --concise                Show only the changes that will be deployed; omits files that are forceignored.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

  You must run this command from within a project.

  The command outputs a table that describes what will happen if you run the "sf project deploy start" command. The
  table lists the metadata components that will be deployed and deleted. The table also lists the current conflicts
  between files in your local project and components in the org. Finally, the table lists the files that won't be
  deployed because they're included in your .forceignore file.

  If your org allows source tracking, then this command displays potential conflicts between the org and your local
  project. Some orgs, such as production org, never allow source tracking. Source tracking is enabled by default on
  scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source
  flag on the "sf org create scratch|sandbox" commands.

  To preview the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single
  --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double
  quotes. The same syntax applies to --manifest and --source-dir.

ALIASES
  $ sf deploy metadata preview

EXAMPLES
  NOTE: The commands to preview a deployment and actually deploy it use similar flags. We provide a few preview examples here, but see the help for "sf project deploy start" for more examples that you can adapt for previewing.

  Preview the deployment of source files in a directory, such as force-app, to your default org:

    $ sf project deploy preview  --source-dir force-app

  Preview the deployment of all Apex classes to an org with alias "my-scratch":

    $ sf project deploy preview --metadata ApexClass --target-org my-scratch

  Preview deployment of a specific Apex class:

    $ sf project deploy preview --metadata ApexClass:MyApexClass

  Preview deployment of all components listed in a manifest:

    $ sf project deploy preview --manifest path/to/package.xml

FLAG DESCRIPTIONS
  -c, --ignore-conflicts  Don't display conflicts in preview of the deployment.

    This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as
    production orgs.

  -d, --source-dir=<value>...  Path to the local source files to preview.

    The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its subdirectories).

    If you specify this flag, don’t specify --metadata or --manifest.

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to preview.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/preview.ts)_

## `sf project deploy quick`

Quickly deploy a validated deployment to an org.

```
USAGE
  $ sf project deploy quick [--json] [--flags-dir <value>] [--async | -w <minutes>] [--concise | --verbose] [-i <value>]
    [-o <value>] [-r] [-a <value>]

FLAGS
  -a, --api-version=<value>  Target API version for the deploy.
  -i, --job-id=<value>       Job ID of the deployment you want to quick deploy.
  -o, --target-org=<value>   Username or alias of the target org.
  -r, --use-most-recent      Use the job ID of the most recently validated deployment.
  -w, --wait=<minutes>       [default: 33 minutes] Number of minutes to wait for the command to complete and display
                             results.
      --async                Run the command asynchronously.
      --concise              Show concise output of the deploy result.
      --verbose              Show verbose output of the deploy result.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Quickly deploy a validated deployment to an org.

  Before you run this command, first create a validated deployment with the "sf project deploy validate" command, which
  returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command.
  Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently
  validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

  Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These
  tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the
  deployment to your production org take several hours and you don’t want to risk a failed deploy.

  This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org.
  This command doesn’t attempt to merge your source with the versions in your org.

  Note: Don't use this command on sandboxes; the command is intended to be used on production orgs. By default,
  sandboxes don't run tests during a deploy. Use "sf project deploy start" instead.

ALIASES
  $ sf deploy metadata quick

EXAMPLES
  Run a quick deploy to your default org using a job ID:

    $ sf project deploy quick --job-id 0Af0x000017yLUFCA2

  Asynchronously run a quick deploy of the most recently validated deployment to an org with alias "my-prod-org":

    $ sf project deploy quick --async --use-most-recent --target-org my-prod-org

FLAG DESCRIPTIONS
  -a, --api-version=<value>  Target API version for the deploy.

    Use this flag to override the default API version with the API version of your package.xml file. The default API
    version is the latest version supported by the CLI.

  -i, --job-id=<value>  Job ID of the deployment you want to quick deploy.

    The job ID is valid for 10 days from when you started the validation.

  -r, --use-most-recent  Use the job ID of the most recently validated deployment.

    For performance reasons, this flag uses only job IDs that were validated in the past 3 days or less. If your most
    recent deployment validation was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To
    resume watching the deploy, run "sf project deploy resume". To check the status of the deploy, run "sf project
    deploy report".

  --async  Run the command asynchronously.

    The command immediately returns the control of the terminal to you. This way, you can continue to use the CLI. To
    resume watching the deploy, run "sf project deploy resume". To check the status of the deploy, run "sf project
    deploy report".

ERROR CODES
  Succeeded (0)          The deploy succeeded.
  Canceled (1)           The deploy was canceled.
  Failed (1)             The deploy failed.
  SucceededPartial (68)  The deploy partially succeeded.
  InProgress (69)        The deploy is in progress.
  Pending (69)           The deploy is pending.
  Canceling (69)         The deploy is being canceled.
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/quick.ts)_

## `sf project deploy report`

Check or poll for the status of a deploy operation.

```
USAGE
  $ sf project deploy report [--json] [--flags-dir <value>] [-o <value>] [-i <value>] [-r] [--coverage-formatters
    clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...] [--junit]
    [--results-dir <value>] [-w <minutes>]

FLAGS
  -i, --job-id=<value>      Job ID of the deploy operation you want to check the status of.
  -o, --target-org=<value>  Username or alias of the target org.
  -r, --use-most-recent     Use the job ID of the most recent deploy operation.
  -w, --wait=<minutes>      Number of minutes to wait for command to complete and display results.

TEST FLAGS
  --coverage-formatters=<option>...  Format of the code coverage results.
                                     <options: clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|t
                                     ext|text-summary>
  --junit                            Output JUnit test results.
  --results-dir=<value>              Output directory for code coverage and JUnit results; defaults to the deploy ID.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Check or poll for the status of a deploy operation.

  Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

  Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
  recent deploy operation. If you specify the --wait flag, the command polls for the status every second until the
  timeout of --wait minutes. If you don't specify the --wait flag, the command simply checks and displays the status of
  the deploy; the command doesn't poll for the status.

  You typically don't specify the --target-org flag because the cached job already references the org to which you
  deployed. But if you run this command on a computer different than the one from which you deployed, then you must
  specify the --target-org and it must point to the same org.

  This command doesn't update source tracking information.

ALIASES
  $ sf deploy metadata report

EXAMPLES
  Check the status using a job ID:

    $ sf project deploy report --job-id 0Af0x000017yLUFCA2

  Check the status of the most recent deploy operation:

    $ sf project deploy report --use-most-recent

  Poll for the status using a job ID and target org:

    $ sf project deploy report --job-id 0Af0x000017yLUFCA2 --target-org me@my.org --wait 30

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deploy operation you want to check the status of.

    These commands return a job ID if they time out or you specified the --async flag:

    - sf project deploy start
    - sf project deploy validate
    - sf project deploy quick
    - sf project deploy cancel

    The job ID is valid for 10 days from when you started the deploy operation.

  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

    For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less.
    If your most recent operation was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you and
    returns the job ID. To resume the deployment, run "sf project deploy resume". To check the status of the deployment,
    run "sf project deploy report".

  --coverage-formatters=clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...

    Format of the code coverage results.

    For multiple formatters, repeat the flag for each formatter.
    --coverage-formatters lcov --coverage-formatters clover
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/report.ts)_

## `sf project deploy resume`

Resume watching a deploy operation and update source tracking when the deploy completes.

```
USAGE
  $ sf project deploy resume [--json] [--flags-dir <value>] [--concise | --verbose] [-i <value>] [-r] [-w <minutes>]
    [--coverage-formatters clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...]
    [--junit] [--results-dir <value>]

FLAGS
  -i, --job-id=<value>   Job ID of the deploy operation you want to resume.
  -r, --use-most-recent  Use the job ID of the most recent deploy operation.
  -w, --wait=<minutes>   Number of minutes to wait for the command to complete and display results.
      --concise          Show concise output of the deploy operation result.
      --verbose          Show verbose output of the deploy operation result.

TEST FLAGS
  --coverage-formatters=<option>...  Format of the code coverage results.
                                     <options: clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|t
                                     ext|text-summary>
  --junit                            Output JUnit test results.
  --results-dir=<value>              Output directory for code coverage and JUnit results; defaults to the deploy ID.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Resume watching a deploy operation and update source tracking when the deploy completes.

  Use this command to resume watching a deploy operation if the original command times out or you specified the --async
  flag. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations. This
  command doesn't resume the original operation itself, because the operation always continues after you've started it,
  regardless of whether you're watching it or not. When the deploy completes, source tracking information is updated as
  needed.

  Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
  recent deploy operation.

ALIASES
  $ sf deploy metadata resume

EXAMPLES
  Resume watching a deploy operation using a job ID:

    $ sf project deploy resume --job-id 0Af0x000017yLUFCA2

  Resume watching the most recent deploy operation:

    $ sf project deploy resume --use-most-recent

FLAG DESCRIPTIONS
  -i, --job-id=<value>  Job ID of the deploy operation you want to resume.

    These commands return a job ID if they time out or you specified the --async flag:

    - sf project deploy start
    - sf project deploy validate
    - sf project deploy quick
    - sf project deploy cancel

    The job ID is valid for 10 days from when you started the deploy operation.

  -r, --use-most-recent  Use the job ID of the most recent deploy operation.

    For performance reasons, this flag uses job IDs for deploy operations that started only in the past 3 days or less.
    If your most recent operation was more than 3 days ago, this flag won't find a job ID.

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you. To
    resume watching the deploy operation, run this command again. To check the status of the deploy operation, run "sf
    project deploy report".

  --coverage-formatters=clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...

    Format of the code coverage results.

    For multiple formatters, repeat the flag for each formatter.
    --coverage-formatters lcov --coverage-formatters clover

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

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/resume.ts)_

## `sf project deploy start`

Deploy metadata to an org from your local project.

```
USAGE
  $ sf project deploy start -o <value> [--json] [--flags-dir <value>] [-a <value>] [--async | -w <minutes>] [--concise |
    --verbose] [--dry-run] [-c] [-r] [-g] [--single-package ] [-t <value>...] [-l
    NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg] [--purge-on-delete] [--pre-destructive-changes <value>
    [-x <value> | -d <value>... | -m <value>... | --metadata-dir <value>]] [--post-destructive-changes <value> ]
    [--coverage-formatters clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...]
    [--junit] [--results-dir <value>]

FLAGS
  -a, --api-version=<value>  Target API version for the deploy.
  -c, --ignore-conflicts     Ignore conflicts and deploy local files, even if they overwrite changes in the org.
  -g, --ignore-warnings      Ignore warnings and allow a deployment to complete successfully.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -r, --ignore-errors        Ignore any errors and don’t roll back deployment.
  -w, --wait=<minutes>       Number of minutes to wait for command to complete and display results.
      --async                Run the command asynchronously.
      --concise              Show concise output of the deploy result.
      --dry-run              Validate deploy and run Apex tests but don’t save to the org.
      --verbose              Show verbose output of the deploy result.

SOURCE FORMAT FLAGS
  -d, --source-dir=<value>...  Path to the local source files to deploy.
  -m, --metadata=<value>...    Metadata component names to deploy. Wildcards (`*` ) supported as long as you use quotes,
                               such as `ApexClass:MyClass*`.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to deploy.

TEST FLAGS
  -l, --test-level=<option>              Deployment Apex testing level.
                                         <options: NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg>
  -t, --tests=<value>...                 Apex tests to run when --test-level is RunSpecifiedTests.
      --coverage-formatters=<option>...  Format of the code coverage results.
                                         <options: clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamci
                                         ty|text|text-summary>
      --junit                            Output JUnit test results.
      --results-dir=<value>              Output directory for code coverage and JUnit results; defaults to the deploy
                                         ID.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

METADATA API FORMAT FLAGS
  --metadata-dir=<value>  Root of directory or zip file of metadata formatted files to deploy.
  --single-package        Indicates that the metadata zip file points to a directory structure for a single package.

DELETE FLAGS
  --post-destructive-changes=<value>  File path for a manifest (destructiveChangesPost.xml) of components to delete
                                      after the deploy.
  --pre-destructive-changes=<value>   File path for a manifest (destructiveChangesPre.xml) of components to delete
                                      before the deploy.
  --purge-on-delete                   Specify that deleted components in the destructive changes manifest file are
                                      immediately eligible for deletion rather than being stored in the Recycle Bin.

DESCRIPTION
  Deploy metadata to an org from your local project.

  You must run this command from within a project.

  Metadata components are deployed in source format by default. Deploy them in metadata format by specifying the
  --metadata-dir flag, which specifies the root directory or ZIP file that contains the metadata formatted files you
  want to deploy.

  If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production
  orgs, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable
  source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create
  scratch|sandbox" commands.

  To deploy multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with
  multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax
  applies to --manifest and --source-dir.

ALIASES
  $ sf deploy metadata

EXAMPLES
  Deploy local changes not in the org; uses your default org:

    $ sf project deploy start

  Deploy all source files in the "force-app" directory to an org with alias "my-scratch"; show only concise output, in
  other words don't print a list of all the source that was deployed:

    $ sf project deploy start  --source-dir force-app --target-org my-scratch --concise

  Deploy all the Apex classes and custom objects that are in the "force-app" directory. The list views, layouts, etc,
  that are associated with the custom objects are also deployed. Both examples are equivalent:

    $ sf project deploy start --source-dir force-app/main/default/classes force-app/main/default/objects
    $ sf project deploy start --source-dir force-app/main/default/classes --source-dir \
      force-app/main/default/objects

  Deploy all Apex classes that are in all package directories defined in the "sfdx-project.json" file:

    $ sf project deploy start --metadata ApexClass

  Deploy a specific Apex class; ignore any conflicts between the local project and org (be careful with this flag,
  because it will overwrite the Apex class in the org if there are conflicts!):

    $ sf project deploy start --metadata ApexClass:MyApexClass --ignore-conflicts

  Deploy specific Apex classes that match a pattern; in this example, deploy Apex classes whose names contain the
  string "MyApex". Also ignore any deployment warnings (again, be careful with this flag! You typically want to see
  the warnings):

    $ sf project deploy start --metadata 'ApexClass:MyApex*' --ignore-warnings

  Deploy a custom object called ExcitingObject that's in the SBQQ namespace:

    $ sf project deploy start --metadata CustomObject:SBQQ__ExcitingObject

  Deploy all custom objects in the SBQQ namespace by using a wildcard and quotes:

    $ sf project deploy start --metadata 'CustomObject:SBQQ__*'

  Deploy all custom objects and Apex classes found in all defined package directories (both examples are equivalent):

    $ sf project deploy start --metadata CustomObject ApexClass
    $ sf project deploy start --metadata CustomObject --metadata ApexClass

  Deploy all Apex classes and a profile that has a space in its name:

    $ sf project deploy start --metadata ApexClass --metadata "Profile:My Profile"

  Deploy all components listed in a manifest:

    $ sf project deploy start --manifest path/to/package.xml

  Run the tests that aren’t in any managed packages as part of a deployment:

    $ sf project deploy start --metadata ApexClass --test-level RunLocalTests

  Deploy all metadata formatted files in the "MDAPI" directory:

    $ sf project deploy start --metadata-dir MDAPI

  Deploy all metadata formatted files in the "MDAPI" directory; items listed in the MDAPI/destructiveChangesPre.xml
  and MDAPI/destructiveChangesPost.xml manifests are immediately eligible for deletion rather than stored in the
  Recycle Bin:

    $ sf project deploy start --metadata-dir MDAPI --purge-on-delete

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

    If you specify this flag, and a warning occurs, the success status of the deployment is set to true. If you don't
    specify this flag, and a warning occurs, then the success status is set to false, and the warning is treated like an
    error.

    This flag is useful in a CI environment and your deployment includes destructive changes; if you try to delete a
    component that doesn't exist in the org, you get a warning. In this case, to ensure that the command returns a
    success value of true, specify this flag.

  -l, --test-level=NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg  Deployment Apex testing level.

    Valid values are:

    - NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as
    sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

    - RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ
    from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75%
    code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
    trigger individually and is different than the overall coverage percentage.

    - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked
    packages. This test level is the default for production deployments that include Apex classes or triggers.

    - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

    If you don’t specify a test level, the default behavior depends on the contents of your deployment package and
    target org. For more information, see [Running Tests in a
    Deployment](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm)
    in the "Metadata API Developer Guide".

  -r, --ignore-errors  Ignore any errors and don’t roll back deployment.

    Never use this flag when deploying to a production org. If you specify it, components without errors are deployed
    and components with errors are skipped, and could result in an inconsistent production org.

  -t, --tests=<value>...  Apex tests to run when --test-level is RunSpecifiedTests.

    If a test name contains a space, enclose it in double quotes.
    For multiple test names, use one of the following formats:

    - Repeat the flag for multiple test names: --tests Test1 --tests Test2 --tests "Test With Space"
    - Separate the test names with spaces: --tests Test1 Test2 "Test With Space"

  -w, --wait=<minutes>  Number of minutes to wait for command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you and
    returns the job ID. To resume the deployment, run "sf project deploy resume". To check the status of the deployment,
    run "sf project deploy report".

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to deploy.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

  --async  Run the command asynchronously.

    The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the
    CLI. To resume the deployment, run "sf project deploy resume". To check the status of the deployment, run "sf
    project deploy report".

  --coverage-formatters=clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...

    Format of the code coverage results.

    For multiple formatters, repeat the flag for each formatter.
    --coverage-formatters lcov --coverage-formatters clover

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

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/start.ts)_

## `sf project deploy validate`

Validate a metadata deployment without actually executing it.

```
USAGE
  $ sf project deploy validate -o <value> [--json] [--flags-dir <value>] [-a <value>] [--async] [--concise | --verbose] [-m
    <value>...] [-d <value>...] [--single-package --metadata-dir <value>] [-t <value>...] [-l
    RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests] [-w <minutes>] [-g] [--coverage-formatters
    clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...] [--junit]
    [--results-dir <value>] [--purge-on-delete -x <value>] [--pre-destructive-changes <value> ]
    [--post-destructive-changes <value> ]

FLAGS
  -a, --api-version=<value>  Target API version for the validation.
  -g, --ignore-warnings      Ignore warnings and allow a deployment to complete successfully.
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -w, --wait=<minutes>       Number of minutes to wait for the command to complete and display results.
      --async                Run the command asynchronously.
      --concise              Show concise output of the validation result.
      --verbose              Show verbose output of the validation result.

SOURCE FORMAT FLAGS
  -d, --source-dir=<value>...  Path to the local source files to validate for deployment.
  -m, --metadata=<value>...    Metadata component names to validate for deployment.
  -x, --manifest=<value>       Full file path for manifest (package.xml) of components to validate for deployment.

TEST FLAGS
  -l, --test-level=<option>              [default: RunLocalTests] Deployment Apex testing level.
                                         <options: RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests>
  -t, --tests=<value>...                 Apex tests to run when --test-level is RunSpecifiedTests.
      --coverage-formatters=<option>...  Format of the code coverage results.
                                         <options: clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamci
                                         ty|text|text-summary>
      --junit                            Output JUnit test results.
      --results-dir=<value>              Output directory for code coverage and JUnit results; defaults to the deploy
                                         ID.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

METADATA API FORMAT FLAGS
  --metadata-dir=<value>  Root of directory or zip file of metadata formatted files to deploy.
  --single-package        Indicates that the metadata zip file points to a directory structure for a single package.

DELETE FLAGS
  --post-destructive-changes=<value>  File path for a manifest (destructiveChangesPost.xml) of components to delete
                                      after the deploy.
  --pre-destructive-changes=<value>   File path for a manifest (destructiveChangesPre.xml) of components to delete
                                      before the deploy
  --purge-on-delete                   Specify that deleted components in the destructive changes manifest file are
                                      immediately eligible for deletion rather than being stored in the Recycle Bin.

DESCRIPTION
  Validate a metadata deployment without actually executing it.

  Use this command to verify whether a deployment will succeed without actually deploying the metadata to your org. This
  command is similar to "sf project deploy start", except you're required to run Apex tests, and the command returns a
  job ID rather than executing the deployment. If the validation succeeds, then you pass this job ID to the "sf project
  deploy quick" command to actually deploy the metadata. This quick deploy takes less time because it skips running Apex
  tests. The job ID is valid for 10 days from when you started the validation. Validating first is useful if the
  deployment to your production org take several hours and you don’t want to risk a failed deploy.

  You must run this command from within a project.

  This command doesn't support source-tracking. When you quick deploy with the resulting job ID, the source you deploy
  overwrites the corresponding metadata in your org.

  To validate the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single
  --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double
  quotes. The same syntax applies to --manifest and --source-dir.

  Note: Don't use this command on sandboxes; the command is intended to be used on production orgs. By default,
  sandboxes don't run tests during a deploy. If you want to validate a deployment with tests on a sandbox, use "sf
  project deploy start --dry-run --test-level RunLocalTests" instead.

ALIASES
  $ sf deploy metadata validate

EXAMPLES
  NOTE: These examples focus on validating large deployments. See the help for "sf project deploy start" for examples of deploying smaller sets of metadata which you can also use to validate.

  Validate the deployment of all source files in the "force-app" directory to the default org:

    $ sf project deploy validate --source-dir force-app

  Validate the deployment of all source files in two directories: "force-app" and "force-app-utils":

    $ sf project deploy validate --source-dir force-app --source-dir force-app-utils

  Asynchronously validate the deployment and run all tests in the org with alias "my-prod-org"; command immediately
  returns the job ID:

    $ sf project deploy validate --source-dir force-app --async --test-level RunAllTestsInOrg --target-org \
      my-prod-org

  Validate the deployment of all components listed in a manifest:

    $ sf project deploy validate --manifest path/to/package.xml

FLAG DESCRIPTIONS
  -a, --api-version=<value>  Target API version for the validation.

    Use this flag to override the default API version with the API version of your package.xml file. The default API
    version is the latest version supported by the CLI.

  -d, --source-dir=<value>...  Path to the local source files to validate for deployment.

    The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder
    (in which case the operation is applied to all metadata types in the directory and its subdirectories).

    If you specify this flag, don’t specify --metadata or --manifest.

  -g, --ignore-warnings  Ignore warnings and allow a deployment to complete successfully.

    If you specify this flag, and a warning occurs, the success status of the deployment is set to true. If you don't
    specify this flag, and a warning occurs, then the success status is set to false, and the warning is treated like an
    error.

    This flag is useful in a CI environment and your deployment includes destructive changes; if you try to delete a
    component that doesn't exist in the org, you get a warning. In this case, to ensure that the command returns a
    success value of true, specify this flag.

  -l, --test-level=RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests  Deployment Apex testing level.

    Valid values are:

    - RunSpecifiedTests — Runs only the tests that you specify with the --tests flag. Code coverage requirements differ
    from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75%
    code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
    trigger individually and is different than the overall coverage percentage.

    - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed and unlocked
    packages. This test level is the default.

    - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

  -t, --tests=<value>...  Apex tests to run when --test-level is RunSpecifiedTests.

    If a test name contains a space, enclose it in double quotes.
    For multiple test names, use one of the following formats:

    - Repeat the flag for multiple test names: --tests Test1 --tests Test2 --tests "Test With Space"
    - Separate the test names with spaces: --tests Test1 Test2 "Test With Space"

  -w, --wait=<minutes>  Number of minutes to wait for the command to complete and display results.

    If the command continues to run after the wait period, the CLI returns control of the terminal window to you and
    returns the job ID. To resume watching the validation, run "sf project deploy resume". To check the status of the
    validation, run "sf project deploy report".

  -x, --manifest=<value>  Full file path for manifest (package.xml) of components to validate for deployment.

    All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

  --async  Run the command asynchronously.

    The command immediately returns the job ID and control of the terminal to you. This way, you can continue to use the
    CLI. To resume watching the validation, run "sf project deploy resume". To check the status of the validation, run
    "sf project deploy report".

  --coverage-formatters=clover|cobertura|html-spa|html|json|json-summary|lcovonly|none|teamcity|text|text-summary...

    Format of the code coverage results.

    For multiple formatters, repeat the flag for each formatter.
    --coverage-formatters lcov --coverage-formatters clover

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

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/deploy/validate.ts)_

## `sf project generate`

Generate a Salesforce DX project.

```
USAGE
  $ sf project generate -n <value> [--json] [--flags-dir <value>] [-t standard|empty|analytics] [-d <value>] [-s
    <value>] [-p <value>] [-x] [--api-version <value>]

FLAGS
  -d, --output-dir=<value>           [default: .] Directory for saving the created files.
  -n, --name=<value>                 (required) Name of the generated project.
  -p, --default-package-dir=<value>  [default: force-app] Default package directory name.
  -s, --namespace=<value>            Namespace associated with this project and any connected scratch orgs.
  -t, --template=<option>            [default: standard] Template to use for project creation.
                                     <options: standard|empty|analytics>
  -x, --manifest                     Generate a manifest (package.xml) for change-set based development.
      --api-version=<value>          Will set this version as sourceApiVersion in the sfdx-project.json file

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Salesforce DX project.

  A Salesforce DX project has a specific structure and a configuration file (sfdx-project.json) that identifies the
  directory as a Salesforce DX project. This command generates the necessary configuration files and directories to get
  you started.

  By default, the generated sfdx-project.json file sets the sourceApiVersion property to the default API version
  currently used by Salesforce CLI. To specify a different version, set the apiVersion configuration variable. For
  example: "sf config set apiVersion=57.0 --global".

ALIASES
  $ sf force project create

EXAMPLES
  Generate a project called "mywork":

    $ sf project generate --name mywork

  Similar to previous example, but generate the files in a directory called "myapp":

    $ sf project generate --name mywork --default-package-dir myapp

  Similar to prevoius example, but also generate a default package.xml manifest file:

    $ sf project generate --name mywork --default-package-dir myapp --manifest

  Generate a project with the minimum files and directories:

    $ sf project generate --name mywork --template empty

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated project.

    Generates a project directory with this name; any valid directory name is accepted. Also sets the "name" property in
    the sfdx-project.json file to this name.

  -p, --default-package-dir=<value>  Default package directory name.

    Metadata items such as classes and Lightning bundles are placed inside this folder.

  -t, --template=standard|empty|analytics  Template to use for project creation.

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

  --api-version=<value>  Will set this version as sourceApiVersion in the sfdx-project.json file

    Override the api version used for api requests made by this command
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/project/generate.ts)_

## `sf project generate manifest`

Create a project manifest that lists the metadata components you want to deploy or retrieve.

```
USAGE
  $ sf project generate manifest [--json] [--flags-dir <value>] [--api-version <value>] [-m <value>...] [-p <value>...] [-n
    <value> | -t pre|post|destroy|package] [-c managed|unlocked... --from-org <value>] [-d <value>]

FLAGS
  -c, --include-packages=<option>...  Package types (managed, unlocked) whose metadata is included in the manifest; by
                                      default, metadata in managed and unlocked packages is excluded. Metadata in
                                      unmanaged packages is always included.
                                      <options: managed|unlocked>
  -d, --output-dir=<value>            Directory to save the created manifest.
  -m, --metadata=<value>...           Names of metadata components to include in the manifest.
  -n, --name=<value>                  Name of a custom manifest file to create.
  -p, --source-dir=<value>...         Paths to the local source files to include in the manifest.
  -t, --type=<option>                 Type of manifest to create; the type determines the name of the created file.
                                      <options: pre|post|destroy|package>
      --api-version=<value>           Override the api version used for api requests made by this command
      --from-org=<value>              Username or alias of the org that contains the metadata components from which to
                                      build a manifest.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Create a project manifest that lists the metadata components you want to deploy or retrieve.

  Create a manifest from a list of metadata components (--metadata) or from one or more local directories that contain
  source files (--source-dir). You can specify either of these parameters, not both.

  Use --type to specify the type of manifest you want to create. The resulting manifest files have specific names, such
  as the standard package.xml or destructiveChanges.xml to delete metadata. Valid values for this parameter, and their
  respective file names, are:

  * package : package.xml (default)
  * pre : destructiveChangesPre.xml
  * post : destructiveChangesPost.xml
  * destroy : destructiveChanges.xml

  See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm for
  information about these destructive manifest files.

  Use --name to specify a custom name for the generated manifest if the pre-defined ones don’t suit your needs. You can
  specify either --type or --name, but not both.

  To include multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with
  multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax
  applies to --include-packages and --source-dir.

ALIASES
  $ sf force source manifest create

EXAMPLES
  Create a manifest for deploying or retrieving all Apex classes and custom objects:

    $ sf project generate manifest --metadata ApexClass --metadata CustomObject

  Create a manifest for deleting the specified Apex class:

    $ sf project generate manifest --metadata ApexClass:MyApexClass --type destroy

  Create a manifest for deploying or retrieving all the metadata components in the specified local directory; name the
  file myNewManifest.xml:

    $ sf project generate manifest --source-dir force-app --name myNewManifest

  Create a manifest from the metadata components in the specified org and include metadata in any unlocked packages:

    $ sf project generate manifest --from-org test@myorg.com --include-packages unlocked
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/generate/manifest.ts)_

## `sf project list ignored`

Check your local project package directories for forceignored files.

```
USAGE
  $ sf project list ignored [--json] [--flags-dir <value>] [-p <value>]

FLAGS
  -p, --source-dir=<value>  File or directory of files that the command checks for foreceignored files.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Check your local project package directories for forceignored files.

  When deploying or retrieving metadata between your local project and an org, you can specify the source files you want
  to exclude with a .forceignore file. The .forceignore file structure mimics the .gitignore structure. Each line in
  .forceignore specifies a pattern that corresponds to one or more files. The files typically represent metadata
  components, but can be any files you want to exclude, such as LWC configuration JSON files or tests.

ALIASES
  $ sf force source ignored list

EXAMPLES
  List all the files in all package directories that are ignored:

    $ sf project list ignored

  List all the files in a specific directory that are ignored:

    $ sf project list ignored --source-dir force-app

  Check if a particular file is ignored:

    $ sf project list ignored --source-dir package.xml
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/list/ignored.ts)_

## `sf project reset tracking`

Reset local and remote source tracking.

```
USAGE
  $ sf project reset tracking -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-r <value>] [-p]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -p, --no-prompt            Don't prompt for source tracking override confirmation.
  -r, --revision=<value>     SourceMember revision counter number to reset to.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Reset local and remote source tracking.

  WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

  Resets local and remote source tracking so that Salesforce CLI no longer registers differences between your local
  files and those in the org. When you next run 'project deploy preview', Salesforce CLI returns no results, even though
  conflicts might actually exist. Salesforce CLI then resumes tracking new source changes as usual.

  Use the --revision parameter to reset source tracking to a specific revision number of an org source member. To get
  the revision number, query the SourceMember Tooling API object with the 'data soql' command. For example:

  sf data query --query "SELECT MemberName, MemberType, RevisionCounter FROM SourceMember" --use-tooling-api
  --target-org my-scratch

ALIASES
  $ sf force source tracking reset

EXAMPLES
  Reset source tracking for the org with alias "my-scratch":

    $ sf project reset tracking --target-org my-scratch

  Reset source tracking to revision number 30 for your default org:

    $ sf project reset tracking --revision 30
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/reset/tracking.ts)_

## `sf project retrieve preview`

Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

```
USAGE
  $ sf project retrieve preview -o <value> [--json] [--flags-dir <value>] [-c] [--concise]

FLAGS
  -c, --ignore-conflicts    Don't display conflicts in the preview of the retrieval.
  -o, --target-org=<value>  (required) Username or alias of the target org. Not required if the `target-org`
                            configuration variable is already set.
      --concise             Show only the changes that will be retrieved; omits files that are forceignored.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

  You must run this command from within a project.

  The command outputs a table that describes what will happen if you run the "sf project retrieve start" command. The
  table lists the metadata components that will be retrieved and deleted. The table also lists the current conflicts
  between files in your local project and components in the org. Finally, the table lists the files that won't be
  retrieved because they're included in your .forceignore file.

  If your org allows source tracking, then this command displays potential conflicts between the org and your local
  project. Some orgs, such as production org, never allow source tracking. Source tracking is enabled by default on
  scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source
  flag on the "sf org create scratch|sandbox" commands.

ALIASES
  $ sf retrieve metadata preview

EXAMPLES
  Preview the retrieve of all changes from your default org:

    $ sf project retrieve preview

  Preview the retrieve when ignoring any conflicts from an org with alias "my-scratch":

    $ sf project retrieve preview --ignore-conflicts --target-org my-scratch

FLAG DESCRIPTIONS
  -c, --ignore-conflicts  Don't display conflicts in the preview of the retrieval.

    This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as
    production orgs.
```

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/retrieve/preview.ts)_

## `sf project retrieve start`

Retrieve metadata from an org to your local project.

```
USAGE
  $ sf project retrieve start -o <value> [--json] [--flags-dir <value>] [-a <value>] [-c] [-x <value> | -m <value>... | -d
    <value>...] [-r <value> | -n <value>... | ] [--single-package -t <value>] [-w <value>] [-z ] [--zip-file-name
    <value> ]

FLAGS
  -a, --api-version=<value>      Target API version for the retrieve.
  -c, --ignore-conflicts         Ignore conflicts and retrieve and save files to your local filesystem, even if they
                                 overwrite your local changes.
  -d, --source-dir=<value>...    File paths for source to retrieve from the org.
  -m, --metadata=<value>...      Metadata component names to retrieve. Wildcards (`*`) supported as long as you use
                                 quotes, such as `ApexClass:MyClass*`.
  -n, --package-name=<value>...  Package names to retrieve. Use of this flag is for reference only; don't use it to
                                 retrieve packaged metadata for development.
  -o, --target-org=<value>       (required) Username or alias of the target org. Not required if the `target-org`
                                 configuration variable is already set.
  -r, --output-dir=<value>       Directory root for the retrieved source files.
  -w, --wait=<value>             [default: 33 minutes] Number of minutes to wait for the command to complete and display
                                 results to the terminal window.
  -x, --manifest=<value>         File path for the manifest (package.xml) that specifies the components to retrieve.

METADATA API FORMAT FLAGS
  -t, --target-metadata-dir=<value>  Directory that will contain the retrieved metadata format files or ZIP.
  -z, --unzip                        Extract all files from the retrieved zip file.
      --single-package               Indicates that the zip file points to a directory structure for a single package.
      --zip-file-name=<value>        File name to use for the retrieved zip file.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Retrieve metadata from an org to your local project.

  You must run this command from within a project.

  Metadata components are retrieved in source format by default. Retrieve them in metadata format by specifying the
  --target-metadata-dir flag, which retrieves the components into a ZIP file in the specified directory.

  If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production
  orgs, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable
  source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create
  scratch|sandbox" commands.

  To retrieve multiple metadata components, either use multiple --metadata <name> flags or use a single --metadata flag
  with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same
  syntax applies to --manifest and --source-dir.

ALIASES
  $ sf retrieve metadata

EXAMPLES
  Retrieve all remote changes from your default org:

    $ sf project retrieve start

  Retrieve the source files in the "force-app" directory from an org with alias "my-scratch":

    $ sf project retrieve start --source-dir force-app --target-org my-scratch

  Retrieve all the Apex classes and custom objects whose source is in the "force-app" directory. The list views,
  layouts, etc, that are associated with the custom objects are also retrieved. Both examples are equivalent:

    $ sf project retrieve start --source-dir force-app/main/default/classes force-app/main/default/objects
    $ sf project retrieve start --source-dir force-app/main/default/classes --source-dir \
      force-app/main/default/objects

  Retrieve all Apex classes that are in all package directories defined in the "sfdx-project.json" file:

    $ sf project retrieve start --metadata ApexClass

  Retrieve a specific Apex class; ignore any conflicts between the local project and org (be careful with this flag,
  because it will overwrite the Apex class source files in your local project if there are conflicts!):

    $ sf project retrieve start --metadata ApexClass:MyApexClass --ignore-conflicts

  Retrieve specific Apex classes that match a pattern; in this example, retrieve Apex classes whose names contain the
  string "MyApex":

    $ sf project retrieve start --metadata 'ApexClass:MyApex*'

  Retrieve a custom object called ExcitingObject that's in the SBQQ namespace:

    $ sf project retrieve start --metadata CustomObject:SBQQ__ExcitingObject

  Retrieve all custom objects in the SBQQ namespace by using a wildcard and quotes:

    $ sf project retrieve start --metadata 'CustomObject:SBQQ__*'

  Retrieve all custom objects and Apex classes found in all defined package directories (both examples are
  equivalent):

    $ sf project retrieve start --metadata CustomObject ApexClass
    $ sf project retrieve start --metadata CustomObject --metadata ApexClass

  Retrieve all metadata components listed in a manifest:

    $ sf project retrieve start --manifest path/to/package.xml

  Retrieve metadata from a package:

    $ sf project retrieve start --package-name MyPackageName

  Retrieve metadata from multiple packages, one of which has a space in its name (both examples are equivalent):

    $ sf project retrieve start --package-name Package1 "PackageName With Spaces" Package3
    $ sf project retrieve start --package-name Package1 --package-name "PackageName With Spaces" --package-name \
      Package3

  Retrieve the metadata components listed in the force-app directory, but retrieve them in metadata format into a ZIP
  file in the "output" directory:

    $ sf project retrieve start --source-dir force-app --target-metadata-dir output

  Retrieve in metadata format and automatically extract the contents into the "output" directory:

    $ sf project retrieve start --source-dir force-app --target-metadata-dir output --unzip

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

  -n, --package-name=<value>...

    Package names to retrieve. Use of this flag is for reference only; don't use it to retrieve packaged metadata for
    development.

    The metadata of the supplied package name(s) will be retrieved into a child directory of the project. The name of
    that child directory matches the name of the package. The retrieved metadata is meant for your reference only, don't
    add it to a source control system for development and deployment. For package development, retrieve the metadata
    using a manifest (`--manifest` flag) or by targeting a source controlled package directory within your project
    (`--source-dir` flag).

  -r, --output-dir=<value>  Directory root for the retrieved source files.

    The root of the directory structure into which the source files are retrieved.
    If the target directory matches one of the package directories in your sfdx-project.json file, the command fails.
    Running the command multiple times with the same target adds new files and overwrites existing files.

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

_See code: [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve/blob/3.12.0/src/commands/project/retrieve/start.ts)_

## `sf schema generate field`

Generate metadata source files for a new custom field on a specified object.

```
USAGE
  $ sf schema generate field -l <value> [--flags-dir <value>] [-o <value>]

FLAGS
  -l, --label=<value>   (required) The field's label.
  -o, --object=<value>  The directory that contains the object's source files.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.

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

ALIASES
  $ sf generate metadata field

EXAMPLES
  Create a field with the specified label; the command prompts you for the object:

    $ sf schema generate field --label "My Field"

  Specify the local path to the object's folder:

    $ sf schema generate field --label "My Field" --object force-app/main/default/objects/MyObject__c

FLAG DESCRIPTIONS
  -o, --object=<value>  The directory that contains the object's source files.

    The object source files in your local project are grouped in a directoy with the same name as the object. Custom
    object names always end in "__c". An example of the object directory for the Account standard object is
    "force-app/main/default/objects/Account" An example custom object directory is
    "force-app/main/default/objects/MyObject__c"

    If you don't specify this flag, the command prompts you to choose from your local objects.
```

_See code: [@salesforce/plugin-sobject](https://github.com/salesforcecli/plugin-sobject/blob/1.4.32/src/commands/schema/generate/field.ts)_

## `sf schema generate platformevent`

Generate metadata source files for a new platform event.

```
USAGE
  $ sf schema generate platformevent -l <value> [--flags-dir <value>]

FLAGS
  -l, --label=<value>  (required) The platform event's label.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.

DESCRIPTION
  Generate metadata source files for a new platform event.

  This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the
  event's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other event
  properties, such as its API name.

ALIASES
  $ sf generate metadata platformevent

EXAMPLES
  Create a platform event with the specified label:

    $ sf schema generate platformevent --label "My Platform Event"
```

_See code: [@salesforce/plugin-sobject](https://github.com/salesforcecli/plugin-sobject/blob/1.4.32/src/commands/schema/generate/platformevent.ts)_

## `sf schema generate sobject`

Generate metadata source files for a new custom object.

```
USAGE
  $ sf schema generate sobject -l <value> [--flags-dir <value>] [-f]

FLAGS
  -f, --use-default-features  Enable all optional features without prompting.
  -l, --label=<value>         (required) The custom object's label.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.

DESCRIPTION
  Generate metadata source files for a new custom object.

  This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the
  object's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other
  object properties, such as its API name and plural label.

  All Salesforce objects are required to have a Name field, so this command also prompts you for the label and type of
  the Name field. Run the "sf metadata generate field" command to create additional fields for the object.

  To reduce the number of prompts, use the "--use-default-features" flag to automatically enable some features, such as
  reporting and search on the object.

ALIASES
  $ sf generate metadata sobject

EXAMPLES
  Create a custom object with the specified label and be prompted for additional information:

    $ sf schema generate sobject --label "My Object"

  Create a custom object and enable optional features without prompting:

    $ sf schema generate sobject --label "My Object" --use-default-features

FLAG DESCRIPTIONS
  -f, --use-default-features  Enable all optional features without prompting.

    Enables these features:

    - Search: Allows users to find the custom object's records when they search, including SOSL.
    - Feeds: Enables feed tracking.
    - Reports: Allows reporting of the data in the custom object records.
    - History: Enables object history tracking.
    - Activities: Allows users to associate tasks and scheduled calendar events related to the custom object records.
    - Bulk API: With Sharing and Streaming API, classifies the custom object as an Enterprise Application object.
    - Sharing: With Bulk API and Streaming API, classifies the custom object as an Enterprise Application object.
    - Streaming API: With Bulk API and Sharing, classifies the custom object as an Enterprise Application object.
```

_See code: [@salesforce/plugin-sobject](https://github.com/salesforcecli/plugin-sobject/blob/1.4.32/src/commands/schema/generate/sobject.ts)_

## `sf schema generate tab`

Generate the metadata source files for a new custom tab on a custom object.

```
USAGE
  $ sf schema generate tab -o <value> -d <value> -i <value> [--json] [--flags-dir <value>]

FLAGS
  -d, --directory=<value>  (required) Path to a "tabs" directory that will contain the source files for your new tab.
  -i, --icon=<value>       (required) [default: 1] Number from 1 to 100 that specifies the color scheme and icon for the
                           custom tab.
  -o, --object=<value>     (required) API name of the custom object you're generating a tab for.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate the metadata source files for a new custom tab on a custom object.

  Custom tabs let you display custom object data or other web content in Salesforce. Custom tabs appear in Salesforce as
  an item in the app’s navigation bar and in the App Launcher.

  This command must be run in a Salesforce DX project directory. You must pass all required information to it with the
  required flags. The source files for the custom object for which you're generating a tab don't need to exist in your
  local project.

ALIASES
  $ sf generate metadata tab

EXAMPLES
  Create a tab on the `MyObject__c` custom object:

    $ sf schema generate tab --object `MyObject__c` --icon 54 --directory force-app/main/default/tabs

FLAG DESCRIPTIONS
  -i, --icon=<value>  Number from 1 to 100 that specifies the color scheme and icon for the custom tab.

    See https://lightningdesignsystem.com/icons/#custom for the available icons.

  -o, --object=<value>  API name of the custom object you're generating a tab for.

    The API name for a custom object always ends in `__c`, such as `MyObject__c`.
```

_See code: [@salesforce/plugin-sobject](https://github.com/salesforcecli/plugin-sobject/blob/1.4.32/src/commands/schema/generate/tab.ts)_

## `sf search`

Search for a command.

```
USAGE
  $ sf search

DESCRIPTION
  Search for a command.

  Once you select a command, hit enter and it will show the help for that command.
```

_See code: [@oclif/plugin-search](https://github.com/oclif/plugin-search/blob/1.2.7/src/commands/search.ts)_

## `sf sobject describe`

Display the metadata for a standard or custom object or a Tooling API object.

```
USAGE
  $ sf sobject describe -o <value> -s <value> [--json] [--flags-dir <value>] [--api-version <value>] [-t]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      (required) API name of the object to describe.
  -t, --use-tooling-api      Use Tooling API to display metadata for Tooling API objects.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Display the metadata for a standard or custom object or a Tooling API object.

  The metadata is displayed in JSON format. See this topic for a description of each property: https://developer.salesfo
  rce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm.

  This command displays metadata for Salesforce objects by default. Use the --use-tooling-api flag to view metadata for
  a Tooling API object.

ALIASES
  $ sf force schema sobject describe

EXAMPLES
  Display the metadata of the "Account" standard object in your default org:

    $ sf sobject describe --sobject Account

  Display the metadata of the "MyObject__c" custom object in the org with alias "my-scratch-org":

    $ sf sobject describe --sobject MyObject__c --target-org my-scratch-org

  Display the metadata of the ApexCodeCoverage Tooling API object in your default org:

    $ sf sobject describe --sobject ApexCodeCoverage --use-tooling-api
```

_See code: [@salesforce/plugin-schema](https://github.com/salesforcecli/plugin-schema/blob/3.3.26/src/commands/sobject/describe.ts)_

## `sf sobject list`

List all Salesforce objects of a specified category.

```
USAGE
  $ sf sobject list -o <value> [--json] [--flags-dir <value>] [--api-version <value>] [-s <value>]

FLAGS
  -o, --target-org=<value>   (required) Username or alias of the target org. Not required if the `target-org`
                             configuration variable is already set.
  -s, --sobject=<value>      [default: ALL] Category of objects to list.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  List all Salesforce objects of a specified category.

  You can list the standard objects, custom objects, or all. The lists include only Salesforce objects, not Tooling API
  objects.

ALIASES
  $ sf force schema sobject list

EXAMPLES
  List all objects in your default org:

    $ sf sobject list --sobject all

  List only custom objects in the org with alias "my-scratch-org":

    $ sf sobject list --sobject custom --target-org my-scratch-org
```

_See code: [@salesforce/plugin-schema](https://github.com/salesforcecli/plugin-schema/blob/3.3.26/src/commands/sobject/list.ts)_

## `sf static-resource generate`

Generate a static resource.

```
USAGE
  $ sf static-resource generate -n <value> [--json] [--flags-dir <value>] [--type <value>] [-d <value>] [--api-version
  <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -n, --name=<value>         (required) Name of the generated static resource.
      --api-version=<value>  Override the api version used for api requests made by this command
      --type=<value>         [default: application/zip] Content type (mime type) of the generated static resource.

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a static resource.

  Generates the metadata resource file in the specified directory or the current working directory. Static resource
  files must be contained in a parent directory called "staticresources" in your package directory. Either run this
  command from an existing directory of this name, or use the --output-dir flag to create one or point to an existing
  one.

ALIASES
  $ sf force staticresource create

EXAMPLES
  Generate the metadata file for a static resource called MyResource in the current directory:

    $ sf static-resource generate --name MyResource

  Similar to previous example, but specifies a MIME type of application/json:

    $ sf static-resource generate --name MyResource --type application/json

  Generate the resource file in the "force-app/main/default/staticresources" directory:

    $ sf static-resource generate --name MyResource --output-dir force-app/main/default/staticresources

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated static resource.

    This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin
    with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.

  --type=<value>  Content type (mime type) of the generated static resource.

    Must be a valid MIME type such as application/json, application/javascript, application/zip, text/plain, text/css,
    etc.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/static-resource/generate.ts)_

## `sf update [CHANNEL]`

update the sf CLI

```
USAGE
  $ sf update [CHANNEL] [--force |  | [-a | -v <value> | -i]]

FLAGS
  -a, --available        See available versions.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
      --force            Force a re-download of the requested version.

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

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/4.5.5/src/commands/update.ts)_

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

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/2.2.11/src/commands/version.ts)_

## `sf visualforce generate component`

Generate a Visualforce Component.

```
USAGE
  $ sf visualforce generate component -n <value> -l <value> [--json] [--flags-dir <value>] [-t DefaultVFComponent] [-d <value>]
    [--api-version <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -l, --label=<value>        (required) Visualforce Component label.
  -n, --name=<value>         (required) Name of the generated Visualforce Component.
  -t, --template=<option>    [default: DefaultVFComponent] Template to use for file creation.
                             <options: DefaultVFComponent>
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Visualforce Component.

  The command generates the .Component file and associated metadata file in the specified directory or the current
  working directory by default.

ALIASES
  $ sf force visualforce component create

EXAMPLES
  Generate the metadata files for a Visualforce component in the current directory:

    $ sf visualforce generate component --name mycomponent --label mylabel

  Similar to previous example, but generate the files in the directory "force-app/main/default/components":

    $ sf visualforce generate component --name mycomponent --label mylabel --output-dir components

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Visualforce Component.

    The name can be up to 40 characters and must start with a letter.

  -t, --template=DefaultVFComponent  Template to use for file creation.

    Supplied parameter values or default values are filled into a copy of the template.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/visualforce/generate/component.ts)_

## `sf visualforce generate page`

Generate a Visualforce Page.

```
USAGE
  $ sf visualforce generate page -n <value> -l <value> [--json] [--flags-dir <value>] [-d <value>] [--api-version
  <value>]

FLAGS
  -d, --output-dir=<value>   [default: .] Directory for saving the created files.
  -l, --label=<value>        (required) Visualforce Page label.
  -n, --name=<value>         (required) Name of the generated Visualforce Page.
      --api-version=<value>  Override the api version used for api requests made by this command

GLOBAL FLAGS
  --flags-dir=<value>  Import flag values from a directory.
  --json               Format output as json.

DESCRIPTION
  Generate a Visualforce Page.

  The command generates the .Page file and associated metadata file in the specified directory or the current working
  directory by default.

ALIASES
  $ sf force visualforce page create

EXAMPLES
  Generate the metadata files for a Visualforce page in the current directory:

    $ sf visualforce generate page --name mypage --label mylabel

  Similar to previous example, but generate the files in the directory "force-app/main/default/pages":

    $ sf visualforce generate page --name mypage --label mylabel --output-dir pages

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Directory for saving the created files.

    The location can be an absolute path or relative to the current working directory. The default is the current
    directory.

  -n, --name=<value>  Name of the generated Visualforce Page.

    The name can be up to 40 characters and must start with a letter.
```

_See code: [@salesforce/plugin-templates](https://github.com/salesforcecli/plugin-templates/blob/56.3.14/src/commands/visualforce/generate/page.ts)_

## `sf which`

Show which plugin a command is in.

```
USAGE
  $ sf which [--json]

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show which plugin a command is in.

EXAMPLES
  See which plugin the `help` command is in:

    $ sf which help

  Use colon separators.

    $ sf which foo:bar:baz

  Use spaces as separators.

    $ sf which foo bar baz

  Wrap command in quotes to use spaces as separators.

    $ sf which "foo bar baz"
```

_See code: [@oclif/plugin-which](https://github.com/oclif/plugin-which/blob/3.2.12/src/commands/which.ts)_

<!-- commandsstop -->

```

```
