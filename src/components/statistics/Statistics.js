import React from "react";
import PostTable from "./PostTable";
import CommentTable from "./CommentTable";
import LikeTable from "./LikeTable";
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
      "https://still-peak-07389.herokuapp.com/num_post/1"
    );
    let commentRequest = axios.get(
      "https://still-peak-07389.herokuapp.com/num_comment/1"
    );
    let likeRequest = axios.get(
      "https://still-peak-07389.herokuapp.com/post_alllike/1"
    );

    axios
      .all([postRequest, commentRequest, likeRequest])
      .then(
        axios.spread((...responses) => {
          const postResponse = responses[0];
          const commentResponse = responses[1];
          const likeResponse = responses[2];

          this.setState({
            postAmount: postResponse.data,
            commentAmount: commentResponse.data.num_comments__sum,
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
        <PostTable postAmount={this.state.postAmount} />
        <CommentTable commentAmount={this.state.commentAmount} />
        <LikeTable likeAmount={this.state.likeAmount} />
      </div>
    );
  }
}
