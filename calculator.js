// Criando uma class para poder exportar e usar em outro arquivo
class Calculator {
    // Criando as formas de caulculo
    add(a, b){
        return a + b
    }

    subtract(a, b){
        return a - b
    }

    multiply(a, b){
        return a * b
    }

    divide(a, b){
        if(b === 0){
            // Verifica se a função lança o erro esperado ao tentar dividir por zero.
            throw new Error("Divisão por zero não é permitido")
        }
        return a / b
    }
}
// exportando a classe para usar no "test/test.js"
module.exports = Calculator