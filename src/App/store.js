import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "../features/CalculatorSlice";
import { counterReducer } from "../features/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
  },
});

export default store;
