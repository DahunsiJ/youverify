import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employerJobList : [],
    error: null,
    loading: false
}

const employerJobSlice = createSlice({
    name: "employerJobs",
    initialState,
    reducers: {
        setEmployerJobList : (state, action)=>{
            state.employerJobList = action.payload
            state.error = null
            state.loading = false
        },
        addNewEmployerJob : (state, action)=>{
            state.employerJobList.push(action.payload)
        },
        removeAnEmployerJob : (state, action)=>{
            state.employerJobList = state.employerJobList.filter(eachEmployerJob=>eachEmployerJob._id !== action.payload._id)
        },
        updateAnEmployerJob: (state, action) => {
            state.employerJobList = state.employerJobList.map(
                eachEmployerJob => eachEmployerJob._id === action.payload._id ? action.payload : eachEmployerJob
            );
        }
    }
})

export const { setEmployerJobList, addNewEmployerJob, removeAnEmployerJob, updateAnEmployerJob } = employerJobSlice.actions

export default employerJobSlice.reducer