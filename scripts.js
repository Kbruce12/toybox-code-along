// Pseudo Code
// Create a functional nav-menu pop out
// create variables that select the menu button as well as the 'X' while the pop out nav is open
// Create a variable to target the entire slide out nav
// Add eventlisteners('click') to both the menu button as well as the 'x'
// Toggle its class to either show or hide on each corresponding button


const openButton = document.querySelector('.menuButton img');
console.log(openButton);
const closeButton = document.querySelector('.menuClose');
console.log(closeButton);
const slideOutNav = document.querySelector('div .slideOutNav');
console.log(slideOutNav);

openButton.addEventListener('click', function(){
    console.log('whats up');
    slideOutNav.classList.toggle('openSlideBar')
})

closeButton.addEventListener('click', function(){
console.log('hit me again');
    slideOutNav.classList.toggle('openSlideBar');
})



