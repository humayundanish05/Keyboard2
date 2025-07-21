let isShift = false;

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

function switchLayout() {
  const letters = document.getElementById("layout-letters");
  const symbols = document.getElementById("layout-symbols");
  const emojis = document.getElementById("layout-emojis");
  
  // Toggle visibility
  letters.classList.toggle("hidden");
  symbols.classList.toggle("hidden");

  // Hide emojis if open
  if (emojis) emojis.classList.add("hidden");

  // Reset shift if needed
  isShift = false;
  updateShiftKey();
}

function toggleEmojiLayout() {
  const emojis = document.getElementById("layout-emojis");
  const letters = document.getElementById("layout-letters");
  const symbols = document.getElementById("layout-symbols");

  emojis.classList.toggle("hidden");
  letters.classList.add("hidden");
  symbols.classList.add("hidden");
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
