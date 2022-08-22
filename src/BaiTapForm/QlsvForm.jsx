import React, { Component } from "react";
import { connect } from "react-redux";

class QlsvForm extends Component {
  handleChangeForm = (e) => {
    e.preventDefault();
  };
  render() {
    let { sinhVien, error } = this.props;
    return (
      <div>
        <h3 className="bg-dark text-white p-3">Thông tin sinh viên</h3>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const action = {
              type: "THEM_SINH_VIEN",
              payload: {
                sinhVien: { ...sinhVien },
              },
            };
            this.props.dispatch(action);
          }}
        >
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="fw-bold">Mã SV</label>
                <input
                  type="text"
                  className="form-control"
                  id="maSV"
                  onChange={(e) => {
                    const action = {
                      type: "LAY_THONG_TIN_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                  value={sinhVien.maSV}
                />
                <span className="text-danger">{error.maSV}</span>
              </div>
              <div className="form-group mt-2">
                <label className="fw-bold">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  id="sdt"
                  onChange={(e) => {
                    const action = {
                      type: "LAY_THONG_TIN_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                  value={sinhVien.sdt}
                />
                <span className="text-danger">{error.sdt}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="fw-bold">Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="hoTen"
                  onChange={(e) => {
                    const action = {
                      type: "LAY_THONG_TIN_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                  value={sinhVien.hoTen}
                />
                <span className="text-danger">{error.hoTen}</span>
              </div>
              <div className="form-group mt-2">
                <label className="fw-bold">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={(e) => {
                    const action = {
                      type: "LAY_THONG_TIN_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                  value={sinhVien.email}
                />
                <span className="text-danger">{error.email}</span>
              </div>
            </div>
          </div>
          <button className="btn btn-success mt-4">Thêm sinh viên</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.qlsvFormReducer.sinhVien,
  error: state.qlsvFormReducer.error,
});

export default connect(mapStateToProps)(QlsvForm);
