import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { cartData, removeFromCart, changeAmount } = this.props;
    // dữ liệu giỏ hàng

    return (
      //   <!-- Modal -->
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((cartProduct, index) => {
                    return (
                      <tr key={index}>
                        <td>{cartProduct.maSP}</td>
                        <td>
                          <img
                            src={cartProduct.hinhAnh}
                            width={50}
                            height={75}
                            alt="..."
                          />
                        </td>
                        <td>{cartProduct.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-secondary me-2"
                            onClick={() => {
                              changeAmount(cartProduct.maSP, false);
                            }}
                          >
                            -
                          </button>
                          {cartProduct.soLuong}
                          <button
                            className="btn btn-secondary ms-2"
                            onClick={() => {
                              changeAmount(cartProduct.maSP, true);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>{cartProduct.giaBan.toLocaleString()}</td>
                        <td>
                          {(
                            cartProduct.soLuong * cartProduct.giaBan
                          ).toLocaleString()}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              removeFromCart(cartProduct.maSP);
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
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
