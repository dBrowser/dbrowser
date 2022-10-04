<p align="center">
  <a href="https://dbrowser.com"><img src="static/icons/icon.png" width="256"></a>
</p>

<div align="center">
  <h1>dBrowser Desktop</h1>


dBrowser is a web browser for Web3, built on top of modern web technologies such as `Electron` and `React`.

</div>

# Development

## Running

Before running dBrowser, please ensure you have **latest** [`Node.js`](https://nodejs.org/en/) and [`Yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed on your machine.

### Windows

Make sure you have build tools installed. You can install them by running this command as **administrator**:

```bash
$ npm i -g windows-build-tools
```

```bash
$ yarn # Install needed depedencies.
$ yarn rebuild # Rebuild native modules using Electron headers.
$ yarn dev # Run dBrowser in development mode
```

### More commands

```bash
$ yarn compile-win32 # Package dBrowser for Windows
$ yarn compile-linux # Package dBrowser for Linux
$ yarn compile-darwin # Package dBrowser for macOS
$ yarn lint # Runs linter
$ yarn lint-fix # Runs linter and automatically applies fixes
```

More commands can be found in [`package.json`](package.json).

# Documentation

Guides and the API reference are located in [`docs`](docs) directory.

