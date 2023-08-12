document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.vid');

    videos.forEach(function (video) {
        video.addEventListener('loadedmetadata', function () {
            video.currentTime = 0.5; // Establecer el tiempo de inicio en 1 segundos para cada video
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuParent = document.querySelector('.menu-parent');
    const subMenu = menuParent.querySelector('.sub-menu');

    // Agregar evento click al elemento con la clase "menu-parent"
    menuParent.addEventListener('click', function (event) {
        event.stopPropagation(); // Evitar que el clic en "Más" cierre el submenú

        // Alternar la visibilidad del submenú al hacer clic en "menu-parent"
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    });

    // Agregar evento click para cerrar el submenú "Más" al hacer clic en cualquier otro lugar de la página
    document.addEventListener('click', function (event) {
        const target = event.target;

        if (!menuParent.contains(target)) {
            subMenu.style.display = 'none';
        }
    });
});


function gotoSection(sections) {

    // Obtener el elemento con el id "certificaciones"
    var section = document.getElementById(sections);

    // Verificar si el elemento existe antes de intentar desplazarse a él
    if (section) {
        // Hacer scroll suavemente hasta la sección de ''
        section.scrollIntoView({behavior: 'smooth'});
    } else {
        console.error('La sección de ' + sections + ' no existe.');
    }
}

function sendMessage(action) {
    let message = "";
    // Crea el enlace de WhatsApp
    let whatsappLink = `https://api.whatsapp.com/send?phone=%2B593982922239&text=`;

    switch (action) {
        case 'turno':
            // Mensaje predefinido
            message = ("¡Hola! Estoy interesado en separar un turno.");
            break;
        case 'cotizar':
            message = ("¡Hola! Estoy interesado en cotizar unos exámenes.");
            break;
        case 'resultados':
            message = ("¡Hola! Estoy interesado en los resultados de los exámenes.");
            break;
        case 'domicilio':
            message = ("¡Hola! Estoy interesado en su servicio a domicilio.");
            break;
        case 'factura':
            message = ("¡Hola! Estoy interesado en mis comprobbantes de pago.");
            break;
        default:
            break;
    }
    whatsappLink = whatsappLink + message;
    // Abre una nueva ventana o pestaña con el enlace de WhatsApp
    window.open(whatsappLink, "_blank");
}