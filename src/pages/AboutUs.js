import React from "react";
import "../App.css";
import "../fontawesome-free/css/all.min.css";
import son from "../assets/son.jpg";
import huong from "../assets/huong.jpg";
import tran from "../assets/tran.jpg";
import nam from "../assets/nam.jpg";
import minh from "../assets/minh.jpg"
import "bootstrap/dist/css/bootstrap.css";
import { CheckOutlined } from "@ant-design/icons";
import Header2 from '../components/Header/Header2'
import gif from '../assets/logo.gif'

class Info extends React.Component {
  render() {
    return (
      <div className="card card-shadow">
        <img src={this.props.img} alt="avatar" class="img" />
        <div className="card-block">
          <h4 className="card-text">{this.props.name} </h4>
          <p className="position">
            <CheckOutlined /> {this.props.class}
          </p>
          <p className="position">
            <CheckOutlined /> {this.props.university}
          </p>
        </div>
      </div>
    );
  }
}

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
				<Header2 />
        <div>
          <p class="content">
            <img className="gif" src={gif} alt="gif" />
            <span className="teamname" alt="name"> µεράκι </span> Team
          </p>
        </div>
        <div className="card-deck-wrapper">
          <div className="card-deck">
            <Info
              img={huong}
              name="Nguyễn Thị Thanh Hường"
              class="Product Manager"
              university="Đại học Greenwich"
            />
            <Info
              img={minh}
              name="Nguyễn Đức Minh"
              class="React Native"
              university="Đại học Công Nghệ"
            />
            <Info
              img={tran}
              name="Nguyễn Ngọc Bảo Trân"
              class="Data Science"
              university="Đại học Công Nghệ"
            />
            <Info
              img={son}
              name="Nguyễn Ngọc Trường Sơn"
              class="React Native"
              university="Đại học Công Nghệ"
            />
            <Info
              img={nam}
              name="Đỗ Nam"
              class="Data Science"
              university="Đại học Công Nghệ"
            />
          </div>
        </div>
      </div>
    );
  }
}
