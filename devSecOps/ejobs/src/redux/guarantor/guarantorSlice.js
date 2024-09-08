
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guarantorList: [],
  error: null,
  loading: false,
};

const guarantorSlice = createSlice({
  name: "guarantors",
  initialState,
  reducers: {
      setGuarantorList : (state, action)=>{
          state.guarantorList = action.payload
          state.error = null
          state.loading = false
      },
      addNewGuarantor : (state, action)=>{
          state.guarantorList.push(action.payload)
      },
      removeGuarantor : (state, action)=>{
          state.guarantorList = state.guarantorList.filter(eachGuarantor=>eachGuarantor._id !== action.payload._id)
      },
      updateGuarantor: (state, action) => {
          state.guarantorList = state.guarantorList.map(
              eachGuarantor => eachGuarantor._id === action.payload._id ? action.payload : eachGuarantor
          );
      }
  }
})

export const { setGuarantorList, addNewGuarantor, removeGuarantor, updateGuarantor } = guarantorSlice.actions;
export default guarantorSlice.reducer;