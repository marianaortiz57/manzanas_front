var map = L.map('map').setView([5.0537759,-75.4994695], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 50,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var appleIcon = L.icon({
    iconUrl: '../imagenes/icon_apple.png',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([5.0537759,-75.4994695], {icon: appleIcon}).addTo(map).bindPopup("Sede Manizales, servicios: Jardín, lavandería, almuerzo comunitario");;
L.marker([5.0538828,-75.4988076], {icon: appleIcon}).addTo(map).bindPopup("Sede Manizales, servicios: Enfermería, orientación legal");;
