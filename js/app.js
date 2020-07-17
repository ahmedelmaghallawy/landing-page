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
const sections = document.querySelectorAll('section');
const navbarUl = document.querySelector('#navbar__list');

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

const sectionLocations = () => {
    const SectionTopPoints = [];
    for (sec of sections) {
        SectionTopPoints.push(ElementLocation(sec));
    }
    return SectionTopPoints;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i = 0; i < sections.length; i++) {
    sectionNum = i + 1;
    const li = createLi(sectionNum);
    navbarUl.appendChild(li);
}

// Add class 'active' to section link when near top of viewport
const scrollToActivate = () => {
    const section_points = sectionLocations();
    for (let i = 0; i < section_points.length; i++) {
        const links = document.querySelectorAll(".menu__link");
        if (window.scrollY >= section_points[i] && !(window.scrollY > section_points[i + 1])) {
            links[i].classList.add('active');
        } else {
            links[i].classList.remove('active');
        }
    }
}

// Scroll to anchor ID using scrollTO event
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
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click
navbarUl.addEventListener('click', scrollToClickedSection);
// Set sections as active
window.addEventListener("scroll", scrollToActivate);

