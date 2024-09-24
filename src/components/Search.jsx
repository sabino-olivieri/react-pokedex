import { useEffect, useState } from "react";
import axios from "axios";
import { changeSelectedPokemon } from "../stores/slices/SelectedPokemonSlice";
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
    const maxRetries = 3;

    const [suggestion, setSuggestion] = useState([]);
    const [search, setSearch] = useState('');

    const createList = async (attempt = 1) => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=99999");
            const resp = response.data.results;
            resp.forEach(element => {
                element.id = element.url.match(/\/(\d+)\/$/)[1];
                element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png`;
            });
            localStorage.setItem('Pokemon', JSON.stringify(resp));
        } catch (error) {
            console.error(`Tentativo ${attempt} fallito:`, error);
            if (attempt < maxRetries) {
                console.log(`Riprovo... (tentativo ${attempt + 1})`);
                createList(attempt + 1);
            } else {
                console.error('Numero massimo di tentativi raggiunto. Impossibile completare la richiesta.');
            }
        }
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        
        if (search.length > 0) {
            const allPokemon = JSON.parse(localStorage.getItem('Pokemon')) || [];
            const filteredSuggestions = allPokemon
                .filter(pokemon => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()))
                .slice(0, 10); // Mostra solo i primi 10 suggerimenti
            
            setSuggestion(filteredSuggestions);
        } else {
            setSuggestion([]);
        }
    };


    const dispatch = useDispatch();

    const handleClickSuggestion = (url)=> {
        
        dispatch(changeSelectedPokemon(url));
        dispatch(changeVisibility(true));
        setSuggestion([]);
        setSearch('');
    }

    const handleBlur = () => {
        setTimeout(() => {
            setSuggestion([]);
        }, 200);
    };

    const handleFocus = () => {
        
        if (search.length > 0) {
            const allPokemon = JSON.parse(localStorage.getItem('Pokemon')) || [];
            const filteredSuggestions = allPokemon
                .filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
                .slice(0, 10); // Mostra solo i primi 10 suggerimenti
            
            setSuggestion(filteredSuggestions);
        } else {
            setSuggestion([]);
        }
    }


    useEffect(() => {
        createList();
    }, []);

    return (
        <form className="d-flex w-50 position-relative" role="search">
            <input 
                className="form-control border-0 w-100" 
                type="search" 
                placeholder="Search" 
                value={search} 
                aria-label="Search" 
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <div className="p-2 position-absolute ms_dropdown card" style={{display: suggestion.length === 0 ? 'none' : 'block' }}>
                <ul className=" list-unstyled m-0">
                    {suggestion.map((element) => (
                        <li className="p-2 rounded mb-1 d-flex justify-content-between" key={element.id} onClick={()=> {handleClickSuggestion(element.url)}}>
                            <span>{element.name.charAt().toUpperCase() + element.name.slice(1)}</span>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}
