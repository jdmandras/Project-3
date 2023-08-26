// Function to update charts when dropdown selection is made
function selectionMade(selectedSample) {
  // Load the CSV data using D3
  let thisSample = selectedSample.slice(0, -2);
  d3.csv("Global_Ocean_Temp_Anom.csv").then((data) => {

    // Filter and transform the data
    let sampleData = data.filter(row => row.Year.startsWith(thisSample));

    // Extract relevant columns
    let anomalies = sampleData.map(row => parseFloat(row.Anomaly));
    let years = sampleData.map(row => parseInt(row.Year));
    let months = sampleData.map(row => parseInt(row.Year.slice(-2)) - 1);



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
      x: years, // Use all years for x-axis
      y: anomalies.reverse(), // Reverse the anomalies array to match the new order
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

    
  });
}



// Function to populate the dropdown menu
function populateDropdownMenu() {
  // Load the CSV data using D3
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
}

// Call the function to populate the dropdown menu
populateDropdownMenu();

// Initialize the charts with the first sample data
d3.csv("Global_Ocean_Temp_Anom.csv").then((data) => {
  let initialSample = data.map(row => row.Year)[0];
  selectionMade(initialSample);
});

// Event listener for dropdown menu change
d3.select("#selDataset").on("change", function (e) {
  let selectedSample = e.target.value;
  selectionMade(selectedSample);
});