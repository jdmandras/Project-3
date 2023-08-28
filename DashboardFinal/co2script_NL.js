document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("co2_data.csv");
  const data = await response.text();
  const rows = data.split("\n").slice(1); // Skip header

  const yearSelect = document.getElementById("yearSelect");
  const ctx = document.getElementById("lineChart").getContext("2d");
  let chart = null;

  const years = new Set();
  rows.forEach(row => {
    const [year, month, day, cycle, trend] = row.split(",");
    years.add(year);
  });

  years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  function updateChart(selectedYear) {
    if (chart) {
      chart.destroy();
    }

    const trendData = rows
      .filter(row => row.startsWith(selectedYear))
      .map(row => {
        const [year, month, day, cycle, trend] = row.split(",");
        return parseFloat(trend);
      });

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: trendData.length }, (_, i) => i + 1),
        datasets: [{
          label: `Trend Data for ${selectedYear}`,
          data: trendData,
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Days"
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Trend"
            }
          }
        }
      }
    });
  }

  yearSelect.addEventListener("change", function () {
    const selectedYear = yearSelect.value;
    updateChart(selectedYear);
  });

  const defaultYear = yearSelect.options[yearSelect.selectedIndex].value;
  updateChart(defaultYear);
});
