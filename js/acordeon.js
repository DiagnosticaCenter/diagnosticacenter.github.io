$(".acordeon").on("click", ".acordeon-cabecera", function () {
    $(this).toggleClass("active").next().slideToggle();
});
$('.acordeon').each(function () {
    var contador = $(this).prev('.acordeon-supercabecera').find('.contador-checks');
    var totalCheckboxes = $(this).find('input[type="checkbox"]').length;
    contador.text("0/" + totalCheckboxes);
});

// Escuchar el cambio en los checkboxes dentro de los conjuntos
$('.acordeon-contenido input[type="checkbox"]').on('change', function () {
    var conjunto = $(this).closest('.acordeon'); // Obtener el conjunto de exámenes
    var contador = conjunto.prev('.acordeon-supercabecera').find('.contador-checks'); // Obtener el contador
    var selectedCheckboxes = conjunto.find('input[type="checkbox"]:checked').length; // Contar los checkboxes seleccionados
    var totalCheckboxes = conjunto.find('input[type="checkbox"]').length; // Obtener el total de checkboxes en el conjunto
    contador.text(selectedCheckboxes + "/" + totalCheckboxes); // Actualizar el contador

    // Habilitar o deshabilitar el botón de imprimir
    var btnImprimir = $('#btnImprimir');
    if (selectedCheckboxes > 0) {
        btnImprimir.prop('disabled', false);
    } else {
        btnImprimir.prop('disabled', true);
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

$('#largeModal').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget);
    var contentId = button.data('content');

    var dynamicContent = '';
    if (contentId === 'content1') {
        dynamicContent = `
                <div>
                        <p class="p-descripcion">Descripción de examen 1</p>
                </div>
            `;
    } else if (contentId === 'content2') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion">Descripción de examen 2</p>
                </div>
            `;
    } else if (contentId === 'content3') {
        dynamicContent = `
                <div >
                        <p class="p-descripcion">Descripción de examen 3</p>
                </div>
            `;
    }

    $('#dynamicContent').html(dynamicContent);

});
$('.checkbox-label input[type="checkbox"]').on('change', function () {
    var anyChecked = $('.checkbox-label input[type="checkbox"]:checked').length > 0;
    $('#btnImprimir').prop('disabled', !anyChecked);
});

$('#btnImprimir').on('click', function () {
    var total = 0;
    var examenesSeleccionados = [];

    $('.checkbox-label input[type="checkbox"]:checked').each(function () {
        var precio = parseFloat($(this).data('value'));
        if (!isNaN(precio) && precio !== 0) {
            var examen = $(this).parent().contents().filter(function () {
                return this.nodeType === 3; // Filtrar nodos de texto
            }).text().trim(); // Obtener el texto del nodo de texto
            examenesSeleccionados.push("<b>" + examen + "</b>" + " - <b>Precio:<b/> $" + precio);
            total += precio;
        }
    });

    var mensaje = "<h1><b>Examenes seleccionados:</b></h1> <br><br>" + examenesSeleccionados.join("<br>");
    if (total > 0) {
        mensaje += "<br><br><b style='font-size: 30px;'>Total:</b> $" + total.toFixed(2) + ""; // Aumenta el tamaño del texto
        mensaje += "<br><b style='font-size: 15px; color: red'>El valor indicado no contiene descuentos y/o promociones.:</b>";
    }

    var printWindow = window.open('', '', 'height=400,width=800');

    // Agregar el logo al contenido impreso (primera posición)
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
    printWindow.document.write(logoHtml); // Agrega el logo al inicio

    // Agregar el mensaje al contenido impreso (segunda posición)
    var mensajeHtml = '<br/> <div style="font-size: 25px; ">' + mensaje + '</div>';
    printWindow.document.write(mensajeHtml); // Agrega el mensaje después del logo
    printWindow.document.close();

    // Imprimir y luego cerrar la ventana emergente
    printWindow.print();
    setTimeout(function () {
        printWindow.close();
    }, 1000); // Cambia el tiempo según sea necesario
});

$('#btnWhatsapp').on('click', function () {
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

    var mensaje = "Saludos, he cotizado desde su página web los siguientes exámenes\n\n" + examenesSeleccionados.join("\n");
    if (total > 0) {
        mensaje += "\n\nTotal: " + total.toFixed(2);
    }
    mensaje += "\n\nMe ayuda con la confirmación. Gracias"
    // Codificar el mensaje para usarlo en la URL
    var encodedMensaje = encodeURIComponent(mensaje);

    // Generar el enlace de WhatsApp con el número y el mensaje
    var whatsappLink = "https://wa.me/593982922239?text=" + encodedMensaje;

    // Abrir el enlace en una nueva ventana
    window.open(whatsappLink, "_blank");
});

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
// Reemplaza 'TU_USER_ID' con tu clave pública de EmailJS
const userID = 'dTY_6DJGYwHUSzal2';
// Reemplaza 'TU_TEMPLATE_ID' con el ID de la plantilla que quieras utilizar
const templateID = 'template_ww8km0k';
document.getElementById('btnEnviar').addEventListener('click', () => {
    const datanombre = document.getElementById('nombre').value;
    const datacorreo = document.getElementById('correo').value;

    if (!datanombre.trim()) {
        Toastify({
            text: "Este campo no puede estar vació",
            duration: 3000,
            close: true, // Muestra el botón de cierre
            gravity: "bottom", // Posición: "top", "center", "bottom"
            stopOnFocus: true, // Detiene el temporizador al hacer clic en el toast
            backgroundColor: "linear-gradient(to right, #5e0210, #cc19be)",
        }).showToast();
        return;
    }

    if (!validateEmail(datacorreo)) {
        Toastify({
            text: "Debe ingresar un correo válido",
            duration: 3000,
            close: true, // Muestra el botón de cierre
            gravity: "bottom", // Posición: "top", "center", "bottom"
            stopOnFocus: true, // Detiene el temporizador al hacer clic en el toast
            backgroundColor: "linear-gradient(to right, #5e0210, #cc19be)",
        }).showToast();
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

    var mensaje = "Saludos. Los exámenes que ha cotizado en la página web son los siguientes \n\n" + examenesSeleccionados.join("\n");
    if (total > 0) {
        mensaje += "\n\nTotal: " + total.toFixed(2);
    }
    mensaje += "\n\nRecuerde que el valor indicado no contiene descuentos y/o promociones, por ende está sujeto a cambios. Gracias"
    var email = datacorreo;
    var nombre = datanombre;

    enviarCorreo(nombre, email, mensaje);

    // Cerrar el modal
    $('#correoModal').modal('hide');
});

// Función para validar el formato de correo electrónico
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const enviarCorreo = async (nombre, email, mensaje) => {

    const data = {
        from_name: 'Centro Clínico Diagnóstica',
        reply_to: 'centerdiagnostica@gmail.com',// responder a
        to_email: email,// quien envía
        to_name: nombre,// nombre de quien envía
        message: mensaje,
        "content-type": "text/html",
    };
    try {
        const response = await emailjs.send('service_suh75ru', templateID, data, userID);
        console.info(response);
        Toastify({
            text: "El correo se envió correctamente.",
            duration: 3000,
            close: true, // Muestra el botón de cierre
            gravity: "bottom", // Posición: "top", "center", "bottom"
            stopOnFocus: true, // Detiene el temporizador al hacer clic en el toast
            backgroundColor: "linear-gradient(to right, #021a5e, #42418a)",
        }).showToast();
    } catch (error) {
        console.error(error);
    }
};
