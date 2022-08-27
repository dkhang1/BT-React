import React, { Component } from "react";
import { connect } from "react-redux";

class QlsvTable extends Component {
  render() {
    let { arrSinhVien } = this.props;
    return (
      <table className="table mt-4">
        <thead>
          <tr className="bg-dark text-white">
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrSinhVien.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      const action = {
                        type: "SUA_SINH_VIEN",
                        payload: {
                          sinhVienCapNhat: sv,
                        },
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => {
                      const action = {
                        type: "XOA_SINH_VIEN",
                        payload: {
                          maSVClick: sv.maSV,
                        },
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien: state.qlsvFormReducer.arrSinhVien,
});

export default connect(mapStateToProps)(QlsvTable);
