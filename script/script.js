// Dodajemy nasłuchiwacz zdarzeń kliknięcia do elementu menuToggle
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
});
