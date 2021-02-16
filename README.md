# ProJis é um protótpio do sistema do CJS da FCHS
Este projeto foi criado utilizando MEAN Stack (Mongo Express Angular e Node) para treino das tecnologias durante as aulas de Análise e Desenvolvimento de Sistemas e descontinuado. O projeto oficial se encontra no repositório [Projis2.0](https://github.com/tonimarke/projis2.0 "Software em produção")

## Funcionalidades desse protótipo
### Cadastro de: 
- Usuários/clientes
- Partes contrárias
- Estagiários
- Supervisores
- **Ações/processos** 

Para que se cadastre uma **ação**, é necessário que se tenha cadastrado um supervisor, um estagiário, um usuário/cliente e uma parte contrária, respectivamente. Nela, todas as partes são relacionadas e é inserido os dados referentes ao processo.

## Rodando o projeto
### Clonando o repositório:
```shell
$ git clone https://github.com/tonimarke/projis
```
### Preparando banco de dados 
Para rodar sem alterar o código, é necessário criar um banco de dados MongoDB com nome projisDB na porta 27017
**Como Criar e rodar o Banco de dados no docker**
```shell
$ docker run --projisDB mongo -p 27017:27017 -d -t mongo
$ docker start mongo
```

### Instalando dependências:
Na raiz do projeto, abra dois terminais, como no exemplo abaixo no VS Code:
![Abrindo dois terminais no VS code](https://i.imgur.com/No8LER8.gif)
Em um dos terminais, execute os seguintes códigos:
```shell
$ cd back-end/ && yarn install
$ yarn start
```
No outro terminal, insira:
```shell
cd front-end/ && yarn install
ng serve
```

### Utilizando o programa:
abra o navegador no [localhost:4200](localhost:4200)
