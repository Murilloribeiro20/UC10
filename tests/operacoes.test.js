// QUESTÃO 1 
const { calcularDesconto } = require("../src/operacoes");
describe("Textes da função calcularDesconto()", () => {
    test("Calcula desconto de 10%", () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });
    test("Calcula desconto de 50%", () => {
        expect(calcularDesconto(200, 50)).toBe(100);
    });
    test("Verifica se apresenta erro com percentual inválido", () => {
        expect(() => calcularDesconto(100, 120)).toThrow("Dados inválidos");
    });

const { verificarAprovacao } = require("../src/operacoes");
describe("Textes da função verificarAprovacao()", () => {

    test("Verifica se o aluno foi aprovado", () => {
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });
    test("Verifica se o aluno foi reprovado", () => {
        expect(verificarAprovacao(5)).toBe("Reprovado");
    });
    test("Verifica a nota mínima", () => {
        expect(verificarAprovacao(0)).toBe("Reprovado");
    });
    test("Verifica se apresenta erro para nota inválida", () => {
        expect(() => verificarAprovacao(11)).toThrow("Nota inválida");
    });
});

const { validarCadastro } = require("../src/operacoes");
describe("Textes da função validarCadastro()", () => {
    test("Todos os dados são válidos", () => {
        expect(validarCadastro("Murillo", 18, "murillo@gmail.com")).toBe(true);
    });
    test("Todos os dados são inválidos", () => {
        expect(validarCadastro("", 15, "murillogmail.com")).toBe(false);
    });
    test("Nome vazio", () => {
        expect(validarCadastro("", 20, "teste@gmail.com")).toBe(false);
    });
    test("Nome contém apenas espaços", () => {
        expect(validarCadastro("   ", 20, "teste@gmail.com")).toBe(false);
    });
    test("Idade vazia", () => {
        expect(validarCadastro("Murillo", "", "teste@gmail.com")).toBe(false);
    });
    test("Idade abaixo do limite permitido", () => {
        expect(validarCadastro("Murillo", 17, "teste@gmail.com")).toBe(false);
    });
    test("Idade acima do limite permitido", () => {
        expect(validarCadastro("Murillo", 101, "teste@gmail.com")).toBe(false);
    });
    test("E-mail vazio", () => {
        expect(validarCadastro("Murillo", 20, "")).toBe(false);
    });
    test("E-mail sem o caractere @", () => {
        expect(validarCadastro("Murillo", 20, "murillogmail.com")).toBe(false);
    });
});

const { calcularFrete } = require("../src/operacoes");
describe("Textes da função calcularFrete()", () => {

    test("Caso 1: Compra de R$ 250", () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });
    test("Caso 2: Compra de R$ 100", () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });
    test("Caso 3: Compra de R$ 200", () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });
    test("Caso 4: Compra de R$ 0", () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });
    test("Caso 5: Valor da compra negativo", () => {
        expect(() => calcularFrete(-50, 10)).toThrow("Valores inválidos");
    });
    test("Caso 6: Distância negativa", () => {
        expect(() => calcularFrete(100, -5)).toThrow("Valores inválidos");
    });
});

const { converterCelsiusParaFahrenheit } = require("../src/operacoes");
describe("Textes da função converterCelsiusParaFahrenheit()", () => {

    test("Caso 1: Converte 0°C", () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });
    test("Caso 2: Converte 100°C", () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });
    test("Caso 3: Converte -40°C", () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });
    test("Caso 4: Converte 25°C", () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });
    test("Caso 5: Verifica erro com entrada em texto numérico", () => {
        expect(() => converterCelsiusParaFahrenheit("25")).toThrow("A temperatura deve ser numérica");
    });
    test("Caso 6: Verifica erro com texto inválido", () => {
        expect(() => converterCelsiusParaFahrenheit("abc")).toThrow("A temperatura deve ser numérica");
    });
});
const { calcularTotal } = require("../src/operacoes");
describe("Textes da função calcularTotal()", () => {
    test("deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });
    test("deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });
    test("deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });
    test("deve calcular o total com preço negativo", () => {
        expect(calcularTotal(2, -5)).toBe(-10);
    });
});

    module.exports = { calcularDesconto, verificarAprovacao, validarCadastro, calcularFrete, converterCelsiusParaFahrenheit, calcularTotal };
});
