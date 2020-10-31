[Join The Patriots Club & Back This Project!](https://peepsx.com/fund/)

dBrowser is a web browser for the dweb://, as well as the rest of the web. [Visit the website](http://dbrowser.com).

### Backers
You can become a backer of this project by joining our [Patriots Club](https://peepsx.com/join) for $5/month.

### Sponsors
You can become a sponsor of this project by donating $100 or more via our [Donation Portal](https://peepsx.com/donate).

## Installing
### Binaries
Installers are available via the [official download page](https://peepsx.com/dbrowser/) or via the [Releases Page](https://github.com/dbrowser/dbrowser/releases) via this repo.

### Building From Source
Requires Node.JS 12 or higher

In Linux (and in some cases macOS) you need libtool, m4, autoconf, and automake:

```bash
sudo apt-get install libtool m4 make g++ autoconf # debian/ubuntu
sudo dnf install libtool m4 make gcc-c++ libXScrnSaver #fedora
brew install libtool autoconf automake #macos
```

For Windows builds, [Python 2.7](https://www.python.org/downloads/release/python-2711/), Visual Studio 2015 or 2017, and [Git](https://git-scm.com/download/win) are required. 

You could also use [windows-build-tools](https://www.npmjs.com/package/windows-build-tools).Then run:

```powershell
npm config set python c:/python27
npm config set msvs_version 2015
npm install -g node-gyp
npm install -g gulp
```

### Build Instructions
```bash
git clone https://github.com/dbrowser/dbrowser.git
cd dbrowser/scripts
npm install  # rebuild fixes v8 api errors when building native modules
npm run rebuild # you must run this after each install
npm start
```

If you're getting module errors after pulling the latest update, run the following:
```bash
npm run burnthemall
```
This will remove `node_modules/` and will handle the full install/rebuild process for you. `npm start` should work afterward.

If you're doing development, run `npm run watch` to have assets build automatically.

## Documentation
Looking to become a dBrowser developer? Take a look at the [Build Notes](./build-notes.md)

Here are a few other crucial links involving the entire dWeb ecosystem:
- [dWeb/ARISEN Documentation](https://docs.arisen.network
- [dBrowser Docs](https://docs.dbrowser.com
- [DWebXArchive](https://docs.dbrowser.com/docs/apis/dwebx.html)
- [DWebX.json Site Manifest](https://docs.dbrowser.com/docs/apis/manifest.html)
- [Other APIs](https://docs.dbrowser.com/docs/apis)

### Environment Variables
- `DEBUG` - Which log systems to output? A comma separated string. Can be `dbrowser`, `dwebx`, `bittorrent-dht`, `dns-discovery`, `ddatabase-protocol`. Specific `*` for all.
- `dBrowser_OPEN_URL`: Open the given URL on load, rather than the previous session or default tab.
- `dBrowser_USER_DATA_PATH`: Override the user-data path, therefore, c hanging where data is read/written. Useful for testing. For default value, see `userData` in the [Electron Docs](https://electron.atom.io/docs/api/app/#appgetpathname).
- `DBROWERX_DWEBX_QUOTA_DEFAULT_BYTES_ALLOWED`: Override the default max-quote for bytes allowed to be written by a dWebx site. Useful for testing. Default value is `500mb`. This can be a Number or a String. Check [bytes.parse](https://github.com/visionmedia/bytes.js/tree/a4b9af2bf289175f12b3538eb172f2489844b1ec#bytesparsestringnumber-value-numbernull) for supported units and abbreviations.

## Disclosure of Security Risks
See [SECURITY.md](./SECURITY.md) for reporting security issues and vulnerabilities.

## LICENSE
[MIT](./LICENSE.md)

## Copyright
Copyright (c) 2020 Peeps Labs
