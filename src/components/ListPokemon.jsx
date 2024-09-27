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

    const [numPokemon, setNumPokemon] = useState(12);

    // Stato per gestire il caricamento
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setNumPokemon(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${numPokemon}`)
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
    }, [dispatch, numPokemon]);

    return (
        <>
            {loading ? (
                <Loader /> // Mostra il loader mentre i dati vengono caricati
            ) : (
                <>
                    {poke.length > 0 ? (
                        <>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <h3>All Pokémon:</h3>
                                <div className='bg-white text-black rounded d-flex align-items-center'>
                                    <label htmlFor="num-pokemon" className='ps-2'>N° Pokémon: </label>
                                    <select name=""  className='ms_option rounded px-4 py-2' value={numPokemon} id='num-pokemon' onChange={handleChange}>
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="48">48</option>
                                        <option value="60">60</option>
                                    </select>
                                </div>
                            </div>
                            {poke.map((pokemon, index) => (
                                <Card key={index} pokemon={pokemon} />
                            ))}

                            <div className="d-flex justify-content-between">
                                {prev ? <PrevButton link={prev} /> : ''}
                                {next ? <NextButton link={next} /> : ''}
                            </div>
                        </>
                    ) : (
                        <h3>No Pokémon found</h3>
                    )}
                </>
            )}
        </>
    );
}
