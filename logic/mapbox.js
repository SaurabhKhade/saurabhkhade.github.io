mapboxgl.accessToken = 'XXXX XXXX XXXX';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 5
});

let marker = new mapboxgl.Marker()
.setLngLat([74.371027, 15.976736])
.addTo(map);
map.setCenter( [74.371027, 15.976736]);