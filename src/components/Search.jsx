import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedPokemon } from "../stores/slices/SelectedPokemonSlice";
import { changeVisibility } from "../stores/slices/SidebarShowSlice";
import callApi from "../function/callApi";
import replaceChar from "../function/replaceChar";

export default function Search() {
    const [suggestion, setSuggestion] = useState([]);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const createList = async () => {
        try {
            const data = await callApi("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=99999");
            data.results.forEach(element => {
                element.id = element.url.match(/\/(\d+)\/$/)[1];
                element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png`;
            });
            localStorage.setItem('Pokemon', JSON.stringify(data.results));
        } catch (error) {
            console.error('Errore durante il recupero dei Pokémon:', error);
        }
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        
        if (inputValue.length > 0) {
            const allPokemon = JSON.parse(localStorage.getItem('Pokemon')) || [];
            const filteredSuggestions = allPokemon
                .filter(pokemon => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()))
                .slice(0, 10);
            
            setSuggestion(filteredSuggestions);
        } else {
            setSuggestion([]);
        }
    };

    const handleClickSuggestion = (url) => {
        dispatch(changeSelectedPokemon(url));
        dispatch(changeVisibility(true));
        setSuggestion([]);
        setSearch('');
    };

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
                .slice(0, 10);
            
            setSuggestion(filteredSuggestions);
        }
    };

    useEffect(() => {
        createList();
    }, []);

    return (
        <form className="ms_search w-100 position-relative" role="search">
            <input 
                className="form-control border-0 w-100" 
                type="search" 
                placeholder="Search Pokémon" 
                value={search} 
                aria-label="Search" 
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <div className="p-2 position-absolute ms_dropdown card" style={{ display: suggestion.length === 0 ? 'none' : 'block' }}>
                <ul className="list-unstyled m-0">
                    {suggestion.map((element) => (
                        <li className="p-2 rounded mb-1 d-flex justify-content-between" key={element.id} onClick={() => handleClickSuggestion(element.url)}>
                            <span>{replaceChar(element.name)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}