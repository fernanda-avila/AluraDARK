
# Projeto AluraDARK 📚🌑

Este é um projeto desenvolvido como parte do programa ONE da Oracle em parceria com a Alura, na categoria de Front-end. O AluraDARK é uma aplicação web para venda e gerenciamento de livros, com funcionalidades como adicionar novos livros, listar, filtrar por categoria e remover livros.

## Como Usar 🚀

### Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js.

### Instalação do JSON Server
O JSON Server é utilizado para simular uma API REST a partir de um arquivo JSON. Para instalar globalmente, abra o terminal e execute o seguinte comando:

```bash
npm install -g json-server
```

### Iniciando o JSON Server
No diretório raiz do projeto, execute o JSON Server para carregar os dados do arquivo db.json. Este arquivo contém os dados dos livros para a aplicação:

```bash
json-server --watch db.json
```

Isso iniciará o servidor JSON localmente em http://localhost:3000, onde os dados dos livros estarão disponíveis.

### Visualizando a Aplicação
Abra o arquivo index.html no seu navegador preferido para explorar e interagir com a aplicação AluraDARK. Você poderá:

- Visualizar os livros disponíveis à venda.
- Adicionar novos livros através da página cadastrar-produto.html.
- Filtrar os livros por categorias como True Crime, Terror, Nacional e Magia.
- Remover livros da lista.

## Estrutura do Projeto 📂

Aqui está a estrutura dos principais arquivos e pastas do projeto:

```
├── db.json                  # Arquivo JSON com os dados dos livros
├── index.html               # Página principal da aplicação
├── styles.css               # Estilos da aplicação
├── app.js                   # Lógica JavaScript para a aplicação
├── cadastrar-produto.html   # Página para adicionar novos livros
└── img                      # Pasta com imagens usadas na aplicação
```

## Funcionalidades 📜

- Adicionar Novos Livros: Utilize a página cadastrar-produto.html para adicionar novos livros preenchendo os campos do formulário e clicando no botão "Adicionar".

- Listar Livros: Os livros disponíveis são listados na página principal (index.html). Cada livro é exibido em um card com suas informações principais.

- Filtrar Livros: Na parte superior da página principal, há botões de filtro para as categorias "True Crime", "Terror", "Nacional" e "Magia". Clique em uma das categorias para filtrar os livros exibidos.

- Remover Livros: Cada card de livro possui um ícone de lixeira. Clique nele para remover o livro da lista. A remoção é realizada diretamente na API simulada pelo JSON Server.

## JavaScript Utilizado 🖥️

Aqui estão alguns métodos JavaScript principais usados no projeto:

- Função listaLivro(): Para obter os dados dos livros da API.
- Função criaCard(): Para criar os cards de livro dinamicamente.
- Função filtrarPorCategoria(): Para filtrar os livros exibidos por categoria.
- Função removeLivro(): Para remover um livro da lista.

