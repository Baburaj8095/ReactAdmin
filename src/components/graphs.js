// import React from 'react';
// import Chartist from "react-chartist";
// import ChartistTooltip from 'chartist-plugin-tooltips-updated';
// import ReactDOM from 'react-dom';
// import ChartistGraph from 'react-chartist';
// import './graph.css';
// import {
//   Badge,
//   Button,
//   Card,
//   Navbar,
//   Nav,
//   Table,
//   Container,
//   Row,
//   Col,
//   Form,
//   OverlayTrigger,
//   Tooltip,
// } from "react-bootstrap";


// const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     series: [[1, 2, 2, 3, 3, 4, 3]]
//   };

//   var options = {
//     low: 0,
//     showArea: true,
//     fullWidth: false,
//     axisX: {
//       position: 'end',
//       showGrid: true
//     },
//     axisY: {
//       // On the y-axis start means left and end means right
//       showGrid: false,
//       showLabel: false,
//       labelInterpolationFnc: value => `$${value / 1}k`
//     }
//   };

//   const plugins = [
//     ChartistTooltip()
//   ]


// const VerticalBar = () => (
//   <>

// <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-major-tenth" />

//   </>
// );

// export default VerticalBar;