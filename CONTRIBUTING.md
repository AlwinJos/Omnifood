# Contributing to Omnifood

Thanks for your interest in contributing! This document outlines the development workflow, standards, and expectations so we can work together effectively.

## Branching strategy

- Default branch: `main` (production-ready)
- Feature branches: `feature/<short-description>`
- Bugfix branches: `fix/<issue-number>-<short-description>`
- Release branches (optional): `release/<version>`
- Hotfix branches: `hotfix/<short-description>`

Keep branches small and focused. Rebase or merge from `main` frequently to stay up to date.

## Pull request process

- Open a PR from a feature branch to `main`.
- Use the provided Pull Request template and link any related issue(s) using `Fixes #<issue-number>` when applicable.
- At least one approving review is required before merge.
- All CI checks (linters, tests) must pass before merging.
- Squash-merge is recommended for small fixes. For larger features, keep commits meaningful.

## Code style and quality

- JavaScript: follow a consistent style (we recommend ESLint + Prettier). Add a config file when adopting tooling.
- Keep HTML semantic and accessible (use alt text on images, appropriate heading structure, ARIA where needed).
- Write tests for behavior where possible. Add unit tests with Jest and E2E tests with Cypress for interactive functionality.

## Commit messages

- Use clear, imperative messages. Example: `feat: add subscription form` or `fix: correct header layout on mobile`.
- Optionally use Conventional Commits format for automated changelogs.

## Issue reporting

- Use the issue templates when opening new issues.
- Include steps to reproduce for bugs, expected vs actual behavior, and screenshots when relevant.

## Reviews

- Reviewers should check: correctness, security implications, accessibility, performance, and test coverage.
- Request changes or approve. Address feedback promptly.

## CI and tests

- Ensure new code includes tests where appropriate.
- Add linting and formatting checks to CI. Update azure-pipelines.yml to run those checks.

## Security and secrets

- Do not commit secrets, credentials, or environment files. Use pipeline secrets or a secure vault.
- Add Dependabot or similar scanning tools to monitor vulnerabilities.

## Adding new tools or dependencies

- Before adding dependencies, evaluate size, maintenance, and security posture.
- Document new tools in README and update CI accordingly.

## Getting help

- Open an issue or ping a repo maintainer in your team channel. Include reproducible examples and logs where possible.
