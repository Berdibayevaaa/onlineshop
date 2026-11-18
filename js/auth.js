document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.navbar-nav');
    if (!nav) return;

    const authLi = document.createElement('li');
    authLi.className = 'nav-item d-flex align-items-center ms-3';
    nav.appendChild(authLi);

    function updateUI() {
        const user = localStorage.getItem("loggedInUser");
        if (user) {
            authLi.innerHTML = `
                <span class="text-success fw-bold me-2">Hi, ${user}!</span>
                <button id="signout-btn" class="btn btn-sm btn-outline-danger">Sign Out</button>
            `;
            document.getElementById("signout-btn").addEventListener("click", () => {
                localStorage.removeItem("loggedInUser");
                updateUI();
            });
        } else {
            authLi.innerHTML = `
                <input type="text" id="username" class="form-control form-control-sm me-2" placeholder="Username" style="width: 120px;" required>
                <button id="signin-btn" class="btn btn-sm btn-primary">Sign In</button>
            `;
            document.getElementById("signin-btn").addEventListener("click", () => {
                const username = document.getElementById("username").value.trim();
                if (username !== "") {
                    localStorage.setItem("loggedInUser", username);
                    updateUI();
                } else {
                    alert("Please enter a username");
                }
            });
        }
    }
    updateUI();
});