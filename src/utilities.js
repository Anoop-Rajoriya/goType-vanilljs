import { info } from "autoprefixer";

export function getRandomWordsElm(len) {
  const wordSet =
    "In the Aurora, beneath a glowing Beacon, a swift Cheetah chased a curious Dolphin that had leaped from the ocean into the magical Eclipse of a full moon. Falcons soared high, their cries echoing across the Galaxy, where the Horizon gleamed with hues of golden Igloos shaped by frozen storms. A playful Jungle Kite danced in the wind above the serene Lion’s den, nestled near the Mountain, where Nectar flowed in rivers surrounded by blooming Orchids. Amidst the misty Panda forest, the crystalline Quartz glimmered like a hidden Rainbow. Satellites blinked in the vast sky while a solitary Tiger prowled silently under the Umbrella of tall trees, guarded by a fiery Volcano that watched over the land. At the shore, a young Wizard played a Xylophone, its notes carrying tales of Yellow sands and the gentle breeze of a passing Zephyr. Nearby, carved into the rock, were mysterious symbols: 12345, 67890, ABCDE, and abcde, reminding travelers of the code of the universe.";
  // const wordSetArray = wordSet.split(" ");
  const wordSetArray = "ASDF:, assd;,".split(" ");
  let elms = [];
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * wordSetArray.length);
    const wordsArray = [...Array.from(wordSetArray[index])];

    if (i + 1 < len) wordsArray.push(" ");

    wordsArray.map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      if (char == " ") {
        span.setAttribute("key", "space");
      } else {
        span.classList.add("text-white/65");
      }
      span.classList.add("cursor");
      elms.push(span);
    });
  }

  elms[0].setAttribute("active", "true");
  elms[0].classList.add("cursor-active");
  return elms;
}

export function monitorWPM() {
  const goType = {};
  if (
    localStorage.getItem("goType") &&
    localStorage.getItem("goType").startTime
  ) {
    goType.endTime = new Date();
    localStorage.setItem("goType", goType);
  } else {
    goType.startTime = new Date();
    localStorage.setItem("goType", goType);
  }

  if (
    localStorage.getItem("goType").startTime &&
    localStorage.getItem("goType").endTime
  ) {
    const elapsedTimeInMinutes = (endTime - startTime) / 1000 / 60;
    const wpm = Math.round(2 / elapsedTimeInMinutes);
    goType.prevWpm = wpm;
    goType.startTime = null;
    goType.endTime = null;
  }
}
