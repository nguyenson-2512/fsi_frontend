import React from "react";
import "../../App.css";
import { DeleteOutlined, RightSquareOutlined } from "@ant-design/icons";

import { Button } from "reactstrap";

import { Link } from "react-router-dom";
export default class CampaignItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.info.project_name}</td>
        <td>{this.props.info.company}</td>
        <td>
          <span className="dot">
            <i className="bg-success" />
            {this.props.info.description}
          </span>
        </td>
        <td>{this.props.info.start_time}</td>
        <td>{this.props.info.end_time}</td>
        <td>
          <Button
            style={{ padding: "4px 10px 10px 10px" }}
            outline
            color="secondary"
            onClick={this.props.delete}
          >
            <DeleteOutlined />
          </Button>
        </td>
        <td>
          <Link
            to={{
              pathname: "/app/detail",
              state: this.props.info.id,
            }}
          >
            <Button
              style={{ padding: "4px 10px 10px 10px" }}
              className="buttonCampaign"
              outline
              color="secondary"
            >
              <RightSquareOutlined />
            </Button>
          </Link>
        </td>
      </tr>
    );
  }
}
