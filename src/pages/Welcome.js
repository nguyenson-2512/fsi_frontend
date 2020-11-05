import React from "react";


import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
        };
    }
    render() {
        return (
            <div className="container-first">
                <p className="title">Welcome to your dashboard</p>
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit', border: 'none', outline: 'none' }}><button type="submit" className="button-first">Login</button></Link>
                <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit', border: 'none', outline: 'none' }}><button className="button-first" type="submit" style={{background: 'white',color: '#ff5a66',border: '1px solid #ff5a66'}}>Sign up</button></Link>
            </div>
        )
    }
}