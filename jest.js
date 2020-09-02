module.exports = {
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
    'project': './tsconfig.json',
    'tsconfigRootDir': '.'
  },
  'plugins': [
    'jest'
  ],
  'extends': [
    'plugin:jest/recommended'
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'es2020': true,
    'jest': true
  },
  'rules': {
    /* Jest */
    'jest/consistent-test-it': [
      'error',
      {
        'fn': 'it'
      }
    ],
    'jest/expect-expect': 'error',
    'jest/lowercase-name': [
      'error',
      {
        'ignore': [
          'describe'
        ]
      }
    ],
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'off',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'off',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'off',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'off',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'off',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-callback': 'off',
    'jest/no-test-prefixes': 'off',
    'jest/no-test-return-statement': 'off',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error'
  }
};
