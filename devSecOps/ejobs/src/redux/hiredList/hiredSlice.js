import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hiredList : [],
    error: null,
    loading: false
}

const hiredSlice = createSlice({
    name: "hireds",
    initialState,
    reducers: {
        setHiredList : (state, action)=>{
            state.hiredList = action.payload
            state.error = null
            state.loading = false
        },
        addHired : (state, action)=>{
            state.hiredList.push(action.payload)
        },
        removeHired : (state, action)=>{
            state.hiredList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setHiredList, addHired, removeHired } = hiredSlice.actions

export default hiredSlice.reducer