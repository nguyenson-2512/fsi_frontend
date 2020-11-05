import React from 'react';
import Chart from "chart.js";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

export default class DoughnutChart extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = this.props.data.map((d) => d.label);
      this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: "pie",
        options: {
          maintainAspectRatio: false,
        },
        data: {
          labels: this.props.data.map((d) => d.label),
          datasets: [
            {
              data: this.props.data.map((d) => d.value),
              backgroundColor: this.props.colors,
            },
          ],
        },
      });
    }
  
    render() {
      return <canvas ref={this.canvasRef} />;
    }
  }