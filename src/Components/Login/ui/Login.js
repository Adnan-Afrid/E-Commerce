import React from "react";
import "../assets/Login.css";

const Login = () => {
  return (
    <div className="head">
      <div className="login_wrapper">
        <div className="head_wrap">
          <h2>Login</h2>
        </div>
        <form>
          <label className="email_label">Username:</label>
          <input
            type="email"
            placeholder="abc@email.com"
            className="email_input"
          />
          <br />
          <label className="password_label">Password:</label>
          <input type="password" />
          <div>
            <button type="submit" className="loginbtn">
              Login
            </button>
          </div>
          <div>
            <button type="facebook" className="facebookbtn">
              Login with <i className="fab fa-facebook-f"></i>
            </button>
          </div>
          <div>
            <button type="google" className="btnGoogle">
              Login with <i className="fab fa-google"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
