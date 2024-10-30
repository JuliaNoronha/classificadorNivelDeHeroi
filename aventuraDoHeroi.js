class aventuraDoHeroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar()
    {
        let resultadoAtaque;
        
        if (this.tipo === "mago"){
            resultadoAtaque = "usou magia";
        }
        else if (this.tipo === "guerreiro"){
            resultadoAtaque = "usou espada";
        }
        else if (this.tipo === "monge"){
            resultadoAtaque = "usou artes marciais";
        }
        else if (this.tipo === "ninja"){
            resultadoAtaque = "usou shuriken";
        }
        return resultadoAtaque;
    }
}
let heroi = new aventuraDoHeroi("Zelda", 20, "ninja");

let resultadoAtaque = heroi.atacar()

console.log(`O ${heroi.tipo} atacou usando o ${resultadoAtaque}`);

