import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employerProofList : [],
    error: null,
    loading: false
}

const employerProofSlice = createSlice({
    name: "employerProofs",
    initialState,
    reducers: {
        setEmployerProofList : (state, action)=>{
            state.employerProofList = action.payload
            state.error = null
            state.loading = false
        },
        addNewEmployerProof : (state, action)=>{
            state.employerProofList.push(action.payload)
        },
        removeAnEmployerProof : (state, action)=>{
            state.employerProofList = state.employerProofList.filter(eachEmployerProof=>eachEmployerProof._id !== action.payload._id)
        },
        updateAnEmployerProof: (state, action) => {
            state.employerProofList = state.employerProofList.map(
                eachEmployerProof => eachEmployerProof._id === action.payload._id ? action.payload : eachEmployerProof
            );
        }
    }
})

export const { setEmployerProofList, addNewEmployerProof, removeAnEmployerProof, updateAnEmployerProof } = employerProofSlice.actions

export default employerProofSlice.reducer