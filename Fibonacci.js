
/* 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function isFibonacci(num) {
    let a = 0, b = 1;
    // Se o número informado é 0 ou 1, ele pertence à sequência de Fibonacci
    if (num === a || num === b)
        return true;
    let nextFib = a + b;
    // Gera a sequência de Fibonacci até atingir ou ultrapassar o número informado
    while (nextFib <= num) {
        if (nextFib === num)
            return true;
        a = b;
        b = nextFib;
        nextFib = a + b;
    }
    return false;
}
// Definindo o número a ser verificado
const numberToCheck = 21;

// Verificando se o número pertence à sequência de Fibonacci
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
}
else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
