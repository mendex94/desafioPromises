const fs = require('fs/promises')
const soma = (x, y) => {
    return new Promise((resolve, reject) =>{
        fs.appendFile('Resultado.txt', `O resultado é: ${x + y}`)
        .then(() => {
            resolve()
        })
    })
}

soma(5, 4)