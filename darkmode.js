document.addEventListener("DOMContentLoaded", () => {

    const themeSelect = document.getElementById("theme");
    const logo = document.getElementById("logo");

    themeSelect.addEventListener("change", (e) => {

        if (e.target.value === "dark") {
            document.body.classList.add("dark");

            // DARK MODE → show DARK logo
            logo.src = "byui-logo-dark.png";

        } else {
            document.body.classList.remove("dark");

            // LIGHT MODE → show WHITE logo
            logo.src = "byui-logo-white.png";
        }

    });

});
