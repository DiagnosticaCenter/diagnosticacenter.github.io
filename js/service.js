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
