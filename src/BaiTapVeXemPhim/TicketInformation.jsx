import React, { Component } from "react";
import { connect } from "react-redux";

class TicketInformation extends Component {
  render() {
    let { seatChosenList } = this.props;
    return (
      <div className="mt-5">
        <div className="seat-type">
          <button className="gheDuocChon"></button>
          <span style={{ fontSize: "20px" }} className="ms-1 text-light">
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span style={{ fontSize: "20px" }} className="ms-1 text-light">
            Ghế đang chọn
          </span>
          <br />
          <button className="ghe m-0"></button>
          <span style={{ fontSize: "20px" }} className="ms-1 text-light">
            Ghế chưa đặt
          </span>
        </div>
        <table className="table table-bordered text-light mt-2">
          <thead>
            <tr className="text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody className="text-warning">
            {seatChosenList.map((seat, index) => {
              return (
                <tr key={index}>
                  <td>{seat.soGhe}</td>
                  <td>{seat.gia.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn border-0 text-danger"
                      onClick={() => {
                        const action = {
                          type: "CANCEL_TICKET",
                          payload: {
                            soGhe: seat.soGhe,
                          },
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td className="text-warning">
                {seatChosenList.reduce((totalprice, seat, index) => {
                  return (totalprice += seat.gia);
                },0).toLocaleString()}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  seatChosenList: state.bookingTicketReducer.seatChosenList,
});

export default connect(mapStateToProps)(TicketInformation);
