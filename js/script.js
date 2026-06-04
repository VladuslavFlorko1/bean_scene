const openSignUpButton = document.querySelector('.button-sign-up');
const closeBtn = document.querySelector('.close-button');
const closeBtnSignIn = document.querySelector('.close-button-sign-in');
const modalWindow = document.querySelector('.modal-window-container');
const openSignInButton = document.querySelector('.button-sign-in');
const modalWindowSignIn = document.querySelector('.modal-window-container-sign-in');

openSignInButton.addEventListener('click', () => {
    modalWindowSignIn.classList.add('is-active-sign-in');
});

openSignUpButton.addEventListener('click', () => {
    modalWindow.classList.add('is-active');
});

closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove('is-active');
});

closeBtnSignIn.addEventListener('click', () => {
    modalWindowSignIn.classList.remove('is-active-sign-in');
});
modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
        modalWindow.classList.remove('is-active');
    }
});

modalWindowSignIn.addEventListener('click', (event) => {
    if (event.target === modalWindowSignIn) {
        modalWindowSignIn.classList.remove('is-active-sign-in');
    }
});