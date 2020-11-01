import * as rpc from 'pauls-electron-rpc'
import * as hyperdrive from './fg/hyperdrive'
import * as internal from './fg/internal'
import * as external from './fg/external'
import * as experimental from './fg/experimental'
import { contextBridge } from 'electron'

export const setup = function () {
  // setup APIs
  var dbrowser = {}
  if (['dbrowser:', 'dweb:', 'https:', 'http:', 'data:'].includes(window.location.protocol) ||
      window.location.hostname.endsWith('hyperdrive.network') /* TEMPRARY */) {
    dbrowser.hyperdrive = hyperdrive.setup(rpc)
    Object.assign(dbrowser, external.setup(rpc))
  }
  if (['dbrowser:', 'dweb:'].includes(window.location.protocol)) {
    contextBridge.exposeInMainWorld('experimental', experimental.setup(rpc)) // TODO remove?
  }
  if (window.location.protocol === 'dbrowser:' || /* TEMPRARY */ window.location.hostname.endsWith('hyperdrive.network')) {
    Object.assign(dbrowser, internal.setup(rpc))
  }
  if (Object.keys(dbrowser).length > 0) {
    contextBridge.exposeInMainWorld('dbrowser', dbrowser)
  }
}