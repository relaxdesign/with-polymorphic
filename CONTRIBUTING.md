# Contributing

Welcome and thank you for your interest in contributing to **With Polymorphic** (`with-polymorphic`)! We appreciate your contributions and kindly ask you to follow the guidelines outlined below.

## Code of Conduct

By participating in this project, you agree to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We expect all contributors to read and understand it before making any contributions.

## Style Guide

To maintain consistency and readability, please follow these guidelines:

- Use the "Conventional Commits" specification for commit messages to enable automatic generation of changelogs upon release.
- Format your code using Prettier.
- Whenever possible, use TypeScript.

## Getting Started

### Setup

To get started with contributing, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Sync with the latest changes from the original (upstream) repository.
3. Create a new branch for your contribution.
4. Install Node.js and npm on your machine.
5. Inside the repository, install dependencies by running: `npm install`.
6. You're ready to go!

### Available Scripts

The following scripts are available:

- `npm run build`: Builds the project for production.
- `npm run tsc`: Runs type checks.
- `npm test`: Runs Jest and watches for file changes (note: this is currently a placeholder command).

## Testing

Before submitting a pull request (PR), please ensure that your code passes all tests. If you're introducing new features, make sure to include appropriate tests for them.

## Documentation

When adding a new feature, please provide corresponding documentation, including comments in the code and updates to the README.md file.

## Commit Convention

We follow the "Conventional Commits" specification for our commit messages. This convention enables automatic generation of changelogs upon release. Please make sure to format your commit messages accordingly. For more detailed information about the specification, visit the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) website.

### Commit Message Format

Each commit message consists of a type, an optional scope, and a subject line. The type and subject line are required.

```
<type>: <subject>

Example: docs: Correct spelling of CHANGELOG
```

Commit messages with scope:

```
<type>(<scope>): <subject>

Example: feat(lang): Add Polish language
```

### Commit Types

Here are some common commit types defined by the Conventional Commits specification:

- `feat`: Introduces a new feature to the codebase.
- `fix`: Fixes a bug or error.
- `docs`: Changes or updates to documentation.
- `style`: Changes related to code formatting, such as whitespace, indentation, or styling.
- `refactor`: Code changes that neither fix a bug nor add a feature, typically aimed at improving code structure or design.
- `perf`: Performance-related changes or optimizations.
- `test`: Adds, modifies, or refactors tests.
- `build`: Changes related to the build system or external dependencies.
- `ci`: Updates to the continuous integration (CI) configuration or scripts.
- `chore`: Regular maintenance tasks, housekeeping, or other minor changes that don't fall into any specific category.
- `revert`: Reverts a previous commit.

Please use the appropriate commit type when creating your commit messages.

By adhering to this commit convention, you ensure consistency and facilitate the generation of accurate changelogs.
