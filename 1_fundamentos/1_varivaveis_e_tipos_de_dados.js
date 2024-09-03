// 1. Declaração de Variáveis com var, let, e const

// Usando var (escopo de função)
var nome = "Matheus";
console.log(nome); // Saída: Matheus

// Usando let (escopo de bloco)
let idade = 25;
console.log(idade); // Saída: 25

// Usando const (constante, escopo de bloco)
const pi = 3.14;
console.log(pi); // Saída: 3.14

// 2. Tipos de Dados Primitivos

// Número
let numero = 42;
console.log(numero); // Saída: 42

// Verificação do tipo de dados
let variavelTeste = "Texto";
console.log("Tipo de 'variavelTeste':", typeof variavelTeste); // Saída: string

// String (cadeia de caracteres)
let saudacao = "Olá, Mundo!";
console.log(saudacao); // Saída: Olá, Mundo!

// Booleano (verdadeiro ou falso)
let estaChovendo = false;
console.log(estaChovendo); // Saída: false

// Null (ausência intencional de valor)
let semValor = null;
console.log(semValor); // Saída: null

// Undefined (variável declarada, mas sem valor atribuído)
let indefinido;
console.log(indefinido); // Saída: undefined

// Símbolo (valor único e imutável)
let simbolo = Symbol("descricao");
console.log(simbolo); // Saída: Symbol(descricao)

// BigInt (inteiros muito grandes)
let numeroGrande = BigInt(12345678901234567890);
console.log(numeroGrande); // Saída: 12345678901234567890n

// 3. Tipagem Dinâmica

// Atribuição de um número a uma variável
let variavel = 100;
console.log(variavel); // Saída: 100

// Reatribuição de uma string à mesma variável
variavel = "Cem";
console.log(variavel); // Saída: Cem

// 4. Operações Básicas com Tipos de Dados

// Concatenação de Strings
let primeiroNome = "João";
let ultimoNome = "Silva";
let nomeCompleto = primeiroNome + " " + ultimoNome;
console.log(nomeCompleto); // Saída: João Silva

// Operações Matemáticas com Números
let soma = 10 + 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 2;
let subtracao = 10 - 5;
console.log(soma, multiplicacao, divisao, subtracao); // Saída: 15 50 5 5

// Comparações
let maiorQue = 10 > 5;
let igual = 10 === 10;
let diferente = 10 !== 5;
console.log(maiorQue, igual, diferente); // Saída: true true true

// 5. Exemplo Prático: Criando uma Saudação Personalizada

let nomeUsuario = "Maria";
let mensagem = "Olá, " + nomeUsuario + "! Seja bem-vinda.";
console.log(mensagem); // Saída: Olá, Maria! Seja bem-vinda.
