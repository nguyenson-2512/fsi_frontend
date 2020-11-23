import React from "react";
import Header2 from "../components/Header/Header2";
import "../App.css";

export default class Profile extends React.Component {
  render() {
    const info = JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        <Header2 />
        <p className="content">Your Profile</p>
        <img className="ava" src={info.pictureURL} alt="user" />
        <div className="inforuser">
          <p>
            Username: <span className="bold">{info.username}</span>
          </p>
          <p>
            UserID: <span className="bold">{info.id}</span>
          </p>
          <p>
            Email: <span className="bold">{info.email}</span>
          </p>
        </div>
      </div>
    );
  }
}
