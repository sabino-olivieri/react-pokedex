export default function Range({ data }) {
    
    return (
        <>
            <div className="ms_range col-6">
                <label htmlFor="">{data.stat.name.charAt(0).toUpperCase() + data.stat.name.slice(1)}</label>
                <div className="d-flex gap-1 justify-content-between align-items-center">
                    <input type="range" name="" min="0" max="230" defaultValue={data.base_stat} id="" disabled />
                    <span>{data.base_stat}</span>
                </div>
                <hr className="my-2 opacity-0"/>
            </div>
        </>
    )
}