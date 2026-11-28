const botoesFiltro = document.querySelectorAll(".btn-filtro");
const listaFiltro = document.querySelector(".lista-tarefas");

let filtroAtual = "todas";

function filtrarTarefas() {
    const tarefas = document.querySelectorAll(".tarefa");

    tarefas.forEach(function(tarefa) {
        if (
            filtroAtual === "todas" ||
            tarefa.querySelector("." + filtroAtual)
        ) {
            tarefa.style.display = "";
        } else {
            tarefa.style.display = "none";
        }
    });
}

botoesFiltro.forEach(function(botao) {
    botao.addEventListener("click", function() {
        filtroAtual = botao.dataset.filtro;
        filtrarTarefas();
    });
});

const observador = new MutationObserver(filtrarTarefas);

observador.observe(listaFiltro, {
    childList: true,
    subtree: true
});