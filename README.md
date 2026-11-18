# Aura Store

* **Deployed Website:** (https://berdibayevaaa.github.io/onlineshop/)
* **GitHub Repository:** (https://github.com/Berdibayevaaa/onlineshop)

## Project title, topic, and objectives

Aura Store is the IT-2501 Final Project for WEB Technologies 1 (Front End). It continues and expands the team's Midterm and Endterm online storefront for Clothes, Gadgets, and Cosmetics.

**Project objectives:**
* Build a responsive, multi-page e-commerce frontend application with consistent navigation and visual design.
* Enhance user experience with client-side persistence using `localStorage` (Light/Dark theme and user sign-in state).
* Add smooth interactive UI components using jQuery.
* Integrate a live public API using Asynchronous JavaScript (`fetch()` and `async/await`) with dynamic rendering and error handling.

## Team members

* IT-2501 Berdibay Sayazhan
* IT-2501 Abibulla Zarina
* IT-2501 Zhumagul Nurassyl

## Website structure and project description

The website consists of five interconnected HTML pages linked through a shared navigation bar and footer:

* **`index.html` (Home):** Introduces the three collections with links to catalog categories, displays dynamic trending products fetched from an external API, and includes an interactive FAQ section.
* **`about.html` (About):** Describes the store's mission and services.
* **`products.html` (Products):** Combines the product storefront, interactive inventory table, and warranty comparison.
* **`gallery.html` (Gallery):** Presents six lookbook photos with a lightbox image viewer.
* **`contact.html` (Contact):** Contains a customer inquiry form and a client-side account registration form.

## Implemented features

### Core & Endterm features
* **Navigation and layout.** All five pages share a fixed Flexbox header, a collapsible mobile menu, and a contact footer. The catalog and lookbook use a three-column CSS Grid that adapts to two columns at `991px` and one column at `575px`.
* **Product search.** Type part of a name and select a category to filter cards immediately (case-insensitive). Selecting "All" clears the category filter while keeping the search text.
* **Product inventory.** A single array supplies both the product cards and the inventory table. Users can add or edit items (name, category, USD price) via a Bootstrap modal and delete items with confirmation.
* **Gallery.** Clicking a thumbnail opens its full image and caption with previous/next buttons, keyboard arrow navigation, and jQuery fade effects.
* **Forms.** Both contact and registration forms validate required fields and email format in the browser, including live password strength feedback.

### New Final Project features
* **Light/Dark Theme Toggle (`js/theme.js`, `css/style.css`).** Users can switch between light and dark themes across all five pages. The selected theme is saved in `localStorage` and remains active after reloading the page.
* **Sign-in / Sign-out (`js/auth.js`).** Provides a sign-in input with validation directly in the navigation bar. The signed-in username is stored in `localStorage`, updates the interface across reloads, and can be cleared with the Sign Out button.
* **Interactive FAQ (`js/faq.js`).** Five store-related questions on the Home page that smoothly expand and collapse using jQuery `.slideToggle()`, complete with `+` / `-` visual indicators.
* **Public API Integration (`js/api.js`).** Fetches live product data in JSON format from the open FakeStore API (`https://fakestoreapi.com/products`) using `fetch()` and `async/await`. Includes a user-triggered load button, loading indicator, dynamic card rendering, and error handling for failed requests.

## Technologies and development process

The site uses semantic HTML5, external CSS3 (Flexbox, CSS Grid, responsive media queries, Bootstrap 5.3.0), JavaScript (DOM manipulation, `localStorage`, Asynchronous JS / Fetch API), and jQuery 3.7.1. All five HTML files are located in the root directory, styles are in `css/style.css`, and scripts are modularized in `js/` (`script.js`, `theme.js`, `auth.js`, `faq.js`, `api.js`). No build step is required.

**Development process:**
1. **Midterm & Endterm foundation:** Built the 5-page responsive layout, styling, catalog search, inventory management, gallery viewer, and form validation.
2. **Final Stage 1 — UI & Theme:** Updated all HTML pages for new features, added dark mode styling in `css/style.css`, and implemented persistent theme switching in `js/theme.js`.
3. **Final Stage 2 — Auth & jQuery:** Implemented `localStorage` sign-in/sign-out (`js/auth.js`) and built the animated 5-question FAQ block (`js/faq.js` and `index.html`).
4. **Final Stage 3 — API & Documentation:** Integrated FakeStore API with `fetch()` and error handling (`js/api.js`), verified deployment on GitHub Pages, and finalized the project documentation.

## Individual contributions and responsibilities
| Team member | Evidence from the midterm history 
| --- | --- 
| IT-2501 Berdibay Sayazhan | Created the initial pages and stylesheet; updated the HTML structure across all five pages for the final project; implemented Dark/Light theme CSS and persistent theme toggling (`js/theme.js`); prepared and updated the final `README.md` / project report.  
| IT-2501 Abibulla Zarina | Co-developed core pages and Endterm features; implemented client-side Sign-in/Sign-out functionality using `localStorage` (`js/auth.js`); developed the interactive 5-question FAQ section with jQuery `.slideToggle()` (`js/faq.js` and `index.html`).  
| IT-2501 Zhumagul Nurassyl | Contributed to repository documentation formatting and team review; implemented asynchronous public API integration using `fetch()` / `async-await` with dynamic JSON rendering and error handling (`js/api.js` and API section in `index.html`).   

## Screenshots

### Home Page & Light/Dark Theme
<img width="1899" height="1096" alt="image" src="https://github.com/user-attachments/assets/0e53f77b-accc-48a1-9a01-12d45bfd391a" />
<img width="1884" height="1029" alt="image" src="https://github.com/user-attachments/assets/48b1f2b1-bf01-4643-9d00-812266cf0753" />

### FAQ Section (jQuery `.slideToggle()`)
<img width="1878" height="1022" alt="image" src="https://github.com/user-attachments/assets/e7c8218f-a9d0-4cef-9e30-141931c75fe5" />

### Dynamic Products from FakeStore API
<img width="1888" height="927" alt="image" src="https://github.com/user-attachments/assets/a3b9d7d9-d015-44d4-80a2-801dd451306b" />

## AI Usage Acknowledgment

AI tools (GPT / Gemini) were used as supporting tools during project development for code generation, debugging, refactoring, and documentation structuring. All team members reviewed, tested, and understand the implemented code in accordance with the course AI Usage Policy.
