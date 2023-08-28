    // Fetch CSV data and create the Plotly line graph
async function fetchCSVAndCreateGraph() {
    const response = await fetch('sea-level-rise-historical.csv'); // Replace with the actual path to your CSV file
    const text = await response.text();

    const rows = text.trim().split('\n');
    const data = rows.map(row => row.split(','));

    const filteredData = data.slice(1).filter(row => {
    const year = parseInt(row[0]);
        return year >= 1880 && year <= 2021;
    });

    const years = filteredData.map(row => row[0]);
    const seaLevelData = filteredData.map(row => parseFloat(row[1]));

    const plotData = [{
        x: years,
        y: seaLevelData,
        type: 'scatter',
        mode: 'lines',
        name: 'CSIRO - Adjusted sea level (cm)'
    }];

    const layout = {
        title: 'Global Historical Rise in Sea Level',
        xaxis: {
            title: 'Year'
        },
        yaxis: {
            title: 'Sea Level Rise (cm)'
        }
    };

    Plotly.newPlot('historicalplot', plotData, layout);
    }

      // Call the function to fetch CSV data and create the graph
fetchCSVAndCreateGraph();