const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 596,
      height: 1390,
      frame: false,
      icon: "hass.png",
      show: true,
      transparent: true
    })
  
    win.loadURL('https://hass.thijsk.systems')
    win.removeMenu()
    win.setMaximumSize(596, 9999)
    win.setPosition(1964, 0)
    win.setAlwaysOnTop(false, 'normal')
  }

  app.whenReady().then(() => {
    createWindow()
  })