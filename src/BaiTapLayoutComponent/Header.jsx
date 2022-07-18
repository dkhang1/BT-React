import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      
      <div className="header bg-dark">
        <div className=" container d-flex justify-content-between align-items-center text-white py-3 px-0">
          <div className="logo fs-4">Start Boostrap</div>
          <nav className="nav ">
            <a className="nav-link active text-white" href="#">
              Home
            </a>
            <a className="nav-link text-white" href="#">
              About
            </a>
            <a className="nav-link text-white" href="#">
              Services
            </a>
            <a className="nav-link text-white pe-0" href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
