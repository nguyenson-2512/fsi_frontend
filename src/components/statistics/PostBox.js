import React from "react";
import "../../App.css";

export default class PostTable extends React.Component {
  render() {
    return (
      <div className="col-3 col-m-3 col-sm-3">
        <div className="counter bg-primary">
          <p>
            <i className="fas fa-newspaper"></i>
          </p>
          <h3>{this.props.postAmount}</h3>
          <p>Số lượng bài đăng</p>
        </div>
      </div>
    );
  }
}
