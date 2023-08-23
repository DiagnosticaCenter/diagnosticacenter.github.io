$(document).ready(function () {
    var zindex = 10;

    $("div.card .toggle-info").click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var card = $(this).closest(".card");
        var isShowing = card.hasClass("show");

        if ($("div.cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.show")
                .removeClass("show");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                card
                    .css({zIndex: zindex})
                    .addClass("show");

                zindex++;
            }
        } else {
            // no cards in view
            $("div.cards")
                .addClass("showing");
            card
                .css({zIndex: zindex})
                .addClass("show");

            zindex++;
        }
    });

    // Cerrar tarjetas cuando se hace clic fuera de ellas
    $(document).click(function (e) {
        if (!$(e.target).closest('.card').length) {
            $("div.card.show")
                .removeClass("show");
            $("div.cards")
                .removeClass("showing");
        }
    });
});

var asuntoEnviar = "";
document.addEventListener("DOMContentLoaded", function () {
    var forHourEmail = document.getElementById("forHourEmail");
    var forPatientEmail = document.getElementById("forPatientEmail");
    var forMonthEmail = document.getElementById("forMonthEmail");

    var forHourWhatsapp = document.getElementById("forHourWhatsapp");
    var forPatientWhatsapp = document.getElementById("forPatientWhatsapp");
    var forMonthWhatsapp = document.getElementById("forMonthWhatsapp");

    forHourEmail.addEventListener("click", function () {
        asuntoEnviar = 'Alquiler por hora';
        document.getElementById('asuntoCorreo').textContent = 'Asunto: ' + asuntoEnviar;

    });
    forPatientEmail.addEventListener("click", function () {
        asuntoEnviar = 'Alquiler por paciente';
        document.getElementById('asuntoCorreo').textContent = 'Asunto: ' + asuntoEnviar;

    });
    forMonthEmail.addEventListener("click", function () {
        asuntoEnviar = 'Aquiler mensual';
        document.getElementById('asuntoCorreo').textContent = 'Asunto: ' + asuntoEnviar;

    });

    forHourWhatsapp.addEventListener("click", function () {
        sendWhatsapp("Alquiler por hora");

    });
    forPatientWhatsapp.addEventListener("click", function () {
        sendWhatsapp("Alquiler por paciente");

    });
    forMonthWhatsapp.addEventListener("click", function () {
        sendWhatsapp("Alquiler mensual");
    });

});


function sendWhatsapp(asunto) {
    var mensaje = "Saludos, estoy interesado en obtener más información sobre el " + asunto + "\n que ofrecen en su página web. Gracias\n";

    var subject = 'Alquiler por whatsapp desde página web';
    const recipients = "labdiagnostica@outlook.com,centerdiagnostica@gmail.com";
    const email = "centerdiagnostica@gmail.com";

    // Generar el enlace de WhatsApp con el número y el mensaje
    var whatsappLink = "https://wa.me/593982922239?text=" + mensaje;

    mensaje = mensaje.replace("Saludos, estoy", "Hay un usuario que está");
    enviarCorreo(subject, 'Centro Clínico Diagnóstica', email, recipients, '', '', mensaje);

    // Abrir el enlace en una nueva ventana
    window.open(whatsappLink, "_blank");
}


document.getElementById('btnEnviar').addEventListener('click', () => {
    const datanombre = document.getElementById('nombre').value;
    const datacorreo = document.getElementById('correo').value;

    if (!datanombre.trim()) {
        sendToastify("No se ha llenado todos los datos.", 3000,
            true, "bottom", true,
            "linear-gradient(to right, #5e0210, #cc19be)");
        return;
    }

    if (!validateEmail(datacorreo)) {
        sendToastify("Debe ingresar un correo válido.", 3000,
            true, "bottom", true,
            "linear-gradient(to right, #5e0210, #cc19be)");
        return;
    }

    var mensaje = `Soy ${datanombre} estoy interesando en obtener más información de ${asuntoEnviar}, que ofrecen en su página web \nCorreo Electrónico: ${datacorreo}`;

    var email = datacorreo;
    var nombre = datanombre;
    var asunto = 'Alquiler desde página web'
    var my_email = "centerdiagnostica@gmail.com";
    var cc_email = "labdiagnostica@outlook.com";

    enviarCorreo(asunto, 'Centro Clínico Diagnóstica', my_email, email, nombre, cc_email, mensaje);

    // Cerrar el modal
    $('#correoModal').modal('hide');
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

$('#largeModal').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget);
    var contentId = button.data('content');

    var dynamicContent = '';
    if (contentId === 'content1') {
        dynamicContent = `
                <div>
                        <p class="p-descripcion">  La ecografía es una técnica de diagnóstico médico que emplea ondas de ultrasonido para crear
                        imágenes internas del cuerpo. Se utiliza en diversas áreas médicas para examinar órganos,
                        tejidos y estructuras, facilitando evaluaciones precisas y no invasivas.</p>
                </div>
            `;
    } else if (contentId === 'content2') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion">Nuestra farmacia es tu fuente confiable de medicamentos y productos de salud. Ofrecemos una
                        amplia selección de medicamentos y brindamos asesoramiento personalizado para asegurarnos de que
                        recibas la atención que necesitas. Aprovecha nuestros descuentos especialmente los Lunes y
                        Jueves. Con envío a domicilio.</p>
                </div>
            `;
    } else if (contentId === 'content3') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion">Cuidamos de tu salud bucal con pasión y profesionalismo. Ofrecemos una variedad de servicios
                        odontológicos, que van desde limpiezas, blanqueamientos, tratamientos restaurativos, ortodoncia,
                        cirugía, etc. Tu sonrisa es nuestra prioridad, y nos esforzamos por brindarte una atención
                        dental de calidad para que puedas lucir y sentirte mejor.</p>
                </div>
            `;
    } else if (contentId === 'content4') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion"></p>
                </div>
            `;
    } else if (contentId === 'content5') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion"></p>
                </div>
            `;
    } else if (contentId === 'content6') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion"></p>
                </div>
            `;
    }

    $('#dynamicContent').html(dynamicContent);

});
