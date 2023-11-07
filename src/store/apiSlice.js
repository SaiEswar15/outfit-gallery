import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name : "apiData",
    initialState : {
        productData : "",
        searchData : [],
        firstData : [],
        loggedin : false,
    },
    reducers : {

        increment(state,action)
        {
            return {
                ...state,
                apiData : action.payload
            }
        },
        changeProductData(state,action)
        {
            console.log("IIin", action.payload)
            return{
                ...state,
                productData : action.payload
            }
        },
        changeSearchData(state,action)
        {
            console.log("in", action.payload)
            return{
                ...state,
                searchData : action.payload
            }
        },
        addFirstData(state,action)
        {
            return{
                ...state,
                firstData : action.payload
            }
        },
        changeLoginStatus(state,action)
        {
            return{
                ...state,
                loggedin : action.payload
            }
        }
        
    }
})

export const apiActions = apiSlice.actions;

export default apiSlice;