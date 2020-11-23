import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">5</span> Comments
      </h5>
      {props.data.map((item, i) => {
        return <Comment content={item.content} key={i} index={i} />;
      })}
    </div>
  );
}
