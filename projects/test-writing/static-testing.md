# Static Testing

Tests that execute no code; first line of defense for against obvious problems.

The goal of static testing is to **save time** and **catch low-hanging fruit**.

## Tooling

Seems like the tooling for static testing ends up falling into the category of "stuff that makes VS Code underline stuff with red squiggles".

TypeScript -- a superset of JavaScript that treats JS like a statically typed language and pulls us out of the beautiful chaos of dynamic typeing -- is a language that addresses and catches some bugs before runtime.

It yells at you if you're trying to feed an input with the wrong type into a function, for example.

Before going out and learning TypeScript, there are other tools right in the editor that test for common bugs and style.

### ESLint

#### Why?

- Statically analyzes code in editors and CI pipelines.
- Can automatically make syntax-aware fixes (no-error, unlike find-and-replace)
- Customize with code preprocessing, parsing, and rules that work alongside's ESLint's built-in rules -- exactly as needed for a project

### Prettier

#### Why?

- Automated, style uniformity built into CI pipeline
- Saves time and energy by building and enforcing a style guide
- End the debate on style with an automated way to get it done


## Details - ESLint

### Configuring ESLint

Two main ways to configure ESLint:

1. **Comments** - directly embed config info into your JS
2. **Files** - us JS, JSON, or YAML to config for an entire directory and its subdirectories e.g.(`.eslintrc.*`)


### `.eslintrc.*`

I've decided to go with the YAML extension for easy transitivity to GitHub Actions and CI automation.

The realy tofu and potatoes of this is in the **rules** that are available. Extensibility is great with a variety of popular options to choose from e.g.(AirBnb, Google, JS Standards). I was a fan of how Netlify handled their CI/CD, so after some research on npm, I found their open source `.eslintrc.*` file and will pull inspiration from how they've structure their stuff.

## Details - Prettier

### What are they about?

- Prettier is an opinionated tool that tries to take all the bikeshedding out of code formatting and style (not logic, per se)
- They care about
  - Correctness
  - Strings
  - Empty lines
  - Multi-line objects
  - Decorators
  - Semicolons
  - Print width
  - JSX
  - Comments

### They DO NOT care about

- Turning single- or double-quoted strings into template literals or vice-versa
- Using + to break long string literals into parts that fit the print width
- Adding/removing {} and return where they are optional
- turning ?: into if-else statements
- Sorting/moving imports, object keys, class memebers, JSX Keys, CSS properties, etc.

### Standardize code formatting in CI

To avoid merge conflicts and other collaboration issues...

`npx prettier --check`j

### Setting up in VS Code

This is a non-trivial task. There's no cloning or straightforward option, because everyone's linting and formatting needs may differ on a project-by-project basis. So you end up having to do some research to make it all play nice.

For VS Code set-up with ESLint

- Formatting Toggle (if you want, some cool settings)
  - [Formatting Toggle by tombonnike](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)
- Can Download "Prettier - Code formatter" extension
  - Will get all trash with ESLint running too
  - Need to install `npm install --save-dev eslint-config-prettier` to make them play nice
  - In VS Code settings json file, need to configure `"editor.defaultFormatter"` for javascript


### Husky

Pre-commit git Hooks for cleaning up code before pushing, merging, rebasing and all that jazz.

- To do this with ESLint & Prettier, you gotta do another thing with a thing.
- Set up lint-staged to access husky and configure git hooks in your `package.json`
- Possibility: run a pre-commit hook to...
  - eslint
  - prettier --write

## Resources

- [ESLint User Guide > Rules](https://eslint.org/docs/user-guide/configuring/rules)
- [ESLint Docs > Rules](https://eslint.org/docs/rules/)
- [Netflify CI Pipeline ESLint file - maintained as of 04/26](https://github.com/netlify/eslint-config-node)
- [@netlify/eslint-config-node > npm](https://www.npmjs.com/package/@netlify/eslint-config-node)
- [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
- [Pre-commit Hook with husky](https://prettier.io/docs/en/precommit.html)
- [eslint-config-prettier repo](https://github.com/prettier/eslint-config-prettier/blob/main/README.md)
- [Prettier install docs](https://prettier.io/docs/en/install.html)