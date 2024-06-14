// Função para rolar o carrossel na direção especificada
function scrollCarousel(Carrossel, direction) {
    const carousel = document.getElementById(Carrossel); // Obtém o elemento do carrossel pelo ID
    const scrollAmount = 300; // Quantidade de pixels para rolar

    if (direction === 'right') {
        carousel.scrollLeft -= scrollAmount; // Rola o carrossel para a direita
    } else if (direction === 'left') {
        carousel.scrollLeft += scrollAmount; // Rola o carrossel para a esquerda
    }
}

// Função assíncrona para listar os livros (obtendo dados da API)
async function listaLivro() {
    const conexao = await fetch("http://localhost:3000/produtos"); // Faz uma requisição para a API
    const conexaoConvertida = await conexao.json(); // Converte a resposta para JSON

    return conexaoConvertida; // Retorna os dados convertidos
}

// Função assíncrona para criar um novo card de livro (enviando dados para a API)
async function criaCard(nome, autor, paginas, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST", // Método HTTP para criar (POST)
        headers: {
            "Content-type": "application/json" // Tipo de conteúdo da requisição
        },
        body: JSON.stringify({
            nome: nome,
            autor: autor,
            paginas: paginas,
            genero: genero,
            preco: preco,
            imagem: imagem
        }) // Corpo da requisição com os dados do livro
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o seu livro"); // Lança um erro se a requisição falhar
    }

    const conexaoConvertida = await conexao.json(); // Converte a resposta para JSON

    return conexaoConvertida; // Retorna os dados convertidos
}

// Seleciona o formulário de adição de produto
const formulario = document.querySelector(".form-adicionar-produto");

// Função assíncrona para criar um novo livro (chamada ao enviar o formulário)
async function criarLivro(evento) {
    evento.preventDefault(); // Previene o comportamento padrão do formulário

    // Obtém os valores dos campos de entrada do formulário
    const nome = document.getElementById("nome").value;
    const autor = document.getElementById("autor").value;
    const paginas = document.getElementById("paginas").value;
    const genero = document.getElementById("genero").value;
    const preco = document.getElementById("preco").value;
    const imagem = document.getElementById("imagem").value;

    // Chama a função para criar o livro na API
    await criaCard(nome, autor, paginas, genero, preco, imagem);

    // Redireciona para a página de confirmação de envio
    window.location.href = "../envio-concluido.html";
}

// Adiciona um listener ao formulário para tratar o envio
formulario.addEventListener("submit", criarLivro);

// Função para criar os cards de produtos
function constroiCard(nome, autor, paginas, genero, preco, imagem) {
    const card = document.createElement("div");
    card.className = "produto-card";
    card.innerHTML = `
        <img src="${imagem}" alt="" class="produto-imagem">
        <p class="produto-card-titulo">${nome}</p>
        <p class="produto-card-autor">${autor}</p>
        <p class="produto-card-num-pag">${paginas} Páginas</p>
        <p class="produto-card-genero">${genero}</p>
        <p class="produto-card-preco">${preco}</p>
        <i class="fa-solid fa-trash-can"></i>
    `;
    return card;
}

// Função para listar os livros e adicioná-los ao carrossel
async function listaProdutos() {
    const produtos = await listaLivro();
    const carrossel = document.getElementById("Carrossel");

    produtos.forEach(produto => {
        const card = constroiCard(produto.nome, produto.autor, produto.paginas, produto.genero, produto.preco, produto.imagem);
        carrossel.appendChild(card);
    });
}

// Função para deletar um livro
function deletaLivro(evento) {
    const card = evento.target.parentElement;
    card.remove();
}

// Adiciona um listener ao carrossel para tratar a exclusão do livro
const carrossel = document.getElementById("Carrossel");
carrossel.addEventListener("click", function(evento) {
    if (evento.target.classList.contains("fa-trash-can")) {
        deletaLivro(evento);
    }
});
// Função para exibir uma confirmação de exclusão de card
function confirmarExclusao() {
    // Exibe um alerta de confirmação
    const confirmacao = confirm("Tem certeza que deseja excluir este livro?");

    if (confirmacao) {
        // Se confirmado, exibe um alerta de sucesso
        alert("Livro excluído com sucesso!");
    }
}


// Chama a função para listar os produtos ao carregar a página
listaProdutos();



