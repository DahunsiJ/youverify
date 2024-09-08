import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    salaryRecievedList : [],
    error: null,
    loading: false
}

const salaryRecievedSlice = createSlice({
    name: "salaryRecieved",
    initialState,
    reducers: {
        setSalaryRecievedList : (state, action)=>{
            state.salaryRecievedList = action.payload
            state.error = null
            state.loading = false
        },
        addSalaryRecieved : (state, action)=>{
            state.salaryRecievedList.push(action.payload)
        },
        removeSalaryRecieved : (state, action)=>{
            state.salaryRecievedList = state.salaryRecievedList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setSalaryRecievedList, removeSalaryRecieved, addSalaryRecieved } = salaryRecievedSlice.actions

export default salaryRecievedSlice.reducer