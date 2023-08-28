// Fetch CSV data
fetch('co2_data.csv')
  .then(response => response.text())
  .then(data => processData(data));

// Process the CSV data
function processData(csvData) {
  const lines = csvData.split('\n');
  const header = lines[0].split(',');
  const data = lines.slice(1).map(line => line.split(','));

  const years = [...new Set(data.map(item => item[0]))];
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const yearSelector = document.getElementById('selDataset');
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelector.appendChild(option);
  });

  yearSelector.addEventListener('change', () => {
    const selectedYear = yearSelector.value;
    const filteredData = data.filter(item => item[0] === selectedYear);

    const avgTrendsByMonth = months.map(month => {
      const monthData = filteredData.filter(item => parseInt(item[1]) === month);
      const trends = monthData.map(item => parseFloat(item[4]));
      const average = trends.reduce((sum, trend) => sum + trend, 0) / trends.length;
      return average;
    });

    createBarChart(months, avgTrendsByMonth);
  });

  yearSelector.dispatchEvent(new Event('change'));

  // Call the function to create the CO2 bar chart
  createCO2BarChart(years, avgTrendsByMonth);
}

// Create the CO2 bar chart using Plotly
function createCO2BarChart(years, avgTrendsByMonth) {
  const co2BarChartContainer = document.getElementById('co2_bar'); // Use the correct ID here

  const trace = {
    x: years,
    y: avgTrendsByMonth,
    type: 'bar',
    marker: {
      color: 'pink'
    }
  };

  const layout = {
    title: 'Average CO2 Levels by Year',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Average CO2 Level'
    }
  };

  Plotly.newPlot(co2BarChartContainer, [trace], layout);
}
