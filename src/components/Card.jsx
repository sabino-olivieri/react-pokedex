import { useDispatch } from "react-redux";
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import { changeSelectedPokemon } from "../stores/slices/SelectedPokemonSlice";

export default function Card({ pokemon }) {
    const url = pokemon.url;

    const id = url.match(/\/(\d+)\/$/)[1];

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(changeSelectedPokemon(url));
        dispatch(changeVisibility(true));

    }

    return (
        <>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className="card h-100 ms_card" onClick={handleClick}>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        onError={(e) => { e.target.src = "/src/assets/placeholder.jpg"; }}
                        loading="lazy"
                        className="card-img-top m-auto"
                        alt={`${pokemon.name} image`}
                    />
                    <div className="card-body">
                        <span>N° {id}</span>
                        <h5 className="card-text">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}