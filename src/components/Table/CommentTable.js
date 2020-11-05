import React from 'react';
import '../../App.css'

export default class PostTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentAmount: 55
        }
    }

    render() {
        return (
            <div className="col-3 col-m-3 col-sm-3">
            <div className="counter bg-success">
              <p>
                <i class="fas fa-comments"></i>
              </p>
              <h3>{this.state.commentAmount}</h3>
              <p>Số lượng bình luận</p>
            </div>
          </div>
        )
    }
}