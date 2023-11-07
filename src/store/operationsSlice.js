import { createSlice } from "@reduxjs/toolkit";

const operationsSlice = createSlice({
    name : "operations",
    initialState : {
        sidebar : "none",
        showMoreButton : "block"
    },
    reducers : {

        changeSidebarStatus(state,action)
        {
            console.log("in", action.payload)
            return {
                ...state,
                sidebar : action.payload
            }
        },
        changeShowMoreButtonStatus(state,action)
        {
            console.log("in", action.payload)
            return {
                ...state,
                showMoreButton : action.payload
            }
        }
        
    }
})

export const operationsActions = operationsSlice.actions;

export default operationsSlice;