import {configureStore} from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import operationsSlice from "./operationsSlice";


const store = configureStore({
    reducer :{
        api : apiSlice.reducer,
        operations : operationsSlice.reducer
    }
})

export default store;