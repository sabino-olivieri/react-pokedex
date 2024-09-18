export default function Card({ pokemon }) {
    const url = pokemon.url;

    const id = url.match(/\/(\d+)\/$/)[1];
    
    return (
        <>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className="card h-100">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} loading="lazy" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span>N. {id}</span>
                        <h5 className="card-text">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}