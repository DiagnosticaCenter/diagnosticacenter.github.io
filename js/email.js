//MAIL
//https://dashboard.emailjs.com/admin
// Reemplaza 'TU_USER_ID' con tu clave pública de EmailJS
const userID = 'dTY_6DJGYwHUSzal2';
// Reemplaza 'TU_TEMPLATE_ID' con el ID de la plantilla que quieras utilizar
const templateID = 'template_ww8km0k';

function validateAndSubmit() {
    const emailInput = document.getElementById("emailInput");
    const emailWarning = document.getElementById("emailWarning");
    const messageInput = document.getElementById("messageInput");
    const messageWarning = document.getElementById("messageWarning");
    const submitButton = document.getElementById("submitButton");

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const words = message.split(/\s+/).filter(word => word !== "");

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isMessageValid = words.length >= 3;

    emailWarning.style.display = isEmailValid ? "none" : "block";
    messageWarning.style.display = isMessageValid ? "none" : "block";

    if (isEmailValid && isMessageValid) {
        // Aquí puedes agregar la lógica para enviar el formulario
        const subject = "Consulta desde página web";
        const body = `${(message)}\nContactar al siguiente correo: ${email}`;
        const recipients = "labdiagnostica@outlook.com,centerdiagnostica@gmail.com";
        const mailtoLink = `mailto:${recipients}?subject=${(subject)}&body=${body}`;
        // window.open(mailtoLink);
        enviarCorreo(subject, 'Centro Clínico Diagnóstica', email, recipients, '', email, body);
        emailInput.value = '';
        messageInput.value = '';

    }
}

const enviarCorreo = async (to_subject, from_name, reply_to, to_email, to_name, to_cc, message) => {

    const data = {
        to_subject: to_subject,
        from_name: from_name,
        reply_to: reply_to,// responder a
        to_email: to_email,// quien envía
        to_name: to_name,// nombre de quien envía,
        to_cc: to_cc,
        message: message,
        "content-type": "text/html",
    };
    try {
        const response = await emailjs.send('service_suh75ru', templateID, data, userID);
        console.info(response);
        if (response.status === 200) {
            sendToastify("Se ha enviado correctamente.", 3000,
                true, "bottom", true,
                "linear-gradient(to right, #021a5e, #42418a)");
        } else {
            sendToastify("No sé pudo enviar, intente otra forma.", 3000,
                true, "bottom", true,
                "linear-gradient(to right, #5e0210, #cc19be)");
        }
    } catch (error) {
        // sendToastify("Error al enviar, intente otra forma.", 3000,
        //     true, "bottom", true,
        //     "linear-gradient(to right, #5e0210, #cc19be)");
        // console.error(error);
    }
};

function sendToastify(text, duration, tfclose, gravity, stopOnFocus, backgroundColor) {
    Toastify({
        text: text,
        duration: duration,
        close: tfclose, // Muestra el botón de cierre
        gravity: gravity, // Posición: "top", "center", "bottom"
        stopOnFocus: stopOnFocus, // Detiene el temporizador al hacer clic en el toast
        backgroundColor: backgroundColor,
    }).showToast();
}
