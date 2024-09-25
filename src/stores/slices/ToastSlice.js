import { createSlice } from "@reduxjs/toolkit";

const ToastSlice = createSlice({
    name: 'toast',
    initialState: '',
    reducers: {
        changeText: (state, action) => {
            return action.payload
        }
    }
})

export const {changeText} = ToastSlice.actions;
export default ToastSlice.reducer;