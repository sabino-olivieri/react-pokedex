import { useEffect, useState } from "react";
import axios from "axios";
import Types from "./Types";

export default function PokemonWeaknesses({ types }) {
    const [damageRelations, setDamageRelations] = useState({
        weaknesses: {},
        resistances: {},
        immunities: {}
    });

    useEffect(() => {
        const fetchDamageRelations = async () => {
            const promises = types.map(type => axios.get(type.type.url));
            const responses = await Promise.all(promises);

            const weaknesses = {};
            const resistances = {};
            const immunities = {};

            responses.forEach(response => {
                const { double_damage_from, half_damage_from, no_damage_from } = response.data.damage_relations;

                // Gestiamo l'immunità prima
                no_damage_from.forEach(type => {
                    immunities[type.name] = 0;
                    // Rimuovi eventuali resistenze o debolezze per questo tipo
                    delete weaknesses[type.name];
                    delete resistances[type.name];
                });

                // Debolezze (x2 o x4)
                double_damage_from.forEach(type => {
                    if (!immunities[type.name]) {
                        weaknesses[type.name] = (weaknesses[type.name] || 1) * 2;
                    }
                });

                // Resistenze (1/2 o 1/4)
                half_damage_from.forEach(type => {
                    if (!immunities[type.name]) {
                        resistances[type.name] = (resistances[type.name] || 1) / 2;
                    }
                });
            });

            // Calcola correttamente le combinazioni di tipi
            Object.keys(weaknesses).forEach(type => {
                if (resistances[type]) {
                    const finalMultiplier = weaknesses[type] * resistances[type];

                    if (finalMultiplier === 1) {
                        // Se x2 * x0.5 = x1, rimuoviamo da entrambe
                        delete weaknesses[type];
                        delete resistances[type];
                    } else if (finalMultiplier > 1) {
                        // Se abbiamo x4 o superiore, teniamo solo la debolezza
                        weaknesses[type] = finalMultiplier;
                        delete resistances[type];
                    } else {
                        // Se abbiamo x0.25 o inferiore, teniamo solo la resistenza
                        resistances[type] = finalMultiplier;
                        delete weaknesses[type];
                    }
                }
            });

            setDamageRelations({ weaknesses, resistances, immunities });
        };

        fetchDamageRelations();
    }, [types]);

    const renderWeaknesses = () => {
        return Object.keys(damageRelations.weaknesses).map(type => {
            const multiplier = damageRelations.weaknesses[type];
            return <Types key={type} data={type} multiplier={multiplier} />;
        });
    };

    const renderResistances = () => {
        return Object.keys(damageRelations.resistances).map(type => {
            const multiplier = damageRelations.resistances[type];
            return <Types key={type} data={type} multiplier={multiplier} />;
        });
    };

    const renderImmunities = () => {
        return Object.keys(damageRelations.immunities).map(type => {
            return <Types key={type} data={type} multiplier={0} />;
        });
    };

    return (
        <div className="pokemon-weaknesses mt-3">
            {Object.keys(damageRelations.weaknesses).length > 0 && (
                <>
                    <h6>Weaknesses:</h6>
                    <div className="d-flex gap-2 flex-wrap">
                        {renderWeaknesses()}
                    </div>
                </>
            )}

            {Object.keys(damageRelations.resistances).length > 0 && (
                <>
                    <hr className="my-2 opacity-0" />
                    <h6>Resistances:</h6>
                    <div className="d-flex gap-2 flex-wrap">
                        {renderResistances()}
                    </div>
                </>
            )}

            {Object.keys(damageRelations.immunities).length > 0 && (
                <>
                    <hr className="my-2 opacity-0" />
                    <h6>Immunity:</h6>
                    <div className="d-flex gap-2 flex-wrap">
                        {renderImmunities()}
                    </div>
                </>
            )}
        </div>
    );
}
