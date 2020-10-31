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