const {app, BrowserWindow, Menu, MenuItem, ipcMain, Notification} = require('electron');
const autoUpdater = require("electron-updater").autoUpdater;
const path = require('path');
const url = require('url');
const fs = require("fs");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
// const notif = new Notification();

function createWindow () {
	// Create the browser window.
	win = new BrowserWindow({
		width: 1024, 
		height: 800,
		minWidth: 450,
		minHeight: 450
	});

	// and load the index.html of the app.
	win.loadURL(LoadPage("main"));

	// Emitted when the window is closed.
	win.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		win = null
	});

	Menu.setApplicationMenu(CreateMenu());
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	autoUpdater.checkForUpdatesAndNotify();
	createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow();
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on("notification:mail", (title, desc) => {
	if (Notification.isSupported()) {
		new Notification().show()
	}
})

// Returns a url joined path 
function LoadPage(fileName) {
	var urlPath = url.format({
		pathname: path.join(__dirname, fileName+".html"),
		slashes: true
	});

	return urlPath;
}

function CreateMenu() {
	let menu = new Menu();

	menu.append(new MenuItem({
        "label": "File",
        "submenu": [
            {
				"label": "Quit",
				"accelerator": "CmdOrCtrl+Q",
                "click": () => {
                    app.quit();
                }
			}
        ]
	}));

	menu.append(new MenuItem({
		"label": "View",
		"submenu": [
			{
				"label": "Reload", 
				"role": "reload",
				"accelerator": "CmdOrCtrl+R",
				"click": () => { 
					win.reload();
				}
			},
			{
				"label": "Console Window", 
				"accelerator": "CmdOrCtrl+I",
				"click": () => {
					win.openDevTools();
				}
			}
		]
	}));

	return menu;
}