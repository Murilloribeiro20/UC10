// QUESTÃO 1 

const { calcularDesconto } = require("../src/calcularDesconto");
describe("Testes da função calcularDesconto()", () => {
    test("Calcula desconto de 10%", () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });
    test("Calcula desconto de 50%", () => {
        expect(calcularDesconto(200, 50)).toBe(100);
    });
    test("Verifica se apresenta erro com percentual inválido", () => {
        expect(() => calcularDesconto(100, 120)).toThrow("Dados inválidos");
    });
    module.exports = { calcularDesconto };
});
