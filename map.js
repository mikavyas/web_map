'use strict';

console.log('Loaded map.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibWlrYXZ5YXMiLCJhIjoiY2xoczhzOTUzMHpreTNlbjAweXJ3OWRxMyJ9.W3Lh5-pynBUC4YNHA3vQkg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-85.3232, 49.0467],
    zoom: 14
});

var bounds = [
    [-95.15625, 41.77131], // Southwest coordinates of the bounding box
    [-74.64453, 56.65623] // Northeast coordinates of the bounding box
];

map.setMaxBounds(bounds);

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
    map.addSource('fuel_data', {
        'type': 'geojson',
        'data': './data/alt_fuel_stations.geojson'
    });

    map.addLayer({
        'id': 'Station Name',
        'type': 'circle',
        'source': 'fuel_data',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#349f27',
            'circle-opacity': 0.7
        }
    });
});

// Re-enable dragging inside bounds
map.on('dragend', function () {
    if (map.getCenter().lng < bounds[0][0] || map.getCenter().lng > bounds[1][0] || map.getCenter().lat < bounds[0][1] || map.getCenter().lat > bounds[1][1]) {
        map.panInsideBounds(bounds, { animate: false });
    }
});
