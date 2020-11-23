import React from 'react';
import '../../App.css'
export default class Header2 extends React.Component {
    render() {
        return (
            <div className="navbar bg">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p
                  className="brand"
                  style={{
                    paddingLeft: "15px",
                    color: "white",
                    fontSize: "25px",
                  }}
                >
                  MERAKI
                </p>
              </li>
            </ul>
            <ul className="navbar-nav nav-right">
              <li>
                <p className="quote">
                  “ Alone we can do so little, together we can do so much. ”
                </p>
              </li>
            </ul>
          </div>
        );
    }
}