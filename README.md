# Aura Store
[Aura Store on GitHub Pages](https://berdibayevaaa.github.io/onlineshop/)

## Project title and topic

Aura Store is the IT-2501 Endterm Project for WEB Technologies 1 (Front End). It continues the team's midterm storefront for Clothes, Gadgets and Cosmetics.

## Team members

- IT-2501 Zhumagul Nurassyl
- IT-2501 Berdibay Sayazhan
- IT-2501 Abibulla Zarina


## Project description

Home introduces the three collections and links to each category in the catalog. About describes the store's mission and services. Products combines the storefront, its inventory and the original warranty comparison. Gallery presents six lookbook photos. Contact contains an inquiry form and a separate account registration exercise.

## Implemented features

- **Navigation and layout.** All five pages share a fixed Flexbox header, a collapsible mobile menu and a contact footer. The catalog and lookbook use a three-column CSS grid that switches to two columns at 991 px and one at 575 px.
- **Product search.** Type part of a name and select a category to filter cards immediately. Matching ignores case. All clears the category filter and leaves the search text in place.
- **Product inventory.** A single array supplies the cards and the complete inventory table. Add a product or edit its name, category and USD price in the Bootstrap dialog. Delete asks for confirmation. Changes last until the page is reloaded or left. New products have a photo placeholder.
- **Gallery.** Open a thumbnail to see its full image and caption. Use the previous and next buttons or the arrow keys to browse. Close or Escape returns focus to the thumbnail. The viewer uses jQuery fades and respects reduced-motion preferences.
- **Forms.** Both forms validate required fields and email addresses in the browser. Registration checks the password and its confirmation as the user types. A password needs at least eight characters, a letter and a digit to reach Medium. Strong also requires at least twelve characters and a symbol. Successful validation clears the password fields. The forms demonstrate client-side checks without a backend or password storage.

## Technologies and local use

The site uses semantic HTML5, CSS custom properties, Flexbox, CSS Grid, Bootstrap 5.3.0, JavaScript and full jQuery 3.7.1. All five HTML files are in the root. Author styles are in css/style.css and interactive features are in js/script.js. Bootstrap, jQuery, Poppins and the original Unsplash photos are served locally. No build step is required.

From the repository folder on Windows, run:


## Individual contributions

| Team member | Evidence from the midterm history 
| --- | --- 
| IT-2501 Berdibay Sayazhan | Commits under Sayazhan added the original pages and stylesheet (5466703), then revised the layout and README. 
| IT-2501 Abibulla Zarina | Revised the project description and features in the README (c0f180d) and co-developped with Sayazhan. 
| IT-2501 Zhumagul Nurassyl | **Team to confirm.** Commit 55e48e3 records a README formatting change under the account name zhnuraa.  

The commit history identifies the people who submitted changes. The team should confirm the division of work and replace the open entries before submission.


The endterm version is prepared on the local endterm branch for team review. After merging and deploying, check the published Products, Gallery and Contact pages before submitting these two links.
