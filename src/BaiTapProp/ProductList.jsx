import React, { Component } from "react";
import ProductItem from "./ProductItem ";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ProductList extends Component {
  detailInfo = (clickedProduct) => {
    this.setState({
      detailProduct: clickedProduct,
    });
  };

  state = {
    detailProduct: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  render() {
    let { addToCart } = this.props;
    let {
      tenSP,
      maSP,
      hinhAnh,
      ram,
      rom,
      heDieuHanh,
      manHinh,
      cameraSau,
      cameraTruoc,
      giaBan,
    } = this.state.detailProduct;

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <div className="row">{
          data.map((phone, index)=>{
            return (
              <div className="col-4" key={index}>
                <ProductItem addToCart={addToCart} phone={phone} detailInfo={this.detailInfo} />
              </div>
            );
          })
        }</div>
        <div className="mt-5">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img className="w-100" src={hinhAnh} alt="..." />
            </div>
            <div className="col-8">
              <h3>Thông số kĩ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hề điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
