// Funções
// Modularizar o código

// function NOME(ARG1, ARG2, ARGN...) { EXC.}

// Parametros/argumentos são opcionais
function digaOi() {
  console.log("Oi! tudo bem?");
}

// EXECUTAR/INVOCAR/CHAMAR
digaOi();
digaOi();

// Argumentos

// os parametros podem ser de qlqr tipo
function soma(a, b) {
  const soma = a + b;

  console.log("Soma: " + soma);
}

soma(2, 4);

soma(8, 20);

// Return -> o retorno de dados de uma funcao
// return x

function multiplicacao(a, b) {
  const mult = a * b;

  return mult;
}

// function multiplicacao() {
//   console.log("oi");
// }

const resultado = multiplicacao(2, 2);

console.log(resultado);

const somaDois = resultado + 10;

console.log(somaDois);

// A função
// - Não precisa de parametro
// - Não precisa de retorno

// Função anonima
const saudacao = function (nome) {
  console.log("Olá " + nome);
};

saudacao("Matheus");

// Função anonima 2: callback, cb
// é executar uma função como argumento
function operacao(a, b, callback) {
  console.log("Realizando operação...");
  return callback(a, b);
}

let resultadoOperacao = operacao(10, 8, soma);

console.log(resultadoOperacao);

let resultadoDois = operacao(5, 5, function (x, y) {
  return x - y;
});

console.log(resultadoDois);

// Arrow functions ou Funções de flecha
// com uma sintaxe menor

// (arg1, arg2) => {}
const dividir = (a, b) => {
  return a / b;
};

console.log(dividir(10, 5));

const multiplicacaoArrow = (a, b) => a * b;

// quando ela só tem uma linha, n precisa de:
// {}
// return

console.log(multiplicacaoArrow(10, 10));

const msg = () => console.log("Testando");

msg();

// função que detecta o tipo do dado
function detectarTipo(valor) {
  if (typeof valor === "string") {
    return "String";
  } else if (typeof valor === "number") {
    return "Number";
  } else if (typeof valor === "boolean") {
    return "Boolean";
  } else {
    return "Tipo desconhecido";
  }
}

console.log(detectarTipo("teste"));
console.log(detectarTipo(false));
console.log(detectarTipo(5));

// Condicional ternária

// cond/expressão ? TRUE : FALSE

const idade = 15;

const ehMaiorDeIdade = idade >= 18 ? "É maior" : "Não é maior";

console.log(ehMaiorDeIdade);
