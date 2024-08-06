const { contextBridge } = require("electron")
const fs = require("fs")

contextBridge.exposeInMainWorld("electronFs", {
  readdirSync: fs.readdirSync
})
