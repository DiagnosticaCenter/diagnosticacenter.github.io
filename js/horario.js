document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

    var table = document.querySelector(".cal");
    var rows = Array.from(table.querySelectorAll("tr"));

    // Mover las columnas de la tabla para que el día actual sea la segunda columna
    rows.forEach(function(row, rowIndex) {
        var cells = Array.from(row.querySelectorAll("th, td"));
        var dayCell = cells.splice(dayOfWeek, 1)[0]; // Obtener la celda del día actual

        // Reorganizar las celdas en el nuevo orden
        cells.splice(1, 0, dayCell); // Insertar la celda del día actual en la segunda posición

        // Remover todas las celdas de la fila
        cells.forEach(function(cell) {
            row.removeChild(cell);
        });

        // Agregar celdas nuevamente en el nuevo orden
        cells.forEach(function(cell, columnIndex) {
            row.appendChild(cell);

            // Agregar la clase de sombreado al día actual
            if (rowIndex === 0 && columnIndex === 1) {
                cell.classList.add("highlight-th");
            }
            if (rowIndex > 0 && columnIndex === 1) {
                cell.classList.add("highlight");
            }
        });
    });
});
