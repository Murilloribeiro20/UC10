# UC10 - Realizar Testes nas Aplicações Desenvolvidas
# Rafaela Pessin 

## Descrição e Funcionalidades

- Aplicação de Controle de Tarefas:
- Cadastra tarefas: INSERT -> CREATE
- Consulta/lista tarefas: SELECT -> READ
- Atualiza tarefas: UPDATE -> UPDATE
-Deletar Tarefas: DELETE -> DELETE

## Tecnologias

| Tecnologia | Função |
| ---------- | ------ |
| HTML | Estrutura/esqueleto da página web |
| CSS | Estilização/design da página |
| JavaScript | Interatividade/comportamento |
| Node.js | Ambiente de execução que permite executar o JS no servidor |
| Jest | Framework de testes automatizados |
| SQLite | Banco de Dados Relacional |
| Express | Framework back-end que recebe requisições do front-end |
| Supertest | Ferramenta que simula requisições HTTP para testar a sua API |


# Testes

## Testes Unitários

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------------- | -------- | -------------- |
|       1       | titulo: "Estudar programação" | Retorna valid: true e o título sem espaços extras |
|       2       | titulo: " " |   O título da tarefa é obrigatório. |
|       3       | titulo:"A".repeat(121) | O título deve ter no máximo 120 caracteres. |



## Descrição
O sistema deverá ser testado de acordo com as especificações do projeto.