import React from "react";
import "../App.css";
import FacebookLoginBtn from "react-facebook-login";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      auth: false,
      accessToken: "",
      id: "",
      pictureURL: "",
    };
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      username: response.name,
      email: response.email,
      auth: true,
      accessToken: response.accessToken,
      id: response.id,
      pictureURL: response.picture.data.url,
    });

    const data = {
      username: this.state.username,
      id: this.state.id,
      email: this.state.email,
      token: this.state.accessToken,
      pictureURL: this.state.pictureURL,
    };

    fetch('https://gentle-island-41460.herokuapp.com/user/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('user', JSON.stringify(json));
      })
      .then(() => {
          this.props.history.push("/app");
    })
  };

  render() {
    if (localStorage.getItem('user')) {
      return <Redirect to={"/app"} />;
    }

    return (
      <div className="container-first">
        <p className="title_first leftTitle">Login</p>
        <FacebookLoginBtn
        appId="666275994291953"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
        scope="public_profile,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_posts,pages_manage_engagement"
      />
      {/* login && loading */}
      </div>
    );
  }
}

export default LoginForm;
