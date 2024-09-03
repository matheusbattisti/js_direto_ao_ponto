// 1. Introdução às Funções

// Função Nomeada sem Parâmetros
function saudacao() {
  console.log("Olá, Mundo!");
}
saudacao(); // Chama a função
// Saída: Olá, Mundo!

// 2. Funções com Parâmetros

// Função Nomeada com Parâmetros
function cumprimentar(nome) {
  console.log("Olá, " + nome + "!");
}
cumprimentar("Matheus"); // Chama a função com argumento "Matheus"
// Saída: Olá, Matheus!

// Função Nomeada com Múltiplos Parâmetros
function soma(a, b) {
  console.log("Soma:", a + b);
}
soma(5, 10); // Chama a função com argumentos 5 e 10
// Saída: Soma: 15

// 3. Funções com Retorno de Valor

// Função Nomeada com Retorno
function multiplicar(a, b) {
  return a * b;
}
let resultado = multiplicar(4, 5); // Armazena o valor retornado
console.log("Resultado da Multiplicação:", resultado);
// Saída: Resultado da Multiplicação: 20

// Função sem Retorno (Undefined)
function exibirMensagem() {
  console.log("Essa função não retorna valor.");
}
let valorRetornado = exibirMensagem(); // Não há valor retornado
console.log("Valor Retornado:", valorRetornado); // Undefined
// Saída: Essa função não retorna valor.
// Saída: Valor Retornado: undefined

// 4. Funções Anônimas

// Função Anônima atribuída a uma variável
let somar = function (a, b) {
  return a + b;
};
console.log("Soma com Função Anônima:", somar(3, 7));
// Saída: Soma com Função Anônima: 10

// Função Anônima como Callback
function operacao(a, b, callback) {
  return callback(a, b);
}
let resultadoOperacao = operacao(8, 2, function (x, y) {
  return x - y;
});
console.log("Resultado da Operação com Callback:", resultadoOperacao);
// Saída: Resultado da Operação com Callback: 6

// 5. Arrow Functions

// Arrow Function Básica
let dividir = (a, b) => {
  return a / b;
};
console.log("Divisão com Arrow Function:", dividir(10, 2));
// Saída: Divisão com Arrow Function: 5

// Arrow Function com Retorno Implícito (sem chaves)
let dobrar = (x) => x * 2;
console.log("Dobro do Número:", dobrar(5));
// Saída: Dobro do Número: 10

// Arrow Function sem Parâmetros
let mensagem = () => console.log("Essa é uma Arrow Function sem parâmetros.");
mensagem(); // Chama a função
// Saída: Essa é uma Arrow Function sem parâmetros.

// 6. Exemplo Prático: Calculadora com Funções

// Funções Básicas de uma Calculadora
function adicionar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b === 0) {
    return "Divisão por zero não é permitida!";
  }
  return a / b;
}

// Uso das Funções da Calculadora
let numero1 = 20;
let numero2 = 5;

console.log("Adição:", adicionar(numero1, numero2)); // Saída: 25
console.log("Subtração:", subtrair(numero1, numero2)); // Saída: 15
console.log("Multiplicação:", multiplicar(numero1, numero2)); // Saída: 100
console.log("Divisão:", dividir(numero1, numero2)); // Saída: 4

// Exemplo Prático: Funções com Vários Tipos de Retorno

function obterTipoDeDado(valor) {
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
console.log("Tipo de 'Hello':", obterTipoDeDado("Hello")); // Saída: String
console.log("Tipo de 123:", obterTipoDeDado(123)); // Saída: Number
console.log("Tipo de true:", obterTipoDeDado(true)); // Saída: Boolean
