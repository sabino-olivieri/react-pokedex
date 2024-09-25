import useFetchPage from "../hooks/useFecthPage";
import { useEffect, useState } from "react";

export default function NextButton({ link }) {
    const [clicked, setClicked] = useState(false);
    useFetchPage(clicked ? link : null);

    const handleClick = () => {
        
        setClicked(true);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(()=> {
        setClicked(false);
    },[clicked])

    return (
        <>
            <div className="page-btn ms-auto" onClick={handleClick}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>

            
            
        </>
    );
}
