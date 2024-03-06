import { configureStore } from "@reduxjs/toolkit";
import TodoSystem from "./TodoReducer"


const store=configureStore({
    reducer:{
        todo:TodoSystem
    }
})

export default store