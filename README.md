# UC10 - Realizar Testes nas Aplicações Desenvolvidas
# Rafaela Pessin 

## Descrição e Funcionalidades

- Aplicação de Controle de Tarefas:
- Cadastra tarefas: INSERT -> CREATE
- Consulta/lista tarefas: SELECT -> READ
- Atualiza tarefas: UPDATE -> UPDATE
-Deletar Tarefas: DELETE -> DELETE

## Tecnologias

| Tecnologia | Função                                                       | Versão | Comando                 |
| ---------- | ------------------------------------------------------------ | ------ | ----------------------- |
| HTML       | Estrutura/esqueleto da página web                            | -      | -                       |
| CSS        | Estilização/design da página                                 | -      | -                       |
| JavaScript | Interatividade/comportamento                                 | -      | -                       |
| Node.js    | Ambiente de execução que permite executar o JS no servidor   | 22.2.0 | node -v                 |
| Jest       | Framework de testes automatizados                            | 30.5.2 | npx jest --version      |
| SQLite     | Banco de Dados Relacional                                    | -      | npx sqlite3 --version   |
| Express    | Framework back-end que recebe requisições do front-end       | -      | npm list express        |
| Supertest  | Ferramenta que simula requisições HTTP para testar a sua API | -      | npm list supertest      |

# Testes

## Testes Unitários

| Caso de teste | Entrada                        | Saída esperada                                    |
| ------------- | ------------------------------ | ------------------------------------------------- |
|       1       | title: "Estudar programação"   | Retorna valid: true e o título correto           |
|       2       | title: ""                      | Erro: O título da tarefa é obrigatório           |
|       3       | title: "A".repeat(121)         | Erro: O título deve ter no máximo 120 caracteres |


## Descrição
O sistema deverá ser testado de acordo com as especificações do projeto.