import React from "react";
import avatar0 from '../../assets/iconfinder_afro_woman_female_person_4043231.png'
import avatar1 from '../../assets/iconfinder_hipster_beard_male_man_4043255.png'
import avatar2 from '../../assets/iconfinder_man_male_avatar_portrait_4043260.png'
import avatar3 from '../../assets/iconfinder_female_woman_avatar_portrait_4043248.png'
import avatar4 from '../../assets/iconfinder_girl_female_woman_avatar_4043251.png'

export default function Comment(props) {
let arr = [ avatar0, avatar1, avatar2, avatar3, avatar4]
  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={arr[props.index]}
        alt="avatar"
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <h6 className="mt-0 mb-1 text-muted">User</h6>
        {props.content}
      </div>
    </div>
  );
}
