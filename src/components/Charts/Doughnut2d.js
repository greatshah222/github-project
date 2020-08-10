// STEP 1 - Include Dependencies
// Include react
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
// this is not ytpe of chart but just default export
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Doughnut2d = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // STEP 2 - Chart Data

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'doughnut2d', // The chart type
    // making chart responsive
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // for captions
        caption: ' Stars Per language',
        // for theme(import the same theme as well)
        theme: 'candy',
        //for decimals(removing decimal)
        decimals: 0,
        // for increasing the pie size inside the container
        doughnutRadius: '45%',
        // removing percent and showing actual number
        showPercentValues: 0,
        // for providing color(provide array of color if there are 2 values to be pronted in piechart provide 2 colors dont provide less)
        // paletteColors: ['#f0db4f', '#FF0000', '#00FF00'],
      },
      // Chart Data
      data: data,
    },
  };
  return (
    <div data-aos='fade-left'>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Doughnut2d;
