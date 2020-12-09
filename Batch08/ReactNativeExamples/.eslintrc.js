module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  plugins: ['react-hooks'],

  rules: {
    jsxQuotes: 'off',
    arrowParens: 'off',
  },
};
