import React, { useEffect, useState } from "react";
import EvolutionCard from "./EvolutionCard";
import Loader from "./Loader";
import callApi from "../function/callApi"; // Importa la tua funzione callApi

const EvolutionChain = ({ pokemonUrl }) => {
    const [evolutionChain, setEvolutionChain] = useState(null);

    useEffect(() => {
        const fetchEvolutionChain = async () => {
            try {
                // Ottieni i dati del Pokémon
                if (pokemonUrl) {
                    const pokemonResponse = await callApi(pokemonUrl);
                    const speciesUrl = pokemonResponse.species.url;

                    // Ottieni le informazioni della specie
                    const speciesResponse = await callApi(speciesUrl);
                    const evolutionChainUrl = speciesResponse.evolution_chain.url;

                    // Ottieni la catena evolutiva
                    const evolutionResponse = await callApi(evolutionChainUrl);
                    setEvolutionChain(evolutionResponse);

                }
            } catch (error) {
                console.warn("Errore nel recupero della catena evolutiva:", error);
            }
        };

        fetchEvolutionChain();
    }, [pokemonUrl]);

    const renderEvolution = (chain) => {
        return (
            <>
                <EvolutionCard chain={chain} key={chain.species.name} />
                {chain.evolves_to.length > 0 && (
                    chain.evolves_to.map((evolution, index) => (
                        <React.Fragment key={index}>
                            {renderEvolution(evolution)}
                        </React.Fragment>
                    ))
                )}
            </>
        );
    };

    return (
        <div className="px-2 px-md-5">
            <div className="evolution card mb-3 border-0 p-4">
                <h4 className="mb-4">Evolution</h4>
                <div className="row g-3 flex-column flex-md-row">
                    {evolutionChain ? renderEvolution(evolutionChain.chain) : <Loader />}
                </div>
            </div>
        </div>
    );
};

export default EvolutionChain;
