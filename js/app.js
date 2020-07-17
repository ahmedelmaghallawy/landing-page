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
    a.textContent = `section${sectionNum}`;
    a.classList = ['menu__link']
    li.appendChild(a);

    return li;
}

const ElementLocation = (ele) => {
    const bodyElem = document.body.getBoundingClientRect().top;
    const elementSection = ele.getBoundingClientRect().top;
    const areaOffset = elementSection - bodyElem;
    return areaOffset;
}

const scrollToClickedSection = (e) => {
    if (e.target.className === 'menu__link') {
        const link = e.target;
        const section = document.querySelector(`#${link.textContent}`);
        window.scrollTo({ top: ElementLocation(section), behavior: 'smooth' });
        document.querySelector('.your-active-class').className = '';
        section.className = 'your-active-class';
    }

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i = 0; i < Sections.length; i++) {
    sectionNum = i + 1;
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
navbarUl.addEventListener('click', scrollToClickedSection);
// Set sections as active


