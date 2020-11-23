import React from "react";
import '../../App.css'

import { Button } from "reactstrap";
import { RetweetOutlined } from "@ant-design/icons";


export default class CommentRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      index: this.props.index,
    };
  }

  onRadioChange = (e) => {
    const newData = this.state.data;
    newData.effect = e.target.value;
    this.setState({ data: newData });
    console.log("new data to pass parent: ---", this.state.data);
    this.props.change(this.state.data.effect, this.state.index);
  };
  render() {
    return (
      <tr>
        <td>{this.state.data.content}</td>
        <td className="text-center">
          {" "}
          <input
            type="radio"
            // value="1"
            value="=>  tích cực"
            checked={this.state.data.effect === "=>  tích cực"}
						onChange={this.onRadioChange}
          />
        </td>
        <td className="text-center">
          {" "}
          <input
            type="radio"
            // value="-1"
            value="=>  tiêu cực"
            checked={this.state.data.effect === "=>  tiêu cực"}
						onChange={this.onRadioChange}
          />
        </td>
        <td className="text-center">
          {" "}
          <input
            type="radio"
            // value="0"
            value="=>  trung lập"

            checked={this.state.data.effect === "=>  trung lập"}
						onChange={this.onRadioChange}
          />
				</td>
				
				<td className="text-center">
				{" "}
				<Button
				style={{ padding: "4px 10px 10px 10px" }}
				className="buttonCampaign"
				outline
				color="secondary"
				onClick={this.props.update}
			>
				<RetweetOutlined />
			</Button>
				</td>
      </tr>
    );
  }
}
