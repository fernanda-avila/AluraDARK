// Função para filtrar os livros por categoria
function filtrarPorCategoria(categoria) {
    const carrossel = document.getElementById("Carrossel");
    const cards = carrossel.getElementsByClassName("produto-card");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const genero = card.querySelector(".produto-card-genero").textContent.trim();

        if (categoria === "Mostrar Todos" || genero === categoria) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none"; 
        }
    }
}


function adicionarListenersCategoria() {
    const botoesCategoria = document.querySelectorAll(".genero-item");

    botoesCategoria.forEach(botao => {
        botao.addEventListener("click", () => {
            const categoria = botao.dataset.categoria;
            filtrarPorCategoria(categoria);
        });
    });


    const botaoMostrarTodos = document.getElementById("mostrar-todos");
    botaoMostrarTodos.addEventListener("click", () => {
        filtrarPorCategoria("Mostrar Todos");
    });
}


function inicializar() {
    adicionarListenersCategoria();
}

window.onload = inicializar;
