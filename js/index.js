document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.vid');

    videos.forEach(function (video) {
        video.addEventListener('loadedmetadata', function () {
            video.currentTime = 0.5; // Establecer el tiempo de inicio en 1 segundos para cada video
        });
    });
});