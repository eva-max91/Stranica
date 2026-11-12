const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Otvori navigaciju" : "Zatvori navigaciju");
    navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Otvori navigaciju");
        navigation.classList.remove("is-open");
    }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
