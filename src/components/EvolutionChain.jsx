import React, { useEffect, useState } from "react";
import axios from "axios";
import EvolutionCard from "./EvolutionCard";
import Loader from "./Loader";

const EvolutionChain = ({ pokemonUrl }) => {
    const [evolutionChain, setEvolutionChain] = useState(null);

    useEffect(() => {
        const fetchEvolutionChain = async () => {
            try {
                // Ottieni i dati del Pokémon
                if(pokemonUrl) {
                    const pokemonResponse = await axios.get(pokemonUrl);
                    const speciesUrl = pokemonResponse.data.species.url;
    
                    // Ottieni le informazioni della specie
                    const speciesResponse = await axios.get(speciesUrl);
    
    
                    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
    
                    // Ottieni la catena evolutiva
                    const evolutionResponse = await axios.get(evolutionChainUrl);
                    setEvolutionChain(evolutionResponse.data);

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
                    {evolutionChain ? renderEvolution(evolutionChain.chain) : <Loader/>}

                </div>
            </div>
        </div>
    );
};

export default EvolutionChain;
