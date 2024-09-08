import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employerAddressProofList : [],
    error: null,
    loading: false
}

const employerAddressProofSlice = createSlice({
    name: "employerAddressProofs",
    initialState,
    reducers: {
        setemployerAddressProofList : (state, action)=>{
            state.employerAddressProofList = action.payload
            state.error = null
            state.loading = false
        },
        addNewemployerAddressProof : (state, action)=>{
            state.employerAddressProofList.push(action.payload)
        },
        removeAnemployerAddressProof : (state, action)=>{
            state.employerAddressProofList = state.employerAddressProofList.filter(eachemployerAddressProof=>eachemployerAddressProof._id !== action.payload._id)
        },
        updateAnemployerAddressProof: (state, action) => {
            state.employerAddressProofList = state.employerAddressProofList.map(
                eachemployerAddressProof => eachemployerAddressProof._id === action.payload._id ? action.payload : eachemployerAddressProof
            );
        }
    }
})

export const { setemployerAddressProofList, addNewemployerAddressProof, removeAnemployerAddressProof, updateAnemployerAddressProof } = employerAddressProofSlice.actions

export default employerAddressProofSlice.reducer