// Variable globale contenant l'état du lecteur
let etatLecteur;

function lecteurPret(event) {
   // event.target = lecteur
   event.target.setVolume(50);
}

function changementLecteur(event) {
   // event.data = état du lecteur
   etatLecteur = event.data;
}

let lecteur;

function onYouTubeIframeAPIReady() {
   lecteur = new YT.Player("API_youtube", {
      height: "390",
      width: "640",
      videoId: "CjVqieIWGjM",
      playerVars: {
         color: "white",
         enablejsapi: 1,
         modestbranding: 1,
         rel: 0,
      },
      events: {
         onReady: lecteurPret,
         onStateChange: changementLecteur,
      },
   });
}

// Hauteur de la vidéo
const hauteurVideo = $("#API_youtube").height();
// Position Y de la vidéo
const posYVideo = $("#API_youtube").offset().top;
// Valeur declenchant la modification de l'affichage (choix "esthétique")
const seuil = posYVideo + .5 * hauteurVideo;

// Gestion du défilement
$(window).scroll(function() {
   // Récupération de la valeur du défilement vertical
   const scroll = $(window).scrollTop();

   // Classe permettant l'exécution du CSS
   $("#API_youtube").toggleClass(
      "scroll",
      etatLecteur === YT.PlayerState.PLAYING && scroll > seuil,
   );
});
