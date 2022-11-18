const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
    elementoParaInserirLivros.innerHTML= '';
    listaDeLivros.forEach(Element => {
        // let disponibilidade = verificarDisponibilidadeDoLivro(Element);
        let disponibilidade = Element.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${Element.imagem}"
            alt="${Element.alt}" />
            <h2 class="livro__titulo">${Element.titulo}</h2>
            <p class="livro__descricao">${Element.autor}</p>
            <p class="livro__preco" id="preco">R$ ${Element.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${Element.categoria}</span>
            </div>
      </div>
        `
    })
}

