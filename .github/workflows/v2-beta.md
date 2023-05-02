# Move from **sfdx** (Version 7) to **sf** (Version 2)

> Thank you for helping us test sf v2. We're going to have a nicer, professionally-written guide when we're ready for everyone to do this.

## Installation

> Expect errors from npm and the installers if you **don't** uninstall `sfdx` before install `sf` v2.

### npm

If you normally install `sfdx` via npm

1. `npm uninstall -g sfdx-cli`
1. `npm install -g @salesforce/cli@beta` [when sfv2 leaves beta, the `@beta` can be removed]

If you happen to already have `sf` installed, that 2nd command updates it to v2. You don't have to uninstall it

We'll be making frequent updates to sf v2 during the beta period, and you can keep yours up to date by running `npm install -g @salesforce/cli@beta` again.

### installers

> "installers" means the windows .exe or mac .pkg installers

1. [Uninstall your current _sfdx_ (Version 7) installation.](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)

   If you originally installed Salesforce CLI using the OS-specific installers, as of October 2021 you actually got _two_ interoperable CLIs (aka executables) bundled together: `sfdx` (Version 7) and `sf` (Version 1). When you uninstall Salesforce CLI, it removes both executables.

   This does NOT mess with your authenticated orgs or configurations (ex: defaultdevhub).

1. `beta` installer links

- mac
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-arm64.pkg>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-x64.pkg>
- win
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-x86.exe>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-x64.exe>

We'll be making frequent updates to sf v2 during the beta period, and you can keep yours up to date by running `sf update beta` anytime.

### tarballs

1. [Uninstall your current _sfdx_ (Version 7) installation.](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)

   If you originally installed Salesforce CLI using the OS-specific installers, as of October 2021 you actually got _two_ interoperable CLIs (aka executables) bundled together: `sfdx` (Version 7) and `sf` (Version 1). When you uninstall Salesforce CLI, it removes both executables.

   This does NOT mess with your authenticated orgs or configurations (ex: defaultdevhub).

1. make sure you've got everything uninstalled. `sfdx version` should fail.

1. `beta` tarballs

- mac
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-arm64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-arm64.tar.xz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-x64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-darwin-x64.tar.xz>
- linux
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-arm.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-arm.tar.xz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-x64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-linux-x64.tar.xz>
- windows [we don't recommend this unless you've been doing it already]
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x86.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x86.tar.xz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x64.tar.gz>
  - <https://developer.salesforce.com/media/salesforce-cli/sf/channels/beta/sf-win32-x64.tar.xz>

Tarball setup is similar to [sfdx](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) but you'll probably want to use `sf` where it says `sfdx`.

## After you've installed

### Check your install

`sf version` should give you something that starts with a `2`. `sfdx version` should give the same answer since it's just a pointer to the same file.

### Autocomplete

Run `sf autocomplete --refresh-cache` to regenerate your completions. Autocomplete might be weird until you do this, and you might need to open a new terminal for it to take effect.

### Updates

We'll be making frequent updates to sf v2 during the beta period. Updating is similar to sfdx:

- for npm installs, run `npm install -g @salesforce/cli@beta` again
- otherwise, `sf update beta`

Because the CLI is made of plugins, the sf v2 `beta` will get functionality fixes through the plugins. We're going to build nightly (and maybe intraday) so you'll plugin updates at the same pace that sfdx's `nightly` channel gets them (which means before they reach RC).

### What to expect when you're inspecting

Every command, VSCode invocation of the CLI, and script should work like it does under `sfdx`. If you find a difference, please [open an issue](https://github.com/forcedotcom/cli/issues)

You can run commands with either `sfdx` or `sf`. It's all the same. Everything that was in `sfdx` should be available in `sf`, with the same names and flags.

There are some Just-in-Time plugins that will show up in the help, but will install the first time you run a command from that plugin. They were bundled in `sfdx`.

`sf` includes (via JIT) the Salesforce Functions plugin. It was not part of sfdx.

There's not a published Docker image (yet). We'll add those when the're available.

## Getting back

uninstall sf v2
install sfdx however you normally do
