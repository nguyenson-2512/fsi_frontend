import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../App.css'


import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

function LoginForm() {
  const [state , setState] = useState({
    username: "",
    password: "",
  })

  const [logged_in, setLoggedIn] = useState()
  const history = useHistory();

  function handle_change(e){
    const {name, value} = e.target
    console.log('-name-----', name)
    console.log('-value-----', value)
    setState(prevState => ({
      ...prevState,
      [name] : value
  }))
  }

  function handle_login(e, data){
    e.preventDefault();
    fetch('http://127.0.0.1:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        setLoggedIn(true)
      })
      .then(() => {
          history.push("/app");
    })
  }

  if (localStorage.getItem('token')) {
    alert(
      "You're already authenticated in localStorage and being redirected into the app."
    );
    return <Redirect to={"/app"} />;
  }

  return (
    <div className="container-first">
    <p className="title leftTitle">Login</p>
      <form onSubmit={e => handle_login(e, state)} className="formControl">
        <input
        type="text"
        name="username"
        placeholder="Username"
        value={state.username}
        onChange={handle_change}
        />

            <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handle_change}
            />
            <button className="button-first" type="submit">Login</button>
            <p className="or">OR</p>
            <button className="button-first" type="submit" style={{background: "#4267b2"}}>Login with Facebook</button>
        </form>
        <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit' }}><p className="bottomText">No account? Create one!</p></Link>
    </div>
  )
}

// class LoginForm extends React.Component {
//   state = {
//     username: '',
//     email: '',
//     password: ''
//   };

//   handle_change = e => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState(prevstate => {
//       const newState = { ...prevstate };
//       newState[name] = value;
//       return newState;
//     });
//   };

//   render() {
//     return (




//       <div className="container-first">
//             <p className="title leftTitle">Login</p>
//               <form onSubmit={e => this.props.handle_login(e, this.state)} className="formControl">
//                 <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={this.state.username}
//                 onChange={this.handle_change}
//                 />
//                     <input
//                     type="email"
//                     name="email"
//                     placeholder="E-mail Address"
//                     value={this.state.email}
//                     onChange={this.handle_change}
//                     />
//                     <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={this.state.password}
//                     onChange={this.handle_change}
//                     />
//                     <button className="button-first" type="submit">Login</button>
//                     <p className="or">OR</p>
//                     <button className="button-first" type="submit" style={{background: "#4267b2"}}>Login with Facebook</button>
//                 </form>
//                 <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit' }}><p className="bottomText">No account? Create one!</p></Link>
//             </div>


//     );
//   }
// }

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};

// <form onSubmit={e => this.props.handle_login(e, this.state)}>
// <h4>Log In</h4>
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