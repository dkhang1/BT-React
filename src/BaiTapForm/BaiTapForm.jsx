import React, { Component } from "react";
import { connect } from "react-redux";
import QlsvForm from "./QlsvForm";
import QlsvTable from "./QlsvTable";

class BaiTapForm extends Component {
  render() {
    return (
      <div className="container text-start">
        <h3>Bài tập validation form</h3>
        <QlsvForm />
        <QlsvTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapForm);
