window.onload = function() {
    // inicializamos el mapa en el div "mapid" en las coordenadas dadas y a zoom 13
 var map = L.map('map').setView([40.91, -96.63], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var searchControl = L.esri.Geocoding.geosearch().addTo(map);

  var results = L.layerGroup().addTo(map);

  searchControl.on('results', function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });
  var popup = L.popup();
   function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("Has clicado el mapa en " + e.latlng.toString())
        .openOn(map);
    }
    // aqui relacionamos el evento click con la funcion que acabamos de crear
    map.on('click', onMapClick);
}


