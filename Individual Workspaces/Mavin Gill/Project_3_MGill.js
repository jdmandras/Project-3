// Declare the chart instances object
let chartInstances = {};

// Function to create or update a Chart.js donut chart
function createOrUpdateDonutChart(chartCanvas, data, labels, colors) {
  if (chartInstances[chartCanvas]) {
    chartInstances[chartCanvas].destroy();
  }

  let ctx = document.getElementById(chartCanvas).getContext('2d');
  ctx.canvas.width = 400; // Set the desired width
  ctx.canvas.height = 400; // Set the desired height

  chartInstances[chartCanvas] = new Chart(ctx, {
    type: 'doughnut', // Use 'doughnut' type for a donut chart
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors, // Use the specified array of colors
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });
}


// Function to update charts when dropdown selection is made
function selectionMade(selectedSample, selectedDataset) {
  let thisSample = selectedSample.slice(0, -2);
  let csvFilePath;

  if (selectedDataset === "ocean") {
    csvFilePath = "Global_Ocean_Temp_Anom.csv";
  } else if (selectedDataset === "land") {
    csvFilePath = "Global_Land_Temp_Anom.csv";
  } else if (selectedDataset === "land_ocean") {
    csvFilePath = "Global_Land_OceanTemp_Anom.csv";
  }

  // Load the CSV data using D3
  d3.csv(csvFilePath).then((data) => {

    // Filter and transform the data
    let sampleData = data.filter(row => row.Year.startsWith(thisSample));

    // Extract relevant columns
    let anomalies = sampleData.map(row => parseFloat(row.Anomaly));
    let years = sampleData.map(row => parseInt(row.Year));
    let months = sampleData.map(row => parseInt(row.Year.slice(4)));
    console.log(months)
    // Extract month names or numbers
    let monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Call the function to create or update the donut chart
    let donutData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]; // Example data
    let donutLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    let donutColors = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)'
    ]; // Array of colors

    // Bar chart data
    let selectedBar = [{
      x: months.slice(0, 12), // Display all 12 months
      y: anomalies.slice(0, 12).reverse(),
      orientation: "v",
      type: "bar",
    }];

    // Bar chart layout
    let selectedBarLayout = {
      title: `Year ${years[0].toString().slice(0, -2)}`,
      showlegend: false,
      xaxis: { title: "Month" },
      yaxis: { title: "Anomaly by °C" },
    };

    // Create the bar chart
    Plotly.newPlot("bar", selectedBar, selectedBarLayout);


    // Define 'size' array with smaller values
    let sizeArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]; 

    // Function to format tick labels
    function customTickFormat(year) {
      const yearString = year.toString();
      return `${yearString.slice(0, 4)}, ${yearString.slice(4, 6)}`;
    }

    // Generate tick values for all 12 months
    let tickValues = years;

    // Generate corresponding tick labels
    let tickLabels = tickValues.map(customTickFormat);

    // Bubble chart data
    let selectedBubble = [{
      x: years.slice(0, 12), // Use all years for x-axis
      y: anomalies.slice(0, 12).reverse(), // Reverse the anomalies array to match the new order
      mode: 'markers',
      marker: {
        size: sizeArray,
        color: years,
      },
      text: anomalies,
    }];
    
    
    // Bubble chart layout
    let selectedBubbleLayout = {
      title: "Monthly Anomalies",
      showlegend: false,
      xaxis: {
        title: "Month",
        tickvals: tickValues,
        ticktext: tickLabels,
      },
      yaxis: {
        title: "Anomaly by °C",
      },
    };

    // Create the bubble plot
    Plotly.newPlot("bubble", selectedBubble, selectedBubbleLayout);



    // Create or update Chart.js donut chart
    createOrUpdateDonutChart("chartjs-donut", anomalies.slice(0, 12).reverse(), monthLabels);
    

  });
}


// Function to populate the dropdown menu and dataset selector
function populateDropdownMenu() {
  // Load the CSV data using D3 for the year selection dropdown
  d3.csv("Global_Ocean_Temp_Anom.csv").then((data) => {
    let dropdown = d3.select("#selDataset");
    let years = data.map(row => parseInt(row.Year));

    dropdown.selectAll("option")
      .data(years)
      .enter()
      .append("option")
      .text(d => d)
      .property("value", d => d);
  });

  // Load the CSV data using D3 for the dataset selection dropdown
  let datasetDropdown = d3.select("#datasetSelector");
  let datasetOptions = ["ocean", "land", "land_ocean"]; // Add more options as needed

  datasetDropdown.selectAll("option")
    .data(datasetOptions)
    .enter()
    .append("option")
    .text(d => d)
    .property("value", d => d);
}

// Call the function to populate the dropdown menus
populateDropdownMenu();

// Event listener for dataset selector change
d3.select("#datasetSelector").on("change", function (e) {
  let selectedDataset = e.target.value;
  let selectedSample = d3.select("#selDataset").property("value");
  selectionMade(selectedSample, selectedDataset);
});

// Event listener for dropdown menu change
d3.select("#selDataset").on("change", function (e) {
  let selectedSample = e.target.value;
  let selectedDataset = d3.select("#datasetSelector").property("value");
  selectionMade(selectedSample, selectedDataset);
});









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