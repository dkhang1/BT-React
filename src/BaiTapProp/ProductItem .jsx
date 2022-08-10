import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { phone, detailInfo, addToCart } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} alt="..." height={400} />
        <div className="card-body">
          <h3>{phone.tenSP}</h3>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              detailInfo(phone);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => {
              addToCart(phone);
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
