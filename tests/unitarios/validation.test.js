const { normalizeTitle, validateTaskInput } = require('../../src/validation');
// Importa a função 'normalizeTitle'
describe('Validação de tarefas', () => {
    test('Remove os espaços do iníco e do fim do título', () =>{
        expect(normalizeTitle('   Teste Unitário   ')).toBe('Teste Unitário')
    });
});

    test('Retorna String Vazia se o título for um número', () => {
        expect(normalizeTitle(15487)).toBe('')
    });

    test('Retorna String Vazia se o título for nulo', () => {
        expect(normalizeTitle(null)).toBe('')
    })
    test('Retorna String Vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('')
    })

    // casos de teste para a função validadeTaskInput
    
    test('Retorna verdadeiro para um título válido', () => {
        expect(validateTaskInput({ title: 'Estudar' }).valid).toBe(true);
});
    
    test('Retorna erro se o título estiver vazio', () => {
        expect(() => validateTaskInput({ title: '' })).toThrow();
});

    test('Retorna erro se o título tiver mais de 120 caracteres', () => {
        expect(() => validateTaskInput({ title: 'A'.repeat(121) })).toThrow();
});

