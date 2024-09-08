import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    salaryPaidList : [],
    error: null,
    loading: false
}

const salaryPaidSlice = createSlice({
    name: "salaryPaid",
    initialState,
    reducers: {
        setSalaryPaidList : (state, action)=>{
            state.salaryPaidList = action.payload
            state.error = null
            state.loading = false
        },
        addSalaryPaid : (state, action)=>{
            state.salaryPaidList.push(action.payload)
        },
        removeSalaryPaid : (state, action)=>{
            state.salaryPaidList = state.salaryPaidList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setSalaryPaidList, removeSalaryPaid, addSalaryPaid } = salaryPaidSlice.actions

export default salaryPaidSlice.reducer