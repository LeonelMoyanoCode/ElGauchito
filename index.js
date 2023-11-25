window.addEventListener('scroll', () => {
    const logoLink = document.querySelector('.logo-link');
    const header = document.getElementById('header');
    const grayBar = document.querySelector('.gray-bar'); // Obtén la referencia a la gray bar
    if (window.scrollY > 50) {
        header.style.height = '0'; // Ajusta la altura del header al tamaño del contenido
        grayBar.style.position = 'fixed'; // Cambia la posición de la gray bar a 'fixed'
        grayBar.style.top = '0'; // Coloca la gray bar en la parte superior de la página
    } else {
        logoLink.style.opacity = '1'; // Muestra el logotipo al regresar arriba
        header.style.height = 'auto'; // Restaura la altura del header
        grayBar.style.position="static";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var offcanvasMenu = document.getElementById("offcanvasMenu");
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    var menuToggle = document.getElementById("menuToggle");
    var closeBtn = document.getElementById("btn-close");

    function openMenu() {
        offcanvasMenu.style.left = "0";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }

    function closeMenu() {
        offcanvasMenu.style.left = "-100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    menuToggle.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
});

function redirigirALink() {
    window.location.href = "aumento-en-las-acciones.html";
}
function redirigirALink2() {
    window.location.href = "precios-congelados.html";
}
function redirigirALink3() {
    window.location.href = "un-pais-a-la-deriva.html";
}
function redirigirALink4() {
    window.location.href = "javiermilei.html";
}
function redirigirALink5() {
    window.location.href = "massareconoció.html";
}
function redirigirALink6() {
    window.location.href = "mileicerrosucampaña.html";
}
function redirigirALink7() {
    window.location.href = "fraude-en-las-elecciones.html";
}

function redirigirALink8() {
    window.location.href = "elon-musk-invierte.html";
}
function redirigirALink9() {
    window.location.href = "guerra-sin-cese.html";
}
function redirigirALink10() {
    window.location.href = "masacre-en-israel.html";
}