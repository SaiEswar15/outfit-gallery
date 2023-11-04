import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name : "apiData",
    initialState : {
        productData : "",
        searchData : [],
        firstData : []
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
        }
        
    }
})

export const apiActions = apiSlice.actions;

export default apiSlice;