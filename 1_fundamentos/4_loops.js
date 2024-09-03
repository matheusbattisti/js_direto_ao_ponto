// 1. Loop For

// Loop for básico: iterando de 0 a 4
for (let i = 0; i < 5; i++) {
  console.log("Loop For - Iteração:", i);
}
// Saída:
// Loop For - Iteração: 0
// Loop For - Iteração: 1
// Loop For - Iteração: 2
// Loop For - Iteração: 3
// Loop For - Iteração: 4

// Loop For com Array
let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}
// Saída:
// Fruta: Maçã
// Fruta: Banana
// Fruta: Laranja

// 2. Loop While

// Loop While básico: iterando até 5
let contador = 0;
while (contador < 5) {
  console.log("Loop While - Contador:", contador);
  contador++;
}
// Saída:
// Loop While - Contador: 0
// Loop While - Contador: 1
// Loop While - Contador: 2
// Loop While - Contador: 3
// Loop While - Contador: 4

// 3. Loop Do...While

// Loop Do...While básico: executa pelo menos uma vez
let numero = 0;
do {
  console.log("Loop Do...While - Número:", numero);
  numero++;
} while (numero < 5);
// Saída:
// Loop Do...While - Número: 0
// Loop Do...While - Número: 1
// Loop Do...While - Número: 2
// Loop Do...While - Número: 3
// Loop Do...While - Número: 4

// 4. Exemplo Prático: Somando Números Pares com For

let somaPares = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // Verifica se o número é par
    somaPares += i;
  }
}
console.log("Soma dos Números Pares de 1 a 10:", somaPares); // Saída: 30

// 5. Exemplo Prático: Verificando Condição com While

let saldo = 100;
while (saldo > 0) {
  console.log("Saldo atual:", saldo);
  saldo -= 20; // Reduz 20 a cada iteração
}
// Saída:
// Saldo atual: 100
// Saldo atual: 80
// Saldo atual: 60
// Saldo atual: 40
// Saldo atual: 20

// 6. Exemplo Prático: Geração de Número Aleatório com Do...While

let aleatorio;
do {
  aleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número entre 1 e 10
  console.log("Número Gerado:", aleatorio);
} while (aleatorio !== 5); // Continua até que o número gerado seja 5
// Saída: (Varia de acordo com a execução, mas continua até gerar o número 5)

// Exemplo Prático: Contando Consoantes em uma Palavra

let palavra = "JavaScript";
let consoantes = 0;
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
console.log("Número de Consoantes em 'JavaScript':", consoantes); // Saída: 7
