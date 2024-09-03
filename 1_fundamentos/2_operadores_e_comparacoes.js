// 1. Operadores Aritméticos

// Adição
let soma = 10 + 5;
console.log("Soma:", soma); // Saída: Soma: 15

// Subtração
let subtracao = 10 - 5;
console.log("Subtração:", subtracao); // Saída: Subtração: 5

// Multiplicação
let multiplicacao = 10 * 5;
console.log("Multiplicação:", multiplicacao); // Saída: Multiplicação: 50

// Divisão
let divisao = 10 / 2;
console.log("Divisão:", divisao); // Saída: Divisão: 5

// Módulo (Resto da Divisão)
let modulo = 10 % 3;
console.log("Módulo:", modulo); // Saída: Módulo: 1

// Exponenciação
let exponenciacao = 2 ** 3;
console.log("Exponenciação:", exponenciacao); // Saída: Exponenciação: 8

// Operação com múltiplos operadores
let resultadoComplexo = (10 + 5) * 3 - 2;
console.log("Resultado Complexo:", resultadoComplexo); // Saída: 43

// 2. Operadores de Comparação

// Igualdade (==) - compara valores, ignora tipos
let igual = 10 == "10";
console.log("Igual (==):", igual); // Saída: Igual (==): true

// Estritamente Igual (===) - compara valores e tipos
let estritamenteIgual = 10 === "10";
console.log("Estritamente Igual (===):", estritamenteIgual); // Saída: Estritamente Igual (===): false

// Diferente (!=) - compara valores, ignora tipos
let diferente = 10 != "5";
console.log("Diferente (!=):", diferente); // Saída: Diferente (!=): true

// Estritamente Diferente (!==) - compara valores e tipos
let estritamenteDiferente = 10 !== "10";
console.log("Estritamente Diferente (!==):", estritamenteDiferente); // Saída: Estritamente Diferente (!==): true

// Maior Que (>)
let maiorQue = 10 > 5;
console.log("Maior Que (>):", maiorQue); // Saída: Maior Que (>): true

// Menor Que (<)
let menorQue = 10 < 5;
console.log("Menor Que (<):", menorQue); // Saída: Menor Que (<): false

// Maior ou Igual (>=)
let maiorOuIgual = 10 >= 10;
console.log("Maior ou Igual (>=):", maiorOuIgual); // Saída: Maior ou Igual (>=): true

// Menor ou Igual (<=)
let menorOuIgual = 5 <= 10;
console.log("Menor ou Igual (<=):", menorOuIgual); // Saída: Menor ou Igual (<=): true

// 3. Comparação entre Tipos Diferentes

// Comparando número e string com == (conversão de tipo automática)
let comparacaoFlexivel = 10 == "10";
console.log("Comparação Flexível (==):", comparacaoFlexivel); // Saída: Comparação Flexível (==): true

// Comparando número e string com === (sem conversão de tipo)
let comparacaoRigorosa = 10 === "10";
console.log("Comparação Rigorosa (===):", comparacaoRigorosa); // Saída: Comparação Rigorosa (===): false

// 4. Exemplo Prático: Verificando Idade para Acesso

let idadeUsuario = 18;
let podeAcessar = idadeUsuario >= 18;
console.log("Pode Acessar:", podeAcessar); // Saída: Pode Acessar: true

// Operações de Incremento e Decremento
let contador = 5;
contador++; // Incrementa 1
console.log("Incremento:", contador); // Saída: 6

contador--; // Decrementa 1
console.log("Decremento:", contador); // Saída: 5
