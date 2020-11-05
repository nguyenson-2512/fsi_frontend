import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">6</span>{" "}
        Comment
      </h5>


        <Comment />
        <Comment />
        <Comment />

    </div>
  );
}