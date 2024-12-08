export default function initKeyboard() {
  const keyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "back"],
    ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    [, "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "enter"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    [, "ctrl", "alt", "space", "alt", "ctrl"],
  ];

  const specialKeyRegex = /^(back|tab|enter|shift|ctrl|alt|space)$/;
  const keysRowClasses =
    "grid grid-cols-12 gap-1 px-1 text-lg sm:text-xl lg:text-2xl font-bold";
  const keyBaseClasses =
    "flex items-center justify-center px-1 p-0.5 rounded-lg";
  const keyInitialClasses = "bg-white/60 text-[#1c0846]";

  const keyboard = document.querySelector("#keyboard");

  keyboardLayout.forEach((keysRow) => {
    const keysRowElm = document.createElement("div");
    keysRowElm.className = keysRowClasses;

    keysRow.forEach((keyValue) => {
      const key = document.createElement("span");
      key.textContent = keyValue;
      key.className = keyBaseClasses.concat(" ", keyInitialClasses);

      if (specialKeyRegex.test(keyValue)) {
        key.classList.add("col-span-2");
      }
      if (keyValue == "space") {
        key.classList.add("col-span-4");
      }

      keysRowElm.append(key);
    });
    keyboard.append(keysRowElm);
  });
}

export function updateKeyboard(next, current, keyStatus) {
  const keysList = document.querySelectorAll("#keyboard span");

  keysList.forEach((keyboardKey) => {
    // reseting all keyboard key style to initial
    if (keyboardKey.classList.contains("bg-white/60")) {
      // Remove all duplicates of the class
      keyboardKey.className = [
        ...new Set(keyboardKey.className.split(/\s+/)),
      ].join(" ");
    } else {
      // Add the class if it's not already present
      keyboardKey.classList.add("bg-white/60");
    }
    keyboardKey.classList.remove("bg-white");
    keyboardKey.classList.remove("bg-red-500");
    keyboardKey.classList.remove("bg-green-500");

    // applying style for active key
    if (
      keyboardKey.textContent == next ||
      (next == " " && keyboardKey.textContent == "space")
    ) {
      keyboardKey.classList.remove("bg-white/60");
      keyboardKey.classList.add("bg-white");
    }

    if (
      (/[A-Z:]/.test(next) && keyboardKey.textContent == next.toLowerCase()) ||
      (next == ":" && keyboardKey.textContent == ";")
    ) {
      keyboardKey.classList.remove("bg-white/60");
      keyboardKey.classList.add("bg-white");
    }

    if (/[A-Z:]/.test(next) && keyboardKey.textContent == "shift") {
      keyboardKey.classList.remove("bg-white/60");
      keyboardKey.classList.add("bg-white");
    }

    // applying style for right or wrong keys
    if (current && keyboardKey.textContent == current) {
      keyboardKey.classList.remove("bg-white/60");
      if (keyStatus) {
        // console.log(current, "right key");
        keyboardKey.classList.add("bg-green-500");
      } else {
        // console.log(current, "wrong key");
        keyboardKey.classList.add("bg-red-500");
      }
    }
    if (current && current == " " && keyboardKey.textContent == "space") {
      keyboardKey.classList.remove("bg-white/60");
      if (keyStatus) {
        // console.log(current, "right key");
        keyboardKey.classList.add("bg-green-500");
      } else {
        // console.log(current, "wrong key");
        keyboardKey.classList.add("bg-red-500");
      }
    }

    if (
      current &&
      /[A-Z:]/.test(current) &&
      keyboardKey.textContent == current.toLowerCase()
    ) {
      keyboardKey.classList.remove("bg-white/60");
      if (keyStatus) {
        console.log(current, "right key");
        keyboardKey.classList.add("bg-green-500");
      } else {
        console.log(current, "wrong key");
        keyboardKey.classList.add("bg-red-500");
      }
    }

    if (/[A-Z:]/.test(next) && keyboardKey.textContent == "shift") {
      keyboardKey.classList.remove("bg-white/60");
      if (keyStatus) {
        console.log(current, "right key");
        keyboardKey.classList.add("bg-green-500");
      } else {
        console.log(current, "wrong key");
        keyboardKey.classList.add("bg-red-500");
      }
    }
  });
}
