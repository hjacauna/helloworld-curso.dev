# helloworld-curso.dev

Repositório criado para exercícios iniciais do curso de programação. O projeto utiliza **Next.js** e **PostgreSQL** para demonstrar a criação de uma aplicação básica com API e banco de dados.

## Requisitos

- Node.js (versão informada em `.nvmrc`)
- Docker e Docker Compose (utilizados para o banco de dados)

## Instalação

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente em `.env.development` conforme seu ambiente local.
3. Inicie os serviços de apoio (banco de dados) e o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Scripts úteis

- `npm run dev` &ndash; Sobe o banco de dados via Docker e inicia o Next.js em modo de desenvolvimento.
- `npm run services:up` / `npm run services:stop` / `npm run services:down` &ndash; Gerencia os contêineres do Docker.
- `npm run migration:create` &ndash; Cria um novo arquivo de migração.
- `npm run migration:up` &ndash; Aplica as migrações pendentes.
- `npm test` &ndash; Executa a suíte de testes com Jest.

## Estrutura do projeto

- `pages/` &ndash; Contém as páginas do Next.js e as rotas de API em `pages/api`.
- `infra/` &ndash; Infraestrutura de banco de dados (Docker Compose, scripts de migração e acesso ao banco).
- `tests/` &ndash; Testes de integração utilizando Jest.

## Licença

Distribuído sob a licença MIT.
