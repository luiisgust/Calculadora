// Puxando as informações do arquivo "calculator.js"
const Calculator = require('../calculator')

// Criando uma variavel "let", podendo ter alteração em seu valor
let calculator;

// Esta função é executada antes de cada teste. Estamos criando uma nova instância
// da Calculator antes de cada teste para garantir que os testes sejam independentes.
beforeEach(() => {
    calculator = new Calculator()
})

// Aqui vamos Verificar se o valor retornado pela função da calculadora é o esperado.
test('Deveria somar dois numeros', () => {
    // Compara valores estritamente, semelhante ao === em JavaScript.
    expect(calculator.add(2, 3)).toBe(5)
})

test('Deveria subtrair dois numeros', () => {
    expect(calculator.subtract(5, 2)).toBe(3)
})

test('Deveria multiplicar dois numeros', () => {
    expect(calculator.multiply(4, 3)).toBe(12)
})

test('Deveria dividir dois numeros', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test('Deveria lançar erro ao tentar dividir por zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow("Divisão por zero não é permitido")
})