import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educationList : [],
    error: null,
    loading: false
}

const educationSlice = createSlice({
    name: "educations",
    initialState,
    reducers: {
        setEducationList : (state, action)=>{
            state.educationList = action.payload
            state.error = null
            state.loading = false
        },
        addNewEducation : (state, action)=>{
            state.educationList.push(action.payload)
        },
        removeAnEducation : (state, action)=>{
            state.educationList = state.educationList.filter(eachEducation=>eachEducation._id !== action.payload._id)
        },
        updateAnEducation: (state, action) => {
            state.educationList = state.educationList.map(
                eachEducation => eachEducation._id === action.payload._id ? action.payload : eachEducation
            );
        }
    }
})

export const { setEducationList, addNewEducation, removeAnEducation, updateAnEducation } = educationSlice.actions

export default educationSlice.reducer