import React from "react";
import PostBox from "./PostBox";
import CommentBox from "./CommentBox";
import LikeBox from "./LikeBox";
import "../../App.css";
import axios from "axios";

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postAmount: null,
      commentAmount: null,
      likeAmount: null,
    };
  }

  componentDidMount() {
    let postRequest = axios.get(
      // "https://still-peak-07389.herokuapp.com/num_post/777",{ headers: { "Authorization": `JWT ${localStorage.getItem("token")}`}});
      "https://gentle-island-41460.herokuapp.com/num_post/5");
    let commentRequest = axios.get(
      // "https://gentle-island-41460.herokuapp.com/num_comment/5",{ headers: { "Authorization": `JWT ${localStorage.getItem("token")}`}}
      "https://gentle-island-41460.herokuapp.com/num_comment/5")
    let likeRequest = axios.get(
      "https://gentle-island-41460.herokuapp.com/post_alllike/5")

        //thay 5 (project_id) => this.props.
      //thay 5 (project_id) => this.props.
      //thay 5 (project_id) => this.props. dc truyen tu ben detail
      //thay 5 (project_id) => this.props
      //thay 5 (project_id) => this.props.
      //thay 5 (project_id) => this.props.
      //thay 5 (project_id) => this.props.
      //thay 5 (project_id) => this.props.
    axios
      .all([postRequest, commentRequest, likeRequest])
      .then(
        axios.spread((...responses) => {
          const postResponse = responses[0];
          const commentResponse = responses[1];
          const likeResponse = responses[2];

          this.setState({
            postAmount: postResponse.data,
            commentAmount: commentResponse.data,
            likeAmount: likeResponse.data.num_likes__sum,
          });
        })
      )
      // .then((res) => this.setState({ postAmount: res.data }))
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="row row1">
        <PostBox postAmount={this.state.postAmount} />
        <CommentBox commentAmount={this.state.commentAmount} />
        <LikeBox likeAmount={this.state.likeAmount} />
      </div>
    );
  }
}
