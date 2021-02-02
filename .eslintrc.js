module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-native',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  rules: {
    'arrow-body-style': 'warn',
    indent: 'off',
    'no-use-before-define': ['error', { variables: false }],
  },
};
