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

const Column3D = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // STEP 2 - Chart Data

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'column3d', // The chart type
    // making chart responsive
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        theme: 'candy',
        // for captions
        caption: 'Most Popular Repos',
        yAxisName: ' Number of Stars',
        xAxisName: 'Repos Name',
        xAxisNameFontSize: '10px',
        yAxisNameFontSize: '16px',
        xAxisNameFontBold: '1',
      },
      // Chart Data
      data: data,
    },
  };
  return (
    <div data-aos='fade-right'>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Column3D;
