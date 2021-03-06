<h1 align="center">UBB-API-REST</h1>

## 📕 Índice

- [📋 Sobre](#Sobre)
- [🕹 Tecnologias](#Tecnologias)
- [🧑🏽‍💻 Iniciando o projeto](#Iniciando)
- [👨🏽‍🔧 Contribuições](#Contribuições)
- [📝 Licença](#Licença)
- [🦸 Contatos](#Contatos)

<hr>

<!-- About -->

# Sobre

<p align="left">Api desenvolvida para ong UBB, no momento sendo utilizada apenas para cadastro e consultas de depoimentos, deixando o front-end totalmente dinâmico nessa parte, futuramente esta sendo implementada novas funcionalidades.</p>

<!-- TECHNOLOGIES -->

# Tecnologias

- [Tecnologias]()
  - [Node JS](https://nodejs.org/en/)
    - [TypeScript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/pt-br/)
  - [TypeORM](https://typeorm.io/#/)
    - [PostgresSQL](https://www.postgresql.org/)
- [Dependências]()
  - [Babel](https://babeljs.io/)
  - [Eslint](https://eslint.org/)
  - [Jest](https://jestjs.io/pt-BR/)
  - [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
  - [Tsyringe](https://www.npmjs.com/package/tsyringe)

<hr>

<!-- TECHNOLOGIES -->

# Iniciando

##### Pré-requisitos

- Node JS

  ```sh
  https://nodejs.org/en/
  ```

- Yarn ou Npm

  ```sh
  https://yarnpkg.com/
  ```

- PostgresSQL

  ```sh
  https://www.postgresql.org/
  ```

<hr>

### Instalação e uso

```bash
# Execute este comando para clonar o projeto
$ git clone git@github.com:UBB-ONG/api-ubb.git
# ou use a opção de download.

# Entre na pasta com
$ cd api-ubb

# Instale as dependências
$ yarn ou npm install

# Crie o banco de dados e as tabelas utilizando o comando
$ yarn typeorm migration:run ou npm typeorm migration:run

# Rode a aplicação usando o comando
$ yarn dev ou npm run dev
```

Documentação: https://ubb-api.herokuapp.com/api-docs

<!-- LICENSE -->

# Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

# Contatos

 | [<img src="https://avatars.githubusercontent.com/u/62263143?v=4" width="115"><br><sub>@WelissonLuca</sub>](https://github.com/WelissonLuca) |
| --------------------------------------------------------------------------------------------------------------------------------------