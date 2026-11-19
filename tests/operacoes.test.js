// TESTES
const { calcularAcrescimo } = require("../src/operacoes");
describe("Testes da função calcularAcrescimo", () => {
    test("Deve calcular o acréscimo corretamente", () => {
        expect(calcularAcrescimo(100, 10)).toBe(110);
    });
    test("Deve aceitar acréscimo de 0%", () => {
        expect(calcularAcrescimo(200, 0)).toBe(200);
    });
    test("Deve apresentar erro quando o valor for zero", () => {
        expect(() => calcularAcrescimo(0, 10)).toThrow("Dados inválidos");
    });
    test("Deve apresentar erro quando a porcentagem for maior que 100", () => {
        expect(() => calcularAcrescimo(100, 150)).toThrow("Dados inválidos");
    });
});
const { classificarDesempenho } = require("../src/operacoes");
describe("Testes da função classificarDesempenho", () => {
    test("Deve classificar como Excelente", () => {
        expect(classificarDesempenho(9)).toBe("Excelente");
    });
    test("Deve classificar como Bom", () => {
        expect(classificarDesempenho(8)).toBe("Bom");
    });
    test("Deve classificar como Regular", () => {
        expect(classificarDesempenho(6)).toBe("Regular");
    });
    test("Deve classificar como Insuficiente", () => {
        expect(classificarDesempenho(4)).toBe("Insuficiente");
    });
    test("Deve apresentar erro para nota inválida", () => {
        expect(() => classificarDesempenho(11)).toThrow("Nota inválida");
    });
});
const { validarJogador } = require("../src/operacoes");
describe("Testes da função validarJogador", () => {
    test("Deve aceitar todos os dados válidos", () => {
        expect(validarJogador("murillo", 16, 100)).toBe(true);
    });
    test("Deve rejeitar nome de usuário vazio", () => {
        expect(validarJogador("", 16, 100)).toBe(false);
    });
    test("Deve rejeitar nome com apenas espaços", () => {
        expect(validarJogador("   ", 16, 100)).toBe(false);
    });
    test("Deve rejeitar idade abaixo de 13 anos", () => {
        expect(validarJogador("murillo", 12, 100)).toBe(false);
    });
    test("Deve rejeitar idade acima de 80 anos", () => {
        expect(validarJogador("murillo", 81, 100)).toBe(false);
    });
    test("Deve rejeitar pontuação negativa", () => {
        expect(validarJogador("murillo", 16, -10)).toBe(false);
    });
    test("Deve aceitar pontuação igual a zero", () => {
        expect(validarJogador("murillo", 16, 0)).toBe(true);
    }); 
    test("Deve aceitar idade mínima de 13 anos", () => {
        expect(validarJogador("murillo", 13, 100)).toBe(true);
    });
    test("Deve aceitar idade máxima de 80 anos", () => {
        expect(validarJogador("murillo", 80, 100)).toBe(true);
    });

});
const { calcularEntrega } = require("../src/operacoes");
describe("Testes da função calcularEntrega", () => {
    test("caso 1: deve oferecer entrega grátis", () => {
        expect(calcularEntrega(350, 10)).toBe(0);
    });
    test("caso 2: deve cobrar 10 reais para distância de até 5 km", () => {
        expect(calcularEntrega(100, 3)).toBe(10);
    });
    test("caso 3: deve calcular a entrega pela distância", () => {
        expect(calcularEntrega(100, 8)).toBe(16);
    });
    test("caso 4: deve oferecer entrega grátis para compra de 300 reais", () => {
        expect(calcularEntrega(300, 5)).toBe(0);
    });
    test("caso 5: deve cobrar 10 reais para compra de valor zero", () => {
        expect(calcularEntrega(0, 5)).toBe(10);
    });
    test("caso 6: deve apresentar erro para valor de compra negativo", () => {
        expect(() => calcularEntrega(-50, 10)).toThrow("Valores inválidos");
    });
    test("caso 7: deve apresentar erro para distância negativa", () => {
        expect(() => calcularEntrega(100, -2)).toThrow("Valores inválidos");
    });
});
const { converterRealParaDolar } = require("../src/operacoes");
describe("Testes da função converterRealParaDolar", () => {
    test("Caso 1: Deve converter 100 reais para dólares", () => {
        expect(converterRealParaDolar(100, 5)).toBe(20);
    });
    test("Caso 2: Deve converter 250 reais para dólares", () => {
        expect(converterRealParaDolar(250, 5)).toBe(50);
    });
    test("Caso 3: Deve aceitar valor igual a zero", () => {
        expect(converterRealParaDolar(0, 5)).toBe(0);
    });
    test("Caso 4: Deve converter usando cotação 4", () => {
        expect(converterRealParaDolar(100, 4)).toBe(25);
    });
    test("Caso 5: Deve apresentar erro quando o valor for texto", () => {
        expect(() => converterRealParaDolar("100", 5))
            .toThrow("Os valores devem ser numéricos");
    });
    test("Caso 6: Deve apresentar erro quando a cotação for texto", () => {
        expect(() => converterRealParaDolar(100, "5"))
            .toThrow("Os valores devem ser numéricos");
    });
    test("Caso 7: Deve apresentar erro para valor negativo", () => {
        expect(() => converterRealParaDolar(-50, 5))
            .toThrow("Valores inválidos");
    });
    test("Caso 8: Deve apresentar erro para cotação igual a zero", () => {
        expect(() => converterRealParaDolar(100, 0))
            .toThrow("Valores inválidos");
    });
});




















