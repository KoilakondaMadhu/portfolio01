FOR DEFALUT DARK THEAM 
// Select DOM elements
const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

// DataTransfer.js services data
const getServices = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
    `;
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    });
}

// Service button event listeners
servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getServices(serviceClass);
        item.classList.add('active');
    });
});

// Default service view
getServices('frontend');

// mixitup for project filtering
const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});
mixer.filter('*');

// swiper for testimonials section
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Navigation toggle
const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);

// Close the nav menu when an item is clicked on smaller screens
const navItems = navMenu.querySelectorAll('a');
if (window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    });
}

// Theme toggle button
const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
    let currentTheme = document.body.className;

    // Toggle between dark and light themes
    if (!currentTheme || currentTheme === 'light') {
        document.body.className = 'dark';
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
        // Save the dark theme in localStorage
        window.localStorage.setItem('theme', 'dark');
    } else {
        document.body.className = 'light';
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
        // Save the light theme in localStorage
        window.localStorage.setItem('theme', 'light');
    }
});

// Set dark theme as default on load and maintain the theme on refresh
window.addEventListener('load', () => {
    let storedTheme = window.localStorage.getItem('theme');
    
    // If no theme is stored, set dark as the default theme
    if (!storedTheme) {
        storedTheme = 'dark';
        window.localStorage.setItem('theme', storedTheme);
    }

    // Apply the stored theme
    document.body.className = storedTheme;
    
    // Adjust the theme button icon based on the applied theme
    if (storedTheme === 'dark') {
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
    } else {
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
    }
});
