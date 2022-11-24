import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    Adding: (state, action) => {
      console.log("adding", action);
      state.value =
        action.payload.firstnumber * 1 + action.payload.secoundnumber * 1;
    },

    Mainus: (state, action) => {
      console.log("mainus", action);
      state.value =
        action.payload.firstnumber * 1 - action.payload.secoundnumber * 1;
    },
  },
});

export const { Adding, Mainus } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
