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

const navbarUl = document.querySelector('#navbar__list');
const toTopbutton = document.getElementById("toTopBtn");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// add section dynamically



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
    const sections = document.querySelectorAll('section');
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
    e.preventDefault();
    if (e.target.className === 'menu__link') {
        const link = e.target;
        const section = document.querySelector(`#${link.textContent}`);
        section.scrollIntoView({ behavior: 'smooth' });
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


// add section dynamically 
addSectionDynamically();
// build the navbar if the DOM is loaded 
window.addEventListener("DOMContentLoaded", buildNavBar);
// Scroll to section on link click
navbarUl.addEventListener('click', scrollToClickedSection);
// Set sections links as active while scrolling through section
window.addEventListener("scroll", scrollToActivate);

function buildNavBar() {
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
        sectionNum = i + 1;
        const li = createLi(sectionNum);
        navbarUl.appendChild(li);
    }
}

function addSectionDynamically() {
    const dynamicallyAddedSec = document.createElement('section');
    dynamicallyAddedSec.setAttribute('id', 'section4');
    dynamicallyAddedSec.setAttribute('data-nav', 'Section 4');
    dynamicallyAddedSec.innerHTML = `
      <div class="landing__container">
        <h2>Section 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
          dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
          imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
          bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
          elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
          nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
          semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
          luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
          porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
   `;
    document.querySelector('main').appendChild(dynamicallyAddedSec);
}

