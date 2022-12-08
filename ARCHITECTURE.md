# Salesforce CLI Architecture

## Plugin Architecture

The Salesforce CLI is built using [oclif](https://oclif.io/), which is an open source CLI framework owned and maintained by Salesforce. The primary benefit of using oclif is that it allows us to develop CLI plugins for specific feature areas. Some plugins are bundled with every CLI installation, while others can be installed if and when a user chooses.

This architecture allows us to empower internal teams and external contributors (aka plugin providers) to own and maintain their CLI commands, without having to create an entirely new CLI. It also allows plugin providers to keep their changes isolated from other plugins and it allows customers to preview features and fixes by manually installing a plugin before it's shipped in the CLI.

We write most of our business logic inside of NPM libraries that plugins can consume. This allows the commands in a plugin to be a light wrapper around the library and also enables other consumers to use the exact same functionality - for example, both [@salesforce/plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve) and the [Salesforce Extension pack for VsCode](https://developer.salesforce.com/tools/vscode) use the [source-deploy-retrieve](https://github.com/forcedotcom/source-deploy-retrieve/) library to interact with Salesforce metadata.

![sf plugins and dependencies](images/sf-plugins-and-deps.jpg 'Salesforce CLI Plugins and Dependencies')

## Typical Salesforce Plugin

Plugins are npm packages written in Typescript and are hosted in the public npm registry. These are the dependencies that are typical amongst all Salesforce plugins:

### Salesforce plugins

- [plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve)
- [plugin-env](https://github.com/salesforcecli/plugin-env)
- [plugin-functions](https://github.com/salesforcecli/plugin-functions)
- [plugin-generate](https://github.com/salesforcecli/plugin-generate)
- [plugin-login](https://github.com/salesforcecli/plugin-login)
- [plugin-settings](https://github.com/salesforcecli/plugin-settings)
- [plugin-telemetry](https://github.com/salesforcecli/plugin-telemetry)
- [plugin-info](https://github.com/salesforcecli/plugin-info)
- [plugin-sobject](https://github.com/salesforcecli/plugin-sobject)

### oclif plugins

- [plugin-autocomplete](https://github.com/oclif/plugin-autocomplete)
- [plugin-commands](https://github.com/oclif/plugin-commands)
- [plugin-help](https://github.com/oclif/plugin-help)
- [plugin-not-found](https://github.com/oclif/plugin-not-found)
- [plugin-plugins](https://github.com/oclif/plugin-plugins)
- [plugin-update](https://github.com/oclif/plugin-update)
- [plugin-warn-if-update-available](https://github.com/oclif/plugin-warn-if-update-available)
- [plugin-which](https://github.com/oclif/plugin-which)
- [plugin-version](https://github.com/oclif/plugin-version)

### dependencies

- [@oclif/core](https://github.com/oclif/core)
- [@salesforce/kit](https://github.com/forcedotcom/kit)
- [@salesforce/core](https://github.com/forcedotcom/sfdx-core/tree/v3)
- [@salesforce/ts-types](https://github.com/forcedotcom/ts-types)
- [@salesforce/sf-plugins-core](https://github.com/salesforcecli/sf-plugins-core)
- [@salesforce/source-deploy-retrieve](https://github.com/forcedotcom/source-deploy-retrieve)
- [@salesforce/source-tracking](https://github.com/forcedotcom/source-tracking)

### dev dependencies

- [@salesforce/cli-plugins-testkit](https://github.com/salesforcecli/cli-plugins-testkit)
- [@salesforce/dev-config](https://github.com/forcedotcom/dev-config)
- [@salesforce/dev-scripts](https://github.com/forcedotcom/dev-scripts)
- [@salesforce/prettier-config](https://github.com/forcedotcom/prettier-config)
- [@salesforce/ts-sinon](https://github.com/forcedotcom/ts-sinon)
- [eslint-config-salesforce](https://github.com/forcedotcom/eslint-config-salesforce)
- [eslint-config-salesforce-license](https://github.com/forcedotcom/eslint-config-salesforce-license)
- [eslint-config-salesforce-typescript](https://github.com/forcedotcom/eslint-config-salesforce-typescript)

![sf typical plugin](images/sf-typical-plugin.jpg 'Salesforce CLI Typical Plugin')

## Command Execution

Below is a diagram that outlines at a high level the process that occurs every time a user executes a CLI command.

![command execution flow](images/command-execution-flow.jpg 'Command Execution Flow')
