let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let logoItem = document.querySelector('.page-header__logo');
let pseudoMap = document.querySelector('.map-search__map');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
logoItem.classList.add('page-header__logo--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    logoItem.classList.remove('page-header__logo--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    logoItem.classList.add('page-header__logo--closed');
  }
});

const mapOverlay = () => {
  if (pseudoMap.classList.contains('map-search__map--nojs')) {
      pseudoMap.classList.remove('map-search__map--nojs');
  }
}
