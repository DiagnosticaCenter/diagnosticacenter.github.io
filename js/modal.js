$('#largeModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var contentId = button.data('content');

    var dynamicContent = '';
    if (contentId === 'content1') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-medico.jpg" alt="Convenio con médicos." class="img-fluid">
                    </div>
                    <div class="col-md-3">
                    <div class="div-span-center">
                       <span class="span-modal" >SÍ QUIERES MÁS INFORMACIÓN
                       ENVÍANOS TUS DATOS
                       </span>                
                    </div>
                     <br/>       
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label label-modal" >Nombre y Apellido:</label>
                <input type="text" class="form-control text-modal" id="nombre" name="nombre" required>
                <label id="nameWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label label-modal">Correo Electrónico:</label>
                <input type="email" class="form-control text-modal" id="email" name="email" required>
                  <label id="email2Warning" class="warning" style="display: none;">Correo electrónico válido.</label>

            </div>
            <div class="mb-3">
                <label for="phone" class="form-label label-modal">Télefono:</label>
                <input type="tel" class="form-control text-modal" id="phone" name="phone" required>
                <label id="phoneWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label label-modal">Mensaje:</label>
                <textarea class="form-control text-modal" id="mensaje" name="mensaje" rows="2" required></textarea>
                <label id="mensajeWarning" class="warning" style="display: none;">El mensaje debe tener al
                    menos 3 palabras.</label>
            </div>         
            <br/>
<!--             <label id="alertWarning" class="warning" style="display: none;">-->
<!--             Faltan datos por completar, o hay infomación incorrecta.-->
<!--             </label>-->
             <button type="button" class="btn btn-primary btn-modal text-white" 
             onclick="enviarMotivo('Convenio médico', 'email', 'laboratorio')">
                Enviar Correo 
             <i class="fas fa-envelope"></i></button>
            <button type="button"  class="btn btn-success btn-modal text-white" 
            onclick="enviarMotivo('Convenio médico', 'whatsapp', 'laboratorio')">
                Enviar WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
        </form>
                    </div>
                </div>
            `;
    } else if (contentId === 'content2') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-corporativo.jpg" alt="Convenio corporativo." class="img-fluid">
                    </div>
       <div class="col-md-3">
                    <div class="div-span-center">
                       <span class="span-modal" >SÍ QUIERES MÁS INFORMACIÓN
                       ENVÍANOS TUS DATOS
                       </span>                
                    </div>
                     <br/>       
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label label-modal" >Nombre y Apellido:</label>
                <input type="text" class="form-control text-modal" id="nombre" name="nombre" required>
                <label id="nameWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label label-modal">Correo Electrónico:</label>
                <input type="email" class="form-control text-modal" id="email" name="email" required>
                  <label id="email2Warning" class="warning" style="display: none;">Correo electrónico válido.</label>

            </div>
            <div class="mb-3">
                <label for="phone" class="form-label label-modal">Télefono:</label>
                <input type="tel" class="form-control text-modal" id="phone" name="phone" required>
                <label id="phoneWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label label-modal">Mensaje:</label>
                <textarea class="form-control text-modal" id="mensaje" name="mensaje" rows="2" required></textarea>
                <label id="mensajeWarning" class="warning" style="display: none;">El mensaje debe tener al
                    menos 3 palabras.</label>
            </div>         
            <br/>
<!--             <label id="alertWarning" class="warning" style="display: none;">-->
<!--             Faltan datos por completar, o hay infomación incorrecta.-->
<!--             </label>-->
             <button type="button" class="btn btn-primary btn-modal text-white" 
             onclick="enviarMotivo('Convenio corporativo', 'email', 'laboratorio')">
                Enviar Correo 
             <i class="fas fa-envelope"></i></button>
            <button type="button"  class="btn btn-success btn-modal text-white" 
            onclick="enviarMotivo('Convenio corporativo', 'whatsapp', 'laboratorio')">
                Enviar WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
        </form>
                    </div>
                </div>
            `;
    } else if (contentId === 'content3') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-consultorio.jpg" alt="Alquiler de consultorio." class="img-fluid">
                    </div>
    <div class="col-md-3">
                    <div class="div-span-center">
                       <span class="span-modal" >SÍ QUIERES MÁS INFORMACIÓN
                       ENVÍANOS TUS DATOS
                       </span>                
                    </div>
                     <br/>       
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label label-modal" >Nombre y Apellido:</label>
                <input type="text" class="form-control text-modal" id="nombre" name="nombre" required>
                <label id="nameWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label label-modal">Correo Electrónico:</label>
                <input type="email" class="form-control text-modal" id="email" name="email" required>
                  <label id="email2Warning" class="warning" style="display: none;">Correo electrónico válido.</label>

            </div>
            <div class="mb-3">
                <label for="phone" class="form-label label-modal">Télefono:</label>
                <input type="tel" class="form-control text-modal" id="phone" name="phone" required>
                <label id="phoneWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label label-modal">Mensaje:</label>
                <textarea class="form-control text-modal" id="mensaje" name="mensaje" rows="2" required></textarea>
                <label id="mensajeWarning" class="warning" style="display: none;">El mensaje debe tener al
                    menos 3 palabras.</label>
            </div>         
            <br/>
