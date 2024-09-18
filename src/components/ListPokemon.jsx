import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPagePokemon } from '../stores/slices/PagePokemonSlice';
import Card from './Card';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { changeLinkNext } from '../stores/slices/NextButtonSlice';
import { changeLinkPrev } from '../stores/slices/PrevButtonSlice';

export default function ListPokemon() {

    // Sposta gli hook nel corpo principale del componente
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.pagePokemon);

    const next = useSelector((state) => state.nextbutton);
    const prev = useSelector((state) => state.prevbutton)
    

    useEffect(() => {        

        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12")
            .then((resp) => {
                // Dispatcha i pokemon ricevuti
                dispatch(addPagePokemon(resp.data.results));
                dispatch(changeLinkNext(resp.data.next));
                dispatch(changeLinkPrev(resp.data.previous))
            })
            .catch((error) => {
                console.error("Errore durante il fetch dei Pokémon:", error);
            });

        
    }, []); // Aggiungi dispatch come dipendenza per evitare warning

    useEffect(() => {
        console.log(poke); // Controlla lo stato dei Pokémon
    }, [poke]); // Ogni volta che poke cambia, lo logga

    return (
        <>  
            {   
                poke.map((pokemon, index)=>(
                <Card key={index} pokemon={pokemon} />
            ))}
            
            <div className="d-flex justify-content-between">
                
                {prev ? <PrevButton link={prev}/> : ''}
                
                {next ? <NextButton link={next}/>: ''}

            </div>
        </>
    )
}