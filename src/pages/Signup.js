import React from "react";
import PropTypes from "prop-types";
import '../components/style1.css'


import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class SignupForm extends React.Component {
  state = {
    username: "",
    password: "",
    phone: "",
    company: "",
    email: "",
  };

  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (




        <div className="container-first">
                <p className="title leftTitle">Create new account</p>
                <form onSubmit={(e) => this.props.handle_signup(e, this.state)} className="formControl">
                    <div className="inputContainer">
                    <input
                    type="text"
                    name="username"
                    placeholder="Full Name"
                    value={this.state.username}
                    onChange={this.handle_change}
                    />
                    </div>
                    <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={this.state.phone}
                    onChange={this.handle_change}
                    />
                    <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={this.state.company}
                    onChange={this.handle_change}
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={this.state.email}
                    onChange={this.handle_change}
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handle_change}
                    />
                    <button className="button-first" type="submit">Sign up</button>
                </form>
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit', border: 'none', outline: 'none'}}><p className="bottomText">Already have an account?</p></Link>

            </div>

    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired,
};

// <form onSubmit={(e) => this.props.handle_signup(e, this.state)}>
// <h4>Sign Up</h4>
// <label htmlFor="username">Username</label>
// <input
//   type="text"
//   name="username"
//   value={this.state.username}
//   onChange={this.handle_change}
// />
// <label htmlFor="password">Password</label>
// <input
//   type="password"
//   name="password"
//   value={this.state.password}
//   onChange={this.handle_change}
// />
// <input type="submit" />
// </form>