<!--             <label id="alertWarning" class="warning" style="display: none;">-->
<!--             Faltan datos por completar, o hay infomación incorrecta.-->
<!--             </label>-->
             <button type="button" class="btn btn-primary btn-modal text-white" 
             onclick="enviarMotivo('Alquiler de consultorio', 'email', 'laboratorio')">
                Enviar Correo 
             <i class="fas fa-envelope"></i></button>
            <button type="button"  class="btn btn-success btn-modal text-white" 
            onclick="enviarMotivo('Alquiler de consultorio', 'whatsapp', 'laboratorio')">
                Enviar WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
        </form>
                    </div>
                </div>
            `;
    } else if (contentId === 'content4') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-ecografia.jpg" alt="Ecografía" class="img-fluid">
                    </div>
    <div class="col-md-3">
                    <div class="div-span-center">
                       <span class="span-modal" >SÍ QUIERES MÁS INFORMACIÓN
                       ENVÍANOS TUS DATOS
                       </span>                
                    </div>
                     <br/>       
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label label-modal" >Nombre y Apellido:</label>
                <input type="text" class="form-control text-modal" id="nombre" name="nombre" required>
                <label id="nameWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label label-modal">Correo Electrónico:</label>
                <input type="email" class="form-control text-modal" id="email" name="email" required>
                  <label id="email2Warning" class="warning" style="display: none;">Correo electrónico válido.</label>

            </div>
            <div class="mb-3">
                <label for="phone" class="form-label label-modal">Télefono:</label>
                <input type="tel" class="form-control text-modal" id="phone" name="phone" required>
                <label id="phoneWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label label-modal">Mensaje:</label>
                <textarea class="form-control text-modal" id="mensaje" name="mensaje" rows="2" required></textarea>
                <label id="mensajeWarning" class="warning" style="display: none;">El mensaje debe tener al
                    menos 3 palabras.</label>
            </div>         
            <br/>
<!--             <label id="alertWarning" class="warning" style="display: none;">-->
<!--             Faltan datos por completar, o hay infomación incorrecta.-->
<!--             </label>-->
             <button type="button" class="btn btn-primary btn-modal text-white" 
             onclick="enviarMotivo('Ecografía', 'email', 'laboratorio')">
                Enviar Correo 
             <i class="fas fa-envelope"></i></button>
            <button type="button"  class="btn btn-success btn-modal text-white" 
            onclick="enviarMotivo('Ecografía', 'whatsapp', 'laboratorio')">
                Enviar WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
        </form>
                    </div>
                </div>
            `;
    } else if (contentId === 'content5') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-farmacia.jpg" alt="Farmacia" class="img-fluid">
                    </div>
    <div class="col-md-3">
                    <div class="div-span-center">
                       <span class="span-modal" >SÍ QUIERES MÁS INFORMACIÓN
                       ENVÍANOS TUS DATOS
                       </span>                
                    </div>
                     <br/>       
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label label-modal" >Nombre y Apellido:</label>
                <input type="text" class="form-control text-modal" id="nombre" name="nombre" required>
                <label id="nameWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label label-modal">Correo Electrónico:</label>
                <input type="email" class="form-control text-modal" id="email" name="email" required>
                  <label id="email2Warning" class="warning" style="display: none;">Correo electrónico válido.</label>

            </div>
            <div class="mb-3">
                <label for="phone" class="form-label label-modal">Télefono:</label>
                <input type="tel" class="form-control text-modal" id="phone" name="phone" required>
                <label id="phoneWarning" class="warning" style="display: none;">Esta información es requerida.</label>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label label-modal">Mensaje:</label>
                <textarea class="form-control text-modal" id="mensaje" name="mensaje" rows="2" required></textarea>
                <label id="mensajeWarning" class="warning" style="display: none;">El mensaje debe tener al
                    menos 3 palabras.</label>
            </div>         
            <br/>
