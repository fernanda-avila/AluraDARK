

// Função para filtrar os livros por categoria
function filtrarPorCategoria(categoria) {
    const carrossel = document.getElementById("Carrossel");
    const cards = carrossel.getElementsByClassName("produto-card");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const genero = card.querySelector(".produto-card-genero").textContent;

        if (genero !== categoria) {
            card.style.display = "none"; 
        }
    }
}

// Função para adicionar listeners aos botões de categoria
function adicionarListenersCategoria() {
    const botoesCategoria = document.querySelectorAll(".genero-item");

    botoesCategoria.forEach(botao => {
        botao.addEventListener("click", () => {
            const categoria = botao.dataset.categoria;
            filtrarPorCategoria(categoria);
        });
    });
}

// Função para inicializar o script
function inicializar() {
    adicionarListenersCategoria();
    filtrarPorCategoria(); 
}

inicializar();