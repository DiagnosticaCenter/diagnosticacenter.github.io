$('.acordeon').each(function () {
    var contador = $(this).prev('.acordeon-supercabecera').find('.contador-checks');
    var totalCheckboxes = $(this).find('input[type="checkbox"]').length;
    contador.text("0/" + totalCheckboxes);
});

// Escuchar el cambio en los checkboxes dentro de los conjuntos

document.addEventListener('DOMContentLoaded', function () {
    // Desmarcar todas las casillas de verificación al cargar la página
    const checkboxes = document.querySelectorAll('.acordeon-contenido input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const cabeceras = document.querySelectorAll('.acordeon-cabecera');

    cabeceras.forEach(cabecera => {
        const contador = document.createElement('span');
        contador.className = 'contador-check';
        cabecera.appendChild(contador);

        const checkboxes = cabecera.nextElementSibling.querySelectorAll('input[type="checkbox"]');
        updateCheckboxCount(contador, checkboxes);

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                updateCheckboxCount(contador, checkboxes);
            });
        });
    });

    function updateCheckboxCount(contador, checkboxes) {
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        contador.textContent = ` (${checkedCheckboxes.length}/${checkboxes.length})`;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox-label input[type='checkbox']");
    const totalValueElement = document.getElementById("totalValue");
    let totalValue = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const value = parseFloat(this.dataset.value);
            if (this.checked) {
                totalValue += value;
            } else {
                totalValue -= value;
            }
            totalValueElement.textContent = totalValue.toFixed(2);
        });

        // Desmarcar todas las casillas al cargar la página
        checkbox.checked = false;
    });
});

$('.checkbox-label input[type="checkbox"]').on('change', function () {
    var anyChecked = $('.checkbox-label input[type="checkbox"]:checked').length > 0;
    $('#btnImprimir').prop('disabled', !anyChecked);
});

function updateCheckboxCount(contador, checkboxes) {
    const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    contador.textContent = `(${checkedCheckboxes.length}/${checkboxes.length})`;
}

$('#btnImprimir').on('click', function () {
    // const checkboxes = document.querySelectorAll('.acordeon-contenido input[type="checkbox"]');
    // checkboxes.forEach(checkbox => {
    //     checkbox.checked = true;
    // });
    // updateCheckboxCount(document.querySelector('.contador-check'), checkboxes);

    var total = 0;
    var seccionesConCheckboxes = [];

    $('.acordeon-cabecera').each(function () {
        var seccion = $(this).text().trim();
        var checkboxesMarcados = [];

        $(this).next('.acordeon-contenido').find('input[type="checkbox"]:checked').each(function () {
            var precio = parseFloat($(this).data('value'));
            var examenLabel = $(this).closest('.checkbox-label'); // Obtener la etiqueta label
            var examen = $.trim(examenLabel.contents().filter(function () {
                return this.nodeType === 3; // Filtrar nodos de texto
            }).text()); // Obtener el texto del nodo de texto dentro de la etiqueta label

            if (!isNaN(precio)) {
                checkboxesMarcados.push({ nombre: examen, precio: "$" + precio.toFixed(2) });
                total += precio;
            } else {
                checkboxesMarcados.push({ nombre: examen, precio: "" });
            }
        });

        if (checkboxesMarcados.length > 0) {
            seccionesConCheckboxes.push({
                seccion: seccion,
                checkboxes: checkboxesMarcados
            });
        }
    });

    var contenidoImpreso = '';
    seccionesConCheckboxes.forEach(function (seccion) {
        var selectSection = seccion.seccion;
        selectSection = selectSection.split('(')[0].trim();
        contenidoImpreso += '<br> <h2 style="font-size: 20px;"><b>' + selectSection + '</b></h2>';

        if (seccion.checkboxes.length > 0) {
            contenidoImpreso += '<table style="width: 100%; border-collapse: collapse;">';
            contenidoImpreso += '<tr><th style="border-bottom: 1px solid rgba(0,0,0,0.4); padding: 10px; font-size: 17px;">Examen</th><th style="border-bottom: 1px solid rgba(0,0,0,0.4); padding: 10px; width: 100px; font-size: 17px;">Precio</th></tr>';

            seccion.checkboxes.forEach(function (examen, index) {
                contenidoImpreso += '<tr>';
                contenidoImpreso += '<td style="padding: 10px; font-size: 17px;">' + examen.nombre + '</td>';
                contenidoImpreso += '<td style="padding: 10px; font-size: 17px;">' + examen.precio + '</td>';
                contenidoImpreso += '</tr>';

                // Agregar un borde inferior después de cada fila, excepto la última
                if (index < seccion.checkboxes.length - 1) {
                    contenidoImpreso += '<tr><td colspan="2" style="border-bottom: 1px solid #969696; padding: 0;"></td></tr>';
                }
            });

            contenidoImpreso += '</table>';
        }
    });

    var mensaje = "<br> <h2 style='font-size: 17px'><b>EXAMENES SELECCIONADOS:</b></h2>" + contenidoImpreso;
    if (total > 0) {
        mensaje += "<br><br><b style='font-size: 35px;'>Total:</b> $" + total.toFixed(2) + "";
        mensaje += "<br><b style='font-size: 15px; color: red'>El valor indicado no contiene descuentos y/o promociones.:</b>";
    }

    var printWindow = window.open('', '', 'height=400,width=800');

    var logoHtml = $('#logo').html();
    var logoStyles = `
    <style>
      @media print {
        #logo {
          display: block !important;
          position: fixed;
          top: 10px;
          right: 10px;
        }
      }
    </style>
  `;
    printWindow.document.head.innerHTML += logoStyles;
    printWindow.document.write(logoHtml);

    var mensajeHtml = '<br/> <div style="font-size: 25px; ">' + mensaje + '</div>';
    printWindow.document.write(mensajeHtml);
    printWindow.document.close();

    printWindow.print();
    setTimeout(function () {
        printWindow.close();
    }, 1000);
});

