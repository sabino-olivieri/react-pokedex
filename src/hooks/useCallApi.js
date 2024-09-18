import { useState, useEffect } from "react";
import axios from "axios";

export default function useCallApi(link) {
    const [data, setData] = useState(null); // Stato per i dati
    useEffect(() => {
        // Funzione asincrona per recuperare i dati
        const fetchData = async () => {
            try {
               
                const response = await axios.get(link); // Richiesta dati
                setData(response.data); // Aggiorna lo stato con i dati ricevuti

            } catch (err) {
                console.log('Errore:', err);
                
            }
        };

        if (link) {
            fetchData(); // Chiama la funzione solo se il link è valido
        }
    }, [link]); // Esegui l'effetto solo quando il link cambia

    return data; // Restituisci i dati, lo stato di caricamento e l'errore
}
