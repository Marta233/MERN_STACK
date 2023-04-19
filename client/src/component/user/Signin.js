import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="home">
      <div className="form-wraper">
        <div className="describtion">
          <h4>Login to your account</h4>
          <p>
            Don’ t have an account?<Link to="/Login">Sign In</Link>
          </p>
        </div>
        <form>
          <div className="mb-3 ">
            <input className="inpts" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <div className="inputwrap">
              <input
                className="inpts2"
                type={passwordShown ? "text" : "password"}
                placeholder="First Name"
              />
              <input
                className="inpts1"
                type={passwordShown ? "text" : "password"}
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3 ">
              <input className="inpts" type="email" placeholder="User Name" />
            </div>

            <input
              className="inpts"
              type={passwordShown ? "text" : "password"}
              placeholder="Your Password"
            />

            <i
              className={passwordShown ? " fa fa-eye " : "fa fa-eye-slash"}
              aria-hidden="true"
              id="togglePassword"
              onClick={togglePassword}
            ></i>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-login login-button col-md-12"
              type="submit"
            >
              Agree and join
            </button>
          </div>
        </form>

        <p>
          <a className="creat-link" href="#">
            Creat an account?
          </a>
        </p>
      </div>
      <div className="about-wraper">
        <h6>About</h6>
        <h1>Evangadi Networks</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn1">HOW IT WORKS</button>
      </div>
    </div>
  );
}
export default Signin;
