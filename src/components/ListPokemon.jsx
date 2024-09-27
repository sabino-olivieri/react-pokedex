import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPagePokemon } from '../stores/slices/PagePokemonSlice';
import Card from './Card';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Loader from './Loader';
import fetchPage from '../function/fetchPage';

export default function ListPokemon() {
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.pagePokemon);
    const next = useSelector((state) => state.nextbutton);
    const prev = useSelector((state) => state.prevbutton);

    const [numPokemon, setNumPokemon] = useState(12);
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setNumPokemon(e.target.value);
    };

    useEffect(() => {
        const initialFetch = async () => {
            setLoading(true);
            await fetchPage(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${numPokemon}`, dispatch);
            setLoading(false);
        };
        
        initialFetch();
    }, [dispatch, numPokemon]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {poke.length > 0 ? (
                        <>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <h3>All Pokémon:</h3>
                                <div className='bg-white text-black rounded d-flex align-items-center'>
                                    <label htmlFor="num-pokemon" className='ps-2'>N° Pokémon: </label>
                                    <select
                                        className='ms_option rounded px-4 py-2'
                                        value={numPokemon}
                                        id='num-pokemon'
                                        onChange={handleChange}
                                    >
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