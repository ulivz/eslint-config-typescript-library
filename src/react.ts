/**
 * @license
 * Copyright (c) ULIVZ. All Rights Reserved.
 */

// FIXME: why we cannot resolve `@typescript-eslint/utils` after bump it to 6.x
import type { TSESLint } from '@typescript-eslint/utils/dist/index';

const REACT_LINTER_CONFIG: TSESLint.Linter.Config = {
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
  },
  rules: {
    /**
     * Restrict file extensions that may contain JSX
     * ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': ['warn'],
    /**
     * Validate JSX indentation
     * ref: https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent.md
     */
    'react/jsx-indent': ['warn'],
  },
};

export = REACT_LINTER_CONFIG;
