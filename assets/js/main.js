const {ipcRenderer} = require("electron");
const tabs = document.querySelectorAll("nav li.tab");
const content = document.querySelector(".template-content");

require("./assets/js/nav.js");