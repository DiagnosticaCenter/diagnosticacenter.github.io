// Ejecutar la función al cargar la página y cuando se redimensiona la ventana
window.onload = changeImageBasedOnScreenWidth;
window.onchange = changeImageBasedOnScreenWidth;
window.onresize = changeImageBasedOnScreenWidth;

function changeImageBasedOnScreenWidth() {
    try {
    var image1 = document.getElementById('imagebanner1');
    var mobileImagePath1 = 'images/page-banner-m.jpg';
    var desktopImagePath1 = 'images/page-banner.jpg';

    var image2 = document.getElementById('imagebanner2');
    var mobileImagePath2 = 'images/page-banner2-m.jpg';
    var desktopImagePath2 = 'images/page-banner2.jpg';

    var image3 = document.getElementById('imagebanner3');
    var mobileImagePath3 = 'images/page-banner3-m.jpg';
    var desktopImagePath3 = 'images/page-banner3.jpg';
    // Obtener el ancho de la ventana del navegador
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Establecer la ruta de la imagen en función del ancho de la ventana
    if (windowWidth <= 768) {
        image2.src = mobileImagePath2;
        image1.src = mobileImagePath1;
        image3.src = mobileImagePath3;

    } else {
        image1.src = desktopImagePath1;
        image2.src = desktopImagePath2;
        image3.src = desktopImagePath3;
     }
    }catch (e) {
    }
}


function toggleMenu() {
    var navMobile = document.querySelector(".nav-mobile");
    if (navMobile.style.display === "block") {
        navMobile.style.display = "none";

    } else {
        navMobile.style.display = "block";

    }
}