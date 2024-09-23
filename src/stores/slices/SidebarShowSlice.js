import { createSlice } from "@reduxjs/toolkit";

const SidebarShowSlice = createSlice({
    name: 'sidebarShow',
    initialState: false,
    reducers: {
        changeVisibility: (state,action) => {
            return action.payload
        }
    }
})

export const {changeVisibility} = SidebarShowSlice.actions;

export default SidebarShowSlice.reducer;