<!--             <label id="alertWarning" class="warning" style="display: none;">-->
<!--             Faltan datos por completar, o hay infomación incorrecta.-->
<!--             </label>-->
             <button type="button" class="btn btn-primary btn-modal text-white" 
             onclick="enviarMotivo('Farmacia', 'email', 'farmacia')">
                Enviar Correo 
             <i class="fas fa-envelope"></i></button>
            <button type="button"  class="btn btn-success btn-modal text-white" 
            onclick="enviarMotivo('Farmacia', 'whatsapp', 'farmacia')">
                Enviar WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
        </form>
                    </div>
                </div>
            `;
    }

    $('#dynamicContent').html(dynamicContent);
});

function enviarMotivo(motivoConsulta, redSocial, departamento) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const motivo = motivoConsulta.trim();

    const nameWarning = document.getElementById("nameWarning");
    const email2Warning = document.getElementById("email2Warning");
    const phoneWarning = document.getElementById("phoneWarning");
    const mensajeWarning = document.getElementById("mensajeWarning");

    const isNameValid = nombre.length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneValid = telefono.length > 0;
    const words = mensaje.split(/\s+/).filter(word => word !== "");
    const isMessageValid = words.length >= 3;

    nameWarning.style.display = isNameValid ? "none" : "block";
    email2Warning.style.display = isEmailValid ? "none" : "block";
    phoneWarning.style.display = isPhoneValid ? "none" : "block";
    mensajeWarning.style.display = isMessageValid ? "none" : "block";
    // alertWarning.style.display = isPhoneValid ? "none" : "block";
    let numeroDepartamento = "";
    let recipients = "";

    if (departamento === 'laboratorio') {
        numeroDepartamento = "593982922239";
        recipients = "labdiagnostica@outlook.com,centerdiagnostica@gmail.com";

    } else if (departamento === 'farmacia') {
        numeroDepartamento = "593978900409";
        recipients = "fr_hospitalsagradocorazondejesus@sanasanafr.com,geovannybricex@hotmail.com";

    }

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        // Aquí puedes agregar la lógica para enviar el formulario
        if (redSocial === 'email') {
            const subject = `Consulta de ${motivo}`;
            const body = `Saludos soy ${nombre}, estoy interesado en obtener más información sobre el ${motivo}. %0A%0A${encodeURIComponent(mensaje)}%0A%0ADatos de contacto: ${email}%0A${telefono}`;
            // const recipients = "labdiagnostica@outlook.com,centerdiagnostica@gmail.com";
            const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${body}`;
            window.open(mailtoLink, '_blank');
        } else if (redSocial === 'whatsapp') {
            const subject = `Saludos soy ${nombre}, estoy interesado en obtener más información sobre el asunto de ${motivo}.`;
            const body = `${(mensaje)}`;
            const contact = `Datos de contacto: ${email} - ${telefono}`;

            const mensajeWhatsapp = `${encodeURIComponent(subject)}%0A%0A${encodeURIComponent(body)}%0A%0A${encodeURIComponent(contact)}`;
            const whatsappLink = `https://api.whatsapp.com/send?phone=${numeroDepartamento}&text=${mensajeWhatsapp}`;

            window.open(whatsappLink, '_blank');
        }
    }
}