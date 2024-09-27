import { useDispatch } from "react-redux"
import { updateMyPokemon } from "../stores/slices/MyPokemonSlice"
import { changeText } from "../stores/slices/ToastSlice";

export default function FreeAll() {
    const dispatch = useDispatch()
    const handleClick = ()=> {
        dispatch(updateMyPokemon([]));
        dispatch(changeText('All Pokémon have been released'));
    }
    return (
        <button className="btn btn-outline-light border-2" onClick={handleClick}>
            Free All
        </button>
    )
}