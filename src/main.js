import { displayNewWords, updateInputAreaChar } from "./inputArea";
import updateKeyboard, { displayKeyboard } from "./keyboard";
import updateProgressBar from "./progressBar";
import "./style.css";

function main({ key }) {
  const inputArea = document.querySelector("#input-area");
  const keyboardContainer = document.querySelector("#keyboard");
  const dashboard = document.querySelector("#dashboard");
  const restartButton = document.querySelector("#restart-button");
  let data = { appState: false };

  // initial setup displaying words and keyboard ui
  displayKeyboard(keyboardContainer);
  displayNewWords(inputArea);

  // start and restart machanism
  restartButton.addEventListener("click", reStartEventHandler);
  function reStartEventHandler(event) {
    if (!data.appState) {
      data.appState = true;
      restartButton.textContent = "restart";
      dashboard.classList.replace("flex", "hidden");
      displayNewWords(inputArea);
      updateProgressBar();
      updateKeyboard(inputArea.querySelector("span").textContent);
    } else {
      data.appState = false;
      restartButton.textContent = "start";
      dashboard.classList.replace("hidden", "flex");
    }
  }

  // keyboard events monitoring mechanism
  document.addEventListener("keydown", keyboardEventHandler);
  function keyboardEventHandler(event) {
    if (!data.appState) return;
    if (event.key.length > 1) return;

    const enterdKey = event.key;
    let expactedKey = null;
    const wordsList = Array.from(inputArea.querySelectorAll("span"));

    // selecting active character
    wordsList.forEach((char) => {
      if (char.hasAttribute("active")) {
        expactedKey = char;
      }
    });

    // chacking entered character is right or wrong
    if (expactedKey.textContent == enterdKey) {
      updateInputAreaChar(expactedKey, true);
      updateKeyboard(
        expactedKey.nextElementSibling.textContent,
        expactedKey.textContent,
        true
      );
    } else {
      updateInputAreaChar(expactedKey, false);
      updateKeyboard(
        expactedKey.nextElementSibling.textContent,
        expactedKey.textContent,
        false
      );
    }

    // updating progressBar
    updateProgressBar();

    // restarting app
    if (expactedKey.nextElementSibling.tagName == "P") {
      restartButton.click();
    }
  }
}

document.addEventListener("DOMContentLoaded", main);
