import React from "react";
import Header1 from "../components/Header/Header1";
import "../App.css";

import Chart from "chart.js";
import { LoadingOutlined } from "@ant-design/icons";

import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import axios from "axios";

import Statistics from "../components/statistics/Statistics";

import Doughnut from "../components/Charts/Doughnut";

import CommentList from "../components/CommentList/CommentList";

import CommentTable from "../components/EditComment/CommentTable";

import CheckLabel from "../components/CheckLabel/CheckLabel"

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      positive: 0,
      negative: 0,
      neutral: 0,
      all: 1,
      topCmt1: [],
      topCmt_1: [],
    };
  }

  componentDidMount() {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });

    let positiveRequest = axios.get(
      `https://gentle-island-41460.herokuapp.com/num_cmt1/${this.props.location.state}`
    );
    let negativeRequest = axios.get(
      `https://gentle-island-41460.herokuapp.com/num_cmt_1/${this.props.location.state}`
    );
    let neutralRequest = axios.get(
      `https://gentle-island-41460.herokuapp.com/num_cmt0/${this.props.location.state}`
    );
    let topCmt1Request = axios.get(
      `https://gentle-island-41460.herokuapp.com/cmt1/${this.props.location.state}`
    );
    let topCmt_1Request = axios.get(
      `https://gentle-island-41460.herokuapp.com/cmt_1/${this.props.location.state}`
    );
    axios
      .all([
        positiveRequest,
        negativeRequest,
        neutralRequest,
        topCmt1Request,
        topCmt_1Request,
      ])
      .then(
        axios.spread((...responses) => {
          const positiveResponse = responses[0];
          const negativeResponse = responses[1];
          const neutralResponse = responses[2];
          const topCmt1Response = responses[3];
          const topCmt_1Response = responses[4];

          this.setState({
            positive: positiveResponse.data,
            negative: negativeResponse.data,
            neutral: neutralResponse.data,
            all:
              positiveResponse.data +
              negativeResponse.data +
              neutralResponse.data,
            topCmt1: topCmt1Response.data,
            topCmt_1: topCmt_1Response.data,
          });
        })
      )
      // .then((res) => this.setState({ postAmount: res.data }))
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
    console.log(this.state.comment);
  };

  render() {
    const { location } = this.props;
    console.log(this.state)
    return (
      <div className="wrapper">
        <Header1 />
        <Statistics project_id={location.state}/>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow" style={{ height: "500px" }}>
              <CardHeader tag="h3">Đánh giá phản hồi</CardHeader>
              <CardBody>
                <Doughnut
                  data={[
                    {
                      label: "% Tích cực",
                      value: (
                        (this.state.positive / this.state.all) *
                        100
                      ).toFixed(2),
                    },
                    {
                      label: "% Tiêu cực",
                      value: (
                        (this.state.negative / this.state.all) *
                        100
                      ).toFixed(2),
                    },
                    {
                      label: "% Trung lập",
                      value: (
                        (this.state.neutral / this.state.all) *
                        100
                      ).toFixed(2),
                    },
                  ]}
                  title="Biểu đồ thể hiện tích cực - tiêu cực - trung lập"
                  colors={["#8ee3f5", "#ff0033", "#b08ea2"]}
                />
              </CardBody>
              <CardFooter className="text-muted"></CardFooter>
            </Card>
          </div>
          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3 style={{ paddingBottom: "30px" }}>
                Thống kê số lượng comment <br /> tích cực - tiêu cực - trung lập{" "}
              </h3>
              <p style={{ fontSize: "1.4rem" }}>
                Comment tích cực: &nbsp;
                {this.state.positive === 0 ? (
                  <LoadingOutlined />
                ) : (
                  <span className="badge" style={{ background: "#8ee3f5" }}>
                    {this.state.positive}
                  </span>
                )}
              </p>
              <p style={{ fontSize: "1.4rem" }}>
                Comment tiêu cực: &nbsp;
                {this.state.negative === 0 ? (
                  <LoadingOutlined />
                ) : (
                  <span
                    className="badge"
                    style={{ background: "#ff0033", color: "white" }}
                  >
                    {this.state.negative}
                  </span>
                )}
              </p>
              <p style={{ fontSize: "1.4rem" }}>
                Comment trung lập: &nbsp;
                {this.state.neutral === 0 ? (
                  <LoadingOutlined />
                ) : (
                  <span
                    className="badge"
                    style={{ background: "#b08ea2", color: "white" }}
                  >
                    {this.state.neutral}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow">
              <CardHeader tag="h3">Top 5 comments tích cực</CardHeader>
              <CardBody>
                <div data-aos="fade-up">
                  <CommentList data={this.state.topCmt1} />
                </div>
              </CardBody>
              <CardFooter className="text-muted"></CardFooter>
            </Card>
          </div>

          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3 style={{ paddingBottom: "30px" }}>
                Top 5 comments tích cực{" "}
              </h3>
              <p>Những comment có tính tích cực được nhiều sự chú ý nhất.</p>
            </div>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-6 col-sm-6">
            <Card className="card-shadow">
              <CardHeader tag="h3">Top 5 comments tiêu cực</CardHeader>
              <CardBody>
                <div data-aos="fade-up">
                  <CommentList data={this.state.topCmt_1} />
                </div>
              </CardBody>
              <CardFooter className="text-muted"></CardFooter>
            </Card>
          </div>

          <div className="col-12 col-m-4 col-sm-4 descriptionBox">
            <div data-aos="fade-right">
              <h3 style={{ paddingBottom: "30px" }}>Top 5 comments tiêu cực</h3>
              <p>Những comment có tính tiêu cực được nhiều sự chú ý nhất.</p>
            </div>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-12 col-sm-12">
            <CommentTable project_id={location.state}/>
          </div>
        </div>

        <div className="row row-space">
          <div className="col-12 col-m-12 col-sm-12">
            <CheckLabel />
          </div>
        </div>
      </div>
    );
  }
}
