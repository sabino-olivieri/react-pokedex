import { createSlice } from "@reduxjs/toolkit";

const SelectedPokemonSlice = createSlice({
    name: 'selectedpokemon',
    initialState: '',
    reducers: {
        changeSelectedPokemon: (state, action) => {
            
            return action.payload
        }
    }
})

export const {changeSelectedPokemon} = SelectedPokemonSlice.actions;

export default SelectedPokemonSlice.reducer;