let isShift = false;
let currentLayout = "letters"; // letters, symbols, emojis

function typeKey(char) {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    if (char === '\n') {
      textarea.value += '\n';
    } else {
      const finalChar = isShift ? char.toUpperCase() : char;
      textarea.value += finalChar;
    }
    textarea.focus();
  }
}

function backspace() {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.value = textarea.value.slice(0, -1);
    textarea.focus();
  }
}

function toggleShift() {
  isShift = !isShift;
  updateShiftKey();
}

function updateShiftKey() {
  const shiftKey = document.querySelector(".shift");
  if (shiftKey) {
    shiftKey.classList.toggle("active", isShift);
  }
}

// Cycle between layouts: Letters → Symbols → Emojis → Letters ...
function cycleLayout() {
  const letters = document.getElementById("layout-letters");
  const symbols = document.getElementById("layout-symbols");
  const emojis = document.getElementById("layout-emojis");

  letters.classList.add("hidden");
  symbols.classList.add("hidden");
  emojis.classList.add("hidden");

  if (currentLayout === "letters") {
    symbols.classList.remove("hidden");
    currentLayout = "symbols";
  } else if (currentLayout === "symbols") {
    emojis.classList.remove("hidden");
    currentLayout = "emojis";
  } else {
    letters.classList.remove("hidden");
    currentLayout = "letters";
  }

  // Reset shift when layout changes
  isShift = false;
  updateShiftKey();
}
