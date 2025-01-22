// Generated with @eslint/migrate-config
// TODO: this generated config, likely needs some clean up
// see https://eslint.org/docs/latest/use/configure/migration-guide

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import prettier from "eslint-plugin-prettier";
import testingLibrary from "eslint-plugin-testing-library";
import babelParser from "@babel/eslint-parser";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(
    compat.extends("react-app", "plugin:prettier/recommended", "plugin:storybook/recommended"),
), {
    plugins: {
        prettier: fixupPluginRules(prettier),
        "testing-library": testingLibrary,
    },

    languageOptions: {
        parser: babelParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": "error",

        "react/forbid-component-props": ["error", {
            forbid: [{
                propName: "data-test",
                message: "Use `data-testid` instead of `data-test` attribute",
            }],
        }],

        "react/forbid-dom-props": ["error", {
            forbid: [{
                propName: "data-test",
                message: "Use `data-testid` instead of `data-test` attribute",
            }],
        }],
    },
}, ...fixupConfigRules(compat.extends("react-app", "plugin:prettier/recommended")).map(config => ({
    ...config,
    files: ["**/*.ts?(x)"],
})), {
    files: ["**/*.ts?(x)"],

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": "error",
    },
}, ...compat.extends("plugin:testing-library/react").map(config => ({
    ...config,
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
})), {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

    rules: {
        "testing-library/no-node-access": "warn",
        "testing-library/no-container": "warn",
        "testing-library/no-debugging-utils": "warn",
        "testing-library/await-async-queries": "error",
        "testing-library/no-await-sync-queries": "error",
    },
}];