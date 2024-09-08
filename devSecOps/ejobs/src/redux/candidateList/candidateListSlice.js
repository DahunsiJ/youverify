import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    candidateList : [],
    error: null,
    loading: false
}

const candidateSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
        setCandidateList : (state, action)=>{
            state.candidateList = action.payload
            state.error = null
            state.loading = false
        },
        addCandidate : (state, action)=>{
            state.candidateList.push(action.payload)
        },
        updateCandidate : (state, action)=>{
            state.candidateList = state.candidateList.map(
                eachCandidate=>eachCandidate._id === action.payload._id ? action.payload : eachCandidate
            )
        },
        removeCandidate : (state, action)=>{
            state.candidateList = state.candidateList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setCandidateList, removeCandidate, addCandidate, updateCandidate } = candidateSlice.actions

export default candidateSlice.reducer