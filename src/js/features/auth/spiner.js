export function spinerInit(selector) {
  let block = document.querySelector(selector);
  block.insertAdjacentHTML("afterbegin", spinerHTML());
  return selector + ' .preloader';
}

export function removeSpiner(spinerSelector) {
  setTimeout(() => {
    document.querySelector(spinerSelector).remove();
  }, 100);
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