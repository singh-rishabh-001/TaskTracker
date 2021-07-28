import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../css/Auth.css";
import "../css/Bubble.css";

import Animation from "./Animation";
import Bubble from "./Bubble";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      submitBtnStyle: { display: "inline" },
      PInfoStyle: {
        display: "inline",
        marginLeft: "5%",
        whiteSpace: "nowrap",
      },
    };
  }
  render() {
    return (
      <div className="flex-container-auth">
        <div className="flex-item-1-auth">
          <Animation />
        </div>
        <Bubble />
        <div className="flex-item-2-auth">
          <p style={{ backgroundColor: "yellow" }}>
            This authentication is only frontend, backend and it's connectivity
            is under development.
            <br />
            You can continue to next page by appending '/tasks' in the URL.
          </p>
          <div className="form-wrapper">
            <BrowserRouter>
              <Route exact path="/">
                <div className="form-header-wrapper">Sign Up</div>
                <SignupForm
                  submitBtnStyle={this.state.submitBtnStyle}
                  PInfoStyle={this.state.PInfoStyle}
                />
              </Route>
              <Route path="/signin">
                <div className="form-header-wrapper">Sign In</div>
                <LoginForm
                  submitBtnStyle={this.state.submitBtnStyle}
                  PInfoStyle={this.state.PInfoStyle}
                />
              </Route>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}
