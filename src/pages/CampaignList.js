import React, { Fragment } from "react";
import "../fontawesome-free/css/all.min.css";
import "../App.css";
import CampaignItem from "../components/Campaign/CampaignItem";
import CreateCampaign from "../components/Campaign/CreateCampaign";

import Header from "../components/Header";

import { Button } from "antd";
import axios from 'axios';

import { AnimatePresence, motion } from "framer-motion";

import { Switch, Route, Link } from "react-router-dom";

export default class CampaignList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCampaign: [],
      item: {
        name: '',
        company: '',
        start: '',
        end: '',
        description: '',
      },
      showCreateForm: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      // .get("http://localhost:8000/api/todos/")
      // .then((res) => this.setState({ todoList: res.data }))
      .get("http://localhost:8000/api/campaigns/")
      .then((res) => this.setState({ listCampaign: res.data }))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  handleDelete = (item) => {
    axios
      // .delete(`http://localhost:8000/api/campaigns/${item.id}`)
      .delete(`http://localhost:8000/api/campaigns/${item.id}`)
      .then((res) => this.refreshList());
  };



  // componentDidMount() {
  //   this.refreshList();
  // }
  // refreshList = () => {
  //   axios
  //     .get(`http://localhost:8000/api/campaigns/`)
  //     .then(res => this.setState({ listCampaign: res.data }))
  //     .catch(err => console.log(err));
  // };
  // handleDelete = item => {
  //   axios
  //     .delete(`http://localhost:8000/api/campaigns/${item.id}`)
  //     .then(res => this.refreshList());
  // };

  // <div className="row">

  // <div className="col-10 col-m-12 col-sm-12 top">
  //   <div className="card">
  //     <div className="card-header">
  //       <h3>
  //         Danh sách chiến dịch
  //       </h3>
  //     </div>
  //     <div className="card-content">
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>#</th>
  //             <th>Name of Campaign</th>
  //             <th>Feedback</th>
  //             <th>Result</th>
  //             <th>Due date</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {
  //             this.state.listCampaign.map(info => {
  //               return (
  //                 <CampaignItem info={info} delete={this.handleNhap} />
  //               )
  //             })
  //           }
  //           <tr><td>                <Button type="dashed" block>
  //           Tao chien dich
  //         </Button></td></tr>

  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // </div>
  // <CreateCampaign />
  // </div>

  callbackHandleCancel = () => {
    this.setState({ showCreateForm: false });
  };

  handleCreate = () => {
    this.setState({ showCreateForm: !this.state.showCreateForm });
  };

  handleSubmit = (item) => {
    axios
    .post("http://localhost:8000/api/campaigns/", item)
    .then((res) => this.refreshList());
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="row">
          <div className="col-12 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3>Danh sách chiến dịch</h3>
              </div>
              <div className="card-content">
                <table>
                  <thead style={{ background: "#e8eaf9" }}>
                    <tr>
                      <th>#</th>
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
