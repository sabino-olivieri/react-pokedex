import { useEffect } from "react";
import useCallApi from "./useCallApi";
import { useDispatch } from "react-redux";
import { addPagePokemon } from "../stores/slices/PagePokemonSlice";
import { changeLinkNext } from "../stores/slices/NextButtonSlice";
import { changeLinkPrev } from "../stores/slices/PrevButtonSlice";

export default function useFetchPage(link) {
    const data = useCallApi(link); // Usa i valori restituiti da useCallApi
    const dispatch = useDispatch();
    // Effettua il log ogni volta che i dati cambiano
    useEffect(() => {
        if (data) {
            
            dispatch(addPagePokemon(data.results));
            dispatch(changeLinkNext(data.next));
            dispatch(changeLinkPrev(data.previous))
        }
    }, [data]); // Il log verrà eseguito solo quando data cambia

    // Restituisci i dati, loading ed error
    return data;
}
