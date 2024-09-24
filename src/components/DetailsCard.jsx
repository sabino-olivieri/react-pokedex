import Range from "./Range";
import Types from "./Types";

export default function DetailsCard({ data }) {


    return (
        <>
            {data !== null && data !== undefined ? (
                <div className="px-2 px-md-5">
                    <div className="card mb-3 border-0 ms_card ">
                        <div className="row g-3 flex-column flex-md-row">
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="card-body rounded-2 p-4 position-relative">
                                    <span className="position-absolute id-pokemon">N° {data.id}</span>
                                    <div className="container">
                                        <div className="row">
                                            <h3 className="card-title mb-4">{data.name ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : ''}</h3>
                                            <h6>Stats:</h6>
                                            {data.stats ? data.stats.map((data, index) => (
                                                <Range data={data} key={index} />
                                            ))
                                                : null}

                                            <div className="col-6">
                                                <span>Heigth: {data.height / 10} m</span>

                                            </div>

                                            <div className="col-6">
                                                <span>Weight: {data.weight / 10} kg</span>
                                            </div>



                                            {data.types ? (
                                                <>
                                                    <hr className="my-2 opacity-0" />
                                                    <h6>{data.types.length > 1 ? 'Types:' : 'Type:'}</h6>
                                                    <div className="d-flex gap-2">
                                                        {data.types.map((data, index) => (
                                                            <Types data={data} key={index} />
                                                        ))}
                                                    </div>
                                                </>
                                            ) : null}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                : ''}

        </>
    )
}