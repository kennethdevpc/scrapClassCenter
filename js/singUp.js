let elemSingUp = document.getElementById('localSingup');
console.log('sing up es', elemSingUp);

let elemSingUpAll = document.querySelectorAll('[data-name="SIGNUP_LINK"]');

console.log('sing up all', elemSingUpAll);
elemSingUpAll.forEach((e) => {
  console.log('elemento', e.getAttribute('data-detail'));
  e.removeAttribute('href');
  e.addEventListener('click', enableSingUpForm, true);
  //e.addEventListener('mouseout', disableSingUpForm, true);
});
function enableSingUpForm() {
  console.log('ejecute mostrar el elemento cde singup');
  console.log('elemento a modificar');
  elemSingUp.classList.remove('animate-fade-hidden');
}
//function disableSingUpForm() {}
let botonOutSingUp = document.querySelectorAll(`[data-detail='{ "close": true }']`);
console.log('botones para cerrar=', botonOutSingUp);
botonOutSingUp.forEach((e) => {
  console.log('elemento', e.getAttribute('data-detail'));
  e.addEventListener('click', disableSingUpForm, true);
  //e.addEventListener('mouseout', disableSingUpForm, true);
});

function disableSingUpForm() {
  elemSingUp.classList.add('animate-fade-hidden');
}
