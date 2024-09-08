import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobList : [],
    error : false,
    loading : false
}

const jobListSlice = createSlice({
    name : "jobList",
    initialState,
    reducers: {
        fetchingJobStart: (state)=>{
            return { ...state, loading: true, error: false}
        },
        fetchingJobSuccess: (state, action)=>{
            return {...state, loading: false, error: false, jobList: action.payload}
        },
        fetchinfJobFailure: (state, action)=>{
            return {...state, loading: false, error: action.payload}
        },
        updateJobList: (state, action)=>{
            return {...state, jobList: action.payload}
        }
    }
})


export const {fetchinfJobFailure, fetchingJobStart, fetchingJobSuccess, updateJobList} = jobListSlice.actions

export default jobListSlice.reducer