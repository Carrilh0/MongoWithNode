# API REST MONGODB/NODE.JS

## Afim de aprender como funciona um banco não relacional e me aprofundar no Node.js, criei uma API rest de usuários. Ultilizando o driver nativo do mongoDB.

### Criei uma [função](./src/Helpers/ValueForNextSequence.js) que faz o papel do auto-increment do MYSQL, uma vez em que eu precisava dos ID para poder referenciar na API. O driver nativo do mongoDB não existe. 


## Rotas

| Método |Path| Descrição |
|---|---|----|
| `GET` |`/users`| Retorna informações de todos os usuários. |
| `GET` |`/user/:id`| Retorna informações de um usuários baseado no id. |
| `POST` |`/user`| Utilizado para criar um novo usuário. |
| `PUT` |`/user/:id`|Atualiza dados de um usuário. |
| `DELETE` |`/user`| Remove um registro do sistema. |
