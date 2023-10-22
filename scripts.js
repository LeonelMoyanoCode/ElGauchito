const header = document.getElementById("header");

// Obtiene la altura del encabezado
const headerHeight = header.clientHeight;

// Agrega un evento de desplazamiento a la ventana
window.addEventListener("scroll", () => {
    // Verifica si el desplazamiento es mayor que la altura del encabezado
    if (window.scrollY > headerHeight) {
        // Si es mayor, agrega una clase para fijar el encabezado
        header.classList.add("fixed-header");
    } else {
        // Si el desplazamiento es menor, elimina la clase
        header.classList.remove("fixed-header");
    }
});
