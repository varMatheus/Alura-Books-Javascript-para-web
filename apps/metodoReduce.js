function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, Element) => acc + Element.preco, 0).toFixed(2)
}