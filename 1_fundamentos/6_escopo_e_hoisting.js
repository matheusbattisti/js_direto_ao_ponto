// 1. Escopo Global

// Variável Global - disponível em qualquer lugar do código
let nome = "Matheus";

function exibirNome() {
  console.log("Nome (Escopo Global):", nome);
}

exibirNome(); // Acessa a variável global dentro da função
console.log("Nome fora da função (Escopo Global):", nome);
// Saída:
// Nome (Escopo Global): Matheus
// Nome fora da função (Escopo Global): Matheus

// 2. Escopo Local (de Função)

// Variável Local - disponível apenas dentro da função onde foi declarada
function exibirIdade() {
  let idade = 25; // Escopo Local
  console.log("Idade (Escopo Local):", idade);
}

exibirIdade();
// console.log(idade); // Erro: ReferenceError: idade is not defined
// Saída: Idade (Escopo Local): 25

// 3. Escopo de Bloco

// Usando let em blocos de código
if (true) {
  let cidade = "São Paulo"; // Escopo de Bloco
  console.log("Cidade (Escopo de Bloco):", cidade);
}
// console.log(cidade); // Erro: ReferenceError: cidade is not defined
// Saída: Cidade (Escopo de Bloco): São Paulo

// Usando const em blocos de código
for (let i = 0; i < 3; i++) {
  const mensagem = "Dentro do loop"; // Escopo de Bloco
  console.log(mensagem);
}
// console.log(mensagem); // Erro: ReferenceError: mensagem is not defined
// Saída:
// Dentro do loop
// Dentro do loop
// Dentro do loop

// 4. Hoisting

// Hoisting com var
console.log(sobrenome); // Undefined, mas sem erro devido ao hoisting
var sobrenome = "Silva";
console.log("Sobrenome após inicialização:", sobrenome);
// Saída:
// Undefined
// Sobrenome após inicialização: Silva

// Hoisting com funções
console.log(saudacao()); // Funções são elevadas, então pode ser chamada antes de sua declaração

function saudacao() {
  return "Olá!";
}
// Saída: Olá!

// Hoisting com let e const (não ocorre)

try {
  console.log(altura); // ReferenceError: Cannot access 'altura' before initialization
  let altura = 1.75;
} catch (e) {
  console.log(e.message); // Captura o erro para evitar quebra de execução
}
// Saída: Cannot access 'altura' before initialization

try {
  console.log(peso); // ReferenceError: Cannot access 'peso' before initialization
  const peso = 70;
} catch (e) {
  console.log(e.message); // Captura o erro para evitar quebra de execução
}
// Saída: Cannot access 'peso' before initialization

// 5. Exemplo Prático: Controle de Escopo com Funções e Blocos

function calcularAreaRetangulo(largura, altura) {
  const area = largura * altura; // Escopo Local (dentro da função)
  return area;
}

let largura = 5; // Escopo Global
let altura = 10; // Escopo Global
let area = calcularAreaRetangulo(largura, altura);
console.log("Área do Retângulo:", area); // Saída: 50

if (area > 20) {
  let resultado = "Grande"; // Escopo de Bloco
  console.log("Resultado:", resultado); // Acessível apenas dentro do bloco if
}
// console.log(resultado); // Erro: ReferenceError: resultado is not defined
