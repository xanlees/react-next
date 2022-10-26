import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import NumberReducer from "../components/BuyLottery/GroupNumber/NumberButton/numberButton.redux";

export const store = configureStore({
  reducer: {
    app: Reducer,
    number_button: NumberReducer,
  },
});
