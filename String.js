/* 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
além de informar a quantidade de vezes em que ela ocorre.
 */

function countLetterA(inputString) {
    // Converte a string para minúsculas para facilitar a contagem
    const lowerCaseString = inputString.toLowerCase();

    // Inicializa o contador de ocorrências de 'a'
    let count = 0;

    // Itera sobre cada caractere da string
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] === 'a') {
            count++;
        }
    }

    // Verifica se a letra 'a' foi encontrada e retorna a quantidade
    if (count > 0) {
        console.log(`A letra 'a' foi encontrada ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// String a ser verificada
const inputString = "A Ana ama banana";

// Chamando a função para verificar a string
countLetterA(inputString);