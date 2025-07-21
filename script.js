function typeKey(char) {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.value += char;
  }
}
function backspace() {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.value = textarea.value.slice(0, -1);
  }
}
function switchLayout() {
  const letters = document.getElementById("layout-letters");
  const symbols = document.getElementById("layout-symbols");
  letters.classList.toggle("hidden");
  symbols.classList.toggle("hidden");
}
