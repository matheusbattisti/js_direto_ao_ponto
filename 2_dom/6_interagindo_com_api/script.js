// 1. Configuração Inicial

// Selecionando os elementos da página
let botaoBuscar = document.querySelector("#botao-buscar");
let botaoAdicionar = document.querySelector("#botao-adicionar");
let listaResultados = document.querySelector("#lista-resultados");

// 2. Função para Realizar a Requisição com Fetch

// Função para buscar dados de uma API
function buscarDados() {
  // URL da API (exemplo com uma API pública)
  let url = "https://jsonplaceholder.typicode.com/posts";

  // Realizando a requisição GET com fetch
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.statusText);
      }
      return response.json();
    })
    .then((dados) => {
      console.log("Dados recebidos:", dados);
      exibirResultados(dados);
    })
    .catch((error) => {
      console.error("Erro ao buscar os dados:", error);
    });
}

// 3. Função para Exibir os Resultados

// Função para exibir os resultados no DOM
function exibirResultados(dados) {
  listaResultados.innerHTML = ""; // Limpa a lista antes de exibir os novos resultados

  // Itera sobre os dados e cria elementos para cada item
  dados.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = `ID: ${item.id} - Título: ${item.title}`;

    // Botão de excluir para cada item
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.style.marginLeft = "10px";

    // Adicionando evento de clique ao botão de excluir
    botaoExcluir.addEventListener("click", () => {
      excluirPost(item.id, listItem);
    });

    listItem.appendChild(botaoExcluir); // Adiciona o botão de excluir ao item
    listaResultados.appendChild(listItem);
  });
}

// 4. Função para Excluir um Post

// Função para excluir um post da API e do DOM
function excluirPost(id, elemento) {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log(`Post ID ${id} excluído com sucesso.`);
        elemento.remove(); // Remove o elemento do DOM
      } else {
        throw new Error("Erro ao excluir o post.");
      }
    })
    .catch((error) => {
      console.error("Erro ao excluir o post:", error);
    });
}

// 5. Função para Realizar uma Requisição POST

// Função para enviar dados para a API e adicionar ao DOM
function enviarDados() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let dados = {
    title: "Novo Post",
    body: "Conteúdo do novo post",
    userId: 1,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((dados) => {
      console.log("Post adicionado:", dados);
      adicionarPostAoDOM(dados);
    })
    .catch((error) => {
      console.error("Erro ao adicionar o post:", error);
    });
}

// 6. Função para Adicionar um Post ao DOM

// Função para adicionar o novo post ao DOM
function adicionarPostAoDOM(dados) {
  let listItem = document.createElement("li");
  listItem.textContent = `ID: ${dados.id} - Título: ${dados.title}`;

  // Botão de excluir para o novo item
  let botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.style.marginLeft = "10px";

  // Adicionando evento de clique ao botão de excluir
  botaoExcluir.addEventListener("click", () => {
    excluirPost(dados.id, listItem);
  });

  listItem.appendChild(botaoExcluir);
  listaResultados.appendChild(listItem);
}

// 7. Adicionando Eventos aos Botões

// Adicionando evento de clique ao botão para buscar dados
botaoBuscar.addEventListener("click", buscarDados);

// Adicionando evento de clique ao botão para adicionar post
botaoAdicionar.addEventListener("click", enviarDados);
