import React from "react";
import {
  CardBody,
  Card,
  CardHeader,
  Col,
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../../App.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      dropdownOpen: false,
      listPage: [
        { id: 1, name: "page1" },
        { id: 2, name: "page2" },
        { id: 3, name: "page3" },
      ],
      userPages: {},
      page_choice: "",
    };
    this.myRef = React.createRef();
  }

  componentWillMount() {
    const tokenAndId = {
      access_token: JSON.parse(localStorage.getItem("longTermToken"))
        .access_token,
      user_id: JSON.parse(localStorage.getItem("user")).id,
    };
    fetch("https://devc-model.herokuapp.com/user_pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tokenAndId),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("page", JSON.stringify(json));
      });
  }

  componentDidMount() {
    if (this.props.active) {
      this.myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    const item = { ...this.state.item, [name]: value };
    this.setState({ item });
  };

  handleCancel = () => {
    this.setState({
      showCreateForm: false,
    });
    this.props.cancel();
  };

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  pageChoice = (id) => {
    // alert(id);
    const item = { ...this.state.item, page_id: id };
    localStorage.setItem("page_choice", id);
    this.setState({ item });
  };
  render() {
    const { onSubmit } = this.props;
    console.log(this.state.item);
    return (
      <div style={{ margin: "0 auto" }} className="wrapper" ref={this.myRef}>
        <div className="row">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title font-size-md font-weight-bold py-2">
                Điền các thông tin sau đây:
              </div>
            </CardHeader>
            <CardBody>
              <Form
                onSubmit={() => {
                  onSubmit(this.state.item);
                }}
              >
                <FormGroup row>
                  <Label for="name" sm={5}>
                    Tên sản phẩm
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="project_name"
                      id="name"
                      placeholder=""
                      value={this.state.item.project_name}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="company" sm={5}>
                    Công ty
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="company"
                      type="text"
                      name="company"
                      placeholder=""
                      value={this.state.item.company}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Label for="start_time">Thời gian bắt đầu</Label>
                  <Input
                    type="date"
                    name="start_time"
                    id="start_time"
                    placeholder="date placeholder"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="end_time">Thời gian kết thúc</Label>
                  <Input
                    type="date"
                    name="end_time"
                    id="finish"
                    placeholder="date placeholder"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup row>
                  <Label for="description" sm={5}>
                    Mô tả sản phẩm
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      value={this.state.item.description}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col sm={10}>
                    <Dropdown
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle caret>Lựa chọn page</DropdownToggle>
                      <DropdownMenu bottom>
                        {JSON.parse(localStorage.getItem("page")) ? (
                          JSON.parse(localStorage.getItem("page")).pages.map(
                            (page) => {
                              return (
                                <DropdownItem
                                  onClick={() => this.pageChoice(page.page_id)}
                                >
                                  {page.page_name}
                                </DropdownItem>
                              );
                            }
                          )
                        ) : (
                          <DropdownItem>page_name</DropdownItem>
                        )}
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="description" sm={5}>
                    Keywords
                  </Label>
                  <Col sm={10}>
                    <ReactTagInput
                      tags={this.state.item.keyword.keyword}
                      maxTags={10}
                      placeholder="Nhập và nhấn enter"
                      onChange={(newTags) => {
                        const item = {
                          ...this.state.item,
                          keyword: {
                            ...this.state.item.keyword,
                            keyword: newTags,
                          },
                        };
                        this.setState({ item });
                      }}
                    />
                  </Col>
                </FormGroup>

                <Button type="submit" color="primary">
                  Submit
                </Button>
                <Button onClick={this.handleCancel}>Cancel</Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
