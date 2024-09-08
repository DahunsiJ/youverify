import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyProfileList : [],
    error: null,
    loading: false
}

const companyProfileSlice = createSlice({
    name: "companyProfiles",
    initialState,
    reducers: {
        setCompanyProfileList : (state, action)=>{
            state.companyProfileList = action.payload
            state.error = null
            state.loading = false
        },
        addCompanyProfile : (state, action)=>{
            state.companyProfileList.push(action.payload)
        },
        removeCompanyProfile : (state, action)=>{
            state.companyProfileList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setCompanyProfileList } = companyProfileSlice.actions

export default companyProfileSlice.reducer