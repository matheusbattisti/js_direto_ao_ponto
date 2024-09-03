// 1. Aplicando Estilos com JavaScript

// Selecionando o título
let titulo = document.querySelector("#titulo-principal");

// Alterando o estilo de cor e alinhamento do título
titulo.style.color = "blue";
titulo.style.textAlign = "center";
console.log("Cor e alinhamento aplicados ao título.");

// 2. Modificando Estilos de Elementos com JavaScript

// Selecionando o parágrafo
let descricao = document.querySelector(".descricao");

// Alterando o estilo de fundo e cor do texto
descricao.style.backgroundColor = "yellow";
descricao.style.color = "red";
descricao.style.padding = "10px";
descricao.style.borderRadius = "5px";
console.log("Estilos aplicados ao parágrafo.");

// 3. Alterando Dimensões com JavaScript

// Ajustando a largura e altura do parágrafo
descricao.style.width = "300px";
descricao.style.height = "100px";
console.log("Dimensões do parágrafo ajustadas.");

// 4. Aplicando Vários Estilos ao Mesmo Tempo

// Selecionando o botão para aplicar estilos
let botaoEstilizar = document.querySelector("#botao-estilizar");

// Aplicando vários estilos ao botão
botaoEstilizar.style.backgroundColor = "green";
botaoEstilizar.style.color = "white";
botaoEstilizar.style.fontSize = "16px";
botaoEstilizar.style.border = "none";
botaoEstilizar.style.padding = "10px 20px";
botaoEstilizar.style.cursor = "pointer";
console.log("Estilos aplicados ao botão.");

// 5. Removendo Estilos

// Selecionando o botão para remover estilos
let botaoRemoverEstilos = document.querySelector("#botao-remover-estilos");

// Função para remover estilos do parágrafo
function removerEstilos() {
  descricao.style.backgroundColor = "";
  descricao.style.color = "";
  descricao.style.padding = "";
  descricao.style.borderRadius = "";
  descricao.style.width = "";
  descricao.style.height = "";
  console.log("Estilos removidos do parágrafo.");
}

// Adicionando evento ao botão para remover estilos
botaoRemoverEstilos.addEventListener("click", removerEstilos);

// 6. Manipulando Estilos Condicionalmente

// Função para alternar cor do título
function alternarCorTitulo() {
  if (titulo.style.color === "blue") {
    titulo.style.color = "purple";
  } else {
    titulo.style.color = "blue";
  }
  console.log("Cor do título alternada.");
}

// Adicionando evento ao botão para aplicar estilos condicionalmente
botaoEstilizar.addEventListener("click", alternarCorTitulo);
