import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'count',    // nome etichetta
    initialState: {
        value: 0,
    },
    reducers: {  // azioni che può svolgere
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
