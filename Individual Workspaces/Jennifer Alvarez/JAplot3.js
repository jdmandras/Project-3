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
        },
        annotations: [
            {
                x: 1883,
                y: 0.5, // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                y: seaLevelData[years.indexOf('1883')], 
                text: "Krakatoa Volcano Eruption",
                showarrow: true,
                arrowhead: 2,
                ax: 50,
                ay: -40
            },
            // {
            //     x: 1903,
            //     y: 0.5, // Adjust the y-coordinate of the callout as needed
            //     xref: 'x',
            //     y: seaLevelData[years.indexOf('1903')], 
            //     text: "Ford Motor Company Formed",
            //     showarrow: true,
            //     arrowhead: 2,
            //     ax: 0,
            //     ay: -40
            // },
            {
                x: 1914,
                y: 0.5, // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                y: seaLevelData[years.indexOf('1914')], 
                text: "World War I begins",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -40
            },
            {
                x: 1918,
                y: 0.5, // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                y: seaLevelData[years.indexOf('1918')], 
                text: "Spanish Flu Pandemic begins",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: 40
            },
            {
                x: 1929,
                y: seaLevelData[years.indexOf('1929')], // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                yref: 'y',
                text: "The Great Depression begins",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -40
            },
            {
                x: 1939,
                y: seaLevelData[years.indexOf('1939')], // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                yref: 'y',
                text: "World War II begins",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -40
            },
            {
                x: 1945,
                y: seaLevelData[years.indexOf('1945')], // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                yref: 'y',
                text: "Atomic bombings of Hiroshima and Nagasaki",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: 40
            },
            {
                x: 1955,
                y: seaLevelData[years.indexOf('1955')], // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                yref: 'y',
                text: "Vietnam War begins",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -40
            },
            {
                x: 1986,
                y: seaLevelData[years.indexOf('1986')], // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                yref: 'y',
                text: "Chernobyl Nuclean Disaster",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -40
            },
            {
                x: 2003,
                y: seaLevelData[years.indexOf('2003')], // Adjust the y-coordinate of the callout as needed
                xref: 'x',
                yref: 'y',
                text: "9/11 New York Terrorist Attacks",
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -40
            },
        ]
    };

    Plotly.newPlot('historicalplot', plotData, layout);
    }

      // Call the function to fetch CSV data and create the graph
fetchCSVAndCreateGraph();