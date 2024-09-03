// IF

// decisões ao longo do código

// if -> recurso
// () -> expressão que vai ser avaliada
// {} -> bloco de cód. q é executado

// comparação / expressoes -> booleanos

const hora = 16;

if (hora < 12) {
  console.log("Bom dia!");
}

// se o if for falso, o cód. nao executa {}

// toda coisa verdadeira > true
// quem nao é? false

// Else

// é um bloco que vai ser executado, se
// o if for false

if (hora < 12) {
  console.log("Bom dia");
} else {
  console.log("Boa tarde");
}

const temperatura = 16;

if (temperatura <= 18) {
  console.log("Está frio!");
} else {
  console.log("Está calor!");
}

// eu não posso ter só o else, preciso do if

// mais de uma possibilidade? else if

// else if > permite 1 ou mais alternativas

const velocidade = 40;

if (velocidade < 20) {
  console.log("Está muito abaixo da velodidade!");
} else if (velocidade < 50) {
  console.log("Recomendamos você acelerar!");
} else if (velocidade < 80) {
  console.log("Velocidade ideal");
} else {
  console.log("Excesso de velocidade!");
}

// if: 1 apenas, n precisa de ngm
// else if: posso ter N, mas preciso de if, nao precisa do else
// else: 1 apenas, preciso do if, e não do else if

// switch

// ele é bom para analisar casos com valores
// fixos, ex: dia da semana

// if: geralmente com intervalo de valores
// switch: geralmente com valores específicos

// if vai dominar os programas, mercado

let diaDaSemana = 12;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia da semana inválido!");
}

// Operadores lógicos

// AND &&
// OR ||
// NOT !

// Tabela verdade

// Vão permitir lógicas mais complexas

// EXP1 && EXP2 > true se as 2 forem true, se 1 for false é falso
// EXP1 || EXP2 > true se 1 for true, false se as duas forem false
// !EXP1 -> inveter o resultado boolean = true > false, false > true

// se o usuário pode dirigir

let idadeDoUsuario = 21;
let temCarteira = true;

// sempre viram booleano > true == true >> true, false == true >> false
if (idadeDoUsuario >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir!");
}

// cadastro em um sistema
// ele pode fazer com rg ou passaporte
const temRG = false;
const temPassaporte = false;

if (temRG || temPassaporte) {
  console.log("Pode fazer o cadastro!");
} else {
  console.log("NÃO pode fazer o cadastro!");
}

const estaChovendo = false;

// !true > false
if (!estaChovendo) {
  console.log("Não está chovendo!");
}
