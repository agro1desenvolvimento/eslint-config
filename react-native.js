// Essa configuração vai re-importar tudo por conta do @react-native-community.

module.exports = {
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  plugins: [
    'jest',
    '@typescript-eslint',
    'react',
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
    '@typescript-eslint/no-useless-constructor': 'error',

    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts'] }],
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',

    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',

    'no-restricted-imports': [
      'error',
      {
        patterns: ['react-native-elements', 'react-test-renderer'],
      },
    ],
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
    // https://github.com/facebook/react-native/issues/28549#issuecomment-657249702
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
