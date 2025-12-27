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
        imgSrc: "https://via.placeholder.com/400x300/1a1a1a/ffcc00?text=VoltNexus+EBS",
        link: "https://github.com/sudhanwa755/VoltNexus-EBS-"
    },
    {
        title: "SurveyBoard Advanced",
        category: "Web Development",
        imgSrc: "https://via.placeholder.com/400x300/1a1a1a/ffcc00?text=SurveyBoard",
        link: "https://github.com/sudhanwa755/surveyboard_Advance_version"
    },
    {
        title: "WattWise Billing System",
        category: "Web Development",
        imgSrc: "https://via.placeholder.com/400x300/1a1a1a/ffcc00?text=WattWise",
        link: "https://github.com/sudhanwa755/ElectricityBilling-Springboot-supabase"
    },
    {
        title: "Apple Stock Prediction",
        category: "AI/ML",
        imgSrc: "https://via.placeholder.com/400x300/1a1a1a/ffcc00?text=Stock+Prediction",
        link: "https://github.com/sudhanwa755/google-colab-project-"
    },
    {
        title: "Biometric Attendance IoT",
        category: "System Applications",
        imgSrc: "https://via.placeholder.com/400x300/1a1a1a/ffcc00?text=Biometric+System",
        link: "https://github.com/HaridasKhambe/Biometric-Attendance-Management-System"
    }
];

// ---------------------------------------------------------
//  PROJECT RENDERING
// ---------------------------------------------------------
const projectListContainer = document.querySelector(".project-list");

function renderProjects() {
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
        <p class="project-category">${project.category}</p>
      </a>
    `;

        projectListContainer.appendChild(li);
    });
}

// Initial Render
renderProjects();


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

// Toggle Select Box
if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
}

// Event Listeners for Select Items (Mobile)
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        if (select) elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// Event Listeners for Filter Buttons (Desktop)
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText; // Sync title for mobile view too
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}


// ---------------------------------------------------------
//  CONTACT FORM
// ---------------------------------------------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
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
    if (isLight) {
        document.body.classList.add("light-theme");
        if (themeBtnIcon) themeBtnIcon.setAttribute("name", darkThemeIcon);
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light-theme");
        if (themeBtnIcon) themeBtnIcon.setAttribute("name", lightThemeIcon);
        localStorage.setItem("theme", "dark");
    }
}

if (localStorage.getItem("theme") === "light") {
    setTheme(true);
} else {
    setTheme(false);
}

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        const isLightTheme = document.body.classList.contains("light-theme");
        setTheme(!isLightTheme);
    });
}
