import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
export default class Body extends Component {
  render() {
    return (
      <div className="body container py-5 px-0">
        <div className="banner pb-5">
          <Banner />
        </div>
        <div className="item">
          <Item />
        </div>
      </div>
    );
  }
}
