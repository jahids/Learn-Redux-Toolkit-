import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment default vabe peramitar hisabe state + action receve kore
    // state holo initial state && action e asbe paylod gula
    increment: (state, action) => {
      state.value += 1;
    },

    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

// export all action
// counter slice theka destructuring kore method/ function gula export kora hoice
// action use kora hoice karon redux r vashai reducers r modde method gula ak akta action
export const { increment, decrement } = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;
