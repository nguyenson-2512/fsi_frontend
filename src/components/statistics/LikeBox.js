import React from "react";
import "../../App.css";

export default class LikeTable extends React.Component {
  render() {
    return (
      <div className="col-3 col-m-3 col-sm-3">
        <div className="counter bg-info">
          <p>
            <i className="fas fa-thumbs-up"></i>
          </p>
          <h3>{this.props.likeAmount}</h3>
          <p>Số lượng likes</p>
        </div>
      </div>
    );
  }
}
