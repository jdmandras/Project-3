//// RELATIVE SEA LEVEL RISE PREDICTIONS table
let searchResults = [{
  city: "New York",
  RSL2000: 0,
  RSL2010: 9.444444444,
  RSL2020: 19.94444444,
  RSL2030: 31.66666667,
  RSL2040: 44.88888889,
  RSL2050: 60.38888889,
  RSL2060: 78.61111111,
  RSL2070: 98.16666667, 
  RSL2080: 119.8888889,
  RSL2090: 144.3888889,
  RSL2100: 170.0555556,
  RSL2120: 223.1111111,
  RSL2150: 320.5555556,
  RSL2200: 511.2777778
},
{
  city: "Seattle",
  RSL2000: 0,
  RSL2010: 4.5,
  RSL2020: 10,
  RSL2030: 17.88888889,
  RSL2040: 17.88888889,
  RSL2050: 41.77777778,
  RSL2060: 56.88888889,
  RSL2070: 74.27777778,
  RSL2080: 94.88888889,
  RSL2090: 116.7222222,
  RSL2100: 142.7777778,
  RSL2120: 188.6111111,
  RSL2150: 282.9444444,
  RSL2200: 470.3888889
},
{
  city: "Halifax",
  RSL2000: 0,
  RSL2010: 9.111111111,
  RSL2020: 19.38888889,
  RSL2030: 31.33333333,
  RSL2040: 45.61111111,
  RSL2050: 62,
  RSL2060: 80.27777778,
  RSL2070: 100.0555556,
  RSL2080: 121.6666667,
  RSL2090: 145.6111111,
  RSL2100: 170.2777778,
  RSL2120: 224.1666667,
  RSL2150: 318.8333333,
  RSL2200: 508.7777778
},
{
  city: "Wilmington",
  RSL2000: 0,
  RSL2010: 7.555555556,
  RSL2020: 15.88888889,
  RSL2030: 26.44444444,
  RSL2040: 38.83333333,
  RSL2050: 53.66666667,
  RSL2060: 71.11111111,
  RSL2070: 90.05555556,
  RSL2080: 111.3888889,
  RSL2090: 134.5,
  RSL2100: 160.3333333,
  RSL2120: 207.7222222,
  RSL2150: 305.1666667,
  RSL2200: 496.2222222
},
{
  city: "North Sydney",
  RSL2000: 0,
  RSL2010: 9.722222222,
  RSL2020: 19.88888889,
  RSL2030: 32.11111111,
  RSL2040: 46.72222222,
  RSL2050: 63.72222222,
  RSL2060: 82.66666667,
  RSL2070: 103.4444444,
  RSL2080: 124.7777778,
  RSL2090: 148.6666667,
  RSL2100: 173.4444444,
  RSL2120: 227.1666667,
  RSL2150: 322.3888889,
  RSL2200: 514.3888889
},
{
  city: "Lautoka",
  RSL2000: 0,
  RSL2010: 7.333333333,
  RSL2020: 13.88888889,
  RSL2030: 24.11111111,
  RSL2040: 36.27777778,
  RSL2050: 51.44444444,
  RSL2060: 69.05555556,
  RSL2070: 103.4444444,
  RSL2080: 110.7222222,
  RSL2090: 135.5555556,
  RSL2100: 164.5,
  RSL2120: 214.4444444,
  RSL2150: 314.8333333,
  RSL2200: 525.1666667
},
{
  city: "Tuxpan",
  RSL2000: 0,
  RSL2010: 7.722222222,
  RSL2020: 16.11111111,
  RSL2030: 26.83333333,
  RSL2040: 39.38888889,
  RSL2050: 54.77777778,
  RSL2060: 72.88888889,
  RSL2070: 93,
  RSL2080: 115,
  RSL2090: 140.5,
  RSL2100: 167.1666667,
  RSL2120: 219.5555556,
  RSL2150: 320.6111111,
  RSL2200: 522.3888889
},
{
  city: "Miami Beach",
  RSL2000: 0,
  RSL2010: 7.222222222,
  RSL2020: 15.44444444,
  RSL2030: 25.5,
  RSL2040: 37,
  RSL2050: 51.05555556,
  RSL2060: 68,
  RSL2070: 86.38888889,
  RSL2080: 107.8333333,
  RSL2090: 131.8333333,
  RSL2100: 157.8888889,
  RSL2120: 210.4444444,
  RSL2150: 310,
  RSL2200: 505.3333333
},
{
  city: "Kapingamarangi",
  RSL2000: 0,
  RSL2010: 6.055555556,
  RSL2020: 12,
  RSL2030: 21.27777778,
  RSL2040: 32.88888889,
  RSL2050: 47.72222222,
  RSL2060: 64.88888889,
  RSL2070: 84.16666667,
  RSL2080: 106.7222222,
  RSL2090: 131.2777778,
  RSL2100: 158.2222222,
  RSL2120: 213.0555556,
  RSL2150: 315.1666667,
  RSL2200: 529.1666667
},
{
  city: "Yakutat",
  RSL2000: 0,
  RSL2010: -5.277777778,
  RSL2020: -10.27777778,
  RSL2030: -13.66666667,
  RSL2040: -15.05555556,
  RSL2050: -13.05555556,
  RSL2060: -8.888888889,
  RSL2070: -3.5,
  RSL2080: 5.111111111,
  RSL2090: 14.94444444,
  RSL2100: 30.83333333,
  RSL2120: 58.77777778,
  RSL2150: 117.7777778,
  RSL2200: 251.7777778
},
];


