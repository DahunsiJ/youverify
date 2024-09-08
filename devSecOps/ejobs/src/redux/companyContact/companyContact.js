import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyContact : {},
    error: null,
    loading: false
}

const contactSlice = createSlice({
    name: "companyContact",
    initialState,
    reducers: {
        setCompanyContact : (state, action)=>{
            return {...state, companyContact: action.payload}
        },
        updateCompanyContact: (state, action) => {
            return {...state, companyContact: action.payload}
        }
    }
})

export const { setCompanyContact, updateCompanyContact } = contactSlice.actions

export default contactSlice.reducer