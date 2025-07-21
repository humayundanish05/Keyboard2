let isShift = false;
let currentLayout = "letters"; // letters, symbols, emojis

function typeKey(char) {
  // Prevent double firing on mobile
  if (window.event && window.event.type === "touchstart") {
    window.event.preventDefault();
  }

  const textarea = document.querySelector("textarea");
  if (textarea) {
    const finalChar = (char === '\n') ? '\n' : (isShift ? char.toUpperCase() : char);
    textarea.value += finalChar;
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

// Cycle: letters → symbols → emojis → letters
function cycleLayout() {
  if (currentLayout === "letters") {
    switchToLayout("symbols");
  } else if (currentLayout === "symbols") {
    switchToLayout("emojis");
  } else {
    switchToLayout("letters");
  }
}

function switchToLayout(layoutName) {
  const layouts = ["letters", "symbols", "emojis"];

  layouts.forEach(layout => {
    const el = document.getElementById("layout-" + layout);
    if (el) {
      if (layout === layoutName) {
        el.classList.remove("hidden");
        currentLayout = layoutName;
      } else {
        el.classList.add("hidden");
      }
    }
  });

  // Reset shift when layout changes
  isShift = false;
  updateShiftKey();
}
