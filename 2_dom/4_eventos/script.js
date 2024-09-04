// Eventos

// Ações que são disparadas pelo usuário

// click, envio de form, passar o mouse em el.

// Selecionar > Atrelar um evento > Des. func.
const botaoClick = document.querySelector("#botao-click");

botaoClick.addEventListener("click", () => {
  alert("Botão foi clicado!");
});

// input > quando o usuario digita algo em um campo

const campoTexto = document.querySelector("#campo-texto");

campoTexto.addEventListener("input", () => {
  console.log("Digitou: " + campoTexto.value);
});

// keydown > teclado
campoTexto.addEventListener("keydown", (event) => {
  console.log("Teclou: " + event.key);

  if (event.key === "Enter") {
    alert("Enviou mensagem!");
  }
});

// Mouseover e mouseout
// o mouse passa por alguma coisa (over)
// qnd o mouse sai (out)

botaoClick.addEventListener("mouseover", () => {
  botaoClick.style.backgroundColor = "purple";
});

botaoClick.addEventListener("mouseout", () => {
  botaoClick.style.backgroundColor = "green";
});

// Eventos dinamicos
const lista = document.querySelector("#lista-itens");
const botaoAddItem = document.querySelector("#botao-adicionar-item");

function adicionarItem() {
  const novoItem = document.createElement("li");

  novoItem.textContent = "Novo item";

  lista.appendChild(novoItem);

  console.log("Item adicionado!");
}

botaoAddItem.addEventListener("click", adicionarItem);

// delegar eventos
lista.addEventListener("click", (event) => {
  console.log(event.target.tagName);

  if (event.target.tagName === "LI") {
    console.log("Clicou no item: " + event.target.textContent);
  }
});

// remover eventos
function removerEventoDeClique() {
  botaoAddItem.removeEventListener("click", adicionarItem);
}

setTimeout(removerEventoDeClique, 2000);

// double click => clique duplo
const botaoDouble = document.querySelector("#botao-double-click");

botaoDouble.addEventListener("dblclick", () => {
  console.log("Deu 2 cliques.");
});

// capturar as coordenads do mouse em um elemento
const mouseArea = document.querySelector("#mouse-area");

mouseArea.addEventListener("mousemove", (event) => {
  console.log(`Movimento x: ${event.clientX}, Y: ${event.clientY}`);
});

// load
window.addEventListener("load", () => {
  console.log("Olá javascript!");
});

document.addEventListener("click", () => {
  console.log("clicou!");
});
