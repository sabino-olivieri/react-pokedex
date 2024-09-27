import { addPagePokemon } from "../stores/slices/PagePokemonSlice";
import { changeLinkNext } from "../stores/slices/NextButtonSlice";
import { changeLinkPrev } from "../stores/slices/PrevButtonSlice";
import callApi from "./callApi";

export default async function fetchPage(link, dispatch) {
    try {
        const data = await callApi(link); // Chiamata API asincrona
        dispatch(addPagePokemon(data.results));
        dispatch(changeLinkNext(data.next));
        dispatch(changeLinkPrev(data.previous));
    } catch (error) {
        console.error("Errore durante il fetch della pagina:", error);
    }
}
