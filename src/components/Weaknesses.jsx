export default function Weaknesses({ data, multiplier }) {
    let bg = "";
    let color = "";

    switch (data) {
        case 'normal':
            bg = "#A8A77A"; 
            color = "#000000"; 
            break;
        case 'fire':
            bg = "#FF0000"; 
            color = "#FFFFFF"; 
            break;
        case 'water':
            bg = "#6390F0"; 
            color = "#FFFFFF"; 
            break;
        case 'grass':
            bg = "#7AC74C"; 
            color = "#000000"; 
            break;
        case 'electric':
            bg = "#F7D02C"; 
            color = "#000000"; 
            break;
        case 'ice':
            bg = "#96D9D6"; 
            color = "#000000"; 
            break;
        case 'fighting':
            bg = "#C22E28"; 
            color = "#FFFFFF"; 
            break;
        case 'poison':
            bg = "#A33EA1"; 
            color = "#FFFFFF"; 
            break;
        case 'ground':
            bg = "#E2BF65"; 
            color = "#000000"; 
            break;
        case 'flying':
            bg = "#A98FF3"; 
            color = "#000000"; 
            break;
        case 'psychic':
            bg = "#F95587"; 
            color = "#FFFFFF"; 
            break;
        case 'bug':
            bg = "#A6B91A"; 
            color = "#000000"; 
            break;
        case 'rock':
            bg = "#B6A136"; 
            color = "#000000"; 
            break;
        case 'ghost':
            bg = "#735797"; 
            color = "#FFFFFF"; 
            break;
        case 'dragon':
            bg = "#6F35FC"; 
            color = "#FFFFFF"; 
            break;
        case 'dark':
            bg = "#705746"; 
            color = "#FFFFFF"; 
            break;
        case 'steel':
            bg = "#B7B7CE"; 
            color = "#000000"; 
            break;
        case 'fairy':
            bg = "#D685AD"; 
            color = "#000000"; 
            break;
        default:
            bg = "#000000"; 
            color = "#FFFFFF"; 
    }

    const style = {
        backgroundColor: bg,
        color: color,
    };

    const shouldShowMultiplier = multiplier !== 2 && multiplier !== 0.5 && multiplier !== 1;

    return (
        <div className="ms_bedge" style={style}>
            {data.charAt(0).toUpperCase() + data.slice(1)} {shouldShowMultiplier && multiplier > 0 ? `x${multiplier}` : ''}
        </div>
    );
}
