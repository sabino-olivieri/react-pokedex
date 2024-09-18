import useFetchPage from "../hooks/useFecthPage";
import { useEffect, useState } from "react";

export default function NextButton({ link }) {
    const [clicked, setClicked] = useState(false); // Stato per gestire il click
    useFetchPage(clicked ? link : null); // Chiama useFetchPage solo quando cliccato

    const handleClick = () => {
        console.log(link);
        
        setClicked(true); // Imposta lo stato cliccato a true
        
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
