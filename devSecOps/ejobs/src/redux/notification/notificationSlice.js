import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notificationList : [],
    error: null,
    loading: false
}

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        setNotificationList : (state, action)=>{
            state.notificationList = action.payload
            state.error = null
            state.loading = false
        },
        addNotification : (state, action)=>{
            state.notificationList.push(action.payload)
        },
        removeNotification : (state, action)=>{
            state.notificationList.filter(eachList=>eachList._id !== action.payload._id)
        },
    }
})

export const { setNotificationList, addNotification, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer