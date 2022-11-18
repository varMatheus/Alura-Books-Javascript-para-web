let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function buscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicaDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
} 
// Como o metododo .map retorna uma array o exibirOsLivrosNaTela() ainda funciona
// porem agr com o valor de livros.preco sendo igual ao calculo usado.
buscarLivrosDaAPI();