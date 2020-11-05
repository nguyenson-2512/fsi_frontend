import React from 'react';
import '../../App.css'

export default class PostTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postAmount: 5
        }
    }

    render() {
        return (
            <div className="col-3 col-m-3 col-sm-3">
            <div className="counter bg-primary">
              <p>
                <i class="fas fa-newspaper"></i>
              </p>
              <h3>{this.state.postAmount}</h3>
              <p>Số lượng bài đăng</p>
            </div>
          </div>
        )
    }
}