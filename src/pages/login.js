import React, { useRef } from 'react';
import '../App.css';
import userLocalStore from '../store/localStore';
import { useNavigate } from 'react-router-dom';

const users = [{
  name: "John Doe",
  username: "john.doe@domain.com",
  password: "jOhn"
}, {
  name: "Jane Doe",
  username: "jane.doe@domain.com",
  password: "JAne"
}];

function Login() {
  let navigate = useNavigate();
  let [currentUser, setUser] = userLocalStore({}, 'user');

  const unameRef = useRef(null);
  const passRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const uname = unameRef.current.value;
    const pass = passRef.current.value;

    currentUser = users.find(user => user.username === uname && user.password === pass);
    console.log(currentUser)
    if (currentUser) {
      setUser(currentUser);
      navigate("/home");
    }
  }

  return (
    <div className="App">
      <h1>
        Login
      </h1>
      <form onSubmit={onSubmit} method="post">
        <div className="container">
          <label id="uname"><b>Username</b></label>
          <input type="text" ref={unameRef} aria-labelledby="uname" placeholder="Enter Username" required />
          <br /><br />
          <label id="psw"><b>Password</b></label>
          <input type="password" ref={passRef} aria-labelledby="psw" placeholder="Enter Password" required />

          <button type="submit">Login</button>
        </div>
      </form>
    </div >);
}

export default Login;
