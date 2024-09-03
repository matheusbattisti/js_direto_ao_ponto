// Operadores e comparações

// +, -, /, *

console.log(12 / 2);

// NUMERO1 <OPERADOR> NUMERO2

console.log("12" + 2);

console.log("12" / 2);

// soma de string com numero

// módulo - % -> resto da divisao

console.log(12 % 2);
console.log(13 % 2);

// exponenciacao - **

console.log(2 ** 3); // 2 x 2 = 4 x 2

// ordem matematica => (op1) + op2
const operacao = (12 + 5) * 2 + 4;

console.log(operacao);

// Operadores

// >, <, >=, <=

console.log(12 > 12);

console.log(12 >= 12);
console.log(12 <= 12);

// ==, ===, !=, !==

// = a mais > há a avaliação do tipo

console.log(12 == "12");
console.log(12 === "12");

console.log(1 != 2);
console.log(1 !== 2);
console.log(1 !== "1");
console.log(1 !== 1);

// a comparação de strings é por == ou ===
console.log("teste" == "teste");
console.log("teste" === "teste");

// toda comparação gera um resultado boolean

// operador de pos incremento e pre incremento
let num = 1;

console.log(num++);

console.log(num);

console.log(++num);

console.log(--num);

// utilizado em loops (for, while)

num = num + 5;

console.log(num);

num += 5;

console.log(num);

num -= 2;

console.log(num);

// VARIAVEL OPERACAO ATRIBUICAO VALOR

console.log((num *= 2));

const idade = 14;

const podeDirigir = idade >= 18;

console.log(podeDirigir);

// Condicionais (if)
if (idade >= 18) {
  console.log("Esta pessoa pode dirigir!");
}
