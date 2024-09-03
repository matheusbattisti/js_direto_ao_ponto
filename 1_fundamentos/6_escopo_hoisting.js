// Escopo

// Escopo global
// { } => Let e Const

let nome = "Matheus"; // var no escopo global

function exibirNome() {
  console.log(nome);
}

exibirNome();

console.log("Nome: " + nome);

// Escopo local => { }
function exibirIdade() {
  const idade = 20;
  console.log("Sua idade é: " + idade);
}

exibirIdade();

const idade = 30;

// Escopo de bloco
if (true) {
  const idade = 15;
  console.log("Idade if: " + idade);
}

console.log("Idade global: " + idade);

for (let i = 0; i < 5; i++) {
  const idade = 45;

  console.log("Idade loop: " + idade);
}

// Hoisting
x;

console.log(x);

var x = 5;

console.log(x);

// let e const -> vao anular o hoisting de variáveis
digaOi();

function digaOi() {
  console.log("Oi!");
}

const testando = () => {
  console.log("Olá!");
};

// JS moderno, ele anula de certa forma o hoisting

// Loop infinito
// for (let i = 0; i < 5; i--) {
//   console.log(i);
// }
