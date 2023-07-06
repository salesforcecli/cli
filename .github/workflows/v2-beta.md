# Move from `sfdx` (v7) to `sf` (v2)

> Thank you for helping us test `sf` (v2). We're working on official documentation, but in the meantime, use this document. 

## Installation

> **Warning**  
> You **must** uninstall `sfdx` before you install `sf` (v2), or you'll get an error. See instructions for your installation methods below.
> 
> **Context:** We created an alias for `sfdx` within `sf` (v2) so that you don't need to update your scripts from `sfdx` to `sf`. The consequence is a one-time uninstall of `sfdx-cli` to prevent this collision.

### npm

If you normally install `sfdx` via npm, run these commands:

1. `npm uninstall -g sfdx-cli`
1. `npm install -g @salesforce/cli@beta` [When `sf` (v2) becomes generally available, don't use the `@beta` tag anymore.]

If you already had `sf` (v1) installed, the 2nd command updates it to v2. You don't have to uninstall it first. 

If you have CI scripts that install Salesforce CLI with npm, and you want to try out the `sf` (v2) beta in your CI environment, follow these steps: 

1. Remove the command to install `sfdx`.  
2. Add (or replace) the command that installs `sf` with this command:  `npm install -g @salesforce/cli@beta`.

If you see an error similar to this, you must uninstall `sfdx-cli`.
```
npm ERR! code EEXIST
npm ERR! path /Users/username/.nvm/versions/node/v18.15.0/bin/sfdx
npm ERR! EEXIST: file already exists
npm ERR! File exists: /Users/username/.nvm/versions/node/v18.15.0/bin/sfdx
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.
```

### Installers

> "Installers" refer to the Windows `.exe` or macOS `.pkg` installers.  During the beta, the Windows installer will be signed with Salesforce's key, but the macOS installer won't be.

1. [Uninstall your current `sfdx` (v7) installation.](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)

   If you originally installed Salesforce CLI using the OS-specific installers, as of October 2021 you actually got _two_ interoperable CLIs (aka executables) bundled together: `sfdx` (v7) and `sf` (v1). When you uninstall Salesforce CLI, it removes both executables.

   This step does NOT mess with your authenticated orgs or the configuration settings (ex: `target-dev-hub`).

1. Install `sf` (v2) using these `beta` installer links:

- macOS:
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-arm64.pkg>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-x64.pkg>
- Windows:
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-x86.exe>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-x64.exe>

### TAR Files

1. [Uninstall your current `sfdx` (Version 7) installation.](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)

   If you originally installed Salesforce CLI using TAR files, as of October 2021 you actually got _two_ interoperable CLIs (aka executables) bundled together: `sfdx` (v7) and `sf` (v1). When you uninstall Salesforce CLI, it removes both executables.

   This does NOT mess with your authenticated orgs or configurations (ex: `defaultdevhubusername`).

1. Make sure you've completely uninstalled `sfdx` (v7) by running `sfdx version`, which should fail.

1. Install `sf` (v2) using these `beta` TAR files:

- macOS:
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-arm64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-arm64.tar.xz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-x64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-x64.tar.xz>
- Linux:
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-arm.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-arm.tar.xz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-x64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-x64.tar.xz>
- Windows [we don't recommend this unless you've been doing it already]:
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x86.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x86.tar.xz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x64.tar.xz>

TAR file installation for `sf` (v2) is similar to [sfdx](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) but use `sf` where it says `sfdx`.

If you have CI scripts that install Salesforce CLI using TAR files, and you want to try out the `sf` (v2) beta in your CI environment, replace the download URLs with the ones shown above. 

### Docker

`sf` (v2) is available as a [Docker Image](https://hub.docker.com/r/salesforce/cli).    

## After You've Installed

### Check Your Install

Run `sf version`. It should display a version that starts with a `2`. 

`sfdx version` should give the same answer because it's just a pointer to the same file.

### Autocomplete

Run `sf autocomplete --refresh-cache` to regenerate your autocompletions. Open a new terminal for the change to take effect. Autocomplete might be weird until you regenerate.

### Updates

We'll build new versions of `sf` (v2) often during the beta period. To get these updates, run one of these commands:

- For npm installs, run `npm install -g @salesforce/cli@beta` again.
- For installers or TAR files, run `sf update beta`.

Because Salesforce CLI is made of plugins, the `sf` (v2) beta gets functionality fixes through its plugins. We're going to build nightly (and maybe intraday). So you can get plugin updates at the same pace that sfdx's `nightly` channel gets them (which means before they reach RC).

### What to Expect When You're Inspecting

Every command execution, VSCode invocation of Salesforce CLI, and script should work like it does under `sfdx. If you find a difference, [open an issue](https://github.com/forcedotcom/cli/issues).

You can run commands with either `sfdx` or `sf`. It's all the same. Everything that was in `sfdx` is available in `sf`, with the same names and flags.

In `sf` (v2), commands from just-in-time plugins show up in the help. These plugins are installed the first time you run a command from that plugin. Some of these plugins were bundled in `sfdx`.

`sf` (both versions) includes (via JIT) the Salesforce Functions plugin. This plugin wasn't in `sfdx`.

## Get Back 

To return to using `sfdx` (v7):

1. Uninstall `sf` (v2).
2. Install `sfdx` using your usual installation method.
3. In your CI scripts, go back to the npm commands or TAR download URLs you were using before.
