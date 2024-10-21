let nomeHeroi = "Zelda";
let experiencia = 8500;

if (experiencia < 1000){
    console.log("ferro");
}
else if (experiencia > 1001 && experiencia < 2000){
    console.log("bronze");
}
else if (experiencia > 2001 && experiencia < 5000){
    console.log("prata");
}
else if (experiencia > 5001 && experiencia < 7000){
    console.log("ouro");
}
else if (experiencia > 7001 && experiencia < 8000){
    console.log("platina");
}
else if (experiencia > 8001 && experiencia < 9000){
    console.log("ascendente");
}
else if (experiencia > 9001 && experiencia < 10000){
    console.log("imortal");
}
else if (experiencia >= 10001){
    console.log("radiante");
}

console.log("O heroi de nome", nomeHeroi, "está no nivel de ", experiencia);