
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuOptions = document.getElementById("menu-options");

    menuButton.addEventListener("click", () => {
        menuOptions.classList.toggle("hidden");
    });
});
