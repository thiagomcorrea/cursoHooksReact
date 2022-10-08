const primeiroElemento = arrayOutString => arrayOutString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(cumpriPromessa) {
    cumpriPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
