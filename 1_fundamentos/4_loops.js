// for -> mais comum

// estrutura de repetição = loop
// executa N vezes um código

// for(INCREMENTO; CONDICAO; INCR.) {}

// Incremento = i = 0, j, k, m
// Condição = i < 10
// Incrementador = i++ (cada loop, soma um)

// loop que itere de 0 até 4
for (let i = 0; i <= 4; i++) {
  console.log("Loop for - o i é: " + i);
}

// arrays = listas
// contém geralmentes itens do mesmo tipo de dado
// lista de strings, de numeros...

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

console.log(frutas);

// arrays são zero based
console.log(frutas[0]);
console.log(frutas[1]);

// i => 0, i => 1, i => 2
for (let i = 0; i < 3; i++) {
  console.log("Fruta: " + frutas[i]);
}

// lista.length => qtd de elementos
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta: " + frutas[i]);
}

// while

// não sabe a condição
let p = 0;

while (p < 5) {
  console.log("Loop while: " + p);

  p++;
}

let aleatorio = 0;

// console.log(Math.floor(Math.random() * 10) + 1);

while (aleatorio != 10) {
  aleatorio = Math.floor(Math.random() * 10) + 1;

  console.log("Num. aleatório:  " + aleatorio);
}

// while = qnd eu nao sei qnd vai acabar

// do while

// while que garante 1 execução

while (1 > 2) {
  console.log("teste");
}

do {
  console.log("teste do while");
} while (1 > 2);

var j = 0;

// Super incomum, chance de tu ver beira a 0
do {
  console.log("J: " + j);

  j++;
} while (j < 10);

// No q eu focaria? Aprender bem o for

// Condicionais e loops

// Soma de numeros pares de 0 a 20

let soma = 0;
let somaImpar = 0;

// 2 % 2 = 0; 3 % 2 = 1; 4 % 2 = 0; 5 % 2 = 1

for (let i = 0; i <= 20; i++) {
  // verificar numeros pares
  if (i % 2 === 0) {
    soma += i;
  } else {
    somaImpar += i;
  }
}

console.log(soma);
console.log(somaImpar);

// Contar qts consoantes tem na palavra

const palavra = "Javascript";

let consoantes = 0;

// textos são parecidos com arrays
// cada letra é um elemento

console.log(palavra[0]);
console.log(palavra.length);

// case sentitive
// A == a > false, a == a > true
console.log(palavra[0].toLowerCase() == "j");

// JavaScript é case sensitive

for (let i = 0; i < palavra.length; i++) {
  let letra = palavra[i].toLowerCase();

  if (
    letra !== "a" &&
    letra !== "e" &&
    letra !== "i" &&
    letra !== "o" &&
    letra !== "u"
  ) {
    consoantes++;
  }
}

console.log("Contagem de consoantes " + consoantes + " da palavra " + palavra);

// Inteporlação de strings

console.log(`Contagem de consoantes ${consoantes} da palavra ${palavra}`);
