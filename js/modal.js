
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
                          <h1>Si eres médico, esta información podría interesarte</h1>                       
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
                        <h1>Si tienes un negocio, esta información podría interesarte.</h1>
                        <!-- Botones y contenido adicional del contenido 2 -->
                    </div>
                </div>
            `;
    }
    else if (contentId === 'content3') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-consultorio.jpg" alt="Alquiler de consultorio." class="img-fluid">
                    </div>
                    <div class="col-md-3">
                        <h1>Si eres médico, esta información podría interesarte</h1>
                        <!-- Botones y contenido adicional del contenido 2 -->
                    </div>
                </div>
            `;
    }
    else if (contentId === 'content4') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-ecografia.jpg" alt="Ecografía" class="img-fluid">
                    </div>
                    <div class="col-md-3">
                        <h1>Ecografía</h1>
                        <!-- Botones y contenido adicional del contenido 2 -->
                    </div>
                </div>
            `;
    }
    else if (contentId === 'content5') {
        dynamicContent = `
                <div class="row">
                    <div class="col-md-9">
                        <img src="images/promo-farmacia.jpg" alt="Farmacia" class="img-fluid">
                    </div>
                    <div class="col-md-3">
                        <h1>Farmacia.</h1>
                        <!-- Botones y contenido adicional del contenido 2 -->
                    </div>
                </div>
            `;
    }

    $('#dynamicContent').html(dynamicContent);
});