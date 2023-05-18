'use strict'  // execute in strict mode

console.log("Loaded map.js")

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrYXZ5YXMiLCJhIjoiY2xoczhzOTUzMHpreTNlbjAweXJ3OWRxMyJ9.W3Lh5-pynBUC4YNHA3vQkg'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.93324, 40.80877],
    zoom: 14
});
