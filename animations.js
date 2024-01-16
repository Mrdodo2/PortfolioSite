// JavaScript pour les effets visuels

// Fonction pour gérer la lecture automatique au survol des vidéos
function playVideo(videoId) {
    var video = document.getElementById(videoId);
    video.play();
}

function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}

// Fonction pour ajouter une animation de survol aux éléments avec la classe "video-item"
document.addEventListener("DOMContentLoaded", function () {
    var videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', function () {
            item.classList.remove('hovered');
        });
    });
});

// Sélectionnez le lien "Info" avec la classe ajoutée
document.querySelector('.nav-link[href="#info"]').addEventListener('click', function() {
    // Masquez la section principale
    document.querySelector('.main-section').style.display = 'none';
    // Affichez la section "Info"
    document.getElementById('info').style.display = 'block';
});

// Ajoutez un gestionnaire de clic pour revenir à la page principale depuis "Info"
document.getElementById('retourAccueil').addEventListener('click', function() {
    // Affichez la section principale
    document.querySelector('.main-section').style.display = 'block';
    // Masquez la section "Info"
    document.getElementById('info').style.display = 'none';
});
