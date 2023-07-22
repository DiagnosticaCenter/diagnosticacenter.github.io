 // Función para inicializar el mapa
 function initMap() {
    // Coordenadas que deseas mostrar (reemplaza las coordenadas con las tuyas)
    var latitud = 40.7128; // Latitud
    var longitud = -74.0060; // Longitud

    // Crear el objeto del mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: latitud, lng: longitud },
      zoom: 15 // Nivel de zoom (1 = Mundo, 15 = Ciudad, 20 = Calle)
    });

    // Agregar un marcador en las coordenadas especificadas
    var marker = new google.maps.Marker({
      position: { lat: latitud, lng: longitud },
      map: map,
      title: 'Ubicación' // Título del marcador (opcional)
    });
  }