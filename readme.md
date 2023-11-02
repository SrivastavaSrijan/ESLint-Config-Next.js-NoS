# NoS™ ESLint and Prettier Setup

These are my customized settings for ESLint and Prettier, tailored to your specific needs.

## What it does

- Lints JavaScript and TypeScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of HTML script tags
- Lints + Fixes React using eslint-config-airbnb and eslint-config-next
- You can see all the [rules here](https://github.com/wesbos/eslint-config-wesbos/blob/master/.eslintrc.js) - these align with your coding preferences, but you can customize them further.

## Project Install

It's recommended you install this once per every project. ESLint used to have global configs, but no longer.

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Install your customized ESLint config:

```bash
npm install ESLint Config Next.s - NoS
```

3. Configure ESLint settings in your `package.json` file under the "eslintConfig" property:

```json
"eslintConfig": {
  "extends": ["ESLint Config Next.s - NoS"]
}
```

4. For TypeScript projects, update the extends to use `ESLint Config Next.s - NoS/typescript`.

5. TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) or [your base config](https://github.com/wesbos/dotfiles/blob/master/tsconfig.json) will do!

6. Add two scripts to your package.json for linting and fixing:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

7. You can manually lint your code by running `npm run lint` and fix issues with `npm run lint:fix`. However, it's recommended to configure your code editor for automatic linting and fixing.

## Settings

If you'd like to override ESLint or Prettier settings, you can add rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```json
{
  "extends": [
    "ESLint Config Next.s - NoS"
  ],
  "rules": {
    "no-console": 2,
  }
}
```

### Prettier Rules

Your customized Prettier settings include `singleQuote: true` and `endOfLine: 'auto'`. If you want additional [Prettier options](https://prettier.io/docs/en/options.html), create a `.prettierrc` file in your project's root directory:

```json
{
  "singleQuote": true,
  "endOfLine": "auto",
  "tabWidth": 4
}
```

You can also include these settings in your ESLint config as a rule:

```json
{
  "extends": ["ESLint Config Next.s - NoS"],
  "rules": {
    ... any ESLint rules here
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "endOfLine": "auto",
        "tabWidth": 4
      },
    ],
  }
}
```

Note: If you switch to double quotes, add this ESLint rule to avoid conflicts:

```json
"quotes": ["error", "double"]
```

## Integrating with VS Code

Here are the instructions for setting up ESLint and Prettier in Visual Studio Code (VS Code):

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code.

2. Configure VS Code settings for ESLint and Prettier by opening the settings.json file:

```json
// These are all my auto-save configs
"editor.formatOnSave": true,
// Turn it off for JS and JSX, ESLint will handle this
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// Tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right corner and select 'Allow Everywhere' in the alert window. Restart VS Code if necessary.

## Using with Create React App

1. Run `npx install-peerdeps --dev ESLint Config Next.s - NoS`

2. Update your `package.json` to use the customized ESLint config:

```json
"extends": ["ESLint Config Next.s - NoS"]
```

## Using with Gatsby

1. Run `npx install-peerdeps --dev ESLint Config Next.s - NoS`

2. Follow the "Local / Per Project Install" steps above.

## Using with WSL

It should work as above.

## Using with JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

If you're using JetBrains products, follow these steps:

### If You Choose Local / Per Project Install Above

1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (or search settings for "eslint").

2. Select **Automatic ESLint Configuration**.

3. Check **Run eslint --fix on save**.

### If You Choose Global Install

Follow these steps for a typical Node / ESLint global installation:

1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (or search settings for "eslint").

2. Select **Manual ESLint configuration**.

3. Choose your **Node interpreter** from the detected installations.

4. Select the global **ESLint package** from the dropdown.

5. Leave Configuration File as **Automatic Search**.

6. Check **Run eslint --fix on save**.

### Ensure the Prettier plugin is disabled if installed.

1. Open Prettier configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > Prettier (or search settings for "prettier").

2. Uncheck both **On code reformat** and **On save**.

3. If you have the Prettier extension enabled for other languages, such as CSS and HTML, turn it off for JS since we are handling it through ESLint.

---

Feel free to customize these settings further based on your specific project requirements. If you have any questions or need further assistance, please don't hesitate to ask. Happy coding, Srijan!
