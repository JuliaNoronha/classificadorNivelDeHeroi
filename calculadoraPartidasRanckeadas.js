calculadoraPartidasRanckeadas(16, 9);
calculadoraPartidasRanckeadas(10, 10);
calculadoraPartidasRanckeadas(5, 10);
calculadoraPartidasRanckeadas(1, 10);
function calculadoraPartidasRanckeadas(vitorias,derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel

    if(saldoVitorias < 0){
        console.log("ERRO! O saldo de vitórias não pode ser negativo.");
    }
    else if (saldoVitorias < 10){
        nivel = "ferro";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    else if (saldoVitorias > 11 && saldoVitorias < 20){
        nivel = "bronze";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    else if (saldoVitorias > 21 && saldoVitorias < 50){
        nivel = "prata";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    else if (saldoVitorias > 51 && saldoVitorias < 80){
        nivel = "ouro";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    else if (saldoVitorias > 81 && saldoVitorias < 90){
        nivel = "diamante";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    else if (saldoVitorias > 91 && saldoVitorias < 100){
        nivel = "lendário";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    else if (saldoVitorias >= 101){
        nivel = "imortal";
        console.log("O Herói tem de saldo de ", saldoVitorias ," está no nível de ", nivel);
    }
    
}