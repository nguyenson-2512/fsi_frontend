import React from "react";
import { LoadingOutlined, EnterOutlined } from "@ant-design/icons";
import { Badge, Button } from "reactstrap";
import '../../App.css'
import axios from 'axios'

import {} from "reactstrap";

export default class CheckLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      label: "",
    };
  }

  handleChange = (e) => {
    this.setState({ commentInput: e.target.value });
  };

  handleCheck = () => {
	const comment = {
		comments: [this.state.commentInput]
	}
	axios.post("https://devc-model.herokuapp.com/predict", comment )
	.then((res) => this.setState({label: res.data.data[0]}))
	.catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>Kiểm tra gán nhãn</h3>
        </div>
        <div className="card-content">
          <table className="table-bordered">
            <thead style={{ background: "#e8eaf9" }}>
              <tr>
                <th>Nhập comment</th>
                <th className="text-center">Kiểm tra</th>
                <th className="text-center">Gán nhãn</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập comment bạn muốn kiểm tra"
                    value={this.state.commentInput}
                    onChange={this.handleChange}
                  />
                </td>
                <td className="text-center">
                  <Button
                    style={{ padding: "4px 10px 10px 10px" }}
                    outline
					color="secondary"
					onClick={this.handleCheck}
                  >
				  <EnterOutlined />
                  </Button>
                </td>
                <td className="text-center">
                  {this.state.label === "" ? (
                    <LoadingOutlined />
                  ) : (
                    <h3>
                      <Badge color="secondary">{this.state.label=="2" ? "Tích cực" : (this.state.label=="0" ? "Tiêu cực" : "Trung lập")}</Badge>
                    </h3>
                  )}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
