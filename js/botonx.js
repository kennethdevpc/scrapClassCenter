console.log('botonx');

let boxBotonContent = document.querySelector('[data-menu="lists"]');
let botonInit = boxBotonContent.querySelector(
  '[class="cmpt-nav-add-item btn-circle btn-medium btn-white text-center"]'
);
let botonBefore = boxBotonContent.querySelector(
  '[class="btn-circle btn-medium btn-white text-center animate-fade-hidden row vert-align-middle horz-align-center"]'
);
let divBefore = boxBotonContent.querySelector(
  '[class="animate-fade-hidden bg-white z-top absolute border-all border-gray-light shadow-light"]'
);
let dataNameBlanketBg = document.querySelector('[data-name="BLANKET"]');
console.log('botonBefore', botonBefore);
contador = 0;
function botonInitClick() {
  if (contador == 0) {
    console.log('xclic');
    botonInit.classList.add('animate-fade-hidden');
    botonBefore.classList.remove('animate-fade-hidden');
    botonBefore.classList.add('animate-fade-entered');
    divBefore.classList.remove('animate-fade-hidden');
    divBefore.classList.add('animate-fade-entered');
    dataNameBlanketBg.classList.remove('animate-fade-hidden');

    contador = 1;
  } else {
    console.log('presionoelse');
    botonBefore.classList.remove('animate-fade-entered');
    botonBefore.classList.add('animate-fade-hidden');
    botonInit.classList.remove('animate-fade-hidden');
    divBefore.classList.remove('animate-fade-entered');
    divBefore.classList.add('animate-fade-hidden');
    dataNameBlanketBg.classList.add('animate-fade-hidden');

    contador = 0;
  }
}
// function botonBeforeClick() {
//   console.log('beforeclic');

//   botonBefore.classList.add('animate-fade-entered');
//   botonInit.classList.remove('animate-fade-hidden');
// }
// botonInit.addEventListener('click', botonInitClick, true);
// botonInit.addEventListener('click', botonBeforeClick, true);

boxBotonContent.addEventListener('click', botonInitClick, true);
//boxBotonContent.addEventListener('', botonBeforeClick, true);

console.log('botonx', botonInit);
