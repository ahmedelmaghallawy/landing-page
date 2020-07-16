/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const Sections = document.querySelectorAll('section');
console.log(Sections);
const navbarUl = document.querySelector('#navbar__list');
console.log(navbarUl);

const createLi = (sectionNum) => {
    const li = document.createElement('li');
    li.classList = ['navbar__menu']
    const a = document.createElement('a');
    a.setAttribute('href', `#section${sectionNum}`);
    a.textContent = `Section${sectionNum}`;
    a.classList = ['menu__link']
    li.appendChild(a);
    
    return li;
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i = 0; i<Sections.length; i++){
    sectionNum = i+1;
    const li = createLi(sectionNum);
    navbarUl.appendChild(li);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


