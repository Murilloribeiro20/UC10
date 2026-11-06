// Importação de modulos
const { validateLead } = require("../src/validation");
describe('Aplicação de testes unitários na função validateLead()', () => {

    test('Cadastro completo válido', () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            phone: "27999999999",
            interest: "Online"
        });
        expect(resultado.valid).toBe(true);
        expect(resultado.errors).toEqual([]);
    });
    test('Cadastro mínimo válido', () => {
        const resultado = validateLead({
            name: "Ana",
            email: "ana@email.com"
        });
        expect(resultado.valid).toBe(true);
    });
    test('Nome muito curto', () => {
        const resultado = validateLead({
            name: "An",
            email: "ana@email.com"
        });
        expect(resultado.valid).toBe(false)
    });
    test('Nome só com espaços Vazios', () => {
        const resultado = validateLead({
            name: "   ",
            email: "ana@email.com"
        });
        expect(resultado.valid).toBe(false)
    });
    test('Nome com tipo de entrada diferente', () => {
        const resultado = validateLead({
            name: 293,
            email: "ana@email.com"
        });
        expect(resultado.valid).toBe(false)
    });
    test('Email sem o @', () => {
        const resultado = validateLead({
            name: "Ana",
            email: "anaemail.com"
        });
        expect(resultado.valid).toBe(false)
    });
    test('Email incompleto sem o dominio e o ponto', () => {
        const resultado = validateLead({
            name: "Ana",
            email: "email@email"
        });
        expect(resultado.valid).toBe(false)
    });
    test('Email com tipo incorreto', () => {
        const resultado = validateLead({
            name: "Ana",
            email: 12345
        });
        expect(resultado.valid).toBe(false)
    });
    test('Telefone com o tipo incorreto', () => {
        const resultado = validateLead({
            name: "Ana",
            email: "ana@email.com",
            phone: 27999999999
        });
        expect(resultado.valid).toBe(false)
    });
    test('Modalidade inválida', () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            interest: "Híbrido"
        });
        expect(resultado.valid).toBe(false);
    });
    test('Modalidade com letras diferentes', () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            interest: "online"
        });
        expect(resultado.valid).toBe(false);
    });
});     