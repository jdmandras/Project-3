document.addEventListener("DOMContentLoaded", function () {
    // Load the CO2 data and populate the year dropdown
    fetch('co2_data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const yearSelect = document.getElementById('yearSelect');

            // Extract unique years from the data
            const years = new Set();
            for (let i = 1; i < rows.length; i++) {
                const cols = rows[i].split(',');
                if (cols.length >= 3) { // Ensure proper column index
                    years.add(cols[0]);
                }
            }

            // Populate the year dropdown
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });

            // Initialize chart with default year
            updateChart();
        });
});

function updateChart() {
    const selectedYear = document.getElementById('yearSelect').value;
    
    // Load the CO2 data
    fetch('co2_data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const months = new Map();

            for (let i = 1; i < rows.length; i++) {
                const cols = rows[i].split(',');
                if (cols.length >= 5 && cols[0] === selectedYear) {
                    const month = cols[1];
                    const trend = parseFloat(cols[4]);

                    if (!months.has(month)) {
                        months.set(month, []);
                    }

                    months.get(month).push(trend);
                }
            }

            // Calculate average trend for each month
            const x = Array.from(months.keys());
            const y = x.map(month => {
                const trendValues = months.get(month);
                const averageTrend = trendValues.reduce((sum, value) => sum + value, 0) / trendValues.length;
                return averageTrend;
            });

            // Create the bar chart
            const chartDiv = document.getElementById('chart');
            const data = [{
                x: x,
                y: y,
                type: 'bar',
                marker: {
                    color: 'blue'
                }
            }];

            const layout = {
                title: `Average CO2 Trend in ${selectedYear}`,
                xaxis: {
                    title: 'Month',
                },
                yaxis: {
                    title: 'Average CO2 Trend',
                },
            };

            Plotly.newPlot(chartDiv, data, layout);
        });
}
