'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// ---------------------------------------------------------
//  PROJECT DATA (JSON "Local Database")
// ---------------------------------------------------------
const projectsData = [
    {
        title: "VoltNexus EBS",
        category: "Web Development",
        techStack: "Spring Boot + Supabase + JavaScript",
        imgSrc: "./images/Voltnexus.png",
        link: "https://github.com/sudhanwa755/VoltNexus-EBS-"
    },
    {
        title: "SurveyBoard Advanced",
        category: "Web Development",
        techStack: "PHP + MySQL",
        imgSrc: "./images/surveyboard.png",
        link: "https://github.com/sudhanwa755/surveyboard_Advance_version"
    },
    {
        title: "WattWise Billing System",
        category: "Web Development",
        techStack: "Spring Boot + PostgreSQL (Supabase)",
        imgSrc: "./images/Wattwise .png",
        link: "https://github.com/sudhanwa755/ElectricityBilling-Springboot-supabase"
    },
    {
        title: "Apple Stock Prediction",
        category: "AI/ML",
        techStack: "Python + Machine Learning",
        imgSrc: "./images/apple stock.png",
        link: "https://github.com/sudhanwa755/google-colab-project-"
    },
    {
        title: "Biometric Attendance IoT",
        category: "System Applications",
        techStack: "IoT + HTML/CSS/JS + PHP + MySQL",
        imgSrc: "./images/biometric.png",
        link: "https://github.com/HaridasKhambe/Biometric-Attendance-Management-System"
    }
];

// ---------------------------------------------------------
//  PROJECT RENDERING
// ---------------------------------------------------------
const projectListContainer = document.querySelector(".project-list");

function renderProjects() {
    if (!projectListContainer) return; // Exit if element doesn't exist

    projectListContainer.innerHTML = ""; // Clear existing

    projectsData.forEach(project => {
        // Determine category Key for filtering class (lowercase)
        const categoryKey = project.category.toLowerCase();

        const li = document.createElement("li");
        li.classList.add("project-item", "active"); // Default active
        li.setAttribute("data-filter-item", "");
        li.setAttribute("data-category", categoryKey);

        li.innerHTML = `
      <a href="${project.link}" target="_blank">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <img src="${project.imgSrc}" alt="${project.title}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-tech-stack">${project.techStack}</p>
        <p class="project-category">${project.category}</p>
      </a>
    `;

        projectListContainer.appendChild(li);
    });
}

// Initial Render (only if container exists)
if (projectListContainer) {
    renderProjects();
}


// ---------------------------------------------------------
//  FILTERING LOGIC
// ---------------------------------------------------------

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// We need to re-query these AFTER rendering
let filterItems = document.querySelectorAll("[data-filter-item]");

// Filter Function
const filterFunc = function (selectedValue) {
    // Re-query to be safe (though they shouldn't change after init render)
    filterItems = document.querySelectorAll("[data-filter-item]");

    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

// Toggle Select Box (only if it exists)
if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
}

// Event Listeners for Select Items (Mobile) - only if they exist
if (selectItems.length > 0) {
    for (let i = 0; i < selectItems.length; i++) {
        selectItems[i].addEventListener("click", function () {
            let selectedValue = this.innerText.toLowerCase();
            if (selectValue) selectValue.innerText = this.innerText;
            if (select) elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    }
}

// Event Listeners for Filter Buttons (Desktop) - only if they exist
if (filterBtn.length > 0) {
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {
        filterBtn[i].addEventListener("click", function () {
            let selectedValue = this.innerText.toLowerCase();
            if (selectValue) selectValue.innerText = this.innerText; // Sync title for mobile view too
            filterFunc(selectedValue);

            lastClickedBtn.classList.remove("active");
            this.classList.add("active");
            lastClickedBtn = this;
        });
    }
}


// ---------------------------------------------------------
//  CONTACT FORM
// ---------------------------------------------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Only add event listeners if form exists
if (form && formInputs.length > 0 && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener("input", function () {
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            } else {
                formBtn.setAttribute("disabled", "");
            }
        });
    }
}


// ---------------------------------------------------------
//  PAGE NAVIGATION
// ---------------------------------------------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}


// ---------------------------------------------------------
//  THEME TOGGLE
// ---------------------------------------------------------
const themeBtn = document.querySelector("[data-theme-btn]");
const themeBtnIcon = document.querySelector("[data-theme-btn] ion-icon");

const darkThemeIcon = "moon-outline";
const lightThemeIcon = "sunny-outline";

const setTheme = function (isLight) {
    console.log('Setting theme to:', isLight ? 'light' : 'dark');

    if (isLight) {
        document.body.classList.add("light-theme");
        if (themeBtnIcon) {
            themeBtnIcon.setAttribute("name", darkThemeIcon);
            console.log('Icon changed to:', darkThemeIcon);
        }
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light-theme");
        if (themeBtnIcon) {
            themeBtnIcon.setAttribute("name", lightThemeIcon);
            console.log('Icon changed to:', lightThemeIcon);
        }
        localStorage.setItem("theme", "dark");
    }
}

// Wait for ionicons to load before initializing theme
function initializeTheme() {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    console.log('Saved theme from localStorage:', savedTheme);

    if (savedTheme === "light") {
        setTheme(true);
    } else {
        setTheme(false);
    }
}

// Check if ionicons is loaded, if not wait for it
if (typeof customElements !== 'undefined' && customElements.get('ion-icon')) {
    initializeTheme();
} else {
    // Wait for ionicons to be defined
    window.addEventListener('load', initializeTheme);
}

// Theme toggle event listener
if (themeBtn) {
    console.log('Theme button found, attaching event listener');
    themeBtn.addEventListener("click", function () {
        console.log('Theme button clicked');
        const isLightTheme = document.body.classList.contains("light-theme");
        setTheme(!isLightTheme);

        // Add visual feedback animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
} else {
    console.error('Theme button not found! Check if [data-theme-btn] exists in HTML');
}


// ---------------------------------------------------------
//  AUTO-HIDE NAVBAR ON SCROLL (MOBILE)
// ---------------------------------------------------------
let scrollTimer;
const navbar = document.querySelector('.navbar');

if (navbar && window.innerWidth <= 580) {
    // Hide navbar while scrolling
    window.addEventListener('scroll', function () {
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');

        // Clear previous timer
        clearTimeout(scrollTimer);

        // Show navbar when scrolling stops (after 150ms)
        scrollTimer = setTimeout(function () {
            navbar.classList.remove('hidden');
            navbar.classList.add('visible');
        }, 150);
    });

    // Show navbar initially
    navbar.classList.add('visible');
}
