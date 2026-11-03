## Contributing

1. Please create a new issue [here](https://github.com/forcedotcom/cli/issues) before starting any work so that we can also offer suggestions or let you know if there is already an effort in progress.
1. Fork this repository.
1. Sign the Salesforce [CLA](#cla).
1. The CLI team will review your pull request and provide feedback.
1. Once merged, a new release of `@salesforce/cli` will be published to [npm](https://www.npmjs.com/package/@salesforce/cli).

### CLA

External contributors are required to sign a Contributor License
Agreement. You can do so by going to https://cla.salesforce.com/sign-cla.

## Branches

- We work in branches off of `main`.
- Our release (aka. _production_) branch is `main`.
- Our work happens in _topic_ branches (feature and/or bug-fix).
  - Feature as well as bug-fix branches are based on `main`
  - Branches _should_ be kept up-to-date using `rebase`

## Pull Requests

- Develop features and bug fixes in _topic_ branches off main, or forks.
- _Topic_ branches can live in forks (external contributors) or within this repository (internal contributors).
  - When creating _topic_ branches in this repository please prefix with `<initials>/`. For example: `mb/refactor-tests`.
- Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) to drive semver versioning. Examples:
  - `chore: my chore message` --> No release
  - `fix: my fix message` --> Patch release
  - `feat: my feat message` --> Minor release
- PRs will be reviewed and merged by the CLI team.
