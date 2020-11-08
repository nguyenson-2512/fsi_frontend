import React from "react";
import Header from "./Header";
import "../App.css";

import Chart from "chart.js";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import axios from "axios";

import Statistics from "./statistics/Statistics";

import DoughnutChart from "./Charts/DoughnutChart";
import Doughnut from "./Charts/Doughnut";

import CommentList from "./CommentList";

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let data = [];
  for (var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random()),
    });
  }
  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date("2018-05-01T00:00:00").getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for (var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 180 * Math.random()),
    });
  }
  return data;
}

function getData() {
  let data = [];

  data.push({
    title: "Visits",
    data: getRandomDateArray(50),
  });

  data.push({
    title: "Categories",
    data: getRandomArray(20),
  });

  data.push({
    title: "Categories",
    data: getRandomArray(10),
  });

  data.push({
    title: "Data 4",
    data: getRandomArray(6),
  });

  return data;
}
class BarChart extends React.Component {
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
      type: "bar",
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
              },
            },
          ],
        },
      },
      data: {
        labels: this.props.data.map((d) => d.label),
        datasets: [
          {
            label: this.props.title,
            data: this.props.data.map((d) => d.value),
            backgroundColor: this.props.color,
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class MultiLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "month",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
      },
      data: {
        labels: this.props.data1.map((d) => d.time),
        datasets: [
          {
            data: this.props.data1.map((d) => d.value),
            label: "Positive",
            borderColor: "green",
            fill: false,
          },
          {
            data: this.props.data2.map((d) => d.value),
            label: "Negative",
            borderColor: "red",
            fill: false,
          },
        ],
      },
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

// // LineChart
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map((d) => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
      },
      data: {
        labels: this.props.data.map((d) => d.time),
        datasets: [
          {
            label: this.props.title,
            data: this.props.data.map((d) => d.value),
            fill: "none",
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0,
          },
        ],
      },
    });
  }

  render() {
    return <canvas style={{ height: "300px" }} ref={this.canvasRef} />;
  }
}

class HorizontalBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "horizontalBar",

      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
      },
      data: {
        labels: ["Good", "Bad", "Nice", "Noice"],
        datasets: [
          {
            label: "Lượng đề cập",
            backgroundColor: ["#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

class GroupBar extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",

      options: {
        title: {
          display: true,
          text: "Thong ke nam nu theo do tuoi",
        },
      },
      data: {
        labels: ["10-20", "21-30", "31-40", ">40"],
        datasets: [
          {
            label: "Male",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 2478],
          },
          {
            label: "Female",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734],
          },
        ],
      },
    });
  }

  render() {
    return <canvas style={{ marginTop: "20px" }} ref={this.canvasRef} />;
  }
}

