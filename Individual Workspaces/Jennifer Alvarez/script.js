// Create a Leaflet map
const map = L.map('map').setView([38.90, 77.03], 4);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 4,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample data for D3
const data = [30, 70, 45, 60, 20];

// Create an SVG element using D3
const svg = d3.select(map.getPanes().overlayPane).append("svg");
const g = svg.append("g").attr("class", "leaflet-zoom-hide");

// Function to project lat-lon to pixel coordinates
function projectPoint(x, y) {
  const point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

// Create a D3 geo projection
const transform = d3.geoTransform({point: projectPoint});
const path = d3.geoPath().projection(transform);

// Bind data to SVG and create circles
const circles = g.selectAll("circle")
  .data(data)
  .enter().append("circle")
  .attr("r", d => d)
  .style("fill", "blue");

// Update the position of circles on map zoom/pan
map.on("zoomend", update);
update();

// Function to update circle positions
function update() {
  circles.attr("transform", d => {
    const latLng = new L.LatLng(51.505, -0.09); // Sample lat-lon
    return "translate(" + map.latLngToLayerPoint(latLng).x + "," + map.latLngToLayerPoint(latLng).y + ")";
  });
}
