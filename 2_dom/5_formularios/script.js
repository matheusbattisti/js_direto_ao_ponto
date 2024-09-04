// Formulários

// evento do form. (submit)
// validações de dados -> telefone ou dado esp.
// o recebimento de dados

const form = document.querySelector("#form-cadastro");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Todas as mensagens de erro
  const erros = document.querySelectorAll(".erro");

  // Limpar os erros
  erros.forEach((span) => (span.textContent = ""));

  // Validar nome
  const nome = document.querySelector("#nome").value;

  if (nome.length < 3) {
    document.querySelector("#erro-nome").textContent =
      "Nome deve ter pelo menos 3 caracteres.";
  }

  // Validar e-mail
  const email = document.querySelector("#email").value;

  // Expressão regular -> verifica se o texto digitado tem o formato de um email
  // EXPRESSAO.test(matheus = [^\s@] @gmail = [^\s@].com = [^\s@])
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelector("#erro-email").textContent =
      "Por favor, insira um e-mail válido.";
  }

  // Validação de senha
  const senha = document.querySelector("#senha").value;

  if (senha.length < 8) {
    document.querySelector("#erro-senha").textContent =
      "A senha deve ter pelo menos 8 caracteres";
  }

  const confirmacaoSenha = document.querySelector("#confirmar-senha").value;

  if (senha !== confirmacaoSenha) {
    document.querySelector("#erro-confirmar-senha").textContent =
      "As duas senhas devem ser iguais.";
  }

  // Validação de telefone
  const telefone = document.querySelector("#telefone").value;

  // (XX) XXXXX-XXXX
  if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
    document.querySelector("#erro-telefone").textContent =
      "O telefone precisa ter o padrão (XX) XXXXX-XXXX";
  }

  // Estado selecionado
  const estado = document.querySelector("#estado").value;

  if (estado === "") {
    document.querySelector("#erro-estado").textContent =
      "Por favor, selecione um estado.";
  }

  // Genero
  const generoSelecionado = document.querySelector(
    "input[name='genero']:checked"
  );

  if (!generoSelecionado) {
    document.querySelector("#erro-genero").textContent =
      "Por favor, selecione um genero.";
  }

  // Validação de termos
  const termos = document.querySelector("#termos").checked;

  if (!termos) {
    document.querySelector("#erro-termos").textContent =
      "Por favor, aceite os termos.";
  }
});
