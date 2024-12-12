import { getWords } from "./utilities";

export function displayNewWords(inputArea) {
  const wordsList = getWords(10);
  const dashboard = document.querySelector("#dashboard");

  inputArea.textContent = "";

  inputArea.append(...wordsList);
  inputArea.append(dashboard);
}

export function updateInputAreaChar(activeKey, flag) {
  if (flag) {
    activeKey.classList.replace("text-white/65", "text-white");
  } else {
    activeKey.classList.replace("text-white/65", "text-red-500");
  }
  activeKey.removeAttribute("active");
  activeKey.classList.remove("cursor-active");
  if (
    activeKey.nextElementSibling &&
    activeKey.nextElementSibling.tagName == "SPAN"
  ) {
    activeKey.nextElementSibling.setAttribute("active", "true");
    activeKey.nextElementSibling.classList.add("cursor-active");
  }
}
