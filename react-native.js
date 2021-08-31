module.exports = {
  extends: [
    '@agro1desenvolvimento/eslint-config/react',
    '@react-native-community',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['react-native-elements', 'react-test-renderer'],
      },
    ],
  },
  settings: {
    // https://github.com/facebook/react-native/issues/28549#issuecomment-657249702
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
