const buttonMenuClose = document.querySelector('.main-nav__open');
const menu = document.querySelector('.site-list');
buttonMenuClose.style.display = 'block';

// Если JS подключен меню закрывается
if (menu.classList.contains('main-nav__list')) {
  menu.classList.remove('main-nav__list');

} else {
  menu.classList.add('main-nav__list');

}

if (menu.classList.contains('main-nav__list--close')) {
  menu.classList.remove('main-nav__list--close');
} else {
  menu.classList.add('main-nav__list--close');
}
buttonMenuClose.classList.replace('main-nav__close', 'main-nav__open');

const buttonMenu = document.querySelector('.main-nav__open');

// Переключение мобильного меню
buttonMenu.addEventListener('click', function() {
  menu.classList.toggle('main-nav__list--open');
  buttonMenu.classList.toggle('main-nav__open');
  buttonMenu.classList.toggle('main-nav__close');
});
