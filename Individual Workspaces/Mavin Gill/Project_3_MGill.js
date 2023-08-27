// Declare the chart instances object
let chartInstances = {};

// Function to create or update a Chart.js donut chart
function createOrUpdateDonutChart(chartCanvas, data, labels) {
  if (chartInstances[chartCanvas]) {
    chartInstances[chartCanvas].destroy();
  }

  let ctx = document.getElementById(chartCanvas).getContext('2d');
  chartInstances[chartCanvas] = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // Add more colors as needed
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          // Add more colors as needed
        ],
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
    let months = sampleData.map(row => parseInt(row.Year.slice(-2)) - 1);
    // Extract month names or numbers
    let monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


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




    // Define your 'size' array with appropriate values
    let sizeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

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
