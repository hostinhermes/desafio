# Desafio
Desafio Totvs - Plataformas Digitais

# Instalação
1- Baixar pacote 
2- Rodar docker-compose build
3- Rodar docker-compose up
4- Acessar http://localhost:3000/install para criar o usuario padrão admin/admin e o app client default

# Acesso a aplicação web
http://localhost:3000 - será solicitado o usuario/senha e após será feito o redirecionamento para a home do site contendo os links para o cadastro de usuários e cadastro de chamados

# Funcionalidades
- Crud de Usuários
- Crud de Chamados
- Login via prompt - disponibilizado pelo middleware passaportjs, utilizado a estratégia basic-authentication
- As rotas são protegidas por autenticação de usuário e senha (basic-authentication), podendo também usar a estratégia token bearer do oauth2 (esta opção foi implementada apenas no server, não utilizei no app web, contudo é possivel testar via postman)

# Estrutura do Projeto
/src  - /app
           - /controllers  Contém a camada de controller da aplicação (app middleware)
           - /models Contém as entidades utilizadas nos projetos (User, Issue, etc)
           - /public Contém os arquivos estáticos do app web (js, css, etc)
           - /routes Contém as rotas(apis) do app middleware
           - /views Contém as páginas do app web
      - /config Contém os arquivos com configuração de banco e do servidor
