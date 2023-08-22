$(".acordeon").on("click", ".acordeon-cabecera", function () {
    $(this).toggleClass("active").next().slideToggle();
});
$(".acordeon").on("click", ".acordeon-cabecera-more", function () {
    $(this).toggleClass("active").next().slideToggle();
});