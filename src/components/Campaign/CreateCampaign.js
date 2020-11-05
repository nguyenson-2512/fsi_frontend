import React from 'react';
import ReactDOM from 'react-dom';
import { CardBody, Card, CardHeader } from 'reactstrap';

import axios from 'axios'


import {
    Col,
    FormText,
    Form,
    Label,
    FormGroup,
    Input,
    Button
  } from 'reactstrap';

import '../../App.css'

export default class CreateCampaign extends React.Component {
    constructor(props) {
        super(props)
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        // this.state = {
        //     name: '',
        //     company: '',
        //     start: '',
        //     end: '',
        //     description: '',
        //     showCreateForm: false
        // }
        this.state = {
          item: this.props.item
        }
        this.myRef = React.createRef()
    }

    // handleChange = (e) => {
    //   let { name, company, start, end, description } = e.target;
    //   const activeItem = { ...this.state.activeItem,  };
    //   this.setState({ activeItem });
    // };


    handleChange = (e) => {
      let { name, value } = e.target;
      const item = { ...this.state.item, [name]: value };
      this.setState({ item });
      console.log(this.state.item)
    };

    handleCancel = () => {
      this.setState({
        showCreateForm: false
      })
      this.props.cancel()
    }

//     handleSubmit = (event) => {
//       event.preventDefault()
//       const item = {
//         name: this.state.name,
//         company: this.state.company,
//         start: this.state.start,
//         end: this.state.end,
//         description: this.state.description,
//       }

//       console.log(item)


//       axios.post('http://localhost:8000/api/campaigns/', item
//       ,
//        {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//         }
// }
//       )
//         .then(res => {
//           console.log(res);
//           console.log(res.data);
//         })
//         .catch((err) => console.log( err.response.request._response ));
//     }

    // onFormSubmit() {
        // alert(JSON.stringify(this.state, null, '  '));
        //  console.log(this.state)
        //post method api
    // }

    componentDidMount() {
      if (this.props.active) { // whatever your test might be
        this.myRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }

    render() {
      const { onSubmit } = this.props;
        return (



            <div style={{margin: '0 auto'}} className="wrapper" ref={this.myRef}>
            <div className="row">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title font-size-md font-weight-bold py-2">
                Điền các thông tin sau đây:
              </div>
            </CardHeader>
            <CardBody>
            <Form onSubmit={() => onSubmit(this.state.item)}>
            <FormGroup row>
              <Label for="name" sm={5}>
                Tên sản phẩm
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  value={this.state.name}
                  onChange={this.handleChange}
                  // onChange={e => this.setState({name: e.target.value})}
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
                value={this.state.company}
                onChange={this.handleChange}
                // onChange={e => this.setState({company: e.target.value})}
              />
            </Col>
          </FormGroup>
      
            <FormGroup>
              <Label for="start">Thời gian bắt đầu</Label>
              <Input
                type="date"
              
                name="start"
                id="start"
                placeholder="date placeholder"
                onChange={this.handleChange}
                // onChange={e => this.setState({start: e.target.value})}
              />
            </FormGroup>
      
            <FormGroup>
            <Label for="finish">Thời gian kết thúc</Label>
            <Input
              type="date"
              
              name="end"
              id="finish"
              placeholder="date placeholder"
              onChange={this.handleChange}
              // onChange={e => this.setState({end: e.target.value})}
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
                value={this.state.description}
                onChange={this.handleChange}
                // onChange={e => this.setState({description: e.target.value})}
                />
              </Col>
            </FormGroup>
      
            <Button type="submit" color="primary">Submit</Button>
            <Button onClick={this.handleCancel}>Cancel</Button>
          </Form>
            </CardBody>
          </Card>
          </div>
          </div>

        );
    }
}