# Omnifood

Omnifood is a static website prototype for a meal-subscription service. This repository contains the frontend site content and assets (HTML, CSS, JS) and basic CI pipeline configuration.

## Quick overview

- Tech: Plain HTML, CSS and JavaScript (static site)
- CI: Azure Pipelines (azure-pipelines.yml present)
- Purpose: Marketing site and content for the Omnifood product

## Getting started (local)

1. Clone the repository

   git clone https://github.com/AlwinJos/Omnifood.git
   cd Omnifood

2. Open index.html in your browser

   - This is a static site; no build step is required unless you add tooling.

3. Development workflow

   - Create a feature branch: `feature/<short-description>` or `fix/<issue-number>-<short>`
   - Implement changes and add tests where applicable
   - Open a Pull Request targeting `main`
   - Ensure CI passes and at least one review is completed before merging

## Tests

- There are currently no automated tests in this repository. Add unit or E2E tests and configure CI to run them.

## CI/CD

- Azure Pipelines YAML files are present (azure-pipelines.yml, azure-pipelines-1.yml). Review and document pipeline behavior in `DEPLOYMENT.md` if you add deployment targets.

## Contribution & community

Please read CONTRIBUTING.md for details on coding standards, branch strategy, PR requirements, and issue templates.

## Release strategy

We recommend using semantic versioning (vMAJOR.MINOR.PATCH) and GitHub Releases with changelogs. Implement pipeline stages: build → test → deploy-to-staging → manual-approval → deploy-to-prod.

## Security

- Enable Dependabot / automated dependency scanning for third-party packages if you add a package.json or other package manifests.
- Do not commit secrets or API keys. Use pipeline secret storage for deployment credentials.

## Contact

For repo-level questions, open an issue or contact the maintainers via GitHub.
