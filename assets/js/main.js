/* SHOW & HIDE MENU */
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

/* Show menu if */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* Hide menu if */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* REMOVE MENU WHEN CLICK ANY LINK*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))