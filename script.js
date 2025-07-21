let isShift = false;
let currentLayout = "letters"; // letters, symbols, emojis

function typeKey(char) {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    const finalChar = isShift ? char.toUpperCase() : char;
    textarea.value += char === '\n' ? '\n' : finalChar;
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

// Cycle: 🌐 switches layout → symbols → emojis → letters...
function cycleLayout() {
  if (currentLayout === "letters") {
    switchToLayout("symbols");
  } else if (currentLayout === "symbols") {
    switchToLayout("emojis");
  } else {
    switchToLayout("letters");
  }
}

// Use this in layout switch keys like "ABC ↑", "#" or "ABC"
function switchToLayout(layout) {
  document.getElementById("layout-letters").classList.add("hidden");
  document.getElementById("layout-symbols").classList.add("hidden");
  document.getElementById("layout-emojis").classList.add("hidden");

  document.getElementById(`layout-${layout}`).classList.remove("hidden");
  currentLayout = layout;

  isShift = false;
  updateShiftKey();
}
