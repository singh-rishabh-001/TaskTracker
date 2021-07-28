import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class SignupForm extends Component {

    render() {
        return (

            <form>

                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                />

                <input
                    type="number"
                    className="form-control mt-3"
                    placeholder="Mobile Number"
                />

                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="Last Name"

                        />
                    </div>
                </div>

                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password"
                />
                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Confirm Password"
                />

                <input type="submit" value="Submit" id="submit" class="btn-submit mt-3" style={this.props.submitBtnStyle} />
                <p style={this.props.PInfoStyle}>Have an account?
                    <NavLink
                        to="/signin"
                    >
                        Sign In
                    </NavLink>

                </p>
            </form>

        )
    }
}
