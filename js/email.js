
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
        // Por ejemplo, podrías hacer una llamada AJAX o realizar otras acciones.
        const subject = "Consulta desde página web";
        const body = `${encodeURIComponent(message)}%0A%0AContactar al siguiente correo: ${email}`;
        const recipients = "labdiagnostica@outlook.com,centerdiagnostica@gmail.com";
        const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.open(mailtoLink);
    }
}