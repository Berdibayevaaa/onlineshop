Project Title and Topic: Aura Store - Multi-category Responsive Online Shop (Clothes, Gadgets, Cosmetics)


link:https://berdibayevaaa.github.io/onlineshop/

  
 Group Member Names:
* IT -2501 Berdibay Sayazhan
* IT-2501 Abibulla Zarina
* IT-2501 Zhumagul Nurassyl


 Short Description of the Project

Aura Store is a multi-page responsive web project designed as a modern e-commerce storefront. The platform combines three everyday lifestyle categories in one unified space: casual urban clothing, smart consumer gadgets, and skincare cosmetics. The primary goal of the project is to build an intuitive, visually clean user interface using semantic HTML5, custom CSS styling, and Bootstrap 5 utilities without relying on external JavaScript frameworks or backend databases. The website consists of 5 fully linked pages: Home (landing page with category previews), About (store background and mission), Products (showcase cards with badges and comparison table), Gallery (visual lookbook), and Contact (customer feedback form).


 Features Implemented

  
* Multi-Page Semantic Structure:


The website contains five distinct HTML files interconnected through a consistent navigation bar. Each document utilizes semantic HTML5 landmark tags such as header, main, section, nav, and footer to maintain accessible and organized markup. Headings follow a logical hierarchy with a single h1 per page, followed by h2 and h3 subheadings.


 * Navigation and Header Architecture


A top navigation bar is fixed to the viewport on all pages using CSS position: fixed and z-index. The navigation area is built using Flexbox to separate the logo brand from the menu list. On desktop screens, navigation links remain horizontally expanded. On screens narrower than 992px, the menu collapses into a functional hamburger toggler powered by Bootstrap's collapse component.


* Layout Techniques: CSS Grid and Flexbox


The Products and Gallery pages display catalog items using pure CSS Grid with repeat(3, 1fr) for large viewports. Flexbox is applied within the header container, inside Bootstrap cards, and along the general page layout (display: flex with min-height: 100vh on the body element) to ensure sticky-bottom footer placement across all content lengths.


* CSS Positioning Techniques


Positioning techniques are used in multiple functional areas. The header uses position: fixed to remain visible while scrolling. In the products showcase, product cards use position: relative, while visual promotional tags (Hot, Sale, New) use position: absolute pinned to the top-right corner of each card.


* Pseudo-Classes and Interactive States


Interactive elements, including navigation links, category buttons, and footer links, implement custom :hover and :focus pseudoclasses with color and opacity transitions. The comparison table on the products page uses the :nth-child(even) pseudo-class to create zebra-striped row backgrounds for readability.


* CSS Custom Properties (:root Variables)


Global design tokens are centralized in the :root selector of style.css. These variables define the primary theme color, dark typography color, light neutral background, accent color for badges, base font size, and uniform vertical section padding.


* Responsive Design and Breakpoints

The layout follows a desktop-first responsive design strategy. Two custom media query breakpoints are implemented in style.css:
 * Tablet breakpoint (max-width: 991px): product grids change from 3 columns to 2 columns, section padding is reduced, and the navbar items align vertically within the toggler dropdown.
 * Mobile breakpoint (max-width: 575px): product grids collapse into a single column, root font sizes drop to 14px, heading sizes decrease, and top body padding adjusts for smaller screen dimensions.
 * Bootstrap's responsive grid system (col-12, col-md-6, col-lg-4) is concurrently used on the home page category cards.


* HTML Table and Form Elements


The products page contains a structured HTML table with thead, tbody, th, and td elements to compare category warranty and return terms. The contact page includes a complete form featuring input fields with type text, email, a select dropdown for inquiry categories, a textarea for detailed messages, and required validation attributes.


* Performance and Assets
Typography is imported from Google Fonts (Poppins family). Images across all pages feature explicit loading="lazy" attributes to optimize page loading by deferring offscreen media.


* Technologies Used

HTML5 (Semantic elements, table structure, form inputs)

CSS3 (Flexbox, CSS Grid, CSS Variables, Media Queries, Positioning, Pseudo-classes)

Bootstrap 5.3.0 (Grid classes, utilities for spacing and typography, Navbar toggler bundle)

Google Fonts (Poppins typeface)

Unsplash (Image placeholders)
