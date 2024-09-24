import Search from "./Search";

export default function Navbar() {
    return (

    <>
        <nav className="navbar ms_navbar navbar-expand-lg">
            <div className="container-fluid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="30" height="30" className="me-2">
                <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="10" />
                <path d="M 50 0 A 50 50 0 0 1 100 50 H 0 A 50 50 0 0 1 50 0" fill="red" />
                <path d="M 50 100 A 50 50 0 0 1 0 50 H 100 A 50 50 0 0 1 50 100" fill="white" />
                <rect x="0" y="47" width="100" height="6" fill="black" />
                <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="6" />
            </svg>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0 text-white">
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item">
                            I miei Pokemon
                        </li>
                        
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    </>
    )
}