// 1. Selecionando Elementos por ID

// Selecionando o elemento h1 pelo ID
let titulo = document.getElementById("titulo-principal");
console.log("Título selecionado por ID:", titulo);

// Modificando o conteúdo de texto do h1
titulo.textContent = "Curso Avançado de JavaScript";
console.log("Novo Título:", titulo.textContent);

// 2. Selecionando Elementos por Classe

// Selecionando o elemento p pela classe
let descricao = document.querySelector(".descricao");
console.log("Descrição selecionada por classe:", descricao);

// Modificando o conteúdo de texto do parágrafo
descricao.textContent = "Manipulação do DOM com JavaScript é poderosa!";
console.log("Nova Descrição:", descricao.textContent);

// 3. Selecionando Elementos por Tag

// Selecionando todos os elementos li
let itensLista = document.getElementsByTagName("li");
console.log("Itens da lista selecionados por tag:", itensLista);

// Modificando o conteúdo de um item da lista
itensLista[0].textContent = "Maçã Verde";
console.log("Novo item da lista:", itensLista[0].textContent);

// 4. Selecionando Elementos com querySelector e querySelectorAll

// Selecionando o primeiro item da lista usando querySelector
let primeiroItem = document.querySelector("#lista-frutas li");
console.log("Primeiro item da lista:", primeiroItem.textContent);

// Selecionando todos os itens da lista usando querySelectorAll
let todosItens = document.querySelectorAll("#lista-frutas li");
todosItens.forEach((item, index) => {
  console.log(`Item ${index + 1}:`, item.textContent);
});

// 5. Modificando Atributos

// Selecionando o botão pelo ID
let botaoAlterar = document.getElementById("botao-alterar");

// Adicionando um atributo de título ao botão
botaoAlterar.setAttribute("title", "Clique para alterar o título");
console.log(
  "Atributo 'title' adicionado ao botão:",
  botaoAlterar.getAttribute("title")
);

// Modificando o ID de um elemento
botaoAlterar.id = "botao-novo-id";
console.log("Novo ID do botão:", botaoAlterar.id);

// 6. Modificando o HTML Interno

// Adicionando um item à lista usando innerHTML
let listaFrutas = document.getElementById("lista-frutas");
listaFrutas.innerHTML += "<li>Manga</li>";
console.log("Novo item 'Manga' adicionado à lista:", listaFrutas.innerHTML);

// 7. Modificando o Texto Interno

// Modificando o texto interno de um parágrafo
let botaoDescricao = document.getElementById("botao-modificar-descricao");
botaoDescricao.textContent = "Clique para modificar a descrição";
console.log("Novo texto do botão:", botaoDescricao.textContent);

// 8. Adicionando Eventos para Manipular o DOM

// Evento de clique para alterar o título
botaoAlterar.addEventListener("click", () => {
  titulo.textContent = "Título Alterado com Sucesso!";
  console.log("Título alterado ao clicar no botão:", titulo.textContent);
});

// Evento de clique para adicionar uma fruta
let botaoAdicionarFruta = document.getElementById("botao-adicionar-fruta");
botaoAdicionarFruta.addEventListener("click", () => {
  listaFrutas.innerHTML += "<li>Abacaxi</li>";
  console.log("Novo item 'Abacaxi' adicionado à lista.");
});

// Evento de clique para modificar a descrição
botaoDescricao.addEventListener("click", () => {
  descricao.textContent = "Descrição modificada com JavaScript!";
  console.log("Descrição alterada ao clicar no botão:", descricao.textContent);
});
