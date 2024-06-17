// Função para rolar o carrossel na direção especificada
function scrollCarousel(Carrossel, direction) {
    const carousel = document.getElementById(Carrossel); 
    const scrollAmount = 300; // Quantidade de pixels para rolar

    if (direction === 'right') {
        carousel.scrollLeft -= scrollAmount; 
    } else if (direction === 'left') {
        carousel.scrollLeft += scrollAmount;
    }
}
// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("paginas").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("imagem").value = "";
}

// Seleciona o botão de limpar if it exists
const botaoLimpar = document.getElementById("limpar");

// Check if the button exists before adding the event listener
if (botaoLimpar) {
    botaoLimpar.addEventListener("click", limparFormulario);
}

// Função assíncrona para listar os livros 
async function listaLivro() {
    const conexao = await fetch("http://localhost:3000/produtos"); 
    const conexaoConvertida = await conexao.json(); 

    return conexaoConvertida; // 
}

// Função assíncrona para criar um novo card de livro (enviando dados para a API)
async function criaCard(nome, autor, paginas, genero, preco, imagem) {
    const payload = {
        nome: nome,
        autor: autor,
        paginas: paginas,
        genero: genero,
        preco: preco,
        imagem: imagem
    };

    console.log("Payload enviado para a API:", payload);

    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json" // Tipo de conteúdo da requisição
        },
        body: JSON.stringify(payload) // Corpo da requisição com os dados do livro
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o seu livro"); // Lança um erro se a requisição falhar
    }

    const conexaoConvertida = await conexao.json(); 

    console.log("Resposta da API:", conexaoConvertida);

    return conexaoConvertida; 
}

// Seleciona o formulário de adição de produto
const formulario = document.querySelector(".form-adicionar-produto");

// Função assíncrona para criar um novo livro (chamada ao enviar o formulário)
async function criarLivro(evento) {
    evento.preventDefault();

    // valores dos campos de entrada do formulário
    const nome = document.getElementById("nome").value;
    const autor = document.getElementById("autor").value;
    const paginas = document.getElementById("paginas").value;
    const genero = document.getElementById("genero").value;
    const preco = document.getElementById("preco").value;
    const imagem = document.getElementById("imagem").value;

    console.log("Valores do formulário:", {
        nome, autor, paginas, genero, preco, imagem
    });

    // Chama a função para criar o livro na API
    await criaCard(nome, autor, paginas, genero, preco, imagem);

    window.location.href = "../envio-concluido.html";
}
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
    
    const confirmacao = confirm("Tem certeza que deseja excluir este livro?");

    if (confirmacao) {
        
        alert("Livro excluído com sucesso!");
    }
}

listaProdutos();
