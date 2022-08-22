import React, { Component } from "react";
import { connect } from "react-redux";
class TiketSeat extends Component {
  renderSeat = () => {
    let { seatRow } = this.props;
    return seatRow.danhSachGhe.map((seat, index) => {
      let cssBookedSeat = "";
      let disable = false;
      // Trang thái ghế đã được người khác đặt
      if (seat.daDat) {
        cssBookedSeat = "gheDuocChon";
        disable = true;
      }
      // Xét trạng thái ghế
      let cssChosenSeat = "";
      let indexChosenSeat = this.props.seatChosenList.findIndex(
        (chosenSeat) => chosenSeat.soGhe === seat.soGhe
      );
      if (indexChosenSeat !== -1) {
        cssChosenSeat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            const action = {
              type: "BOOKING_TICKET",
              payload: {
                seat: seat,
              },
            };
            this.props.dispatch(action);
          }}
          key={index}
          disabled={disable}
          className={`ghe ${cssBookedSeat} ${cssChosenSeat}`}
        >
          {seat.soGhe}
        </button>
      );
    });
  };
  renderFirstRow = () => {
    let { seatRow } = this.props;
    return seatRow.danhSachGhe.map((row, index) => {
      return (
        <button className="rowNumber" key={index}>
          {row.soGhe}
        </button>
      );
    });
  };
  renderSeatRow = () => {
    let { firstRow, seatRow } = this.props;
    if (firstRow === 0) {
      return (
        <div>
          <span className="firstChar">{seatRow.hang}</span>
          {this.renderFirstRow()}
        </div>
      );
    } else {
      return (
        <div>
          <span className="firstChar">{seatRow.hang}</span> {this.renderSeat()}
        </div>
      );
    }
  };

  render() {
    return <div className=" text-light">{this.renderSeatRow()}</div>;
  }
}

const mapStateToProps = (state) => ({
  seatChosenList: state.bookingTicketReducer.seatChosenList,
});

export default connect(mapStateToProps)(TiketSeat);
