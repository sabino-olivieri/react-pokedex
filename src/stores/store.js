import { configureStore } from '@reduxjs/toolkit';
import PokemonSlice from './slices/PokemonSlice';
import PagePokemonSlice from './slices/PagePokemonSlice';
import NextButtonSlice from './slices/NextButtonSlice';
import PrevButtonSlice from './slices/PrevButtonSlice';
import SidebarShowSlice from './slices/SidebarShowSlice';
import SelectedPokemonSlice from './slices/SelectedPokemonSlice';
import MyPokemonSlice from './slices/MyPokemonSlice';
import ToastSlice from './slices/ToastSlice';

const store = configureStore({
    reducer: {
        pokemon: PokemonSlice,
        pagePokemon: PagePokemonSlice,
        nextbutton: NextButtonSlice,
        prevbutton: PrevButtonSlice,
        sidebarShow: SidebarShowSlice,
        selectedpokemon: SelectedPokemonSlice,
        myPokemon: MyPokemonSlice,
        toast: ToastSlice,
    },
});

export default store;