import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMyPokemon } from "../stores/slices/MyPokemonSlice";

export default function CaptureOrLiberate({ data }) {
    const dispatch = useDispatch();
    const myPokemon = useSelector((state) => state.myPokemon);

    useEffect(() => {
        
        const storedPokemon = localStorage.getItem('MyPokemon');

        if (storedPokemon) {

                const parsedPokemon = JSON.parse(storedPokemon);
                    dispatch(updateMyPokemon(parsedPokemon));     
        } else {
            dispatch(updateMyPokemon([]));
        }
    }, [dispatch]);

    // dispatch(updateMyPokemon(JSON.parse(localStorage.getItem('MyPokemon')) || []))
    // const myPokemon = JSON.parse(localStorage.getItem('MyPokemon')) || [];
    const [text, setText] = useState('Capture');
    const [index, setIndex] = useState(null);
    const url = useSelector((state) => state.selectedpokemon);

    useEffect(() => {
        setText('Capture');
        setIndex(null);
        if (data && data.id) {
            myPokemon.some((element, i) => {
                if (data.id === element.id) {
                    setText('Liberate');
                    setIndex(i);
                    return true;
                }
                return false;
            });
        }
    }, [data, myPokemon]);
    

    const handleClick = () => {
        if (index === null) {
            // const myPokemon = JSON.parse(localStorage.getItem('MyPokemon')) || [];
            const myNewPokemon = [...myPokemon];
            myNewPokemon.push({
                id: data.id,
                name: data.name,
                url: url,
            });

            dispatch(updateMyPokemon(myNewPokemon))

            console.log('catturato', data.name);
        } else {
            const myNewPokemon = [...myPokemon];
            myNewPokemon.splice(index, 1)
            dispatch(updateMyPokemon(myNewPokemon))


            console.log('liberato', data.name);
        }
    };

    return (
        <button className="btn btn-outline-light border-2" onClick={handleClick}>{text}</button>
    );
}
