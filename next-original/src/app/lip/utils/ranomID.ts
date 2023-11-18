export const RandomID = (key: string) =>{
    const character = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
    let id = `${key}@`;
    const idLength = 10;
    for(let i = 0 ; i < idLength; i++){
        const indexRanom = Math.floor(Math.random()* character.length);
        id += character[indexRanom]
        
    }
    return id
}


