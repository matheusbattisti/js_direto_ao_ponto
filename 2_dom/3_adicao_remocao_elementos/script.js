// 1. Adicionando Elementos com appendChild

// Selecionando a lista de tarefas
let listaTarefas = document.querySelector("#lista-tarefas");

// Criando um novo elemento li
let novaTarefa = document.createElement("li");
novaTarefa.textContent = "Tarefa 4";

// Adicionando o novo elemento ao final da lista
listaTarefas.appendChild(novaTarefa);
console.log("Nova tarefa adicionada com appendChild:", novaTarefa.textContent);

// 2. Removendo Elementos com removeChild

// Selecionando o botão de remover e adicionando evento de clique
let botaoRemover = document.querySelector("#botao-remover");
botaoRemover.addEventListener("click", () => {
  let ultimaTarefa = listaTarefas.lastElementChild; // Selecionando o último item da lista
  if (ultimaTarefa) {
    listaTarefas.removeChild(ultimaTarefa); // Removendo o último item
    console.log("Última tarefa removida:", ultimaTarefa.textContent);
  } else {
    console.log("Nenhuma tarefa para remover.");
  }
});

// 3. Inserindo Elementos com insertAdjacentHTML

// Selecionando o botão de inserir e adicionando evento de clique
let botaoInserir = document.querySelector("#botao-inserir");
botaoInserir.addEventListener("click", () => {
  listaTarefas.insertAdjacentHTML(
    "afterbegin",
    "<li>Nova Tarefa no Início</li>"
  );
  console.log("Tarefa inserida no início da lista com insertAdjacentHTML.");
});

// 4. Criando e Adicionando Elementos Dinamicamente

// Selecionando o botão de adicionar e adicionando evento de clique
let botaoAdicionar = document.querySelector("#botao-adicionar");
botaoAdicionar.addEventListener("click", () => {
  let tarefaDinamica = document.createElement("li");
  tarefaDinamica.textContent = "Tarefa Adicionada Dinamicamente";
  listaTarefas.appendChild(tarefaDinamica);
  console.log("Tarefa adicionada dinamicamente:", tarefaDinamica.textContent);
});

// 5. Removendo um Elemento Específico

// Criando e adicionando uma tarefa temporária
let tarefaTemporaria = document.createElement("li");
tarefaTemporaria.textContent = "Tarefa Temporária";
listaTarefas.appendChild(tarefaTemporaria);
console.log("Tarefa temporária adicionada:", tarefaTemporaria.textContent);

// Removendo a tarefa temporária
listaTarefas.removeChild(tarefaTemporaria);
console.log("Tarefa temporária removida.");

// 6. Adicionando Múltiplos Elementos

// Função para adicionar múltiplas tarefas de uma vez
function adicionarMultiplasTarefas() {
  let tarefas = ["Tarefa A", "Tarefa B", "Tarefa C"];
  tarefas.forEach((tarefa) => {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
    console.log("Tarefa adicionada:", novaTarefa.textContent);
  });
}

adicionarMultiplasTarefas();
