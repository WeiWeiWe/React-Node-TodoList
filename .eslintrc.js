const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
  },
  rules: {
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    'import/order': OFF,
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    'unicorn/prevent-abbreviations': OFF,
    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          snakeCase: false,
          pascalCase: true,
        },
      },
    ],

    '@typescript-eslint/no-useless-constructor': ERROR,
    '@typescript-eslint/no-empty-function': WARN,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-use-before-define': ERROR,
    'no-use-before-define': OFF,
    '@typescript-eslint/no-unused-vars': WARN,
    'no-unused-vars': OFF,

    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-one-expression-per-line': OFF,
    'react/destructuring-assignment': OFF,
    'react/state-in-constructor': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/prop-types': OFF,
  },
};
