import { createSlice } from "@reduxjs/toolkit";

const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState: [],
    reducers: {
        addPokemon: (state, action) => {
            return [...action.payload]; 
        }
    }
});
 
export const { addPokemon } = PokemonSlice.actions;

export default PokemonSlice.reducer;