import { useEffect, useState } from "react";
import Loader from "./Loader";
import Range from "./Range";
import Types from "./Types";
import replaceChar from "../function/replaceChar";
import { useDispatch, useSelector } from "react-redux";
import loadMyPokemon from "../function/loadMyPokemon";
import isCaptured from "../function/isCaptured";
import PokemonWeaknesses from "./PokemonWeaknesses"; // Importa il nuovo componente per le debolezze

export default function DetailsCard({ data }) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const myPokemon = useSelector((state) => state.myPokemon);
    const [captured, setCaptured] = useState(false);

    useEffect(() => {
        loadMyPokemon(dispatch);
    }, [dispatch]);

    useEffect(() => {
        setCaptured(isCaptured(data.id, myPokemon));
    }, [myPokemon, data.id]);

    return (
        <>
            {data !== null && data !== undefined ? (
                <div className="px-2 px-md-5">
                    <div className="card mb-3 border-0 ms_card ">
                        <div className="row g-3 flex-column flex-md-row">
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                                {loading && <Loader />}
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
                                    onLoad={() => setLoading(false)}
                                    onError={(e) => {
                                        e.target.src = "/src/assets/placeholder.jpg";
                                        setLoading(false);
                                    }}
                                    loading="lazy"
                                    className="card-img-top m-auto"
                                    alt={`${data.name} image`}
                                    style={{
                                        position: loading ? 'absolute' : 'relative',
                                        opacity: loading ? '0' : '1'
                                    }}
                                />
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="card-body rounded-2 p-4 position-relative">
                                    <span className="position-absolute id-pokemon">N° {data.id}</span>
                                    <div className="container">
                                        <div className="row">
                                            <h3 className="card-title mb-4">
                                                {data.name ? replaceChar(data.name) : ''}
                                            </h3>
                                            <h6>Stats:</h6>
                                            {data.stats
                                                ? data.stats.map((stat, index) => (
                                                    <Range data={stat} key={index} />
                                                ))
                                                : null}

                                            <div className="col-6">
                                                <span>Heigth: {data.height / 10} m</span>
                                            </div>

                                            <div className="col-6">
                                                <span>Weight: {data.weight / 10} kg</span>
                                            </div>

                                            {data.types ? (
                                                <>
                                                    <hr className="my-2 opacity-0" />
                                                    <h6>{data.types.length > 1 ? 'Types:' : 'Type:'}</h6>
                                                    <div className="d-flex gap-2">
                                                        {data.types.map((typeData, index) => (
                                                            <Types data={typeData} key={index} />
                                                        ))}
                                                    </div>
                                                    {/* Aggiungi qui il componente delle debolezze */}
                                                    <PokemonWeaknesses types={data.types} />
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            ) : ''}
        </>
    );
}
