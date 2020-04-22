## Teste Matrix Cargo

Implementação de uma aplicação teste utilizando Node.js e ReactJs

## 🔧 Tecnologias

Esse projeto aplica as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)

## 🖥️ Projeto
Para o desenvolvimento do servidor do projeto, utilizei Node.js conectado ao Postgres utilizando o Sequelize.
Desenvolvi uma api simples contendo alguns conceitos básicos: create e list.
No server temos uma SessionController para fazer controle da autenticação do usuário e um UserController para criar um novo usuário ou trazer os dados do usuário autenticado.

Ao cadastrar um usuário, é gerado uma hash com a senha enviada pelo usuário, sendo assim a senha original não é armazenada no banco de dados, somente a senha com hash gerando maior integridade.

Ao realizar uma consulta a api, é validado o envio do token devolvido na autenticação do usuário. Se não houver token ou token inválido, então nenhuma informação será devolvida.


## ▶️ Como Executar

#### Clonando o projeto
```
git clone https://github.com/brunomatheusc/matrixcargo
cd matrixcargo

```
#### Executando Backend
```
cd server
yarn
yarn dev
```
#### Executando Frontend
```
cd frontend
yarn
yarn start
```
#### Docker
```
docker-compose up
