function vocalminu (texto){
    //Función para poner las vocales minúsculas
    let caracteres= texto.split("");
    for(let i=0; i<=caracteres.length-1; i++){
        if(caracteres[i]=="A"|| caracteres[i]=="E"||
        caracteres[i]=="I"||caracteres[i]=="O"||caracteres[i]=="U" )
        caracteres[i] = caracteres [i].toLowerCase();
    }
    return caracteres.join("");
    
}