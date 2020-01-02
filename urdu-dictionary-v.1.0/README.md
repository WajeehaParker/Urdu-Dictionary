# electron-typescript-quick-start

**Clone and run for a quick way to see an Electron using Typescript in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.ts` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `renderer.ts` - A Typescript file that is ran inside the **renderer process**.
- `tsconfig.json` - Typescript compiler settings
- `typings.json` - Definiteion Typings for Typescript

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com), [Typescript](https://www.typescriptlang.org/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) along with [nvm](https://github.com/creationix/nvm) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/a904guy/electron-typescript-quick-start.git
# Go into the repository
cd electron-typescript-quick-start
# Install dependencies and run the app
npm install
# Install TypeScript Typings dependencies
npm install typescript typings -g
npm run install;
npm start;
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC-by-SA 4.0 INT](LICENSE.md)
