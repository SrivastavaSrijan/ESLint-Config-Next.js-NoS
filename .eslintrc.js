require('@rushstack/eslint-patch/modern-module-resolution');
const config = {
  // This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project

  // Configuration for JavaScript files
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'unused-imports',
        'simple-import-sort',
      ],
      extends: [
        'next/core-web-vitals',
        'airbnb-typescript',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      parser: '@typescript-eslint/parser',
      rules: {
        'prettier/prettier': [
          'error',
          {
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
            tabWidth: 2,
            printWidth: 80,
            endOfLine: 'auto',
          },
        ],

        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        'unused-imports/no-unused-imports': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        'unused-imports/no-unused-vars': [
          'off',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        // Since we use prettier for indents, we don't need these rules
        indent: 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'import/no-cycle': 'off',
        'import/order': 'off',
      },
    },
  ],
};

module.exports = config;
