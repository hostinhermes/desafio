http://localhost:3000/api/oauth2/authorize?client_id=id-totvs-chamados&response_type=code&redirect_uri=http://localhost:3000

* Obter codigo da url

* Fazer um post para url:
http://localhost:3000/api/oauth2/token
com parametros no corpo da mensagem:

code - codigo da url de autorização
grant_type - authorization_code
redirect_uri - http://localhost:3000

adicionar autenticação básica informando o id o secret da aplicação:
username = id-totvs-chamados
password = secret-totvs-chamados

Retornará algo do tipo:

{
    "access_token": {
        "__v": 0,
        "value": "T7YVAX4MG47tTOc7Gey9ohQbYn1Jl4YRVFegD4AGvBBrSkcXRice8GqRcVNvwQCjljYyrThLXZgLebJtuYA7ODHvfKyraJkg4gDru2mhis6rxw7rT0lRyJuMjXDvrTgucLI3rmDLRDLfREfzm7Y7W8S0jsT1UudKSs6svykUhCGeRL9o7wjYKO57h0JRAtGQtA8IMDhhpWtIgdTYMnFrrzAcJhUmWZbB6IJUNFkMgN5rCg5cnhd1r6J4qX7W3WAK",
        "clientId": "5c2ff5525a97860010daa77a",
        "userId": "5c2ff5525a97860010daa779",
        "_id": "5c346af85a7a62001bd61307"
    },
    "token_type": "Bearer"
}
