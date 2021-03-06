# Hasura Common Library

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![TypeScript definitions on DefinitelyTyped](https://definitelytyped.org/badges/standard.svg)](http://definitelytyped.org)

> Define the common APIs that are used for all OpenFaas serverless functions.

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

This is a private NPM package. So, to use it in your project, please make sure that you have authenticated with your NPM registry account.

```sh
$ export NPM_TOKEN=<NPM_TOKEN>
$ echo -e "//npm.pkg.github.com/:_authToken=$NPM_TOKEN\n\
@halay08:registry=https://npm.pkg.github.com/" > ~/.npmrc
```

`NPM_TOKEN` is generated from your github account. See how to [creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

>Note: If you want to build a docker image with NPM registry permission, please remove the file `.npmrc` after you finish to install NPM packages.

Use npm CLI

```sh
$ npm i @halay08/hasura-common@0.0.1
```

Use yarn CLI

```sh
$ yarn add @halay08/hasura-common@0.0.1
```

## Publish version

To publish a new version to github npm package manager, please make sure that all your changes have been commited and pushed to git repository first.

Then, create a new version by using command line below or update it in `package.json`.

```sh
# Create a version for backward compatible bug fixes.
$ npm version patch
```

```sh
# Backward compatible new features.
$ npm version minor
```

```sh
# Changes that break backward compatibility.
$ npm version major
```

Publish version to Github registry
```
$ npm publish
```

> You can use the specific version for each environment and use fixed version in the `package.json` like `"@halay08/hasura-common": "0.0.1"`. That mean that shouldn't use `^0.0.1`.

## Development

To have the new testing version from local, please use the version format `-lc-1`. For example, the latest stable version now is `0.0.1`, you can change the version in package.json to `0.0.1-lc-1` and run `npm publish`. After changing, you see an issue need to correct, please change the version to `0.0.1-lc-2`.

After finish the changes, please create a new PR, the reviewer guy will correct the version as `0.0.2` and publish.

All the steps now are manual. We'll have the automation CI/CD later.

## Troubleshooting

You can't be allowed to overwrite the old version of package. If you want to do it, please delete that specific version on Github registry then update the version in the `package.json` or use command `npm version patch/minor/major`.
