export default function isCaptured(id, myPokemon) {
    let captured = false;

    if(id && myPokemon) {
        
            
        myPokemon.some((element)=> {
            
            if(parseInt(id) === element.id) {
                captured = true;
                return true;
            } else {
                return false
            }
        })

    }

    return captured
}