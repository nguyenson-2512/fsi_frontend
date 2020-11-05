import React from 'react';
import '../../App.css'

export default class LikeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeAmount: 555
        }
    }

    render() {
        return (
            <div className="col-3 col-m-3 col-sm-3">
            <div className="counter bg-info">
              <p>
                <i class="fas fa-thumbs-up"></i>
              </p>
              <h3>{this.state.likeAmount}</h3>
              <p>Số lượng likes</p>
            </div>
          </div>
        )
    }
}