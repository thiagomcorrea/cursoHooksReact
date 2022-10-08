const carrinho = [
    { nome:'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome:'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome:'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome:'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome:'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// filter, map, reduce

// 1. Fragil: true
// 2. qtde: 4, preco: 27.10 -> total
// 3. Média dos totais

const fragil = item => item.fragil

const getTotal = item => item.qtde * item.preco

const getMedia = (acc, el) => {
    const novaQtede = acc.qtde + 1
    const novoTotal = acc.total + el
    console.log({ acc, el })
    return {
        qtde: novaQtede,
        total: novoTotal,
        media: novoTotal / novaQtede
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho  
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)    
    .media

console.log(`A média é ${media}!`)