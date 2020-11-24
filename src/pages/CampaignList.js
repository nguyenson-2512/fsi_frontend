import React from "react";
import "../fontawesome-free/css/all.min.css";
import "../App.css";
import CampaignItem from "../components/Campaign/CampaignItem";
import CreateCampaign from "../components/Campaign/CreateCampaign";
import Header1 from "../components/Header/Header1";
// import Loader from '../components/Loader/Loader'

import { Button } from "antd";
import axios from "axios";
// import generateUniqueId from 'generate-unique-id';
import { motion } from "framer-motion";

export default class CampaignList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCampaign: [],
      item: {
        project_name: "",
        company: "",
        start_time: "",
        end_time: "",
        description: "",
        lastCollectTime: "2020-11-11T04:21:19.763493+00:00",
        keyword: { keyword: [] },
        user_id: JSON.parse(localStorage.getItem("user")).id,
        id: Math.floor(Math.random() * 100000000).toString(),
        page_id: "",
        // id: generateUniqueId()
      },
      showCreateForm: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get(
        `https://gentle-island-41460.herokuapp.com/all_project/${this.state.item.user_id}`
      )
      .then((res) => {
        // this.setState({loading: true})
        this.setState({ listCampaign: res.data });
      })
      // .then(() => this.setState({loading: false}))
      .catch((err) => console.log(err));

    // const info = JSON.parse(localStorage.getItem("user"));
    // console.log(info)
    // fetch("https://devc-model.herokuapp.com/user_token", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: {
    //     access_token: info.token.toString(),
    //   },
    // })
    //   .then((res) => res.json)
    //   .then((json) => {
    //     console.log(json);
    //     localStorage.setItem("longTermToken", JSON.stringify(json));
    //   });
  };

  handleDelete = (item) => {
    axios
      .delete(`https://gentle-island-41460.herokuapp.com/project_id/${item.id}`)
      .then((res) => this.refreshList())
      .then(() => alert("Xóa thành công!"));
  };

  callbackHandleCancel = () => {
    this.setState({ showCreateForm: false });
  };

  handleCreate = () => {
    this.setState({ showCreateForm: !this.state.showCreateForm });
  };

  handleSubmit = (item) => {
    axios
      .post(
        `https://gentle-island-41460.herokuapp.com/all_project/${this.state.item.user_id}`,
        item
      )
      .then((res) => this.refreshList())
      .then(() => window.location.reload());
  };
  render() {
    return (
      <div className="wrapper">
        <Header1 />

        <div className="row">
          <div className="col-12 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3>
                  Danh sách chiến dịch
                  {/*{this.state.loading && <Loader />}*/}
                </h3>
              </div>
              <div className="card-content">
                <table>
                  <thead style={{ background: "#e8eaf9" }}>
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Công ty</th>
                      <th>Mô tả sản phẩm</th>
                      <th>Bắt đầu</th>
                      <th>Kết thúc</th>
                      <th>Hủy bỏ</th>
                      <th>Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listCampaign.map((info, index) => {
                      return (
                        <CampaignItem
                          key={index}
                          info={info}
                          delete={() => this.handleDelete(info)}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    type="primary"
                    className="addButton"
                    onClick={this.handleCreate}
                  >
                    Tạo chiến dịch
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          {this.state.showCreateForm && (
            <CreateCampaign
              active={this.state.showCreateForm}
              cancel={this.callbackHandleCancel}
              item={this.state.item}
              onSubmit={this.handleSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}
