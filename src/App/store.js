import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "../features/CalculatorSlice";
import { counterReducer } from "../features/CounterSlice";
import { TodoReducer } from "../features/TodoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
    Todo : TodoReducer
  },
});

export default store;
