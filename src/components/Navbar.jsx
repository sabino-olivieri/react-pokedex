import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Chiude la navbar
    };

    return (
        <>
            <nav className="navbar ms_navbar navbar-expand-lg stick w-100">
                <div className="container-fluid">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="30" height="30" className="me-2">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="10" />
                        <path d="M 50 0 A 50 50 0 0 1 100 50 H 0 A 50 50 0 0 1 50 0" fill="red" />
                        <path d="M 50 100 A 50 50 0 0 1 0 50 H 100 A 50 50 0 0 1 50 100" fill="white" />
                        <rect x="0" y="47" width="100" height="6" fill="black" />
                        <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="6" />
                    </svg>
                    <button
                        className="btn btn-outline-light border-2"
                        type="button"
                        onClick={handleToggle}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >   
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className={`collapse navbar-collapse my-2 ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0 text-white">
                            <li className="nav-item">
                                <Link to={'/'} onClick={handleLinkClick}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/mypokemon'} onClick={handleLinkClick}>My Pokemon</Link>
                            </li>
                        </ul>
                        <Search />
                    </div>
                </div>
            </nav>
        </>
    );
}
