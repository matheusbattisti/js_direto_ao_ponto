// adição de elementos

// appendChild
const listaDeTarefas = document.querySelector("#lista-tarefas");

// criar o elemento
const li = document.createElement("li");

li.textContent = "Tarefa 4";

console.log(li);

listaDeTarefas.appendChild(li);

// remoção de elementos

// removeChild
const btnRemover = document.querySelector("#botao-remover");

btnRemover.addEventListener("click", () => {
  const ultimaTarefa = listaDeTarefas.lastElementChild;

  if (ultimaTarefa) {
    listaDeTarefas.removeChild(ultimaTarefa);
  } else {
    console.log("Tarefas já removidas!");
  }
});

// insertAdjacentHTML
const btnAdicionar = document.querySelector("#botao-inserir");

btnAdicionar.addEventListener("click", () => {
  listaDeTarefas.insertAdjacentHTML(
    "afterbegin",
    "<li>Nova tarefa inicial</li>"
  );
});

// Criar elemento dinamicamente
const btnAdd = document.querySelector("#botao-adicionar");

btnAdd.addEventListener("click", () => {
  const tarefaDinamica = document.createElement("li");
  tarefaDinamica.textContent = "Tarefa dinâmica";

  tarefaDinamica.style.color = "red";
  tarefaDinamica.style.backgroundColor = "blue";

  tarefaDinamica.setAttribute("id", "tarefa-dinamica");

  listaDeTarefas.appendChild(tarefaDinamica);
});

// adicao de multiplos elementos
function adicionarMultiplasTarefas() {
  const tarefas = ["Tarefa A", "Tarefa B", "Tarefa C"];

  tarefas.forEach((tarefa) => {
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;

    listaDeTarefas.appendChild(novaTarefa);
  });
}

adicionarMultiplasTarefas();

const btnRemover2 = document.querySelector("#botao-remover-2");

btnRemover2.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("#lista-tarefas li");

  tarefas.forEach((tarefa) => {
    if (tarefa.textContent === "Tarefa 2") {
      listaDeTarefas.removeChild(tarefa);
    }
  });
});

const primeiraTarefa = listaDeTarefas.firstElementChild;

listaDeTarefas.removeChild(primeiraTarefa);
