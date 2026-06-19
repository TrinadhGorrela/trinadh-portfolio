const text = "Trinadh Gorrela";
const speed = 100;
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = typeEffect;