$('#btnWhatsapp').on('click', function () {
    var total = 0;
    var examenesSeleccionados = [];
    var examenesSeleccionados2 = [];

    $('.checkbox-label input[type="checkbox"]:checked').each(function () {
        var precio = parseFloat($(this).data('value'));
        if (!isNaN(precio) && precio !== 0) {
            var examen = $(this).parent().contents().filter(function () {
                return this.nodeType === 3;
            }).text().trim();
            examenesSeleccionados.push(examen);
            examenesSeleccionados2.push(examen + " - Precio: " + precio);
            total += precio;
        }
    });
    let codigoOrden = generarCodigoAleatorio();
    var mensaje = "Saludos, he cotizado desde su página web los siguientes exámenes\n\n" + examenesSeleccionados.join("\n");
    var mensaje2 = "Se ha cotizado desde la página web los siguientes exámenes\n\n" + examenesSeleccionados2.join("\n");

    if (total > 0) {
        mensaje += "\n\nTotal: " + total.toFixed(2);
    }
    mensaje += "\n\nPerteneciente a la orden digital " + codigoOrden + "\n\nMe ayuda con la confirmación e información detallada. Gracias";
    mensaje2 += "\n\nPerteneciente a la orden digital " + codigoOrden + "\n\nNo se olvide responder en Whatsapp.";

    // Codificar el mensaje para usarlo en la URL
    var encodedMensaje = encodeURIComponent(mensaje);
    var encodedMensaje2 = (mensaje2);

    var subject = 'Cotización por whatsapp desde página web';
    const recipients = "labdiagnostica@outlook.com,centerdiagnostica@gmail.com";
    const email = "centerdiagnostica@gmail.com";
    enviarCorreo(subject, 'Centro Clínico Diagnóstica', email, recipients, '', '', encodedMensaje2);

    // Generar el enlace de WhatsApp con el número y el mensaje
    var whatsappLink = "https://wa.me/593982922239?text=" + encodedMensaje;

    // Abrir el enlace en una nueva ventana
    window.open(whatsappLink, "_blank");
});

