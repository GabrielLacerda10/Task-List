const formulario = document.getElementById("form-tarefa");
const input = document.getElementById("nova-tarefa");
const lista = document.querySelector(".lista-tarefas");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const tarefa = document.createElement("li");
    tarefa.classList.add("tarefa");

    const nome = document.createElement("span");
    nome.textContent = input.value;

    const status = document.createElement("span");
    status.textContent = "Pendente";
    status.classList.add("pendente");

    tarefa.appendChild(nome);
    tarefa.appendChild(status);

    lista.appendChild(tarefa);

    input.value = "";
});