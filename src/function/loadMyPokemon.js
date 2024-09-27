import { updateMyPokemon } from "../stores/slices/MyPokemonSlice";

export default function loadMyPokemon(dispatch) {
    const storedPokemon = localStorage.getItem('MyPokemon');

    if (storedPokemon) {

        const parsedPokemon = JSON.parse(storedPokemon);
        dispatch(updateMyPokemon(parsedPokemon));
    } else {
        dispatch(updateMyPokemon([]));
    }
}