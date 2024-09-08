import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reportGottenList : [],
    error: null,
    loading: false
}

const reportGottenSlice = createSlice({
    name: "reportGotten",
    initialState,
    reducers: {
        setReportGottenList : (state, action)=>{
            state.reportGottenList = action.payload
            state.error = null
            state.loading = false
        },
        addReportGotten : (state, action)=>{
            state.reportGottenList.push(action.payload)
        },
        removeReportGotten : (state, action)=>{
            state.reportGottenList = state.reportGottenList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setReportGottenList, removeReportGotten, addReportGotten } = reportGottenSlice.actions

export default reportGottenSlice.reducer