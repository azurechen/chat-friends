module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['next/core-web-vitals', 'airbnb-typescript', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': [1, { allow: ['warn', 'error'] }],
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 'off',
    'jsx-a11y/media-has-caption': 0,
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/indent': 'off',
  },
};
