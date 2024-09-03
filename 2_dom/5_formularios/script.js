// 1. Capturando Dados do Formulário

// Selecionando o formulário e os campos
let formCadastro = document.querySelector("#form-cadastro");
let campoNome = document.querySelector("#nome");
let campoEmail = document.querySelector("#email");
let campoSenha = document.querySelector("#senha");
let mensagem = document.querySelector("#mensagem");

// 2. Validação Simples do Formulário

// Adicionando evento de submissão ao formulário
formCadastro.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Validação simples de campos vazios
  if (
    campoNome.value === "" ||
    campoEmail.value === "" ||
    campoSenha.value === ""
  ) {
    mensagem.textContent = "Todos os campos são obrigatórios!";
    mensagem.style.color = "red";
    console.log("Validação: Campos vazios");
    return;
  }

  // Exibindo mensagem de sucesso
  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";
  console.log("Formulário validado e enviado com sucesso.");

  // Captura e exibição dos dados
  console.log("Nome:", campoNome.value);
  console.log("Email:", campoEmail.value);
  console.log("Senha:", campoSenha.value);

  // Resetando o formulário
  formCadastro.reset();
});

// 3. Validação Personalizada com Eventos de Input

// Validação em tempo real do campo de email
campoEmail.addEventListener("input", () => {
  if (campoEmail.validity.typeMismatch) {
    campoEmail.setCustomValidity(
      "Por favor, insira um endereço de email válido."
    );
    campoEmail.reportValidity();
    console.log("Validação: Email inválido.");
  } else {
    campoEmail.setCustomValidity("");
    console.log("Validação: Email válido.");
  }
});

// Validação em tempo real do campo de senha
campoSenha.addEventListener("input", () => {
  if (campoSenha.value.length < 6) {
    campoSenha.setCustomValidity("A senha deve ter pelo menos 6 caracteres.");
    campoSenha.reportValidity();
    console.log("Validação: Senha muito curta.");
  } else {
    campoSenha.setCustomValidity("");
    console.log("Validação: Senha válida.");
  }
});

// 4. Exibindo Mensagens de Erro Personalizadas

// Função para exibir mensagens de erro personalizadas
function exibirMensagensErro(campo, mensagemErro) {
  campo.setCustomValidity(mensagemErro);
  campo.reportValidity();
  console.log(`Erro de validação: ${mensagemErro}`);
}

// Validando campo nome para não estar vazio
campoNome.addEventListener("input", () => {
  if (campoNome.value.trim() === "") {
    exibirMensagensErro(campoNome, "O nome não pode estar vazio.");
  } else {
    campoNome.setCustomValidity("");
    console.log("Validação: Nome válido.");
  }
});

// 5. Manipulação dos Dados Capturados

// Função para manipular os dados capturados (simulação)
function processarDadosCadastro(nome, email, senha) {
  // Exemplo de manipulação: exibir no console
  console.log("Processando dados de cadastro:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Senha:", senha);
}

// Capturando os dados e processando-os ao submeter o formulário
formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();
  processarDadosCadastro(campoNome.value, campoEmail.value, campoSenha.value);
});
