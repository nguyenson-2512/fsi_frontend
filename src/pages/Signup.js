import React, {useState} from "react";
import PropTypes from "prop-types";
// import '../components/style1.css'
import '../App.css'

import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

function SignupForm() {
  const [state , setState] = useState({
    username: "",
    password: "",
    phone: "",
    company: "",
    email: "",
  })
  const [logged_in, setLoggedIn] = useState(false)
  const history = useHistory();

  function handle_change(e) {
    const {name, value} = e.target
    console.log('-name-----', name)
    console.log('-value-----', value)
    setState(prevState => ({
      ...prevState,
      [name] : value
  }))
  };

  function handle_signup(e, data) {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/app/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        // this.setState({
        //   logged_in: true,
        //   displayed_form: '',
        //   username: json.username
        // });
        // setState(
        //   prevState => ({
        //     ...prevState,
        //     username: json.username
        //   })
        // )
        setLoggedIn(true)
        console.log('---set1:',logged_in)
      })
      .then(() => {
        console.log('---set2:',logged_in)

        if(logged_in) {
          console.log('log true')
        }
        history.push("/app");
      })
  };

  if (localStorage.getItem('token')) {
    alert(
      "You're already authenticated in localStorage and being redirected into the app."
    );
    return <Redirect to={"/app"} />;
  }

  return (
    <div className="container-first">
    <p className="title leftTitle">Create new account</p>
    <form onSubmit={(e) => handle_signup(e, state)} className="formControl">
        <div className="inputContainer">
        <input
        type="text"
        name="username"
        placeholder="Full Name"
        value={state.username}
        onChange={handle_change}
        />
        </div>
        <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={state.phone}
        onChange={handle_change}
        />
        <input
        type="text"
        name="company"
        placeholder="Company"
        value={state.company}
        onChange={handle_change}
        />
        <input
        type="email"
        name="email"
        placeholder="E-mail Address"
        value={state.email}
        onChange={handle_change}
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={handle_change}
        />
        <button className="button-first" type="submit">Sign up</button>
    </form>
    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}><p className="bottomText">Already have an account?</p></Link>

</div>
  )

}

// class SignupForm extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     phone: "",
//     company: "",
//     email: "",
//   };

//   handle_change = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState((prevstate) => {
//       const newState = { ...prevstate };
//       newState[name] = value;
//       return newState;
//     });
//   };

//   render() {
//     return (




//         <div className="container-first">
//                 <p className="title leftTitle">Create new account</p>
//                 <form onSubmit={(e) => this.props.handle_signup(e, this.state)} className="formControl">
//                     <div className="inputContainer">
//                     <input
//                     type="text"
//                     name="username"
//                     placeholder="Full Name"
//                     value={this.state.username}
//                     onChange={this.handle_change}
//                     />
//                     </div>
//                     <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={this.state.phone}
//                     onChange={this.handle_change}
//                     />
//                     <input
//                     type="text"
//                     name="company"
//                     placeholder="Company"
//                     value={this.state.company}
//                     onChange={this.handle_change}
//                     />
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
//                     <button className="button-first" type="submit">Sign up</button>
//                 </form>
//                 <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit', border: 'none', outline: 'none'}}><p className="bottomText">Already have an account?</p></Link>

//             </div>

//     );
//   }
// }

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