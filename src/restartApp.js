import initKeyboard, { updateKeyboard } from "./keyboard";
import updateProgressBar from "./progressBar";
import { getRandomWordsElm } from "./utilities";

export default function restartApp() {
  const randomWords = getRandomWordsElm(2);
  const inputArea = document.querySelector("#input-area");
  const dashboard = document.querySelector("#dashboard");
  const keyboard = document.querySelector("#keyboard");

  // reseting all elements
  dashboard.classList.remove("flex");
  dashboard.classList.add("hidden");
  inputArea.textContent = "";
  inputArea.append(dashboard);

  // addding new words into inputarea
  randomWords.forEach((charElm) => {
    inputArea.append(charElm);
    if (charElm.hasAttribute("active")) {
      updateKeyboard(charElm.textContent);
    }
  });

  // reseting progressbar
  updateProgressBar();
}
