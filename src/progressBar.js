export default function updateProgressBar() {
  const wordList = document.querySelectorAll("#input-area span");
  const progressBar = document.querySelector("#progressBar #filler");
  let remainingWordsList = [];
  let canCount = false;
  wordList.forEach((word) => {
    if (word.hasAttribute("active")) {
      canCount = true;
    }
    if (canCount) {
      remainingWordsList.push(word);
    }
  });
  const barWidth = Math.floor(
    (remainingWordsList.length / wordList.length) * 100
  );
  progressBar.style.width = `${barWidth}%`;
}
