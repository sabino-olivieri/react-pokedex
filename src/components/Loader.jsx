export default function Loader() {
    return (
        <div className="col-12 p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="100" height="100" className="ms_loader">
                <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="10" />
                <path d="M 50 0 A 50 50 0 0 1 100 50 H 0 A 50 50 0 0 1 50 0" fill="red" />
                <path d="M 50 100 A 50 50 0 0 1 0 50 H 100 A 50 50 0 0 1 50 100" fill="white" />
                <rect x="0" y="47" width="100" height="6" fill="black" />
                <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="6" />
            </svg>
        </div>
    )

}