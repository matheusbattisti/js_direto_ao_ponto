// 1. Capturando Eventos de Clique

// Selecionando o botão e adicionando um evento de clique
let botaoClick = document.querySelector("#botao-click");
botaoClick.addEventListener("click", () => {
  alert("Botão foi clicado!");
  console.log("Botão clicado.");
});

// 2. Capturando Eventos de Input

// Selecionando o campo de texto e adicionando evento de input
let campoTexto = document.querySelector("#campo-texto");
campoTexto.addEventListener("input", () => {
  console.log("Valor do campo de texto:", campoTexto.value);
});

// 3. Capturando Eventos de Teclado

// Adicionando evento de teclado ao campo de texto
campoTexto.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada:", event.key);
});

// 4. Capturando Eventos de Mouse

// Adicionando evento de mouseover ao botão
botaoClick.addEventListener("mouseover", () => {
  botaoClick.style.backgroundColor = "lightblue";
  console.log("Mouse passou sobre o botão.");
});

// Restaurando a cor do botão ao remover o mouse
botaoClick.addEventListener("mouseout", () => {
  botaoClick.style.backgroundColor = "";
  console.log("Mouse saiu do botão.");
});

// 5. Adicionando Elementos Dinâmicos e Delegação de Eventos

// Selecionando a lista e o botão de adicionar item
let listaItens = document.querySelector("#lista-itens");
let botaoAdicionarItem = document.querySelector("#botao-adicionar-item");

// Função para adicionar um novo item à lista
function adicionarItem() {
  let novoItem = document.createElement("li");
  novoItem.textContent = `Item ${listaItens.children.length + 1}`;
  listaItens.appendChild(novoItem);
  console.log("Novo item adicionado:", novoItem.textContent);
}

// Adicionando evento de clique ao botão de adicionar item
botaoAdicionarItem.addEventListener("click", adicionarItem);

// 6. Delegação de Eventos

// Adicionando evento de clique aos itens da lista através de delegação
listaItens.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert(`Você clicou no ${event.target.textContent}`);
    console.log("Item da lista clicado:", event.target.textContent);
  }
});

// 7. Removendo Eventos Dinamicamente

// Função para remover o evento de clique do botão
function removerEventoClique() {
  botaoClick.removeEventListener("click", () => {
    alert("Botão foi clicado!");
  });
  console.log("Evento de clique removido do botão.");
}

// Removendo o evento de clique após um certo tempo
setTimeout(removerEventoClique, 10000); // Remove o evento após 10 segundos
