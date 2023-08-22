$(document).ready(function () {
    var zindex = 10;

    $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
            isShowing = true
        }

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
                $(this)
                    .css({zIndex: zindex})
                    .addClass("show");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("showing");
            $(this)
                .css({zIndex: zindex})
                .addClass("show");

            zindex++;
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