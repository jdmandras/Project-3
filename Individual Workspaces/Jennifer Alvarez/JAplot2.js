//// last code using greek names example
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


// For cummulative table
// Create an array to store the cumulative values for each year
// const cumulativeValues = [];

// // Loop through each city's data
// for (const result of searchResults) {
//   const cumulativeData = {
//     city: result.city,
//     CummuRSL2000: result.RSL2000,
//     CummuRSL2010: result.RSL2000 + result.RSL2010,
//     CummuRSL2020: result.RSL2000 + result.RSL2010 + result.RSL2020,
//     CummuRSL2030: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030,
//     CummuRSL2040: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040,
//     CummuRSL2050: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050,
//     CummuRSL2060: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060,
//     CummuRSL2070: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070,
//     CummuRSL2080: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070 + result.RSL2080,
//     CummuRSL2090: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070 + result.RSL2080 + result.RSL2090,
//     CummuRSL2100: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070 + result.RSL2080 + result.RSL2090 + result.RSL2100,
//     CummuRSL2120: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070 + result.RSL2080 + result.RSL2090 + result.RSL2100 + result.RSL2120,
//     CummuRSL2150: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070 + result.RSL2080 + result.RSL2090 + result.RSL2100 + result.RSL2120 + result.RSL2150,
//     CummuRSL2200: result.RSL2000 + result.RSL2010 + result.RSL2020 + result.RSL2030 + result.RSL2040 + result.RSL2050 + result.RSL2060 + result.RSL2070 + result.RSL2080 + result.RSL2090 + result.RSL2100 + result.RSL2120 + result.RSL2150 + result.RSL2200
//   };

// }





// define a list for the decades
let decades = [2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100, 2120, 2150, 2200]


// // test your data with a console.log
// console.log(RSL2000Values);
// console.log(RSL2010Values);
// console.log(cities);
// console.log(decades);
console.log(CummuRSL2150)


// Build table layout

const traces = [
  { x: decades, y: CummuRSL2030, name: 'New York' },
  { x: decades, y: CummuRSL2040, name: 'Seattle' },
  { x: decades, y: CummuRSL2050, name: 'Halifax' },
  { x: decades, y: CummuRSL2060, name: 'Wilmington' },
  { x: decades, y: CummuRSL2070, name: 'North Sydney' },
  { x: decades, y: CummuRSL2080, name: 'Lautoka' },
  { x: decades, y: CummuRSL2090, name: 'Tuxpan' },
  { x: decades, y: CummuRSL2100, name: 'Miami Beach' },
  { x: decades, y: CummuRSL2120, name: 'Kapingamarangi' },
  { x: decades, y: CummuRSL2150, name: 'Yakutat' }
];



// Define layout options
const layout = {
  title: 'Cummulative Sea Level Rise Predictions',
  xaxis: { title: 'Year' },
  yaxis: { title: 'RSL (cm)' }
};

// Create the plot
Plotly.newPlot('predicplot2', traces, layout);
