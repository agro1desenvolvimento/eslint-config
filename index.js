module.exports = {
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: [
    'jest',
    '@typescript-eslint',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    curly: ['error', 'multi-line'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-globals': ['error', 'localStorage'],
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',

    'import/default': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '__mocks__/**',
          '__tests__/**',
          'e2e/**',
          'src/setupTests.ts',
        ],
      },
    ],
    'import/no-named-default': 'off',
    'import/no-named-as-default-member': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': ['error'],
  },
  settings: {
    'import/resolver': {
      typescript: { },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
