# Store components for store UIs

This is a collection of components designed to be used in store UIs when using React. This is currently a work in progress and therefore not recommended to use in projects at this time.

## How to use the components

See the [component docs](https://canonical.github.io/store-components/) for usage instructions.

![CI](https://github.com/canonical/store-components/workflows/CI/badge.svg?branch=main)

## Requirements

Canonical store components currently require that your build is configured with [sass-loader](https://github.com/webpack-contrib/sass-loader) (or equivalent), to compile sass.

## Install

To use the [NPM package](https://www.npmjs.com/package/@canonical/store-components) do:

```shell
yarn add @canonical/store-components
```

Or if you use NPM:

```shell
npm install @canonical/store-components
```

## Issues

Please file any issues at [GitHub](https://github.com/canonical/store-components/issues).

## Contributing

You might want to:

- [View the source](https://github.com/canonical/store-components) on GitHub.
- Read about [developing components](https://github.com/canonical/store-components/blob/main/HACKING.md).
- Find out how to [publish to NPM](https://github.com/canonical/store-components/blob/main/PUBLISH-NPM-PACKAGE.md).
- Know how to [publish the docs](https://github.com/canonical/store-components/blob/main/PUBLISHING-DOCS.md) to GitHub Pages.

## Developing locally using this repository

You may wish to link this library directly to your projects while developing locally.

You can do this by cloning this repo to your local workspace;

```shell
git clone https://github.com/canonical/store-components
```

If you then drop into that folder and run;

```shell
yarn run link-packages
```

...this will add this project, `react` and `react-dom` to a local yarn registry.

Switching back to the project you are developing, run;

```shell
yarn install
yarn link react
yarn link react-dom
yarn link @canonical/store-components
```

...to pull the linked deps from the local registry. If you now run `yarn build-watch` in your `store-components` folder, your project should pick up any changes on refresh or hot module reload.

**Note:** When you're finished working locally - don't forget to go back and unlink;

```
cd store-components
yarn run unlink-packages
```
