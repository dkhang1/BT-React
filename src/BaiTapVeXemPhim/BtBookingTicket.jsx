import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBookingTicket.css";
import TicketInformation from "./TicketInformation";
import TicketSeat from "./TicketSeat";
import seatData from "../data/danhSachGhe.json";

class BtBookingTicket extends Component {
  renderSeatRow = () => {
    return seatData.map((seatRow, index) => {
      return (
        <div key={index}>
          <TicketSeat seatRow={seatRow} firstRow={index}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="w-100 h-100 position-fixed bookingMovie"
        style={{
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-100 h-100 position-fixed"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="container-fluid">
            <div className="row ">
              <div className="col-8 text-center">
                <h1 className="text-warning ">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <p className="text-light ">Màn hình</p>

                <div className="mt-1 screen mx-auto"></div>
                <div className="">{this.renderSeatRow()}</div>
              </div>
              <div className="col-4 ">
                <h1 className="text-light text-center">
                  DANH SÁCH VÉ BẠN CHỌN
                </h1>
                <TicketInformation />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BtBookingTicket);
