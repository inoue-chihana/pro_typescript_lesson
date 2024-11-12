import prettier from 'eslint-plugin-prettier';
import _import from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...compat.extends('eslint:recommended', 'plugin:prettier/recommended'),
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                myCustomGlobal: "readonly"
            }
        },

        files: ['src/**/*.js', 'src/**/*.ts'],

        plugins: {
            prettier,
            import: fixupPluginRules(_import),
        },

        rules: {
            'prettier/prettier': 'error',

            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                },
            ],

            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
];
