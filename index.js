const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

console.log(11)

mobileNavToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') ? mobileNavToggle.setAttribute('aria-expanded', false) : mobileNavToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    
    // if (mobileNavToggle.getAttribute('aria-expanded') === 'false') {
    //     mobileNavToggle.setAttribute('aria-expanded', true) 
    // }
    // else {
    //     mobileNavToggle.setAttribute('aria-expanded', false);
    // } 
})