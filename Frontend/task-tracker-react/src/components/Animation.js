import React, { Component } from 'react'
import Logo from './Logo'
export default class Animation extends Component {
    render() {
        return (
            <>
                <div className="logo-wrapper">                  
                    <Logo />
                </div>
                <div>
                    <div className="css-3d-text">
                        TASK
                    </div>
                    <div className="message-wrapper">
                        <h4>A place for all daily goals.</h4>
                    </div>
                </div>
            </>
        )
    }
}
