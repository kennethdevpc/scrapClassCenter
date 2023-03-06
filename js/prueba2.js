let boxNavPrincipal1 = document.querySelector('[class="main-nav-dropdown js-main-nav-dropdown"]');
j = boxNavPrincipal1.classList.remove('has-visibile-subsection');

let boxNavPrincipal = document.querySelector('[class="main-nav-dropdown js-main-nav-dropdown"]');
let boxSubsectionx = document
  .querySelector('[class="main-nav-dropdown js-main-nav-dropdown"]')
  .querySelectorAll('[data-detail]');

let boxSubsectionAll = document.querySelector('[class="main-nav-dropdown__subsections"]');

boxSubsectionx.forEach((e) => {
  e.addEventListener('mouseover', enableElementToChange, true);
  e.addEventListener('mouseout', disableElmentToChange, true);
});

let elementoencuestion;
function enableElementToChange(e) {
  j = boxNavPrincipal.classList.add('has-visibile-subsection');
  let elem = e.fromElement.getAttribute('data-detail');
  console.log('#enableElementToChange=======detalle elemento', elem);

  let x = JSON.parse(elem);
  console.log('#enableElementToChange=======el valor ultimo', x?.childListId); //data-list-id="rankings"
  y = boxSubsectionAll.querySelector(`[data-list-id="${x?.childListId}"]`);

  if (y !== elementoencuestion) {
    if (y) {
      elementoencuestion?.setAttribute('hidden', '');
      elementoencuestion?.classList.remove('is-selected');
      y?.removeAttribute('hidden');
      y?.classList.add('is-selected');
      elementoencuestion = y;
    } else {
      if (!elementoencuestion) {
        boxNavPrincipal1.classList.remove('has-visibile-subsection');
      }
    }
  }
}
function disableElmentToChange(e) {
  let elem = e.fromElement.getAttribute('data-detail');
  let x = JSON.parse(elem);
}

function boxCoursesinEnable() {
  boxNavPrincipal1.classList.remove('has-visibile-subsection');
}
function boxCoursesinDisable() {}
let boxCoursesin = document.querySelector('[data-name="BLANKET"]');

boxCoursesin.addEventListener('mouseover', boxCoursesinEnable, true);
boxCoursesin.addEventListener('mouseleave', boxCoursesinDisable, true);
