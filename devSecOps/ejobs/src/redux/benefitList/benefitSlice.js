import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    benefitList : [],
    error: null,
    loading: false
}

const benefitSlice = createSlice({
    name: "benefits",
    initialState,
    reducers: {
        setBenefitList : (state, action)=>{
            state.benefitList = action.payload
            state.error = null
            state.loading = false
        },
        addBenefit : (state, action)=>{
            state.benefitList.push(action.payload)
        },
        removeBenefit : (state, action)=>{
            state.benefitList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setBenefitList, addBenefit, removeBenefit } = benefitSlice.actions

export default benefitSlice.reducer