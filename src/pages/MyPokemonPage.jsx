import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateMyPokemon } from "../stores/slices/MyPokemonSlice";
import Card from "../components/Card";
import FreeAll from "../components/FreeAll";

export default function MyPokemonPage() {

    const dispatch = useDispatch();
    const myPokemon = useSelector((state) => state.myPokemon);

    useEffect(() => {

        const storedPokemon = localStorage.getItem('MyPokemon');

        if (storedPokemon) {

            const parsedPokemon = JSON.parse(storedPokemon);
            dispatch(updateMyPokemon(parsedPokemon));
        } else {
            dispatch(updateMyPokemon([]));
        }
    }, [dispatch]);

    return (
        <>


            {myPokemon.length > 0 ? (
                <>

                    <div className="d-flex justify-content-between mb-2">
                        <h3>My Pokémon:</h3>
                        <FreeAll />
                    </div>
                    {myPokemon.map((pokemon) => (
                        <Card pokemon={pokemon} key={pokemon.id} />
                    ))}



                </>
            ) : (
                <h3 className="p-3">You don't have any Pokémon</h3>
            )}
        </>
    );

}