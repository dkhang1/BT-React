import { combineReducers, createStore } from "redux";
import { bookingTicketReducer } from "./reducer/bookingTicketReducer";
import { qlsvFormReducer } from "./reducer/qlsvFormReducer";

const rootReducer = combineReducers({
  qlsvFormReducer: qlsvFormReducer,
  bookingTicketReducer: bookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
