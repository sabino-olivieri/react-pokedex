import axios from "axios";

export default async function callApi(link) {
    let data = [];
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        if (link) {
            try {
                const response = await axios.get(link);
                data = response.data;
                return data;
            } catch (err) {
                attempts += 1;
                console.log(`Tentativo ${attempts} fallito:`, err);

                if (attempts >= maxRetries) {
                    console.log("Numero massimo di tentativi raggiunto. Chiamata fallita.");
                }
            }
        } else {
            console.log("Nessun link fornito.");
            break;
        }
    }

    return data;
}
