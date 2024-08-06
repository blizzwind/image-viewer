const { app, BrowserWindow } = require("electron")
const path = require("node:path")
const fs = require("fs")

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
	autoHideMenuBar: true,
	resizable: false,
	webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, "preload.js")
    }
  })
  mainWindow.loadFile("index.html")
}

app.whenReady().then(() => {
  createWindow()
})
