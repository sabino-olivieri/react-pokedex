import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import { changeSelectedPokemon } from "../stores/slices/SelectedPokemonSlice";
import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import { updateMyPokemon } from "../stores/slices/MyPokemonSlice";
import replaceChar from "../function/replaceChar";
import loadMyPokemon from "../function/loadMyPokemon";
import isCaptured from "../function/isCaptured";

export default function Card({ pokemon }) {
    const url = pokemon.url;
    const pagePokemon = useSelector((state) => state.pagePokemon);
    const id = url.match(/\/(\d+)\/$/)[1];
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const imgRef = useRef(null);
    const myPokemon = useSelector((state) => state.myPokemon);
    const [captured, setCaptured] = useState(false);

    useEffect(() => {
        loadMyPokemon(dispatch);
    }, [dispatch]);

    useEffect(()=>{
        
        setCaptured(isCaptured(id,myPokemon))
    },[myPokemon,url])

    const handleClick = () => {
        dispatch(changeSelectedPokemon(url));
        dispatch(changeVisibility(true));
    };

    useEffect(() => {

        if (imgRef.current && imgRef.current.complete) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [pagePokemon]);


    return (
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="card h-100 ms_card justify-content-between position-relative" onClick={handleClick}>
                {loading && <Loader />}

                <img
                    ref={imgRef}  // Assign the image reference
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    onLoad={() => setLoading(false)}
                    onError={(e) => {
                        e.target.src = "/src/assets/placeholder.jpg";
                        setLoading(false);
                    }}
                    loading="lazy"
                    className="card-img-top m-auto"
                    alt={`${pokemon.name} image`}
                    style={{ position: loading ? 'absolute' : 'relative', opacity: loading ? '0' : '1' }}
                />

                <div className="card-body">
                    <span>N° {id}</span>
                    <h5 className="card-text">{replaceChar(pokemon.name)}</h5>
                </div>

                <div className={captured ? 'captured' : 'd-none'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="20" height="20" className="me-2">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="10" />
                        <path d="M 50 0 A 50 50 0 0 1 100 50 H 0 A 50 50 0 0 1 50 0" fill="red" />
                        <path d="M 50 100 A 50 50 0 0 1 0 50 H 100 A 50 50 0 0 1 50 100" fill="white" />
                        <rect x="0" y="47" width="100" height="6" fill="black" />
                        <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="6" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
