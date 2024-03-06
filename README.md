# API de Gerenciamento de Funcionários

Esta é uma API desenvolvida em Node.js, utilizando o framework Express e o banco de dados MongoDB para realizar operações CRUD (Create, Read, Update, Delete) de funcionários de uma empresa. A API oferece endpoints para cadastrar, editar, visualizar e excluir informações sobre os funcionários.

## Endpoints

- Listar Funcionários <br>
    Endpoint: GET /funcionarios

- Obter um Funcionário por ID <br>
    Endpoint: GET /funcionarios/:id

- Cadastrar Funcionário <br>
    Endpoint: POST /funcionarios
    Corpo da Requisição:<br>
    ```
    {
        "id":"ID Funcionário",
        "nome":"Nome Funcionário",
        "nascimento": "Data Nascimento Funcionário",
        "telefone":"Telefone Funcionário",
        "salario":"R$ ****,**",
        "cargo":"Cargo Funcionário",
        "setor":"Setor Funcionário"
    }
    ```

- Atualizar Funcionário por ID <br>
    Endpoint: PUT /funcionarios/:id
    (Colocar os campos que quer editar)
    ```
    {
        "nome":"Nome Funcionário",
        "nascimento": "Data Nascimento Funcionário",
    }
    ```

- Excluir Funcionário por ID <br>
    Endpoint: DELETE /funcionarios/:id