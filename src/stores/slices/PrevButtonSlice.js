import { createSlice } from "@reduxjs/toolkit";

const PrevButtonSlice = createSlice({
    name: 'prevbutton',
    initialState: null,
    reducers: {
        changeLinkPrev: (state, action) => {
            
            return action.payload
        }
    }
});

export const {changeLinkPrev} = PrevButtonSlice.actions;

export default PrevButtonSlice.reducer;