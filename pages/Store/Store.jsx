import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/todoSlice";

const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
    
  });
  
  
  export default store;