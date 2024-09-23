import { useDispatch, useSelector } from "react-redux"
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";

export default function SidebarDetails() {

    const visible = useSelector((state) => state.sidebarShow);
    const url = useSelector((state) => state.selectedpokemon);
    const [data, setData] = useState({});
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(changeVisibility(false));
    }

    const handleSidebarClick = (event) => {
        event.stopPropagation(); // Previene la propagazione del click all'overlay
    }

    useEffect(() => {

        axios.get(url).then((resp) => {
            setData(resp.data);
            console.log(data);

        })

    }, [url])



    return (
        <>
            <div className={`ms_overlay ${!visible ? 'ms_hidden' : ''}`} onClick={handleClick}>

                <div className={`container-fluid ms_sidebar position-absolute`} onClick={handleSidebarClick}>
                    <div className="row">
                        <div className="p-3 text-end sticky-top mb-2">
                            <span className="btn btn-outline-light ms_closebtn" onClick={handleClick}>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                        {data != null ?

                            <DetailsCard data={data} />

                            : ''
                        }

                    </div>
                </div>
            </div>


        </>
    )
}