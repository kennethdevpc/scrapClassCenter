let dataNameBlanket = document.querySelector('[data-name="BLANKET"]');
let principalobsoleto = document.querySelector('[data-name="MAIN_NAV_TRIGGER_CONTAINER"]');
let boxNavPrincipal3 = document.querySelector('[class="main-nav-dropdown js-main-nav-dropdown"]');
//________________________boxcourses
let boxCourses = document.querySelector('[data-name="MAIN_NAV_TRIGGER_CONTAINER"]');
let boxCoursesToChange = boxCourses.querySelector('nav.main-nav-dropdown'); //box del div desplegable
function enableCoursesToChange() {
  boxCoursesToChange.classList.add('is-open');
  dataNameBlanket.classList.remove('animate-fade-hidden');
}
function disableCoursesToChange() {
  boxCoursesToChange.classList.remove('is-open');
  dataNameBlanket.classList.add('animate-fade-hidden');
}
boxCourses.addEventListener('mouseover', enableCoursesToChange, true);
boxCourses.addEventListener('mouseout', disableCoursesToChange, true);
//________________________boxReport

let boxReport = document.querySelector('[data-menu="report"]');
let boxReportToChange = boxReport.querySelector('div.animate-fade-hidden'); //box del div desplegable
function enableReportToChange() {
  boxReportToChange.classList.remove('animate-fade-hidden');
  boxReportToChange.classList.add('animate-fade-entered');
  dataNameBlanket.classList.remove('animate-fade-hidden');
}
function disableReportToChange() {
  boxReportToChange.classList.remove('animate-fade-entered');
  boxReportToChange.classList.add('animate-fade-hidden');
  dataNameBlanket.classList.add('animate-fade-hidden');
}
boxReport.addEventListener('mouseover', enableReportToChange, true);
boxReport.addEventListener('mouseout', disableReportToChange, true);
//________________________boxReportdddd

let boxSubsection = document.querySelector('[class="main-nav-dropdown__subsections"]');
let boxSubsectionToChange = boxSubsection.querySelectorAll('div.main-nav-dropdown__subsection'); //box del div desplegable
boxSubsectionToChange[3].addEventListener('mouseover', enableElementToChange, true);

function enableElementToChange(e) {
  console.log('elemento sobre', e);
}
function disableElmentToChange(e) {
  e.setAttribute('hidden');
}

function salio() {
  console.log('se salioooooooooooooooooooooooooo');
}
