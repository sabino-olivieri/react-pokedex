import { createSlice } from "@reduxjs/toolkit";

const MyPokemonSlice = createSlice({
    name: 'myPokemon',
    initialState: [],
    reducers: {
        updateMyPokemon: (state, action)=> {
            
            localStorage.setItem('MyPokemon', JSON.stringify(action.payload));
            
            return action.payload
        }
    }
})

export const {updateMyPokemon} = MyPokemonSlice.actions;

export default MyPokemonSlice.reducer;