class Produto {

    constructor(nome, preco, desc){
        this.nome = nome
        this.preco = preco
        this._desc = desc
    }

    get precoFinal() {
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}
Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    }
    set: function(novoDesc) {
        if(novoDesc >= 0 && novoDesc <= 1){
            this._desc = novoDesc
        }
    }
})
Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}% de desconto`
    }
})

const p1 = new Produto('Caneta', 10)
console.log(`Nome: ${p1.nome} - Preço: ${p1.preco}`)

const p2 = new Produto('Geladeira', 3000, 0.8)
console.log(`Nome: ${p2.nome}
Preço: ${p2.preco} 
Desconto: ${p2.desc} 
Valor Desconto: ${p2.precoFinal}`)
console.log(p2.desc)
console.log(p2.descString)