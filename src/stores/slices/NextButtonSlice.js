import { createSlice } from "@reduxjs/toolkit";

const NextButtonSlice = createSlice({
    name: 'nextbutton',
    initialState: null,
    reducers: {
        changeLinkNext: (state, action) => {
            
            return action.payload
        }
    }
});

export const {changeLinkNext} = NextButtonSlice.actions;

export default NextButtonSlice.reducer;