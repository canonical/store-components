module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["prettier", "testing-library"],
  extends: ["react-app", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "react/forbid-component-props": [
      "error",
      {
        forbid: [
          {
            propName: "data-test",
            message: "Use `data-testid` instead of `data-test` attribute",
          },
        ],
      },
    ],
    "react/forbid-dom-props": [
      "error",
      {
        forbid: [
          {
            propName: "data-test",
            message: "Use `data-testid` instead of `data-test` attribute",
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      extends: [
        "react-app", // Uses the recommended rules from CRA.
        "plugin:prettier/recommended", // Ensure this is last in the list.
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "prettier/prettier": "error",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-node-access": "warn",
        "testing-library/no-container": "warn",
        "testing-library/no-debugging-utils": "warn",
        "testing-library/await-async-queries": "error",
        "testing-library/no-await-sync-queries": "error",
      },
    },
  ],
};
