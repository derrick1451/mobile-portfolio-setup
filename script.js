let hamburger = document.querySelector('.loose');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.close-icon');
let navLinks = document.querySelectorAll('.nav-links')

hamburger.addEventListener('click', () => {
    popUp.classList.toggle('active-pop-up');
    closeIcon.classList.toggle('close');
});
closeIcon.addEventListener('click', () => {
    popUp.classList.toggle('active-pop-up');
    closeIcon.classList.toggle('close');
});
navLinks.forEach((nav) => {
    nav.addEventListener('click', () => {
        popUp.classList.remove('active-pop-up');
        closeIcon.classList.remove('close');
    });
  });


