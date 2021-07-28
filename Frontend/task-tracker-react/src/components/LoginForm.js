import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class LoginForm extends Component {
    render() {
        return (
            <form>

                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                />


                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password"
                />

                <input type="submit" value="Submit" id="submit" class="btn-submit mt-3" style={this.props.submitBtnStyle} />
                <p style={this.props.PInfoStyle}>Create new account?
                    <NavLink
                        to="/"
                    >
                        Sign Up
                    </NavLink>
                </p>
            </form>

        )
    }
}
