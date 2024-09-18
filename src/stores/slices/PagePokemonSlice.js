import { createSlice } from "@reduxjs/toolkit";

const PagePokemonSlice = createSlice({
    name: 'pagePokemon',
    initialState: [],
    reducers: {
        addPagePokemon: (state, action) => {
            return [...action.payload]
        }
    }
});

export const {addPagePokemon} = PagePokemonSlice.actions;

export default PagePokemonSlice.reducer;