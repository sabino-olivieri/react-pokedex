import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPokemon } from "../stores/slices/SelectedPokemonSlice";

export default function EvolutionCard({ chain }) {

    const id = chain.species.url.match(/\/(\d+)\/$/)[1];
    const dispatch = useDispatch();
    const newurl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const prevurl = useSelector((state) => state.selectedpokemon);


    function changeUrl() {
        if (prevurl != newurl) {
            dispatch(changeSelectedPokemon(newurl));
            const sidebarElem = document.getElementById("sidebar");

            sidebarElem.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function levelUp() {
        if (chain.evolution_details && chain.evolution_details.length > 0) {
            let details = chain.evolution_details[0];

            if (details.min_level) {
                return "Lv. " + details.min_level;
            } else if (details.item) {
                return details.item.name;
            } else if (details.min_happiness) {
                return "Friendship min. " + details.min_happiness;
            } else if (details.time_of_day) {
                return "Evolves during " + details.time_of_day;
            } else if (details.location) {
                return "Evolves at " + details.location.name;
            } else if (details.trigger && details.trigger.name == 'trade') {
                return "Trade evolution";
            } else if (details.relative_physical_stats) {
                return "Evolves based on stats";
            } else if (details.known_move) {
                return "Evolves with move: " + details.known_move.name;
            } else if (details.party_species) {
                return "Evolves with " + details.party_species.name + " in party";
            } else if (details.gender !== null) {
                return details.gender == 1 ? "Evolves if female" : "Evolves if male";
            }
        }
        return "";
    }

    return (
        <>
            <div className="col d-flex flex-column justify-content-center align-items-center">

                <div className="evolution-card p-2 d-flex flex-column align-items-center" onClick={changeUrl}>
                    <div className="image-card p-1">

                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            onError={(e) => { e.target.src = "/src/assets/placeholder.jpg"; }}
                            loading="lazy"
                            className="card-img-top m-auto"
                            alt={`${chain.species.name} image`}
                        />
                    </div>

                    <h5 className="mb-1">{chain.species.name.charAt(0).toUpperCase() + chain.species.name.slice(1)}</h5>

                </div>

                <h6 className="my-2">
                    {levelUp()}
                </h6>
            </div>
        </>
    )
}