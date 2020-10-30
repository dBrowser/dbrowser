## Check the deps installation

Run 
`npm install`

**Note:** Make sure `./app/bg/dwebx/converter` has its node_modules installed

## Update release versions and release-notes links
Pretty straight forward

## Build
Run `npm run build`

## Apply the following patches manually to the scripts/node_modules"

`app-builder-lib/out/util/AppFileWalker.js` this one stops electron-bundler from removing `./app/bg/dwebx/convert/node_modules`

```
if (!nodeModulesFilter(file fileState)) {
  if (!file.includes('dwebx')) {
    return false;
  }
}


if (file.endsWith(nodeModulesSystemDependentSuffix)) {
  if (!file.includes('dwebx')) {
    return false;
  }
}
```

## Bundle Release
Run

`npm run release`

On MacOS you'll need to supply two environment variables:

```
appleId=appleid@gmail.com
appleIdPassword=password
```

## Done and Done
-----S, Shikhar on 10/27/2020 11:36 AM wrote:

>

The process is currently a little silly. This file is getting progressively less awful.

## Check the deps installation

Run npm install. Make sure ./app/bg/dat/converter has its node_modules installed.

## Make sure to update the desktop versions and release-notes links

SO HELP ME GOD if you forget this I'll kill you.

## Build

`npm run build`

## Apply the following patches manually to the scripts/node_modules

`app-builder-lib/out/util/AppFileWalker.js` this one stops electron-bunder from removing ./app/bg/dat/converter/node_modules

```
if (!nodeModulesFilter(file, fileStat)) {
  if (!file.includes('dwebx')) {
    return false;
  }
}

if (file.endsWith(nodeModulesSystemDependentSuffix)) {
  if (!file.includes('dwebx')) {
    return false;
  }
}
```

## Bundle

`npm run release`

On MacOS you'll need to supply two env vars:

```
appleId=pfrazee@gmail.com
appleIdPassword={be paul to have this}
```

## It's just that easy

Boy how about that.