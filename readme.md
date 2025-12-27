# Professional Personal Portfolio

A creative, responsive, and fully functional personal portfolio website built with modern web technologies. This project highlights a mobile-first design approach, seamless interactions, and a premium "Electric Blue" & "Gold" aesthetic across both dark and light themes.

---

## 🚀 Tech Stack Used

This project was built from scratch using the following technologies:

### 1. **Core Technologies**
*   **HTML5**
    *   Semantic HTML structure for better accessibility and SEO.
    *   Proper use of `<article>`, `<section>`, `<aside>`, and `<nav>` tags.
*   **CSS3 (Modern & Modular)**
    *   **CSS Variables (Custom Properties):** implementation of a global design system for easy theming (colors, fonts, shadows).
    *   **Flexbox & CSS Grid:** For robust, responsive layouts that adapt from mobile to desktop.
    *   **Media Queries:** Custom breakpoints handling specific devices like Pixel 7 (`max-width: 420px`), Tablets, and Laptops.
    *   **Animations:** Smooth transitions (`bezier-curves`), hover effects, and active state scaling.
*   **JavaScript (Vanilla ES6+)**
    *   **DOM Manipulation:** For efficient page navigation (SPA-like experience without reloading).
    *   **Event Handling:** Responsive toggle buttons, form submissions, and active state management.
    *   **LocalStorage API:** To persist user theme preferences (Dark/Light mode) across sessions.
    *   **Fetch API:** For asynchronous form submissions.

### 2. **Styling & Aesthetics**
*   **Design System:**
    *   **Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts) for a modern, clean look.
    *   **Glassmorphism:** Used in the mobile navbar (`backdrop-filter: blur`) for a premium iOS-like feel.
    *   **Gradients:** Complex linear gradients for buttons, backgrounds, and borders to create depth.
*   **Iconography:**
    *   **Ionicons:** Vector icons used for navigation, contact details, and social links.

### 3. **Functionality & APIs**
*   **Web3Forms API:**
    *   Powering the **Contact Form**.
    *   Allows sending real emails directly from the static HTML page without a backend server.
    *   integrated with Async/Await in JavaScript for a seamless user experience (no page redirects).

---

## ✨ Key Features

### 🎨 **Advanced Theme System**
*   **Dual Theme Support:** Fully designed Dark (Default) and Light themes.
*   **Consistent Branding:** 
    *   **Dark Mode:** Deep "Onyx" backgrounds with "Electric Blue" and "Gold" accents.
    *   **Light Mode:** Clean "White/Silver" backgrounds with consistent "Solid Blue" gradients and "Golden Shadows" for active states.
*   **Persistence:** Remembers your choice even after refreshing the page.

### 📱 **Mobile-First Responsiveness**
*   **iOS-Style Bottom Navigation:** Fixed bottom bar on mobile with blur effects and smooth active states.
*   **Sidebar Toggle:** Collapsible sidebar implementation for small screens.
*   **Device-Specific Tweaks:** Custom padding and layout adjustments for devices like Google Pixel 7.

### 💻 **Polished Desktop Experience**
*   **Full-Width Header:** A "relative-style" navigation bar that spans the full content width on larger screens.
*   **Clean Layout:** Optimized whitespace (`30px+` gaps), centered alignment, and restored iconography for a professional look.

### 📩 **Working Contact Form**
*   **Real-time Feedback:** Button text changes to "Sending..." during transmission.
*   **Validation:** Native HTML5 validation + JavaScript checks.
*   **Success/Error Alerts:** Instant user feedback upon message completion.

---

## 🛠️ How to Run

1.  **Clone or Download** the repository.
2.  Open `index.html` in any modern web browser.
3.  **No Server Required:** The project is purely static (HTML/CSS/JS) and can be hosted on GitHub Pages, Vercel, or Netlify instantly.

---

## 📂 Project Structure

```
/
├── index.html        # Main entry point (About Me)
├── resume.html       # Resume & Timeline
├── portfolio.html    # Projects Showcase
├── contact.html      # Contact Form & Map
├── style.css         # Main stylesheet (Variables, Layout, Theming)
├── script.js         # Logic (Navigation, Theme, Form)
└── assets/           # Images and Icons
```
