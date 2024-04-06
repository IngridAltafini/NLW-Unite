<h1>✨ Pass.in</h1> 

  <h3>Projeto desenvolvido durante o evento NLM Unite, organizado pela Rocketseat.</h3> 

  <h3>Este projeto tem como proposta desenvolver uma aplicação de gestão de participantes em eventos presenciais.</h3> 

</br> 

> Status: Finalizado

  <h2>✨ Tecnologias</h2> 

  ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white")
  ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
  ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
  ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
  ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) 


  <h2>✨ Inicialização do projeto</h2> 

  Utilizei o Prisma Studio para visualizar, editar e gerenciar os dados do banco de dados de forma simples e intuitiva.

  Para iniciar o servidor, abra seu terminal e execute o seguinte comando:

  ```bash 

  npm run dev 

  ``` 
  
  Em seguida, em outra aba do terminal, execute o comando abaixo para abrir o Prisma Studio:

```bash 

 npm run db:studio

```

Agora, seu banco de dados estará acessível diretamente no Prisma Studio. Para popular o banco de dados com dados falsos de forma rápida, execute o comando:

```bash 

 npx prisma db seed

```

Com isso, seu banco de dados estará populado com dados falsos gerados pela biblioteca <code>@faker-js/faker</code>.

  <h3>❗O projeto é executado na porta 3333, portanto, verifique se ele está livre para uso.</h3> 

<h2>✨ Clonando</h2> 

Clone este respositório em seu terminal utilizando: 

```bash 

git clone https://github.com/IngridAltafini/NLW-Unite.git

``` 

<h2>✨ Instalação</h2> 

Instale as dependências utilizando: 

```bash 

npm i 

``` 

<h2>✨ Migrations</h2> 

Rode as migrations utilizando: 

```bash 

npm run db:migrate

``` 

<h2>✨ Dependências</h2> 

```
    "@faker-js/faker": "^8.4.1",
    "@fastify/cors": "^9.0.1",
    "@fastify/swagger": "^8.14.0",
    "@fastify/swagger-ui": "^3.0.0",
    "@prisma/client": "^5.12.1",
    "dayjs": "^1.11.10",
    "fastify": "^4.26.2",
    "fastify-type-provider-zod": "^1.1.9",
    "zod": "3.22.4"
``` 
###### Ingrid Isabela Altafini - Desenvolvedora Back-end