function generarCodigoAleatorio() {
    const fechaActual = new Date();

    const año = fechaActual.getFullYear().toString().slice(-2); // Obtener los últimos dos dígitos del año
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    const milisegundos = fechaActual.getMilliseconds();

    const codigo = `${año}${mes}${dia}${hora}${minutos}${segundos}${milisegundos}`;
    return codigo;
}


// Evento cuando se cambia un checkbox
$('.checkbox-label input[type="checkbox"]').on('change', function () {
    actualizarBotones();
});

// Función para actualizar el estado de los botones
function actualizarBotones() {
    var totalChecksSeleccionados = $('.checkbox-label input[type="checkbox"]:checked').length;
    if (totalChecksSeleccionados > 0) {
        $('#btnImprimir, #btnWhatsapp, #btnCorreo').prop('disabled', false);
    } else {
        $('#btnImprimir, #btnWhatsapp, #btnCorreo').prop('disabled', true);
    }
}

//MAIL
//https://dashboard.emailjs.com/admin
document.getElementById('btnEnviar').addEventListener('click', () => {
    try {
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

        var total = 0;
        var examenesSeleccionados = [];

        $('.checkbox-label input[type="checkbox"]:checked').each(function () {
            var precio = parseFloat($(this).data('value'));
            if (!isNaN(precio) && precio !== 0) {
                var examen = $(this).parent().contents().filter(function () {
                    return this.nodeType === 3;
                }).text().trim();
                examenesSeleccionados.push(examen + " - Precio: " + precio);
                total += precio;
            }
        });
        let codigoOrden = generarCodigoAleatorio();
        var mensaje = "Los exámenes que ha cotizado en la página web son los siguientes \n\n" + examenesSeleccionados.join("\n");
        if (total > 0) {
            mensaje += "\n\nTotal: " + total.toFixed(2);
        }
        mensaje += "\n\nPerteneciente a la orden digital " + codigoOrden;
        mensaje += "\n\nRecuerde que el valor indicado no contiene descuentos y/o promociones, por ende está sujeto a cambios. Gracias"
        var email = datacorreo;
        var nombre = datanombre;
        var asunto = 'Cotización desde la página web'
        var my_email = "centerdiagnostica@gmail.com";
        var cc_email = "labdiagnostica@outlook.com";

        enviarCorreo(asunto, 'Centro Clínico Diagnóstica', my_email, email, nombre, cc_email, mensaje);

        // Cerrar el modal
        $('#correoModal').modal('hide');

    } catch (e) {

    }
});

// Función para validar el formato de correo electrónico
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// const enviarCorreo = async (to_subject, from_name, reply_to, to_email, to_name, to_cc, message) => {
//
//     const data = {
//         to_subject: to_subject,
//         from_name: from_name,
//         reply_to: reply_to,// responder a
//         to_email: to_email,// quien envía
//         to_name: to_name,// nombre de quien envía,
//         to_cc: to_cc,
//         message: message,
//         "content-type": "text/html",
//     };
//     try {
//         const response = await emailjs.send('service_suh75ru', templateID, data, userID);
//         console.info(response);
//         if (response.status === 200) {
//             sendToastify("El correo se envió correctamente.", 3000,
//                 true, "bottom", true,
//                 "linear-gradient(to right, #021a5e, #42418a)");
//         } else {
//             sendToastify("No sé pudo enviar, intente otra forma.", 3000,
//                 true, "bottom", true,
//                 "linear-gradient(to right, #5e0210, #cc19be)");
//         }
//     } catch (error) {
//         sendToastify("Error al enviar, intente otra forma.", 3000,
//             true, "bottom", true,
//             "linear-gradient(to right, #5e0210, #cc19be)");
//         console.error(error);
//     }
// };

// function sendToastify(text, duration, tfclose, gravity, stopOnFocus, backgroundColor) {
//     Toastify({
//         text: text,
//         duration: duration,
//         close: tfclose, // Muestra el botón de cierre
//         gravity: gravity, // Posición: "top", "center", "bottom"
//         stopOnFocus: stopOnFocus, // Detiene el temporizador al hacer clic en el toast
//         backgroundColor: backgroundColor,
//     }).showToast();
// }
