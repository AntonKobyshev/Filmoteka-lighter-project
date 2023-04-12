export function spinerInit(selector) {
  let block = document.querySelector(selector);
  block.insertAdjacentHTML("afterbegin", spinerHTML());
  return selector + ' .preloader';
}

export function removeSpiner(spinerSelector) {
  document.querySelector(spinerSelector).remove();
}

function spinerHTML() {
  return `
  <div id="page-preloader" class="preloader">
    <div class="ld-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`
}