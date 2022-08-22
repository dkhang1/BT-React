const stateDefault = {
  seatChosenList: [],
};

export const bookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BOOKING_TICKET": {
      let { seat } = action.payload;
      let seatChosenListUpate = [...state.seatChosenList];
      let index = seatChosenListUpate.findIndex(
        (chosenSeat) => chosenSeat.soGhe === seat.soGhe
      );
      if (index !== -1) {
        seatChosenListUpate.splice(index, 1);
      } else {
        seatChosenListUpate.push(seat);
      }
      state.seatChosenList = seatChosenListUpate;
      return { ...state };
    }

    case "CANCEL_TICKET": {
      let { soGhe } = action.payload;
      let seatChosenListUpate = [...state.seatChosenList];
      seatChosenListUpate = seatChosenListUpate.filter(
        (soGheChon) => soGheChon.soGhe !== soGhe
      );
      state.seatChosenList = seatChosenListUpate;
      return { ...state };
    }
    default:
      return state;
  }
};
