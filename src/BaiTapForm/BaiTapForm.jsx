import React, { Component } from "react";
import { connect } from "react-redux";

class BaiTapForm extends Component {
  render() {
    return (
      <div className="container">
        {/* <Form />
        <Table /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapForm);
