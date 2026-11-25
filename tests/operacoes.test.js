// TESTES

// TESTE 1 
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

//TESTE 2
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

//TESTE 3
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

//TESTE 4
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

//TESTE 5
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
        expect(() => converterRealParaDolar("100", 5)).toThrow("Os valores devem ser numéricos");
    });
    test("Caso 6: Deve apresentar erro quando a cotação for texto", () => {
        expect(() => converterRealParaDolar(100, "5")).toThrow("Os valores devem ser numéricos");
    });
    test("Caso 7: Deve apresentar erro para valor negativo", () => {
        expect(() => converterRealParaDolar(-50, 5)).toThrow("Valores inválidos");
    });
    test("Caso 8: Deve apresentar erro para cotação igual a zero", () => {
        expect(() => converterRealParaDolar(100, 0)).toThrow("Valores inválidos");
    });
});

//TESTE 6
const { calcularPedido } = require("../src/operacoes");
describe("Testes da função calcularPedido", () => {
    test("deve calcular o valor total corretamente", () => {
        expect(calcularPedido(4, 20)).toBe(80);
    });
    test("deve retornar zero quando o preço for zero", () => {
        expect(calcularPedido(3, 0)).toBe(0);
    });
    test("deve lançar erro quando a quantidade for zero", () => {
        expect(() => calcularPedido(0, 10)).toThrow("Dados inválidos");
    });
    test("deve lançar o erro quando o preço for negativo", () => {
        expect(() => calcularPedido(2, -5)).toThrow("Dados inválidos");
    });
});

//TESTE 7
const { validarTamanhoSenha } = require("../src/operacoes");
describe("Testes da função validarTamanhoSenha", () => {
    test("deve aceitar senha com tamanho mínimo de 6 caracteres", () => {
        expect(validarTamanhoSenha("abc123")).toBe(true);
    });
    test("deve rejeitar senha com 5 caracteres", () => {
        expect(validarTamanhoSenha("abc12")).toBe(false);
    });
    test("deve aceitar senha com 12 caracteres", () => {
        expect(validarTamanhoSenha("abc123456789")).toBe(true);
    });
    test("deve aceitar senha com 10 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567")).toBe(true);
    });
    test("deve rejeitar senha com 13 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567890")).toBe(false);
    });
    test("deve aceitar senha com 7 caracteres", () => {
        expect(validarTamanhoSenha("abc1234")).toBe(true);
    });
    test("deve rejeitar senha com 4 caracteres", () => {
        expect(validarTamanhoSenha("abcd")).toBe(false);
    });
});

//TESTE 8
const { verificarDisponibilidade } = require("../src/operacoes");
describe("Testes da função verificarDisponibilidade", () => {
    test("deve autorizar retirada quando há estoque suficiente", () => {
        expect(verificarDisponibilidade(20, 5)).toBe("Retirada autorizada");
    });
    test("deve informar estoque insuficiente", () => {
        expect(verificarDisponibilidade(5, 10)).toBe("Estoque insuficiente");
    });
    test("deve autorizar retirada de toda a quantidade disponível", () => {
        expect(verificarDisponibilidade(10, 10)).toBe("Retirada autorizada");
    });
    test("deve lançar erro para quantidade zero", () => {
        expect(() => verificarDisponibilidade(10, 0)).toThrow("Quantidade inválida");
    });
    test("deve lançar erro para estoque negativo", () => {
        expect(() => verificarDisponibilidade(-5, 2)).toThrow("Estoque inválido");
    });
    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarDisponibilidade(10, -3)).toThrow("Quantidade inválida");
    });
});

//TESTE 9
const { calcularMediaFinal } = require("../src/operacoes"); 
describe("Testes da função calcularMediaFinal", () => {
    test("deve calcular a média corretamente", () => {
        expect(calcularMediaFinal(6, 8)).toBe(7);
    });
    test("deve retornar média máxima", () => {
        expect(calcularMediaFinal(10, 10)).toBe(10);
    });
    test("deve calcular média com nota zero", () => {
        expect(calcularMediaFinal(0, 8)).toBe(4);
    });
    test("deve rejeitar nota negativa", () => {
        expect(() => calcularMediaFinal(-2, 8)).toThrow("Notas inválidas");
    });
    test("deve rejeitar nota superior a 10", () => {
        expect(() => calcularMediaFinal(8, 12)).toThrow("Notas inválidas");
    });
    test("deve calcular a média de duas notas iguais", () => {
        expect(calcularMediaFinal(7, 7)).toBe(7);
    });
    test("deve aceitar duas notas iguais a zero", () => {
        expect(calcularMediaFinal(0, 0)).toBe(0);
    });
    test("deve rejeitar nota acima de 10", () => {
        expect(() => calcularMediaFinal(11, 5)).toThrow("Notas inválidas");
    });
});
