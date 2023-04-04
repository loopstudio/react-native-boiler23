<h1>React Native Boilerplate</h1>

![react app banner](https://lh3.googleusercontent.com/p/AF1QipPAnUXH-Lx04hyORxwIO2thkNMOyba4VNe8qikj=s1360-w1360-h1020)

<p align="center"><strong>An opinionated boilerplate code for starting a new react native mobile project.</strong></p>

<sub>Created and maintained with ❤️ by <a href="[https://loopstudio.dev/](https://loopstudio.dev/)">LoopStudio</a></sub>

## Prerequisites

To set up the environments it's recommended to follow the [official documentation](https://reactnative.dev/docs/environment-setup)

Otherwise follow the next steps:

Before proceeding, make sure you have the following installed on your machine:

- Node.js
- NPM
- Git
- Android Studio (for the Android platform)
- Xcode (for the iOS platform)

### Installation of prerequisites for Android Studio

For Android Studio, make sure you have installed the following:

- JDK 8 or higher
- Android SDK (the latest stable version is recommended)
- Android SDK Platform 29 or higher
- Android SDK Build-Tools 29.0.2 or higher
- Android Emulator (optional)

### Installation of prerequisites for Xcode

For Xcode, make sure you have installed the following:

- Xcode (the latest stable version is recommended)
- iOS SDK (installed automatically with Xcode)
- iOS Simulator (installed automatically with Xcode)

## Installation

To install the project dependencies, follow these steps:

1. Clone this repository using Git:


`git clone https://github.com/loopstudio/react-native-boiler23.git`


2. Navigate to the project folder:

`cd rnBoilerLoop`


3. Install the dependencies using NPM:

`yarn install`


## Running the project on Android

To run the project on an Android device, follow these steps:

1. Open Android Studio and load the project.

2. Make sure that the Android SDK you are using in Android Studio is the same as specified in the `android/build.gradle` file.

3. Open a terminal in the project's root folder and run the following command:

`yarn android`


This will compile the project and run it on an Android device connected to your machine.

## Running the project on iOS

To run the project on an iOS device, follow these steps:

1. Open Xcode and load the project.

2. Make sure that you have the latest stable version of Xcode installed and updated on your machine.

3. Open a terminal in the project's root folder and run the following command:

`yarn ios`


This will compile the project and run it on an iOS simulator on your machine.

## Pre-commit and pre-push hooks:

We use `husky` as a tool to run the linter and unit testing when commiting and pushing new changes. In order to get it working you need to install it firt by running:
```bash
yarn run prepare:husky
```

NOTE: This has to be run locally just once.

### We have added a `pre-commit` and `pre-push` hooks, so linter and test are run before pushing the code to the remote. If for some reason you don't want these processes to be run, add the flag ` --no-verify`, for example:

```bash
# commit
git commit --no-verify -m "commit message"
# push
git push --no-verify
```


## Conclusion

That's it! Now you know how to install and run the React Native project for Android and iOS. If you have any questions or issues, feel free to ask in the React Native help forums or the repository issues.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [List of Packages](#list-of-packages)
- [Recommended Extensions](#recommended-extensions)
- [Getting Started](#getting-started)
- [Running the Test Suite](#running-the-test-suite)
- [Contributing](CONTRIBUTING.md)
- [Credits](#credits)

## Project Structure

```
.
├── .github/
├── public/
├── .husky/
├── src
│   ├── assets/
│   ├── features/
│   ├── navigator/
│   ├── services/
│   │   ├── commons/
│   ├── helpers/
│   ├── screens/
├── App.tsx
├── .env
├── .gitignore
├── .eslintrc.json
├── .firebaserc
├── .prettierrc.json
├── firebase.json
├── tsconfig.json
├── jest.config.js
├── package.json
├── README.md
└── yarn.lock
```

## Feature Structure

```
├── features
│ └── myFeature
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── services/
│   ├── types.ts
│   └── index.ts
```

#### What does a feature export?

A feature should export anything that is meant to be consumed from outside the feature
IE:

- actions
- reducer
- components (if they're meant to be used outside the feature)
- hooks (if they're meant to be used outside the feature)
- helpers (if they're meant to be used outside the feature)

## Component Structure

```
├── MyComponent
│ ├── index.ts
│ ├── MyComponent.tsx
│ ├── MyComponent.styles.tsx
│ ├── MyComponent.test.tsx
```

### Optional

If you want to split your component into pieces for readability, maintainability, or any other reason you could put the secondary components in the same folder. This is only for cases where these secondary components are only used inside MyComponent. If later they want to be used in other places they should be extracted to their own folder inside components.

```
├── MyComponent
│ ├── index.ts
│ ├── MyComponent.tsx
│ ├── MyComponent.styles.tsx
│ ├── MyComponent.test.tsx
│ ├── SecondaryComponent.tsx
│ ├── SecondaryComponent.styles.tsx
```

## Features

1. Based on [React Native Documentation](https://reactnative.dev/).
2. Code splitting and prefetching.
3. Errors handling.
4. The httpClient provides status code errors handling and camelCase to snake_case automatic conversion.
5. Async actions and store hydration.
6. Internationalization.
7. Concurrent Mode ready.

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/) 10.16.3 or greater.
2. Install [Yarn](https://yarnpkg.com/lang/en/) as a package manager.

## List of Packages

### Navigator:

- [React Navigation Documentation](https://reactnavigation.org/): the most popular and powerful routing solution for React.

### Testing:

- [jest](https://jestjs.io/): a delightful JavaScript Testing Framework with a focus on simplicity.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro): a very light-weight solution for testing React components.
- [cypress](https://www.cypress.io/): automated integration tests. This tool isn't installed in our project, but we recommend to use it. You can install it running `yarn add cypress --dev`. For more information about the configuration, you can read [this guide](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

### Flavors/Scheme:

- [react-native-config](https://github.com/luggit/react-native-config): React Native Config is a package that allows you to manage your React Native app's configuration files in a clean and efficient way. It provides a simple API for accessing environment-specific settings, such as API endpoints, credentials, and other configuration values, and allows you to define these settings in dedicated files for each environment (e.g. development, staging, production).

### CI/CD:

- [Github actions](https://docs.github.com/en/actions): GitHub Actions is a feature of the GitHub platform that allows developers to automate their software development workflows. With GitHub Actions, you can create custom workflows that are triggered by various events, such as push and pull requests, and then execute a series of actions to build, test, and deploy your code. These workflows can be defined using YAML syntax and can be shared and reused across projects. GitHub Actions also provides a marketplace of pre-built actions that you can use in your workflows.

- [Fastlane](https://fastlane.tools/): Fastlane is a tool for automating the development and deployment of mobile applications. It provides a set of actions that you can use to build, test, and deploy your iOS and Android apps. With Fastlane, you can define your workflows using a simple configuration file, and then run them from the command line or integrate them with your CI/CD pipeline. Fastlane also provides a number of integrations with other tools and services, such as GitHub, Jenkins, and Slack.

## Recommended Extensions

### Style / Linting

VSCode:

- [Prettier](https://github.com/prettier/prettier-vscode) - An opinionated code formatter.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates [ESLint](http://eslint.org/) into VS Code.

Sublime:

- [Prettier](https://packagecontrol.io/packages/JsPrettier) - JsPrettier is a Sublime Text Plug-in for Prettier, the opinionated code formatter.
- [ESLint](https://packagecontrol.io/packages/ESLint) - ESLint any JavaScript file in Sublime Text.

### Intellisense

VSCode:

- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - AI-assisted development features.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Visual Studio Code plugin that autocompletes filenames.
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - Visual Studio Code plugin that autocompletes npm modules in import statements.

Sublime:

- [SublimeCodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel) - Full-featured code intelligence and smart autocomplete engine.
- [AutoFileName](https://packagecontrol.io/packages/AutoFileName) - Sublime Text plugin that autocompletes filenames.

### Version Control

VSCode:

- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame) - See Git Blame information in the status bar for the currently selected line.

Sublime:

- [Git Blame](https://packagecontrol.io/packages/Git%20blame) - Show Git blame information while viewing a file in Sublime Text.

### Syntax Highlighting

VSCode:

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - A port of [DotENV](https://github.com/zaynali53/DotENV) for VSCode.
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - This extension styles CSS/web colors found in your document.
- [VSCode Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) - Syntax highlighting and IntelliSense for styled-components or emotion.

Sublime:

- [DotENV](https://packagecontrol.io/packages/DotENV) - SublimeText Syntax Highlighting support for Environment (.env) Files
- [Color Highlight](https://packagecontrol.io/packages/Color%20Highlight) - 🎨 Lightweight Color Highlight colorizer for Sublime Text

### Snippets

VSCode:

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - This extension provides you JavaScript and React/Redux snippets in ES7 with Babel plugin features for VSCode.

Sublime:

- [ES7 React/Redux/GraphQL/React-Native snippets](https://packagecontrol.io/packages/Sublime%20ES7%20React%20Redux%20ReactNative%20JS%20snippets) - Sublime ES7 React/Redux/React-Native/JS snippets.

## Running the Test Suite

1. Run the `yarn test` command.

## Credits

React App Boilerplate is maintained by [LoopStudio](https://loopstudio.dev).

[<img src='https://loopstudio.dev/wp-content/uploads/2019/05/logoblack.png' width='300'/>](https://loopstudio.dev)

