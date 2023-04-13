const elementAnim = document.querySelector('.header__search-input');
const targetText = 'Movie search';
const speed = 220;
let i = 0;

export function animationInput() {
  if (i < targetText.length) {
    i += 1;
    // elementAnim.placeholder = targetText.substring(0, i);
    if (elementAnim) {
      elementAnim.placeholder = targetText.substring(0, i);
    }
  } else {
    // elementAnim.placeholder = ' ';
    if (elementAnim) {
      elementAnim.placeholder = ' ';
    }
    i = 0;
  }
  setTimeout(animationInput, speed);
}
window.onload = function () {
  animationInput();
};
