// Importação de modulos
    const { validateLead } = require("../src/validation");
    describe('Aplicação de testes unitários na funçõa validateLead()', () =>{

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
});     
