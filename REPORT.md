# Aura Store — Final Project Report

**Course:** WEB Technologies 1 (Front End)  
**Group:** IT-2501  
**Team:** Berdibay Sayazhan, Abibulla Zarina, and Zhumagul Nurassyl

[Live website](https://berdibayevaaa.github.io/onlineshop/) · [Repository README](./README.md)

## 1. Project overview and objectives

Aura Store brings clothing, gadgets, and cosmetics together in a five-page storefront. We developed the project in stages. The midterm established the pages and visual design. The endterm added catalog management, a gallery viewer, and form validation. For the final project, we added features that remember a visitor’s preferences and load product data from an external service.

Our main objectives were to:

- Give visitors a consistent way to navigate the store on desktop and mobile screens.
- Let users search, filter, and edit products with immediate feedback.
- Remember the selected theme and display name between visits.
- Use jQuery for the gallery and FAQ interactions.
- Fetch product data asynchronously and handle both successful and failed requests.

## 2. Website structure

| Page | Purpose and features |
| --- | --- |
| [Home](./index.html) | Introduces the three collections. Category links open a filtered catalog. The page also contains the featured API products and five FAQ questions. |
| [About](./about.html) | Describes the store’s mission and its approach to product quality, shipping, and packaging. |
| [Products](./products.html) | Combines the searchable catalog, editable inventory, and a comparison of warranties and return policies. |
| [Gallery](./gallery.html) | Displays six lookbook photos. Visitors can open a photo in a larger viewer and navigate the collection with buttons or arrow keys. |
| [Contact](./contact.html) | Contains a customer inquiry form and a registration form with field-level validation and password-strength feedback. |

All five pages use a fixed header, a collapsible mobile menu, and a shared footer design. The catalog and gallery use CSS Grid. They display three columns on large screens, two at widths of 991 px or less, and one at 575 px or less. The product photos and Poppins fonts are stored in the repository. [Stylesheet](./css/style.css)

## 3. Catalog, gallery, and forms

### Catalog and inventory

The catalog starts with three products: a cotton tee, headphones, and a face serum. One JavaScript array supplies both the product cards and the inventory table. This keeps the two views consistent when an item changes.

Visitors can combine a category filter with a case-insensitive name search. For example, opening **View Tech** on Home selects Gadgets automatically. Searching for serum then gives zero matches. Selecting **All** keeps the search text and reveals *Hydrating Face Serum*. The inventory table continues to show every product.

The **Add product** and **Edit** buttons open a Bootstrap modal for the name, category, and price. Saving a valid entry updates both views. Deleting an item requires confirmation. Inventory changes last until the page is reloaded. [Catalog implementation](./js/script.js#L96-L259)

### Gallery

Selecting a thumbnail opens an HTML dialog with the full image, its caption, and its position in the collection. Navigation wraps around, so pressing the left arrow on photo 1 opens photo 6. jQuery provides the opening and closing fades. Pressing Escape closes the dialog and returns keyboard focus to the original thumbnail. [Gallery implementation](./js/script.js#L262-L320)

### Form validation

The inquiry form checks the visitor’s name, email address, and message. The registration form also checks password strength and confirmation. A password needs at least eight characters, a letter, and a digit to pass. It receives the **Strong** rating when it has at least twelve characters and includes a symbol as well.

Both forms display errors beside the relevant fields. They demonstrate browser-side validation. A successful submission shows a confirmation on the page. Sending an email and creating a server account are outside the project’s scope. [Form implementation](./js/script.js#L3-L94)

## 4. Final project features

### Theme persistence

The **Theme** button toggles the dark-mode class on the page body. The script writes light or dark to the theme key in localStorage. When another page opens, it reads the saved value and reapplies the selected theme. [Theme script](./js/theme.js)

### Sign-in and sign-out

The navigation bar accepts a display name, trims surrounding spaces, and checks that the result is nonempty. It stores the name under loggedInUser in localStorage, then replaces the input with a greeting and a **Sign Out** button. Signing out removes the stored name. This feature works independently of the registration form on Contact. [Sign-in script](./js/auth.js)

### Interactive FAQ

The Home page contains five questions. Selecting a question calls jQuery’s .slideToggle() on its answer and changes the indicator between + and -. Each answer opens independently, so a visitor can keep several answers visible at once. [FAQ script](./js/faq.js)

### Public API integration

The **Load Trending Products** button on Home requests a separate selection from FakeStore API. The request runs when the visitor clicks the button.

1. The handler displays a loading message and clears any previous error.
2. It uses fetch() and async/await to request https://fakestoreapi.com/products?limit=4.
3. It checks response.ok before reading the JSON with await response.json().
4. For each returned product, it creates a card using the image, title, and price.
5. If the request fails, it clears the loading area and displays a message inviting the visitor to try again later.

The API cards appear on Home. Loading them leaves the editable catalog on Products intact. [API script](./js/api.js) · [Home page integration](./index.html#L92-L99)

## 5. Individual contributions

| Team member | Contribution |
| --- | --- |
| **Berdibay Sayazhan** | Created the initial pages and stylesheet, updated the HTML across all five pages, implemented the light and dark theme styles and persistence, and prepared the project documentation. |
| **Abibulla Zarina** | Co-developed the core pages and endterm features. Implemented browser-local sign-in and sign-out and built the five-question animated FAQ. |
| **Zhumagul Nurassyl** | Implemented the FakeStore API integration, including the asynchronous request, loading state, JSON processing, product cards, and error handling. Also contributed to documentation formatting and team review. |

## 6. Verification and limitations

| Check | Observed result |
| --- | --- |
| Category navigation and search | **View Tech** opened the Gadgets category. Switching to **All** preserved the search text and updated the visible cards. |
| Inventory updates | Adding a test product updated both the catalog and the inventory table. Reloading restored the three original products. |
| Gallery navigation | Pressing the left arrow on the first photo opened the sixth photo. Escape closed the viewer. |
| FAQ and form feedback | Selecting a question revealed its answer and changed the indicator. Submitting an empty inquiry displayed separate errors for the name, email, and message. |
| Theme persistence and contrast | The theme persisted across pages. In dark mode, the Contact form labels appeared white on white, and the Home hero heading had low contrast against its light background. |
| API success and failure | The team’s screenshot below shows four products loaded during development. During a later check, the live request failed and the site displayed its error message. A direct request from the review environment returned HTTP 403. In a separate test, a four-product sample response produced four cards. |

## 7. Screenshots

### Home — light theme

The navigation shows the saved display name and the **Sign Out** button.

![Home page in light mode with a signed-in greeting and three collection cards](https://github.com/user-attachments/assets/48b1f2b1-bf01-4643-9d00-812266cf0753)

### Home — dark theme

![Home page with dark navigation and a dark collection section](https://github.com/user-attachments/assets/0e53f77b-accc-48a1-9a01-12d45bfd391a)

### Interactive FAQ

![The first FAQ answer expanded while the other questions remain closed](https://github.com/user-attachments/assets/e7c8218f-a9d0-4cef-9e30-141931c75fe5)

### Products loaded from FakeStore API

![Four featured product cards displaying images, titles, and prices on the Home page](https://github.com/user-attachments/assets/a3b9d7d9-d015-44d4-80a2-801dd451306b)

## 8. AI usage acknowledgment

Our team used GPT and Gemini for code generation, debugging, refactoring, and organizing the documentation. All three team members reviewed and tested the implementation in accordance with the course AI usage policy.
