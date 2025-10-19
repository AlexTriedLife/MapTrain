var map = L.map('map').setView([45, -75], 5);
L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '@ OpenStreetMap contributors'
}).addTo(map);

L.Marker([45, -75]).addTo(map).bindPopup('Hello map');
