import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentApplication : {},
    error: null,
    loading: false,
};

const currentApplicationSlice = createSlice({
    name: "currentApplication",
    initialState,
    reducers:{
        setCurrentApplication: (state, action)=>{
        return { ...state, loading: false, error: false, currentApplication: action.payload };
        }
    }
})

export const {setCurrentApplication} = currentApplicationSlice.actions;
export default currentApplicationSlice.reducer