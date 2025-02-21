// Selección de elementos
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Evento de clic para mostrar/ocultar el menú
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuToggle.classList.toggle("active");
});