// Define empty lists for each year's values
const cities = [];
const RSL2000Values = [];
const RSL2010Values = [];
const RSL2020Values = [];
const RSL2030Values = [];
const RSL2040Values = [];
const RSL2050Values = [];
const RSL2060Values = [];
const RSL2070Values = [];
const RSL2080Values = [];
const RSL2090Values = [];
const RSL2100Values = [];
const RSL2120Values = [];
const RSL2150Values = [];
const RSL2200Values = [];

// Loop through the searchResults data and populate the lists
for (const result of searchResults) {
  cities.push(result.city);
  RSL2000Values.push(result.RSL2000);
  RSL2010Values.push(result.RSL2010);
  RSL2020Values.push(result.RSL2020);
  RSL2030Values.push(result.RSL2030);
  RSL2040Values.push(result.RSL2040);
  RSL2050Values.push(result.RSL2050);
  RSL2060Values.push(result.RSL2060);
  RSL2070Values.push(result.RSL2070);
  RSL2080Values.push(result.RSL2080);
  RSL2090Values.push(result.RSL2090);
  RSL2100Values.push(result.RSL2100);
  RSL2120Values.push(result.RSL2120);
  RSL2150Values.push(result.RSL2150);
  RSL2200Values.push(result.RSL2200);
}


// define a list for the decades
let decades = [2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100, 2120, 2150, 2200]
let locations = ['Yakutat', 'Kapingamarangi', 'Miami Beach', 'Tuxpan', 'Lautoka', 'North Sydney', 'Wilmington', 'Halifax', 'Seattle', 'New York']



// test your data with a console.log
console.log(RSL2000Values);
console.log(RSL2010Values);
console.log(cities);
console.log(decades);


// Build table layout

const traces = [
  { x: decades, y: RSL2030Values.reverse(), name: 'Yakutat' },
  { x: decades, y: RSL2040Values.reverse(), name: 'Kapingamarangi' },
  { x: decades, y: RSL2050Values.reverse(), name: 'Miami Beach'},
  { x: decades, y: RSL2060Values.reverse(), name: 'Tuxpan'},
  { x: decades, y: RSL2070Values.reverse(), name: 'Lautoka' },
  { x: decades, y: RSL2080Values.reverse(), name: 'North Sydney' },
  { x: decades, y: RSL2090Values.reverse(), name: 'Wilmington' },
  { x: decades, y: RSL2100Values.reverse(), name: 'Halifax' },
  { x: decades, y: RSL2120Values.reverse(), name: 'Seattle' },
  { x: decades, y: RSL2150Values.reverse(), name: 'New York' }
];



// Define layout options
const layout = {
  title: 'Relative Sea Level Rise Predictions',
  xaxis: { title: 'Year' },
  yaxis: { title: 'RSL (cm)' }
};

// Create the plot
Plotly.newPlot('predicplot1', traces, layout);
