import React from "react";
import "../../App.css";

export default class PostTable extends React.Component {
  render() {
    return (
      <div className="col-3 col-m-3 col-sm-3">
        <div className="counter bg-success">
          <p>
            <i className="fas fa-comments"></i>
          </p>
          <h3>{this.props.commentAmount}</h3>
          <p>Số lượng bình luận</p>
        </div>
      </div>
    );
  }
}
