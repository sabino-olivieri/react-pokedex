export default function Types({data}) {

    let bg = "";
    let color = "";

    switch (data.type.name) {
        case 'normal':
            bg = "#A8A77A"; // Colore di sfondo
            color = "#000000"; // Testo nero per contrasto
            break;
        case 'fire':
            bg = "#FF0000"; // Rosso per Fire
            color = "#FFFFFF"; // Testo bianco per contrasto
            break;
        case 'water':
            bg = "#6390F0"; // Blu per Water
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'grass':
            bg = "#7AC74C"; // Verde per Grass
            color = "#000000"; // Testo nero
            break;
        case 'electric':
            bg = "#F7D02C"; // Giallo per Electric
            color = "#000000"; // Testo nero
            break;
        case 'ice':
            bg = "#96D9D6"; // Azzurro per Ice
            color = "#000000"; // Testo nero
            break;
        case 'fighting':
            bg = "#C22E28"; // Rosso per Fighting
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'poison':
            bg = "#A33EA1"; // Viola per Poison
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'ground':
            bg = "#E2BF65"; // Marrone ocra per Ground
            color = "#000000"; // Testo nero
            break;
        case 'flying':
            bg = "#A98FF3"; // Azzurro per Flying
            color = "#000000"; // Testo nero
            break;
        case 'psychic':
            bg = "#F95587"; // Rosa per Psychic
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'bug':
            bg = "#A6B91A"; // Verde per Bug
            color = "#000000"; // Testo nero
            break;
        case 'rock':
            bg = "#B6A136"; // Grigio per Rock
            color = "#000000"; // Testo nero
            break;
        case 'ghost':
            bg = "#735797"; // Viola scuro per Ghost
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'dragon':
            bg = "#6F35FC"; // Blu scuro per Dragon
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'dark':
            bg = "#705746"; // Nero per Dark
            color = "#FFFFFF"; // Testo bianco
            break;
        case 'steel':
            bg = "#B7B7CE"; // Grigio acciaio per Steel
            color = "#000000"; // Testo nero
            break;
        case 'fairy':
            bg = "#D685AD"; // Rosa chiaro per Fairy
            color = "#000000"; // Testo nero
            break;
        default:
            bg = "#000000"; // Default a nero
            color = "#FFFFFF"; // Testo bianco per contrasto

    }

    const style = {
        backgroundColor: bg,
        color: color,
    }

    return (
        <>
            <div className="ms_bedge" style={style}>
                {data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1)}
            </div>
        </>
    )
}