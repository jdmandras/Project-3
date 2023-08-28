var map = L.map('map').setView([data[0].Latitude, data[0].Longitude], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

data.forEach(function(item) {
    var aqiCategory = item['AQI Category'];
    var markerColor;

    if (aqiCategory === 'Good') {
        markerColor = 'green';
    } else if (aqiCategory === 'Moderate') {
        markerColor = 'yellow';
    } else if (aqiCategory === 'Unhealthy for Sensitive Groups') {
        markerColor = 'orange';
    } else {
        markerColor = 'red';
    }

    var marker = L.marker([item.Latitude, item.Longitude], {
        icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + markerColor + '.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(
        "City: " + item.City +
        "<br>Country: " + item.Country +
        "<br>AQI: " + item['AQI Value'] +
        "<br>AQI Category: " + item['AQI Category'] +
        "<br>CO AQI Value: " + item['CO AQI Value'] +
        "<br>AQI CO AQI Category: " + item['CO AQI Category'] +
        "<br>OZone AQI Value: " + item['Ozone AQI Value'] +
        "<br>Ozone AQI Category: " + item['Ozone AQI Category'] +
        "<br>NO2 AQI Value: " + item['NO2 AQI Value'] +
        "<br>NO2 AQI Category: " + item['NO2 AQI Category'] +
        "<br>PM2.5 AQI Category: " + item['PM2.5 AQI Value'] +
        "<br>PM2.5 AQI Category: " + item['PM2.5 AQI Category']
    ).addTo(map);
});