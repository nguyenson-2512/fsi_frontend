import React from "react";
import image from '../assets/huong.jpg'
import i from '../assets/iconfinder_afro_woman_female_person_4043231.png'
// import i from '../assets/iconfinder_boy_male_avatar_portrait_4043236.png'

export default function Comment() {
//   const { name, message, time } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={i}
        alt="jfj"
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">9 minutes ago</small>
        <h6 className="mt-0 mb-1 text-muted">Son Nguyen</h6>
        Hello world
      </div>
    </div>
  );
}

        // src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        // alt={name}