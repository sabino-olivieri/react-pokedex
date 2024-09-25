import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPagePokemon } from '../stores/slices/PagePokemonSlice';
import Card from './Card';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { changeLinkNext } from '../stores/slices/NextButtonSlice';
import { changeLinkPrev } from '../stores/slices/PrevButtonSlice';

import Loader from './Loader'; // Assicurati di avere un componente Loader

export default function ListPokemon() {
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.pagePokemon);
    const next = useSelector((state) => state.nextbutton);
    const prev = useSelector((state) => state.prevbutton);
    
    // Stato per gestire il caricamento
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12")
            .then((resp) => {
                dispatch(addPagePokemon(resp.data.results));
                dispatch(changeLinkNext(resp.data.next));
                dispatch(changeLinkPrev(resp.data.previous));
            })
            .catch((error) => {
                console.error("Errore durante il fetch dei Pokémon:", error);
            })
            .finally(() => {
                setLoading(false); // Imposta loading a false dopo la risposta
            });
    }, [dispatch]);


    return (
        <>
            {loading ? (
                <Loader /> // Mostra il loader mentre i dati vengono caricati
            ) : (
                <>
                    {poke.map((pokemon, index) => (
                        <Card key={index} pokemon={pokemon} />
                    ))}

                    <div className="d-flex justify-content-between">
                        {prev ? <PrevButton link={prev}/> : ''}
                        {next ? <NextButton link={next}/> : ''}
                    </div>


                </>
            )}
        </>
    );
}
