// Appelée si récupération des coordonnées réussie
function positionSucces(position) {
  // Récupérations des coordonnées du navigateur
  // Injection du résultat dans du texte
  const lat = Math.round(1000 * position.coords.latitude) / 1000;
  const long = Math.round(1000 * position.coords.longitude) / 1000;
  // Injections des latitudes et longitudes dans une variable Coordonnées Navigateur
  const cooN = [lat, long];

  // Carte
  const map = L.map('API_leaflet').setView(cooN, 12);
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 15
  }).addTo(map);

  for (let i = 0; i < geojsonFeature.features.length; i++) {
    // Récupération cinémas geoJSON
    let cinema = geojsonFeature.features[i];
    // Récupération des coordonnées des cinémas
    let cooC = {
      lat: cinema.geometry.coordinates[1],
      long: cinema.geometry.coordinates[0]
    }
    // En France, 1° de longitude/latitude correspond à environ 80km
    // Ainsi, une marge de 0.375° correspond à un rayon de 30km autour du cinema
    if (cooN[0] - 0.375 < cooC.lat < cooN[0] + 0.375 && cooN[1] - 0.375 < cooC.long < cooN[1] + 0.375) {
      const marker = L.marker([cooC.lat, cooC.long]);
      marker.addTo(map);
      marker.bindPopup(cinema.properties.NOM_ETABLISSEMENT);
    }
  }
}

// Appelée si échec de récuparation des coordonnées
function positionErreur(erreurPosition) {
  // Cas d'usage du switch !
  let natureErreur;
  switch (erreurPosition.code) {
    case erreurPosition.TIMEOUT:
      // Attention, durée par défaut de récupération des coordonnées infini
      natureErreur = "La géolocalisation prends trop de temps...";
      break;
    case erreurPosition.PERMISSION_DENIED:
      natureErreur = "Vous n'avez pas autorisé la géolocalisation.";
      break;
    case erreurPosition.POSITION_UNAVAILABLE:
      natureErreur = "Votre position n'a pu être déterminée.";
      break;
    default:
      natureErreur = "Une erreur inattendue s'est produite.";
  }
  // Injection du texte
  $("p").text(natureErreur);
}

// Récupération des coordonnées au clic sur le bouton
$("#loca").click(function () {
  // Support de la géolocalisation
  if ("geolocation" in navigator) {
    // Support = exécution du callback selon le résultat
    navigator.geolocation.getCurrentPosition(positionSucces, positionErreur, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 30000
    });
  } else {
    // Non support = injection de texte
    $("p").text("La géolocalisation n'est pas supportée par votre navigateur");
  }
});