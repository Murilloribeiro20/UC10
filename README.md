# RELATÓRIO DE TESTES DE SOFTWARE

## 1. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| **Nome do projeto:** | Academia Viva |
| **Resumo do projeto:** | Landing page responsiva para divulgação de cursos online e presenciais, com cadastro de interessados e armazenamento de dados. |
| **Nome do testador:** | Murillo Ribeiro |
| **Data dos testes:** | 06/11/2026 |
| **Tecnologias utilizadas:** | JavaScript, Node.js, Express, SQLite, Jest e Supertest |

---

## 2. Objetivo dos testes

**Resposta:**

O objetivo foi testar a função `validateLead()`, responsável por validar os dados dos interessados nos cursos da Academia Viva. Os testes verificam se os cadastros são aceitos quando estão corretos e se os erros são identificados quando existem informações inválidas, como nomes curtos, e-mails incorretos, telefones numéricos e modalidades inexistentes.

---

## 3. Ambiente de testes

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | Não especificada |
| Node.js | Não especificada no projeto |
| Jest | ^30.5.2 |
| NPM | Não especificada |
| Express | ^4.21.2 |
| SQLite3 | ^6.0.1 |
| Supertest | ^7.0.0 |

**Comando utilizado preparar o ambiente:**

```bash
npm install
```

**Comando utilizado executar o sistema (servidor):**

```bash
npm start
```

**Comando utilizado para executar os testes:**

```bash
npm test
```

Para verificar a cobertura dos testes:

```bash
npm test -- --coverage
```

---

## 4. Funcionalidades testadas

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | validateLead() | src/validation.js | Verificar se os dados do cadastro são válidos e identificar informações incorretas. |
| 2 | Não se aplica | - | Não foi testada outra função nesta atividade. |
| 3 | Não se aplica | - | Não foi testada outra função nesta atividade. |

---

## 5. Registro detalhado dos testes realizados

### Teste 01 – Cadastro completo válido

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Cadastro completo válido
- **Objetivo:** Verificar se um cadastro com todos os campos preenchidos corretamente é aceito.
- **Tipo de cenário:** Positivo
- **Entrada utilizada:** Nome: Ana Silva; e-mail: ana@email.com; telefone: 27999999999; modalidade: Online.
- **Resultado esperado:** Retornar valid como true e uma lista de erros vazia.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
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
```

**Justificativa:**

Esse teste verifica se a função aceita um cadastro completo quando todas as informações estão corretas.

---

### Teste 02 – Cadastro mínimo válido

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Cadastro mínimo válido
- **Objetivo:** Verificar se o cadastro funciona sem preencher os campos opcionais.
- **Tipo de cenário:** Positivo
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; sem telefone e modalidade.
- **Resultado esperado:** Retornar valid como true.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Cadastro mínimo válido', () => {
    const resultado = validateLead({
        name: "Ana",
        email: "ana@email.com"
    });

    expect(resultado.valid).toBe(true);
});
```

**Justificativa:**

Verifica se o sistema permite realizar o cadastro utilizando apenas as informações obrigatórias.

---

