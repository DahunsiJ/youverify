import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reportMadeList : [],
    error: null,
    loading: false
}

const reportMadeSlice = createSlice({
    name: "reportMade",
    initialState,
    reducers: {
        setReportMadeList : (state, action)=>{
            state.reportMadeList = action.payload
            state.error = null
            state.loading = false
        },
        addReportMade : (state, action)=>{
            state.reportMadeList.push(action.payload)
        },
        removeReportMade : (state, action)=>{
            state.reportMadeList = state.reportMadeList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setReportMadeList, removeReportMade, addReportMade } = reportMadeSlice.actions

export default reportMadeSlice.reducer