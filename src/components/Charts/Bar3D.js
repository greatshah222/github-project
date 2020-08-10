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
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Bar3D = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // STEP 2 - Chart Data

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'bar3d', // The chart type
    // making chart responsive
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // for captions
        caption: 'Most Forked',
        // for theme
        theme: 'fusion',
        yAxisName: ' Number of Forks',
        xAxisName: 'Repos Name',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
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

export default Bar3D;