### Teste 03 – Nome muito curto

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Nome muito curto
- **Objetivo:** Verificar se nomes com menos de 3 caracteres são recusados.
- **Tipo de cenário:** Limite
- **Entrada utilizada:** Nome: An; e-mail: ana@email.com.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Nome muito curto', () => {
    const resultado = validateLead({
        name: "An",
        email: "ana@email.com"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Esse teste verifica se a quantidade mínima de caracteres exigida para o nome está sendo respeitada.

---

### Teste 04 – Nome só com espaços vazios

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Nome só com espaços Vazios
- **Objetivo:** Verificar se o sistema identifica nomes preenchidos somente com espaços.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: "   "; e-mail: ana@email.com.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Nome só com espaços Vazios', () => {
    const resultado = validateLead({
        name: "   ",
        email: "ana@email.com"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o sistema consegue identificar um nome vazio, mesmo quando existem espaços preenchidos no campo.

---

### Teste 05 – Nome com tipo de entrada diferente

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Nome com tipo de entrada diferente
- **Objetivo:** Verificar se o sistema recusa nomes que não são do tipo string.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: 293; e-mail: ana@email.com.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Nome com tipo de entrada diferente', () => {
    const resultado = validateLead({
        name: 293,
        email: "ana@email.com"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o sistema aceita somente nomes enviados como texto, evitando entradas de tipos incorretos.

---

### Teste 06 – E-mail sem o @

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Email sem o @
- **Objetivo:** Verificar se o sistema identifica e-mails sem o símbolo obrigatório @.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: Ana; e-mail: anaemail.com.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Email sem o @', () => {
    const resultado = validateLead({
        name: "Ana",
        email: "anaemail.com"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Esse teste verifica se o sistema consegue identificar um endereço de e-mail escrito incorretamente, sem o símbolo @.

---

### Teste 07 – E-mail incompleto sem o domínio e o ponto

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Email incompleto sem o dominio e o ponto
- **Objetivo:** Verificar se o sistema recusa e-mails que não possuem domínio completo.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: Ana; e-mail: email@email.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Email incompleto sem o dominio e o ponto', () => {
    const resultado = validateLead({
        name: "Ana",
        email: "email@email"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o sistema identifica e-mails incompletos, evitando que informações inválidas sejam aceitas.

---

### Teste 08 – E-mail com tipo incorreto

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Email com tipo incorreto
- **Objetivo:** Verificar se o sistema recusa e-mails que não são do tipo string.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: Ana; e-mail: 12345.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Email com tipo incorreto', () => {
    const resultado = validateLead({
        name: "Ana",
        email: 12345
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Esse teste verifica se o campo de e-mail recebe somente informações em formato de texto.

---

### Teste 09 – Telefone com o tipo incorreto

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Telefone com o tipo incorreto
- **Objetivo:** Verificar se o sistema recusa telefones enviados como números.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; telefone: 27999999999 (numérico).
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Telefone com o tipo incorreto', () => {
    const resultado = validateLead({
        name: "Ana",
        email: "ana@email.com",
        phone: 27999999999
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o telefone é recebido como texto, evitando problemas com o tipo de informação enviada.

---

### Teste 10 – Modalidade inválida

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Modalidade inválida
- **Objetivo:** Verificar se o sistema recusa modalidades que não estão disponíveis na lista.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: Ana Silva; e-mail: ana@email.com; modalidade: Híbrido.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Modalidade inválida', () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "ana@email.com",
        interest: "Híbrido"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o sistema aceita somente as modalidades disponíveis: Online, Presencial ou Ainda não sei.

---

### Teste 11 – Modalidade com letras diferentes

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Modalidade com letras diferentes
- **Objetivo:** Verificar se o sistema diferencia letras maiúsculas e minúsculas.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** Nome: Ana Silva; e-mail: ana@email.com; modalidade: online.
- **Resultado esperado:** Retornar valid como false.
- **Resultado obtido:** Não confirmado por uma execução local.
- **Status:** Pendente de execução.

**Código do teste:**

```javascript
test('Modalidade com letras diferentes', () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "ana@email.com",
        interest: "online"
    });

    expect(resultado.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o JavaScript diferencia letras maiúsculas e minúsculas durante a validação das modalidades.

---

## 6. Resumo dos resultados

| Indicador | Quantidade |
| --- | ---: |
| Total de testes implementados | 11 |
| Total de testes executados | A confirmar |
| Testes aprovados (Passed) | A confirmar |
| Testes reprovados (Failed) | A confirmar |

**Percentual de aprovação:**

Não calculado, pois é necessário executar os testes para confirmar os resultados.

Fórmula utilizada:

(Testes aprovados ÷ Total de testes executados) × 100

---

## 7. Evidências da execução dos testes

<img width="529" height="794" alt="Captura de tela 2026-11-05 164235" src="https://github.com/user-attachments/assets/91022b41-c2d7-4d38-9f33-da64dc98e2e2" />

## 8. Problemas identificados e correções realizadas

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| Mensagem informa mínimo de 2 caracteres no nome. | A mensagem está diferente da condição, que exige pelo menos 3 caracteres. | Alterar a mensagem para mínimo de 3 caracteres. | Correção recomendada |
| Resultado da execução não registrado. | Não foi disponibilizada uma captura da execução do Jest. | Executar `npm test` e registrar os resultados. | Pendente |
| Outras falhas não confirmadas. | Não há outros erros comprovados pela análise dos arquivos. | Continuar realizando testes. | Não identificado |

**Resposta:**

Durante a análise do código, foi encontrada uma diferença entre a quantidade mínima de caracteres exigida e a mensagem apresentada ao usuário. A condição exige 3 caracteres, mas a mensagem informa 2. Também é necessário executar os testes para confirmar os resultados e registrar possíveis falhas.

---

## 9. Análise dos resultados

**Respostas:**

1. Os 11 testes foram implementados com resultados esperados definidos, mas ainda é necessário executar o Jest para confirmar se todos passaram.

2. Os cenários mais importantes foram a validação dos cadastros completos e mínimos, dos nomes, dos e-mails, dos telefones e das modalidades dos cursos.

3. Durante a análise do código, foi identificada uma diferença na mensagem de erro do nome, que informa 2 caracteres, enquanto a validação exige 3.

4. A alteração recomendada é corrigir a mensagem de erro para informar o mínimo de 3 caracteres.

5. Ainda precisam ser testadas outras funcionalidades, como `normalizeCourseFilter()`, o cadastro de interessados pela API, a consulta dos cursos e a integração com o banco de dados SQLite.

---

## 10. Conclusão

**Conclusão da equipe:**

Os testes unitários são importantes para verificar se as funções do sistema estão funcionando corretamente e identificar possíveis erros antes que eles prejudiquem os usuários.

Na Academia Viva, foram desenvolvidos 11 testes para a função `validateLead()`, verificando diferentes situações de cadastro, desde informações corretas até entradas inválidas.

A atividade também permitiu identificar uma diferença na mensagem de validação do nome. Com isso, foi possível perceber como os testes ajudam a melhorar a qualidade, a segurança e a confiabilidade de uma aplicação.

---

**Relatório elaborado por:** Murillo Ribeiro

**Data da última atualização:** 06/11/2026
