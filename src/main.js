import "./style.css";

import restartApp from "./restartApp.js";
import initProgressBar from "./progressBar.js";
import initInputArea from "./inputArea.js";
import initKeyboard from "./keyboard.js";

function main({ key }) {
  initKeyboard();
  restartApp();
  initInputArea();
}

document.addEventListener("DOMContentLoaded", main);
