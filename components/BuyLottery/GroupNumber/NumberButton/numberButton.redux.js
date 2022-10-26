import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: [],
};

export const NumberButton = createSlice({
  name: "NumberButton",
  initialState,
  reducers: {
    handleAddValueNumber: (state, { payload }) => {
      if (!(payload in state.number)) {
        state.number.push(payload);
        state.number = [...new Set(state.number)];
      }
    },
    handleRemoveValueNumber: (state, { payload }) => {
      state.number = state.number.filter((i) => i !== payload);
    },
  },
});
export const { handleAddValueNumber, handleRemoveValueNumber } =
  NumberButton.actions;

export default NumberButton.reducer;
