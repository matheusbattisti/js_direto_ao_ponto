// Aplicar estilos com JS

// Sempre precisa selecionar um elemento
const title = document.querySelector("#titulo-principal");

title.style.color = "red";
// margin-top: 10px
title.style.marginTop = "50px";
title.style.textAlign = "center";

// text-align: center;
// textAlign = "center"

const descricao = document.querySelector(".descricao");

descricao.style.color = "purple";
descricao.style.backgroundColor = "yellow";
descricao.style.padding = "20px";
descricao.style.borderRadius = "5px";

descricao.style.fontFamily = "Helvetica";

descricao.style.width = "300px";

const btnRemover = document.querySelector("#botao-remover-estilos");

btnRemover.addEventListener("click", () => {
  descricao.style.backgroundColor = "";
  descricao.style.padding = "";
  descricao.style.borderRadius = "";
  descricao.style.fontFamily = "";
  descricao.style.width = "";
  descricao.style.color = "";
});

const btnAdicionar = document.querySelector("#botao-estilizar");

btnAdicionar.addEventListener("click", () => {
  if (descricao.style.color === "purple") {
    descricao.style.backgroundColor = "red";
  } else {
    descricao.style.backgroundColor = "green";
  }

  descricao.style.color = "blue";
});

console.log(descricao.style);
