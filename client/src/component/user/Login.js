import "./Login.css";
import { useState } from "react";
import { useSignup } from "../../Hook/Signup";
import { useLogin } from "../../Hook/uselogin";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Hook/useUserContext";
const toLoginPage = (e) => {
  var element = document.getElementById("login");
  element.classList.add("hide");

  var element = document.getElementById("create");
  element.classList.remove("hide");
};
const toCreateAccount = () => {
  var element = document.getElementById("login");
  element.classList.toggle("hide");

  var element = document.getElementById("create");
  element.classList.add("hide");
};
function Login() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { signup, error, isLoading } = useSignup();
  const { login, errorlogin, isLoadinglogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setfirstName] = useState("");
  const [LastName, setlastName] = useState("");
  const [UserName, setuserName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password, firstName, latsName, userName);
    await signup(email, password, FirstName, LastName, UserName);
    navigate("/ListQuastion");
  };
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    // console.log(email, password);
    navigate("/ListQuastion");
    // console.log(user.UserName);
  };

  return (
    <div className="home">
      {/* signin part */}
      <div className="form-wraper hide" id="create">
        <div className="describtion">
          <h4>Join the Network</h4>
          <p>
            Already have an account?
            <div className="linksto" onClick={toCreateAccount}>
              <a href="#">Sign In</a>
            </div>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <input
              className="inpts"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <div className="inputwrap">
              <input
                className="inpts2"
                type="text"
                placeholder="First Name"
                onChange={(e) => setfirstName(e.target.value)}
                value={FirstName}
              />
              <input
                className="inpts1"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
                value={LastName}
              />
            </div>
            <div className="mb-3 ">
              <input
                className="inpts"
                type="text"
                placeholder="User Name"
                onChange={(e) => setuserName(e.target.value)}
                value={UserName}
              />
            </div>

            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <i
              className={passwordShown ? " fa fa-eye " : "fa fa-eye-slash"}
              aria-hidden="true"
              id="toggglePassword"
              onClick={togglePassword}
            ></i>
          </div>
          <div className="d-grid">
            <button
              disabled={isLoading}
              className="btn btn-primary btn-login login-button col-md-12"
              type="submit"
            >
              Agree and join
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          <div className="creat-link" onClick={toCreateAccount}>
            {" "}
            <a href="#">Arady Have account?</a>
          </div>
        </p>
      </div>

      {/* login part */}
      <div className="form-wraper" id="login">
        <div className="describtion">
          <h4>Login to your account</h4>
          <p>
            Don’t have an account?
            <div className="linksto" onClick={toLoginPage}>
              <a href="#">Create a new account </a>
            </div>
          </p>
        </div>
        <form onSubmit={handleSubmitlogin}>
          <div className="mb-3 ">
            <input
              className="inpts"
              name="email"
              type="text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <input
              className="inpts"
              name="password"
              type={passwordShown ? "text" : "password"}
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <i
              className={passwordShown ? " fa fa-eye " : "fa fa-eye-slash"}
              aria-hidden="true"
              id="togglePassword"
              onClick={togglePassword}
            ></i>
          </div>
          <div className="btnbtn">
            <button className="btn1" disabled={isLoadinglogin}>
              Submit
            </button>
          </div>
        </form>
        {error && <p className="errror">{errorlogin}</p>}
        <p>
          <a className="creat-link" href="#" onClick={toLoginPage}>
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

export default Login;
