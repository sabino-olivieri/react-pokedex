import { useDispatch } from "react-redux";
import fetchPage from "../function/fetchPage";


export default function NextButton({ link }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetchPage(link, dispatch);
    };

    return (
        <div className="page-btn ms-auto" onClick={handleClick}>
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    );
}
