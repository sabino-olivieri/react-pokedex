import { useEffect, useState } from "react"
import useFetchPage from "../hooks/useFecthPage"

export default function PrevButton({ link }) {
    const [clicked, setClicked] = useState(false)
    useFetchPage(clicked ? link : null);

    const handleClick = () => {
        setClicked(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(()=> {
        setClicked(false);
    }, [clicked])

    return (
        <>
            <div className="page-btn" onClick={handleClick}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
        </>
    )
}