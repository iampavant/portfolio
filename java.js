// Typing effect
const text = ["Coder", "Developer", "Designer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = text[index];
  let displayedText = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);
  
  document.querySelector(".typing").textContent = displayedText;

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
