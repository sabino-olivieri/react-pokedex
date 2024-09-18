import { createSlice } from "@reduxjs/toolkit";

const PrevButtonSlice = createSlice({
    name: 'prevbutton',
    initialState: null,
    reducers: {
        changeLinkPrev: (state, action) => {
            console.log(action.payload);
            
            return action.payload
        }
    }
});

export const {changeLinkPrev} = PrevButtonSlice.actions;

export default PrevButtonSlice.reducer;