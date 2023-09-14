import React from "react";
import "./loginPage.css";
import loginImg from "./Rectangle 77.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="grid-wrapper">
        <div className="item item_1">
          <img src={loginImg} alt="bolalar rasmi" />
          <h2>Lorem Ipsum is simply </h2>
          <h4>Lorem Ipsum is simply </h4>
        </div>
        <div class="item item_2">
          <div className="item_3">
            <p className="login-title">Welcome to lorem..!</p>
            <div className="btn-group">
              
                <Link to="/">Login</Link>
              
              
                <Link to="/loginpage">Register</Link>
              
            </div>
            <div className="description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <form action="">
              <label for="">User name</label>
              <input type="text" placeholder="Enter your User name" />
              <label for="">Password</label>
              <input type="password" placeholder="Enter your Password" />
            </form>
            <div className="remember">
              <label for="">
                <input type="checkbox" />
                Rememebr me
              </label>
              <label for="">Forgot Password ?</label>
            </div>
            <div className="submit-btn">
              <button className="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
