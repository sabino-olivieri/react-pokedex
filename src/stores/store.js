import { configureStore } from '@reduxjs/toolkit';
import countSlice from './slices/countSlice';
import PokemonSlice from './slices/PokemonSlice';
import PagePokemonSlice from './slices/PagePokemonSlice';
import NextButtonSlice from './slices/NextButtonSlice';
import PrevButtonSlice from './slices/PrevButtonSlice';
import SidebarShowSlice from './slices/SidebarShowSlice';
import SelectedPokemonSlice from './slices/SelectedPokemonSlice';

const store = configureStore({
    reducer: {
        count: countSlice,  // count: nome etichetta // azioni che può fare
        pokemon: PokemonSlice,
        pagePokemon: PagePokemonSlice,
        nextbutton: NextButtonSlice,
        prevbutton: PrevButtonSlice,
        sidebarShow: SidebarShowSlice,
        selectedpokemon: SelectedPokemonSlice,
    },
});

export default store;