// Seleção de elementos

// HTML -> tags
// JS > HTML > tags(elementos)

// id, class, CSS selector, tag, atributos
const titulo = document.getElementById("titulo-principal");

console.log(titulo);

titulo.textContent = "Testando DOM";

// Selecao tag
const itensLista = document.getElementsByTagName("li");

// GET ELEMENT(S) FORMA DE SELECAO (ID, CLASS, TAG)
// elementS -> (conjunto de elemento)

console.log(itensLista);

// HTMLCollection -> Array

itensLista[0].textContent = "Uva";

// Pelo seletor do CSS
// querySelector = 1
// querySelectorAll = vários

// #lista-frutas li {}
const primeiroItem = document.querySelector("#lista-frutas li");

console.log(primeiroItem);

primeiroItem.textContent = "Mamão";

const todosOsItens = document.querySelectorAll("#lista-frutas li");

console.log(todosOsItens);

// NodeList > array

todosOsItens.forEach((item, index) => {
  console.log(`Item ${index + 1}: `, item.textContent);
});

// Atributos = id, class, src, href
const botaoAlterar = document.querySelector("#botao-alterar");

console.log(botaoAlterar);

botaoAlterar.setAttribute("title", "Clique no botão");

console.log("ID: " + botaoAlterar.getAttribute("id"));

// setAttribute -> novo atributo
// getAttribute -> receber o valor de um attr

// Adicionar elementos
const lista = document.querySelector("#lista-frutas");

lista.innerHTML += "<li>Manga</li>";

// Texto de botões
botaoAlterar.textContent = "Teste";

// Eventos
const addBtn = document.querySelector("#botao-adicionar-fruta");

// 2 args = evento, função
addBtn.addEventListener("click", () => {
  lista.innerHTML += "<li>Limão</li>";
});

const botaoDescricao = document.querySelector("#botao-modificar-descricao");

botaoDescricao.addEventListener("click", () => {
  const descricao = document.querySelector(".descricao");

  descricao.textContent = "Mudando...";
});
