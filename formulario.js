const formulario = document.getElementById("form-tarefa");
const input = document.getElementById("nova-tarefa");
const lista = document.querySelector(".lista-tarefas");

const mensagemErro = document.getElementById("mensagem-erro");
const botaoAdicionar = document.getElementById("btn-adicionar");
const spinner = document.getElementById("spinner");
const textoBotao = document.getElementById("texto-botao");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const valor = input.value.trim();

    // Validação do campo vazio
    if (valor === "") {
        mensagemErro.textContent = "Digite uma tarefa antes de adicionar!";
        input.classList.add("campo-invalido");
        input.setAttribute("aria-invalid", "true");
        input.focus();
        return;
    }

    mensagemErro.textContent = "";
    input.classList.remove("campo-invalido");
    input.removeAttribute("aria-invalid");

    // Ativar loading
    spinner.hidden = false;
    textoBotao.textContent = "Adicionando...";
    botaoAdicionar.disabled = true;
    input.disabled = true;

    setTimeout(function() {

        const tarefa = document.createElement("li");
        tarefa.classList.add("tarefa");

        const nome = document.createElement("span");
        nome.textContent = valor;

        const status = document.createElement("span");
        status.textContent = "Pendente";
        status.classList.add("pendente");

        tarefa.appendChild(nome);
        tarefa.appendChild(status);

        lista.appendChild(tarefa);

        input.value = "";

        // Desativar loading
        spinner.hidden = true;
        textoBotao.textContent = "Adicionar";
        botaoAdicionar.disabled = false;
        input.disabled = false;

        input.focus();

    }, 1000);
});

input.addEventListener("input", function() {
    mensagemErro.textContent = "";
    input.classList.remove("campo-invalido");
    input.removeAttribute("aria-invalid");
});