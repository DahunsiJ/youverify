
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  certificateList: [],
  error: null,
  loading: false,
};

const certificateSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {
      setCertificateList : (state, action)=>{
          state.certificateList = action.payload
          state.error = null
          state.loading = false
      },
      addNewCertificate : (state, action)=>{
          state.certificateList.push(action.payload)
      },
      removeCertificate : (state, action)=>{
          state.certificateList = state.certificateList.filter(eachCertificate=>eachCertificate._id !== action.payload._id)
      },
      updateCertificate: (state, action) => {
          state.certificateList = state.certificateList.map(
              eachCertificate => eachCertificate._id === action.payload._id ? action.payload : eachCertificate
          );
      }
  }
})

export const { setCertificateList, addNewCertificate, removeCertificate, updateCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;