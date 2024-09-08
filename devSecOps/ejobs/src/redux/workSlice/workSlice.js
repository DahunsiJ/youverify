
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workExperienceList: [],
  error: null,
  loading: false,
};

const workExperienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
      setWorkExperienceList : (state, action)=>{
          state.workExperienceList = action.payload
          state.error = null
          state.loading = false
      },
      addNewWorkExperience : (state, action)=>{
          state.workExperienceList.push(action.payload)
      },
      removeAnWorkExperience : (state, action)=>{
          state.workExperienceList = state.workExperienceList.filter(eachWorkExperience=>eachWorkExperience._id !== action.payload._id)
      },
      updateAnWorkExperience: (state, action) => {
          state.workExperienceList = state.workExperienceList.map(
              eachWorkExperience => eachWorkExperience._id === action.payload._id ? action.payload : eachWorkExperience
          );
      }
  }
})

export const { setWorkExperienceList, addNewWorkExperience, removeAnWorkExperience, updateAnWorkExperience } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;