import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applicationList : [],
    error: null,
    loading: false
}

const applicationSlice = createSlice({
    name: "applications",
    initialState,
    reducers: {
        setApplicationList : (state, action)=>{
            state.applicationList = action.payload
            state.error = null
            state.loading = false
        },
        addApplication : (state, action)=>{
            state.applicationList.push(action.payload)
        },
        updateApplication : (state, action)=>{
            state.applicationList = state.applicationList.map(
                eachApplication=>eachApplication._id === action.payload._id ? action.payload : eachApplication
            )
        },
        removeApplication : (state, action)=>{
            state.applicationList = state.applicationList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setApplicationList, removeApplication, addApplication, updateApplication } = applicationSlice.actions

export default applicationSlice.reducer