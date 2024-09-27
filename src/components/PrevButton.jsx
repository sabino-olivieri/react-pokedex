import { useDispatch } from "react-redux";
import fetchPage from "../function/fetchPage";

export default function PrevButton({ link }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetchPage(link,dispatch)
    }

    return (
        <>
            <div className="page-btn" onClick={handleClick}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
        </>
    )
}