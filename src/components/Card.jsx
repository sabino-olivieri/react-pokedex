import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import { changeSelectedPokemon } from "../stores/slices/SelectedPokemonSlice";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Card({ pokemon }) {
    const url = pokemon.url;
    const pagePokemon = useSelector((state) => state.pagePokemon);
    
    const id = url.match(/\/(\d+)\/$/)[1];

    const dispatch = useDispatch();
    
    // Add a loading state
    const [loading, setLoading] = useState(true); // Start loading as true

    const handleClick = () => {
        dispatch(changeSelectedPokemon(url));
        dispatch(changeVisibility(true));
    };

    useEffect(() => {
        // Reset loading state whenever pagePokemon changes
        setLoading(true);
    }, [pagePokemon]);

    return (
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="card h-100 ms_card justify-content-between" onClick={handleClick}>
                {loading && <Loader />}
                
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    onLoad={() => setLoading(false)}
                    onError={(e) => {
                        e.target.src = "/src/assets/placeholder.jpg";
                        setLoading(false);
                    }}
                    loading="lazy"
                    className="card-img-top m-auto"
                    alt={`${pokemon.name} image`}
                    style={{ position: loading ? 'absolute' : 'relative', opacity: loading ? '0' : '1'}}
                />
                
                <div className="card-body">
                    <span>N° {id}</span>
                    <h5 className="card-text">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                </div>
            </div>
        </div>
    );
}
