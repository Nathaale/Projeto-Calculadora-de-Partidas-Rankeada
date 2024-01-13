// Meu Segundo Projeto // 
// Calculadora de Partidas Rankeada //

// Declarando Variaveis //

let vitorias = 45;
let derrotas = 20;
let saldoDeVitorias = vitorias - derrotas;


// Funçao para Calcular o Nivel //

function calcularNivel(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    let nivel;


    // Estrura de Decisao //

    if (vitorias < 10){
        nivel = "Ferro";
    } else if (vitorias <= 20){
        nivel = "Bronze";
    } else if (vitorias <= 50){
        nivel = "Prata";
    } else if (vitorias <= 80){
        nivel = "Ouro";
    } else if (vitorias <= 90){
        nivel = "Diamamte";
    } else if (vitorias <= 100){
        nivel = "Lendario";
    } else {
        nivel = "Imortal";
    }

// Logica de Decisao (vitorias menos derrotas) //

    return `O heroi tem o saldo de ${saldoDeVitorias} e esta no nivel de ${nivel}`;
}
 
// Chamada da Funçao e Exibiçao do Resultado //

console.log(calcularNivel(vitorias,derrotas));