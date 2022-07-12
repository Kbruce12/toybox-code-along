// Pseudo Code
// create new class in css to open the slide out nav
// Create a functional nav-menu pop out
// create variables that select the menu button as well as the 'X' while the pop out nav is open
// Create a variable to target the entire slide out nav
// Add eventlisteners('click') to both the menu button as well as the 'x'
// Toggle its class to either show or hide on each corresponding button

// Create Variables
const openButton = document.querySelector('.menuButton img');
console.log(openButton);
const closeButton = document.querySelector('.menuClose');
console.log(closeButton);
const slideOutNav = document.querySelector('div .slideOutNav');
console.log(slideOutNav);


// Add event listeners to each variable
openButton.addEventListener('click', function(){
    slideOutNav.classList.toggle('openSlideBar')
})

closeButton.addEventListener('click', function(){
    slideOutNav.classList.toggle('openSlideBar');
})



