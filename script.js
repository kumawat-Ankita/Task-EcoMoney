const profileButton = document.getElementById("profile-button");

// Menus
const dropdownMenu = document.getElementById("dropdown-menu");
const sideMenu = document.getElementById("side-menu");
const modalMenu = document.getElementById("modal-menu");

// Toggle visibility for dropdown menu
profileButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
});

// Side Menu Logic
profileButton.addEventListener("dblclick", () => {
    sideMenu.style.right = sideMenu.style.right === "0px" ? "-200px" : "0px";
});

// Modal Menu Logic
profileButton.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    modalMenu.classList.remove("hidden");
});

// Close menus when clicking outside
document.addEventListener("click", (e) => {
    if (!profileButton.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
        modalMenu.classList.add("hidden");
        sideMenu.style.right = "-200px";
    }
});
