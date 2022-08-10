import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default class ExersiseCart extends Component {
  state = {
    cartData: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 1,
      },
    ],
  };
  // thêm vào giỏ hàng
  addToCart = (addedProduct) => {
    // chọn ra sp trong giỏ hàng
    let cartProduct = {
      maSP: addedProduct.maSP,
      tenSP: addedProduct.tenSP,
      giaBan: addedProduct.giaBan,
      hinhAnh: addedProduct.hinhAnh,
      soLuong: 1,
    };
    // kiểm tra sp có trong giỏ hàng hay k
    var cartUpdate = [...this.state.cartData];
    let index = cartUpdate.findIndex((pro) => pro.maSP === cartProduct.maSP);
    if (index !== -1) {
      // đã có thì tăng số lương
      cartUpdate[index].soLuong += 1;
    } else {
      // chưa có thì push vào mảng
      cartUpdate.push(cartProduct);
    }
    // render lại
    this.setState({
      cartData: cartUpdate,
    });
  };
  // xóa sản phẩm trong giỏ hàng
  removeFromCart = (productId) => {
    var cartUpdate = [...this.state.cartData];
    let index = cartUpdate.findIndex((pro) => pro.maSP === productId);
    if (index !== -1) {
      cartUpdate.splice(index, 1);
    }
    // render lại
    this.setState({
      cartData: cartUpdate,
    });
  };
  // tăng giảm số lượng
  changeAmount = (productId, action) => {
    //action: hành động tăng(true) hoặc giảm (false)
    var cartUpdate = [...this.state.cartData];
    let index = cartUpdate.findIndex((pro) => pro.maSP === productId);
    if (action) {
      cartUpdate[index].soLuong += 1;
    } else {
      if (cartUpdate[index].soLuong > 1) {
        cartUpdate[index].soLuong -= 1;
      }
    }
    this.setState({
      cartData: cartUpdate,
    });
  };
  render() {
    let totalProduct = this.state.cartData.reduce(
      (total, cardProduct, index) => {
        return (total += cardProduct.soLuong);
      },
      0
    );

    return (
      <div className="container">
        <h2 className="text-center">Bài tập giỏ hàng (Props)</h2>
        <Cart
          cartData={this.state.cartData}
          removeFromCart={this.removeFromCart}
          changeAmount={this.changeAmount}
        />
        <div className="text-end">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ({totalProduct})
          </span>
        </div>
        <ProductList addToCart={this.addToCart} />
      </div>
    );
  }
}
