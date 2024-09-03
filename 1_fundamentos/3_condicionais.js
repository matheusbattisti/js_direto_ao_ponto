// 1. Uso do If

// Condição simples com if
let hora = 10;
if (hora < 12) {
  console.log("Bom dia!"); // Executa se a condição for verdadeira
}
// Saída: Bom dia!

// 2. Uso do If-Else

// Condição com if e else
let temperatura = 30;
if (temperatura > 25) {
  console.log("Está calor.");
} else {
  console.log("Está frio.");
}
// Saída: Está calor.

// 3. Uso do If-Else If-Else

// Múltiplas condições com if, else if, e else
let nota = 85;
if (nota >= 90) {
  console.log("Nota A");
} else if (nota >= 80) {
  console.log("Nota B");
} else if (nota >= 70) {
  console.log("Nota C");
} else {
  console.log("Nota D");
}
// Saída: Nota B

// 4. Uso do Switch

// Substituindo múltiplos if-else if com switch
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}
// Saída: Terça-feira

// 5. Exemplo Prático: Verificando Categoria de Idade

let idade = 17;
if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
// Saída: Adolescente

// 6. Exemplo Prático com Switch: Sistema de Notas

let conceito = "B";
switch (conceito) {
  case "A":
    console.log("Excelente!");
    break;
  case "B":
    console.log("Muito bom!");
    break;
  case "C":
    console.log("Bom");
    break;
  case "D":
    console.log("Regular");
    break;
  case "F":
    console.log("Reprovado");
    break;
  default:
    console.log("Conceito inválido");
}
// Saída: Muito bom!

// Operadores Lógicos

// Usando AND (&&) para verificar múltiplas condições
let idadeMotorista = 25;
let temCNH = true;
if (idadeMotorista >= 18 && temCNH) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}
// Saída: Pode dirigir.

// Usando OR (||) para verificar pelo menos uma condição
let temIdentidade = false;
let temPassaporte = true;
if (temIdentidade || temPassaporte) {
  console.log("Pode viajar.");
} else {
  console.log("Não pode viajar.");
}
// Saída: Pode viajar.

// Usando NOT (!) para inverter uma condição
let estaChovendo = false;
if (!estaChovendo) {
  console.log("Não está chovendo, pode sair sem guarda-chuva.");
}
// Saída: Não está chovendo, pode sair sem guarda-chuva.

// Combinando operadores lógicos com operadores de comparação
let idadeAluno = 20;
let mediaAluno = 7.5;
if (idadeAluno >= 18 && mediaAluno >= 7) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}
// Saída: Aluno aprovado.
