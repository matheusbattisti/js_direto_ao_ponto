// Variáveis

// Comentário de linha

/*
    Comentário de
    múltiplas 
    linhas

*/

// 3 formas de criar variável

// var, let e const

// é a forma que salvamos valores na memória

// Sintaxe: TIPO(var, let e const) NOME = VALOR;

// Strings = textos, '' ou ""

var nome = "Matheus";

console.log(nome);
console.log("Matheus");

// let -> substituir o var
let idade = 25;

// A diferença é o escopo, { }

nome = "Pedro";
idade = 30;

console.log(nome, idade);

// Tanto var como let, mudam os valores

const pi = 3.14;

// padrão americano de números: 3,14 > 3.14

console.log(pi);

// var, let e const => let e const

// Tipos de dados

let numero = 41;
let numero2 = 41.5;

console.log(numero, numero2);

// JS não há diferença entre inteiros e números com casas decimais

let umTexto = "Meu número é 12 @#!";

console.log(umTexto);

// avaliar o tipo

// typeof - operador de avaliacao de tipo
console.log(typeof numero);
console.log(typeof numero2);

console.log(typeof umTexto);

// boolean = true, false
let estaChovendo = false;

console.log(estaChovendo);

console.log(typeof estaChovendo);

console.log(10 > 5);

let semValor = null;

console.log(semValor);

// Tudo é objeto no JS

// Vários tipos de dados são originados com objetos
console.log(typeof semValor);

let indefinido;

console.log(indefinido);

console.log(typeof indefinido);

// Null = eu inicio algo nulo
// Undefined = eu esqueço de colocar o valor

// Arrays e objetos

// tipagem dinâmica
let variavel = 100;

console.log(typeof variavel);

variavel = "texto";

console.log(typeof variavel);

// Operacoes básicas

// Concatenar textos = unir
let primeiroNome = "Matheus";
let sobrenome = "Battisti";

// Nome + Sobrenome
let nomeCompleto = primeiroNome + " " + sobrenome;

console.log(nomeCompleto);

console.log("Olá, " + nomeCompleto + ", tudo bem?");

// Operações aritméticas
console.log(10 + 5);
console.log(10 - 5);
console.log(10 / 5);
console.log(10 * 5);

// Comparações
console.log(10 > 5);
console.log(10 < 5);

// Toda comparação retorna um booleano

// >=, <=
// ==, === (identico)

console.log(10 > 10);

console.log(10 >= 10);

console.log(10 == 10);

console.log(10 === 10);

console.log(10 == "10");

// Pode acarretar em erros
console.log("10" + 1);

// Valor e o tipo são iguais
console.log(10 === "10");

// = Não é ==

// = > atribuição
// ==, === > comparação

let a = 10;
let b = 20;

// console.log((a = b));

console.log(a);

console.log(a === b);
