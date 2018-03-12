const {ipcRenderer} = require("electron");
const emailAccounts = ipcRenderer.sendSync("emailAccounts");
const tabs = document.querySelectorAll("nav li.tab");
const content = document.querySelector(".template-content");

require("./assets/js/nav.js");

// When an email is updated or changed
ipcRenderer.on("emailAccountsUpdated", (data) => {
    emailAccounts = data;
});