const electron = require('electron');
const app = electron.app;
const browserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let win ;

function createWindow(){
    win = new browserWindow({
        height:710,
        width:1286,
        resizable:true,
        webPreferences:{
            enableRemoteModule: true,
            nodeIntegration:true
        }
    });
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes: true
    }));
    
    win.on('closed',()=>{
        win=null;
        console.log("win closed");
    });
}

app.on('ready',()=>{
    createWindow();
})

