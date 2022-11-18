function aplicaDesconto (livros) {
    const desconto = 0.3;
     let resultadoDesconto = livros.map(Element => {
        return {...Element, preco: Element.preco - (Element.preco * desconto)}
    })
    return resultadoDesconto;
} 