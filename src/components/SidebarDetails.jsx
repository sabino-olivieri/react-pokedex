import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";
import EvolutionChain from "./EvolutionChain"; // Importa il nuovo componente
import Loader from "./Loader";
import CaptureOrLiberate from "./CaptureOrLiberate";
import Toast from "./Toast";

export default function SidebarDetails() {
    const visible = useSelector((state) => state.sidebarShow);
    const url = useSelector((state) => state.selectedpokemon);
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeVisibility(false));
    };

    const handleSidebarClick = (event) => {
        event.stopPropagation(); // Previene la propagazione del click all'overlay
    };

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                setData(null);
                const resp = await axios.get(url);
                    setData(resp.data);


            } catch (error) {
                console.error("Errore nel recupero dei dati del Pokémon:", error);
            }
        };

        
        fetchPokemonData();
    }, [url]);

    const renderSidebar = () => {
        if (data && Object.keys(data).length > 0) {
            return (
                <>
                    <DetailsCard data={data} />
                    <EvolutionChain pokemonUrl={url} />
                </>
            )
        } else {
            return (
                <>
                    <div className="px-2 px-md-5">
                        <div className="card mb-3 border-0 ms_card ">
                            <div className="row g-3 flex-column flex-md-row py-5">
                                <Loader />
                            </div>
                        </div>
                    </div>
                </>
            )
        }

    }


    return (
        <>
            <div className={`ms_overlay ${!visible ? 'ms_hidden' : ''}`} onClick={handleClick}>
                <div className={`container-fluid ms_sidebar position-absolute`} id="sidebar" onClick={handleSidebarClick}>
                    <div className="row">
                        <div className="p-2 d-flex justify-content-between mb-5 ms_navbar shadow">
                            <CaptureOrLiberate data={data} />
                            <span className="btn btn-outline-light border-2 ms_closebtn" onClick={handleClick}>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                        {renderSidebar()}

                    </div>
                </div>
                <Toast />
            </div>
        </>
    )
}
