// Importação de modulos
    const { validateLead } = require("../src/validation");
    describe('Aplicação de testes unitários na funçõa validateLead()', () =>{

    test('Verifica a quantidade de erros retornados', () => {
        const resultado = validateLead({ name: "Ab" });

        expect(resultado.errors.length).toBe(2);
    });
});