import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="py-5 px-3 text-center" style={{ backgroundColor: "#e8ecef" }}>
        <h2 className="fs-1 fw-bold">A Warn Welcome!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          eligendi, doloremque alias ipsa quod repudiandae rerum sint maxime
          magni nemo! Molestiae unde obcaecati provident et impedit vel alias
          harum corporis?
        </p>
        <button className="btn btn-primary">Call to action!</button>
      </div>
    );
  }
}
