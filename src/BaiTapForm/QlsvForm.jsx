import React, { Component } from "react";
import { connect } from "react-redux";

class QlsvForm extends Component {
  renderError = (id, value, dataType) => {
    let errorMess = "";
    let newError = this.props.error;
    if (value.trim() === "") {
      errorMess = "Please fill this field !";
    } else {
      //Lỗi định dạng
      switch (dataType) {
        case "sdt": {
          let regexNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
          if (!regexNumber.test(value)) {
            errorMess = "Not in right pattern - only number";
          }
          break;
        }
        case "email": {
          let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (!regexEmail.test(value)) {
            errorMess = "Not in right pattern";
          }
          break;
        }
        case "maSV": {
          let regexID = /^\d+$/;
          if (!regexID.test(value)) {
            errorMess = "Not in right pattern - only number";
          }
        }
      }
    }
    newError[id] = errorMess;
    const action = {
      type: "VALIDATION",
      payload: {
        errorMess: newError,
      },
    };
    this.props.dispatch(action);
  };

  handleChange = (e) => {
    let { id, value } = e.target; //name , nguyễn văn a
    let dataType = e.target.id;

    this.renderError(id, value, dataType);
    const action = {
      type: "LAY_THONG_TIN_INPUT",
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let { error, sinhVien } = this.props;
    //check error (tất cả error phải rỗng)
    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
        break;
      }
    }

    //check value (productInfo) tất cả value phải khác rỗng
    for (let key in sinhVien) {
      if (sinhVien[key] === "") {
        error[key] = "Please fill this field !";
        valid = false;
        // break;
      }
    }

    if (!valid) {
      const action = {
        type: "VALIDATION",
        payload: {
          errorMess: error,
        },
      };
      this.props.dispatch(action);
      alert("Dữ liệu không hợp lệ");
      return;
    }

    const action = {
      type: "THEM_SINH_VIEN",
      payload: {
        sinhVien: { ...this.props.sinhVien },
      },
    };
    this.props.dispatch(action);
  };

  updateInfo = () => {
    let valid = true;
    let { error, sinhVien } = this.props;
    //check error (tất cả error phải rỗng)
    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
        break;
      }
    }

    //check value (productInfo) tất cả value phải khác rỗng
    for (let key in sinhVien) {
      if (sinhVien[key] === "") {
        error[key] = "Please fill this field !";
        valid = false;
        // break;
      }
    }

    if (!valid) {
      const action = {
        type: "VALIDATION",
        payload: {
          errorMess: error,
        },
      };
      this.props.dispatch(action);
      alert("Dữ liệu không hợp lệ");
      return;
    }
    const action = {
      type: "CAP_NHAT_SINH_VIEN",
      payload: {
        sinhVien: { ...this.props.sinhVien },
      },
    };
    this.props.dispatch(action);
  };

  render() {
    let { sinhVien, error } = this.props;
    return (
      <div>
        <h3 className="bg-dark text-white p-3">Thông tin sinh viên</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="fw-bold">Mã SV</label>
                <input
                  type="text"
                  className="form-control"
                  id="maSV"
                  onChange={this.handleChange}
                  value={sinhVien.maSV}
                />
                <span className="text-danger">{error.maSV}</span>
              </div>
              <div className="form-group mt-2">
                <label className="fw-bold">Số điện thoại</label>
                <input
                  type="tel"
                  className="form-control"
                  id="sdt"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  value={sinhVien.hoTen}
                />
                <span className="text-danger">{error.hoTen}</span>
              </div>
              <div className="form-group mt-2">
                <label className="fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                  value={sinhVien.email}
                />
                <span className="text-danger">{error.email}</span>
              </div>
            </div>
          </div>
          <button className="btn btn-success mt-4">Thêm sinh viên</button>
          <button
            type="button"
            className="btn btn-danger mt-4 ms-2"
            onClick={this.updateInfo}
          >
            Cập nhật
          </button>
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              onChange={(e) => {
                const action = {
                  type: "TIM_KIEM_SINH_VIEN",
                  payload: {
                    keyword: e.target.value,
                  },
                };
                this.props.dispatch(action);
              }}
            />
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
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
