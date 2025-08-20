module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/button-has-type": "off",
    "import/prefer-default-export": "off",
    "react/no-unknown-property": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "object-curly-newline": "off",
  },
};
