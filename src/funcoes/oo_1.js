function Produto(nome, preco, desc = 0.50) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * ( 1 - this.desc )
    }
}

const p1 = new Produto('Caneta', 10)
console.log(`Nome: ${p1.nome} - Preço: ${p1.preco}`)

const p2 = new Produto('Geladeira', 3000)
console.log(`Nome: ${p2.nome}
Preço: ${p2.preco} 
Desconto: ${p2.desc} 
Valor Desconto: ${p2.precoFinal()}`)