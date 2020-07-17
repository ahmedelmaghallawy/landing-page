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
const sections = document.querySelectorAll('section');
const navbarUl = document.querySelector('#navbar__list');
const toTopbutton = document.getElementById("toTopBtn");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


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
    const sectionPonts = sectionLocations();
    for (let i = 0; i < sectionPonts.length; i++) {
        const links = document.querySelectorAll(".menu__link");
        if (window.scrollY >= sectionPonts[i] && !(window.scrollY > sectionPonts[i + 1])) {
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

window.onscroll = () => { scrollFunction() };
//detect of the document element is totally scrolled adn show the toTopBtn
const scrollFunction = () => {
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
        toTopbutton.style.display = "block";
    } else {
        toTopbutton.style.display = "none";
    }
}

const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
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

