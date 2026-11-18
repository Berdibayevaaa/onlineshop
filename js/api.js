document.addEventListener("DOMContentLoaded", () => {
    const loadBtn = document.getElementById("load-api-btn");
    const productsContainer = document.getElementById("api-products");
    const errorContainer = document.getElementById("api-error");

    if (loadBtn) {
        loadBtn.addEventListener("click", async () => {
            productsContainer.innerHTML = '<div class="text-center w-100 my-4 fw-bold text-primary">Loading products from API...</div>';
            errorContainer.classList.add("d-none");

            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=4');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                productsContainer.innerHTML = '';

                data.forEach(product => {
                    const productCard = `
                        <div class="col-md-3 mb-4">
                            <div class="card h-100 text-center p-3 shadow-sm">
                                <img src="${product.image}" class="card-img-top mx-auto" alt="${product.title}" style="height: 120px; width: auto; object-fit: contain;">
                                <div class="card-body d-flex flex-column">
                                    <h6 class="card-title text-truncate" title="${product.title}">${product.title}</h6>
                                    <p class="card-text text-success fw-bold mt-auto">$${product.price}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    productsContainer.insertAdjacentHTML('beforeend', productCard);
                });
            } catch (error) {
                productsContainer.innerHTML = '';
                errorContainer.textContent = "Failed to load products from server. Please try again later.";
                errorContainer.classList.remove("d-none");
                console.error("API Fetch Error:", error);
            }
        });
    }
});
