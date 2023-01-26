# eslint-config-typescript-library

[![npm version](https://badgen.net/npm/v/eslint-config-typescript-library)](https://npm.im/eslint-config-typescript-library) 

ESLint config for TypeScript Library

## Features

- Indent with 2 spaces and **always** semicolon
- Best practice with `js`、`ts`、`react` or their bundle!

## Install

```bash
npm i -D eslint-config-typescript-library
# OR: npm install -D eslint eslint-config-typescript-library
```

## Usage

### Lint All

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["eslint-config-typescript-library"],
};
```

This enable lint for both `js`、`ts` and `react`! you'll also need `typescript` as a devDependency at your project.

## Lint TypeScript

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["eslint-config-typescript-library/ts"],
};
```

You need specify `--ext` explicitly to enable TypeScript linting:

```json
{
  "lint": "eslint src/** --ext .js,.jsx,.ts,.tsx --fix"
}
```

### Lint JavaScript

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["eslint-config-typescript-library/js"],
};
```

### Lint React

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["eslint-config-typescript-library/react"],
};
```

## License

MIT &copy; [ULIVZ](https://github.com/sponsors/ulivz)