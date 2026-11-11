'use strict';

function initContact() {
  const contactForm = document.getElementById('contact-form');
  const accountForm = document.getElementById('account-form');
  if (!contactForm || !accountForm) return;

  const password = document.getElementById('account-password');
  const confirmPassword = document.getElementById('account-confirm');
  const strength = document.getElementById('password-strength');
  const contactStatus = document.getElementById('contact-status');
  const accountStatus = document.getElementById('account-status');
  const strengthColors = { Weak: 'text-danger', Medium: 'text-warning-emphasis', Strong: 'text-success' };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function passwordLevel(value) {
    const length = Array.from(value).length;
    if (length < 8 || !/\p{L}/u.test(value) || !/\p{Nd}/u.test(value)) return 'Weak';
    if (length >= 12 && /[\p{P}\p{S}]/u.test(value)) return 'Strong';
    return 'Medium';
  }

  function updateStrength() {
    const level = password.value ? passwordLevel(password.value) : '';
    strength.classList.remove(...Object.values(strengthColors));
    if (level) strength.classList.add(strengthColors[level]);
    strength.textContent = level ? 'Password strength: ' + level : '';
  }

  function fieldError(field) {
    if (field === confirmPassword) {
      if (!field.value) return 'Confirm your password.';
      return field.value === password.value ? '' : 'Passwords must match.';
    }
    if (field === password) {
      if (!field.value) return 'Enter a password.';
      return passwordLevel(field.value) === 'Weak' ? 'Use at least 8 characters, a letter and a digit.' : '';
    }
    if (field.type === 'email') {
      return emailPattern.test(field.value.trim()) && !field.validity.typeMismatch
        ? '' : 'Enter an email address such as name@example.com.';
    }
    if (field.value.trim()) return '';
    return field.type === 'textarea' ? 'Enter a message.' : 'Enter your full name.';
  }

  function validateField(field) {
    const message = fieldError(field);
    document.getElementById(field.id + '-error').textContent = message;
    field.classList.toggle('is-invalid', Boolean(message));
    field.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }

  function validateForm(form) {
    const fields = Array.from(form.querySelectorAll('[required]'));
    const invalidFields = fields.filter(field => !validateField(field));
    if (invalidFields.length) invalidFields[0].focus();
    return invalidFields.length === 0;
  }

  contactForm.addEventListener('input', event => {
    contactStatus.textContent = '';
    if (event.target.required) validateField(event.target);
  });

  contactForm.addEventListener('submit', function checkInquiry(event) {
    event.preventDefault();
    contactStatus.textContent = validateForm(contactForm) ? 'Your inquiry passed client-side validation.' : '';
  });

  accountForm.addEventListener('input', event => {
    accountStatus.textContent = '';
    validateField(event.target);
    if (event.target === password) {
      updateStrength();
      if (confirmPassword.value || confirmPassword.hasAttribute('aria-invalid')) {
        validateField(confirmPassword);
      }
    }
  });

  accountForm.addEventListener('submit', function checkRegistration(event) {
    event.preventDefault();
    updateStrength();
    accountStatus.textContent = '';
    if (!validateForm(accountForm)) return;

    accountForm.reset();
    accountForm.querySelectorAll('[required]').forEach(field => field.removeAttribute('aria-invalid'));
    updateStrength();
    accountStatus.textContent = 'Your account details passed client-side validation.';
  });
}

function initProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const products = [
    {
      id: 1, name: "Cotton Oversized Tee", category: "clothes", price: 29.99,
      image: "assets/images/tee.jpg", alt: "Model wearing a light blue shirt", badge: "Hot"
    },
    {
      id: 2, name: "Noise-Cancelling Headphones", category: "gadgets", price: 89.99,
      image: "assets/images/headphones.jpg", alt: "Headphones", badge: "Sale"
    },
    {
      id: 3, name: "Hydrating Face Serum", category: "cosmetics", price: 19.50,
      image: "assets/images/serum.jpg", alt: "Hydrating Serum", badge: "New"
    }
  ];
  let nextId = 4;
  let editingId = null;
  const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  const categoryLabels = new Map([
    ["clothes", "Clothes"], ["gadgets", "Gadgets"], ["cosmetics", "Cosmetics"]
  ]);
  const requestedCategory = new URLSearchParams(window.location.search).get("category") || "";
  let activeCategory = requestedCategory.toLowerCase();
  if (!categoryLabels.has(activeCategory)) activeCategory = "all";

  const search = document.getElementById("productSearch");
  const filters = document.getElementById("categoryFilters");
  const rows = document.getElementById("inventoryRows");
  const cardTemplate = document.getElementById("productCard");
  const rowTemplate = document.getElementById("inventoryRow");
  const addButton = document.getElementById("addProduct");
  const modalElement = document.getElementById("productModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
  const form = document.getElementById("productForm");
  const nameInput = document.getElementById("productName");
  const categoryInput = document.getElementById("productCategory");
  const priceInput = document.getElementById("productPrice");

  function createCard(product) {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    const badge = card.querySelector(".badge-tag");
    if (product.badge) badge.textContent = product.badge;
    else badge.remove();

    if (product.image) {
      const photo = document.createElement("img");
      photo.className = "card-img-top product-photo";
      photo.loading = "lazy";
      photo.alt = product.alt;
      photo.src = product.image;
      card.querySelector(".product-placeholder").replaceWith(photo);
    }
    card.querySelector("h2").textContent = product.name;
    card.querySelector(".product-category").textContent = "Category: " + categoryLabels.get(product.category);
    card.querySelector(".product-price").textContent = currency.format(product.price);
    return card;
  }

  function renderCatalog() {
    const query = search.value.trim().toLowerCase();
    const visible = products.filter(product =>
      (activeCategory === "all" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(query)
    );
    grid.replaceChildren(...visible.map(createCard));
    document.getElementById("noProducts").hidden = visible.length > 0;
    document.getElementById("productCount").textContent = "Products found: " + visible.length;
    filters.querySelectorAll("button").forEach(button => {
      const active = button.dataset.category === activeCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderInventory() {
    rows.replaceChildren();
    for (const product of products) {
      const row = rowTemplate.content.firstElementChild.cloneNode(true);
      row.dataset.id = product.id;
      row.querySelector(".product-name").textContent = product.name;
      row.querySelector(".product-category").textContent = categoryLabels.get(product.category);
      row.querySelector(".product-price").textContent = currency.format(product.price);
      rows.append(row);
    }
    if (products.length === 0) {
      const cell = rows.insertRow().insertCell();
      cell.colSpan = 4;
      cell.textContent = "Your inventory is empty.";
    }
  }

  function openProductEditor(product = null) {
    form.reset();
    nameInput.setCustomValidity("");
    categoryInput.setCustomValidity("");
    priceInput.setCustomValidity("");
    editingId = product ? product.id : null;
    document.getElementById("productModalTitle").textContent = product ? "Edit product" : "Add product";
    if (product) {
      nameInput.value = product.name;
      categoryInput.value = product.category;
      priceInput.value = product.price.toFixed(2);
    }
    modal.show();
  }

  function saveProduct(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const category = categoryInput.value.toLowerCase();
    const price = priceInput.valueAsNumber;
    nameInput.setCustomValidity(name ? "" : "Enter a product name.");
    categoryInput.setCustomValidity(categoryLabels.has(category) ? "" : "Choose a listed category.");
    priceInput.setCustomValidity(Number.isFinite(price) && price > 0 ? "" : "Enter a positive price.");
    if (!form.reportValidity()) return;

    if (editingId === null) {
      products.push({ id: nextId++, name, category, price });
    } else {
      const product = products.find(item => item.id === editingId);
      Object.assign(product, { name, category, price });
    }
    renderCatalog();
    renderInventory();
    modal.hide();
  }

  function handleInventoryAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const id = Number(button.closest("tr").dataset.id);
    const index = products.findIndex(product => product.id === id);
    const product = products[index];
    if (button.dataset.action === "edit") {
      openProductEditor(product);
    } else if (window.confirm('Delete "' + product.name + '" from the inventory?')) {
      products.splice(index, 1);
      renderCatalog();
      renderInventory();
      addButton.focus();
    }
  }

  search.addEventListener("input", renderCatalog);
  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderCatalog();
  });
  addButton.addEventListener("click", () => openProductEditor());
  rows.addEventListener("click", handleInventoryAction);
  form.addEventListener("submit", saveProduct);
  modalElement.addEventListener("shown.bs.modal", () => nameInput.focus());
  modalElement.addEventListener("hidden.bs.modal", () => {
    const editButton = rows.querySelector('tr[data-id="' + editingId + '"] [data-action="edit"]');
    (editButton || addButton).focus();
  });

  renderCatalog();
  renderInventory();
}

function initGallery() {
  const dialog = document.getElementById("galleryLightbox");
  if (!dialog) return;

  const thumbnails = Array.from(document.querySelectorAll(".gallery-thumbnail"));
  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("closeImage");
  const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
  let currentIndex = 0;
  let opener;

  function showImage(index) {
    currentIndex = (index + thumbnails.length) % thumbnails.length;
    const thumbnail = thumbnails[currentIndex].querySelector("img");
    image.src = thumbnail.src;
    image.alt = thumbnail.alt;
    caption.textContent = `${currentIndex + 1} / ${thumbnails.length} · ${thumbnail.alt}`;
  }

  function openLightbox(index) {
    opener = thumbnails[index];
    showImage(index);
    dialog.showModal();
    document.body.classList.add("gallery-open");
    $(dialog).hide().fadeIn(duration);
    closeButton.focus();
  }

  function closeLightbox() {
    $(dialog).stop(true).fadeOut(duration, function () {
      dialog.close();
      dialog.style.removeProperty("display");
      document.body.classList.remove("gallery-open");
      opener.focus();
    });
  }

  thumbnails.forEach(function (button, index) {
    button.addEventListener("click", () => openLightbox(index));
  });
  document.getElementById("previousImage").addEventListener("click", () => showImage(currentIndex - 1));
  document.getElementById("nextImage").addEventListener("click", () => showImage(currentIndex + 1));
  closeButton.addEventListener("click", closeLightbox);

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  dialog.addEventListener("cancel", function (event) {
    event.preventDefault();
    closeLightbox();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeLightbox();
  });
}

initContact();
initProducts();
initGallery();