export default class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData(),
      positive: 0,
      negative: 0,
      neutral: 0,
    };
  }

  componentDidMount() {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
    window.setInterval(() => {
      this.setState({
        data: getData(),
      });
    }, 5000);

    let positiveRequest = axios.get(
      "https://still-peak-07389.herokuapp.com/num_cmt1/1"
    );
    let negativeRequest = axios.get(
      "https://still-peak-07389.herokuapp.com/num_cmt_1/1"
    );
    let neutralRequest = axios.get(
      "https://still-peak-07389.herokuapp.com/num_cmt0/1"
    );

    axios
      .all([positiveRequest, negativeRequest, neutralRequest])
      .then(
        axios.spread((...responses) => {
          const positiveResponse = responses[0];
          const negativeResponse = responses[1];
          const neutralResponse = responses[2];

          this.setState({
            positive: positiveResponse.data,
            negative: negativeResponse.data,
            neutral: neutralResponse.data,
          });
        })
      )
      // .then((res) => this.setState({ postAmount: res.data }))
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      //     <div className="wrapper">

      // </div>

      <div className="wrapper">
        <Header />
        <Statistics />

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow" style={{ height: "500px" }}>
              <CardHeader tag="h3">Đánh giá phản hồi</CardHeader>
              <CardBody>
                <Doughnut
                  data={[
                    { label: "Tich cuc", value: this.state.positive },
                    { label: "Tieu cuc", value: this.state.negative },
                    { label: "Trung lap", value: this.state.neutral },
                  ]}
                  title="Bieu do quat tich tieu trung"
                  colors={["green", "red", "gray"]}
                />
              </CardBody>
              <CardFooter className="text-muted"></CardFooter>
            </Card>
          </div>
          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3>Lorem something</h3>
              <p>
                Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
                Ipsum lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow" style={{ height: "500px" }}>
              <CardHeader tag="h3">Featured</CardHeader>
              <CardBody>
                <DoughnutChart
                  data={this.state.data[3].data}
                  title={this.state.data[3].title}
                  colors={[
                    "#a8e0ff",
                    "#8ee3f5",
                    "#70cad1",
                    "#3e517a",
                    "#b08ea2",
                    "#BBB6DF",
                  ]}
                />
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </div>
          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3>Lorem something</h3>
              <p>
                Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
                Ipsum lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow">
              <CardHeader tag="h3">Featured</CardHeader>
              <CardBody>
                <MultiLineChart
                  data1={this.state.data[0].data}
                  data2={this.state.data[1].data}
                />
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </div>
          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3>Lorem something</h3>

              <p>
                Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
                Ipsum lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow" style={{ height: "400px" }}>
              <CardHeader tag="h3">Featured</CardHeader>
              <CardBody>
                <BarChart
                  data={this.state.data[1].data}
                  title={this.state.data[1].title}
                  color="#70CAD1"
                />
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </div>

          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3>Lorem something</h3>
              <p>
                Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
                Ipsum lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>
          </div>
        </div>

        <div className="row row-center">
          <div className="col-8 col-m-8 col-sm-8">
            <LineChart
              data={this.state.data[0].data}
              title={this.state.data[0].title}
              color="#3E517A"
            />
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow">
              <CardHeader tag="h3">Featured</CardHeader>
              <CardBody>
                <HorizontalBarChart />
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </div>

          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3>Lorem something</h3>

              <p>
                Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
                Ipsum lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>
          </div>
        </div>
        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow">
              <CardHeader tag="h3">Top 5 comment tích cực</CardHeader>
              <CardBody>
                <div data-aos="fade-up">
                  <CommentList />
                </div>
              </CardBody>
              <CardFooter className="text-muted"></CardFooter>
            </Card>
          </div>

          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3>Lorem something</h3>

              <p>
                Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
                Ipsum lorem ipsum dolor sit amet, consectetur adip
              </p>
            </div>
          </div>
        </div>

        <div className="row row-space">
        <div className="col-12 col-m-6 col-sm-6">
          <Card className="card-shadow">
            <CardHeader tag="h3">Top 5 comment tiêu cực</CardHeader>
            <CardBody>
              <div data-aos="fade-up">
                <CommentList />
              </div>
            </CardBody>
            <CardFooter className="text-muted"></CardFooter>
          </Card>
        </div>

        <div className="col-12 col-m-4 col-sm-4 descriptionBox">
          <div data-aos="fade-right">
            <h3>Lorem something</h3>

            <p>
              Lorem Ipsum lorem ipsum dolor sit amet, consectetur adip Lorem
              Ipsum lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

//     <MultiLineChart data1={this.state.data[0].data} data2={this.state.data[1].data} />

// <div>
// //       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}>
//       </motion.button>
//       </div>
//       <GroupBar />
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}>

//       </motion.button>
//       <HorizontalBarChart />
//       <motion.div
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}>
//       <DoughnutChart
//       data={this.state.data[3].data}
//       title={this.state.data[3].title}
//       colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
//     />
//     </motion.div>

// <div className="row">
//           <div className="col-12 col-m-6 col-sm-6">
//             <HorizontalBarChart />
//           </div>

//           <div className="col-12 col-m-6 col-sm-6">
//             <BarChart
//             data={this.state.data[1].data}
//             title={this.state.data[1].title}
//             color="#70CAD1"

//             />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12 col-m-8 col-sm-8">
//             <GroupBar />

//           </div>

//           <div className="col-12 col-m-4 col-sm-4">

//                 <DoughnutChart
//                 data={this.state.data[3].data}
//                 title={this.state.data[3].title}
//                 colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
//               />
//           </div>
//         </div>
//         <div className="row row-center">
//                 <div className="col-8 col-m-8 col-sm-8">
//                 <LineChart
//                 data={this.state.data[0].data}
//                 title={this.state.data[0].title}
//                 color="#3E517A"
//                 />

//                 </div>
//         </div>
