import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer bg-dark">
        <div className="container text-center text-white py-5 px-0">
          Copyright <i className="fa-regular fa-copyright" />
          Your Website 2019
        </div>
      </div>
    );
  }
}
