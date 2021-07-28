import React, { Component } from "react";
const headerStyle = {
  textAlign: "center",
  background: `radial-gradient(circle, rgba(0,2,62,1) 0%, rgba(5,5,113,1) 70%, rgba(0,33,163,1) 100%)`,
  color: "white",
};
export class Header extends Component {
  render() {
    return (
      <header className="container-fluid p-2" style={headerStyle}>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
