module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript'],
  plugins: ['react-hooks'],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // 'react/jsx-props-no-spreading': 0,
  },
};