import { updateKeyboard } from "./keyboard";
import updateProgressBar from "./progressBar";
import restartApp from "./restartApp";

export default function initInputArea() {
  document.addEventListener("keydown", eventHandler);
  function eventHandler({ key }) {
    // prevent special keys
    if (key.length > 1) return;
    // initializing var
    const wordsList = document.querySelectorAll("#input-area span");
    let activeElm = null;
    // loop throug the charElm to select active element
    wordsList.forEach((char) => {
      if (char.getAttribute("active")) {
        activeElm = char;
      }
    });
    // preventing user input if all words typed
    if (!activeElm) {
      return;
    }
    // updaing next key cursor from inputArea.
    if (activeElm.nextElementSibling) {
      activeElm.classList.remove("cursor-active");
      activeElm.nextElementSibling.classList.add("cursor-active");
    }
    // chacking user key is right or wrong.
    if (key == activeElm.textContent) {
      activeElm.classList.replace("text-white/65", "text-white");
      // updating pressed key from keyboard as right
      updateKeyboard(
        activeElm.nextElementSibling
          ? activeElm.nextElementSibling.textContent
          : null,
        activeElm.textContent,
        true
      );
    } else {
      activeElm.classList.replace("text-white/65", "text-red-700");
      // updating pressed key from keyboard as wrong
      updateKeyboard(
        activeElm.nextElementSibling
          ? activeElm.nextElementSibling.textContent
          : null,
        activeElm.textContent,
        false
      );
    }
    // updaing active key
    activeElm.removeAttribute("active");
    if (activeElm.nextElementSibling != null) {
      activeElm.nextElementSibling.setAttribute("active", "true");
    }
    // updating remaining key progressbar.
    updateProgressBar();

    // ending the typing process
    if (!activeElm.nextElementSibling) {
      dashboard.classList.remove("hidden");
      dashboard.classList.add("flex");
      dashboard.addEventListener("click", () => {
        restartApp();
      });
    }
  }
}
