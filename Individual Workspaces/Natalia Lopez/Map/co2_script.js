// Load CSV file and create bar chart
d3.csv("co2_data.csv").then(function(data) {
  const selYearDropdown = document.getElementById("selYear");

  // Extract years from the data
  const years = [...new Set(data.map(d => +d.year))];

  // Populate the "Select Year" dropdown
  years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    selYearDropdown.appendChild(option);
  });

  // Event listener for the "Select Year" dropdown
  selYearDropdown.addEventListener("change", function() {
    const selectedYear = +this.value;

    // Filter data for the selected year
    const filteredData = data.filter(d => +d.year === selectedYear);

    // Process data to calculate average trend by month
    const monthlyAvg = d3.rollups(
      filteredData,
      v => d3.mean(v, d => +d.trend),
      d => +d.month
    );

    const months = monthlyAvg.map(d => d[0]);
    const avgTrends = monthlyAvg.map(d => d[1]);

    // Create Chart.js bar chart
    const ctx = document.getElementById("barChart").getContext("2d");
    const barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: months,
        datasets: [{
          label: `Average Trend for ${selectedYear}`,
          data: avgTrends,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Average Trend"
            }
          },
          x: {
            title: {
              display: true,
              text: "Month"
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: `Average Trend by Month for ${selectedYear}`
          }
        }
      }
    });
  });
});

