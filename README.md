<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  GoFinances Web
</h3>

<blockquote align="center">“Não espere resultados brilhantes se suas metas não forem claras”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ferreirase/GoFinances?color=%2304D361">

  <a href="https://www.linkedin.com/in/anderson-raphael-ferreira">
    <img alt="Made by Ferreira" src="https://img.shields.io/badge/made%20by-Ferreira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ferreirase/GoFinances/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ferreirase/GoFinances?style=social">
  </a>
</p>

## :rocket: Sobre o projeto

O **GoFinances** é aplicação de gestão de transações financeiras. Foi desenvolvida durante o Bootcamp da **[Rocketseat](https://rocketseat.com.br/)** e ainda passa por algumas alterações e adições de funcionalidades.
A aplicação aceita cadastro de transações de entrada e saída apenas importando arquivos **[.CSV](https://rockcontent.com/blog/csv/#:~:text=Por%20defini%C3%A7%C3%A3o%2C%20CSV%20%C3%A9%20um,ou%20delimitados%20por%20uma%20v%C3%ADrgula.)**, gera novos registros no banco de dados e exibe a lista de transações cadastradas.
 
 A próxima funcionalidade implementada será um meio de cadastro manual das transações, via formulário.

### :triangular_ruler: Layout da aplicação

O layout pode ser acessado através da página do Figma, no [seguinte link](https://www.figma.com/file/EgOhyj1Inz14dhWGVhRlhr/GoFinances?node-id=1%3A863).

Você precisará uma conta (gratuita) no Figma pra inspecionar o layout e obter detalhes de cores, tamanhos, etc.


### :camera: Template da aplicação

Abaixo, seguem algumas fotos e um GIF do template da aplicação:

<img src="/assets/list.png" height="500" width="1200">

<img src="/assets/import.png" height="500" width="1200">

<img src="/assets/usage.GIF" height="500" width="1200">


### :cd: Rodando a aplicação!

*``` Para rodar a aplicação na sua máquina, siga os passos seguintes na respectiva ordem: ```*
 
#### Subindo o servidor backend
  1. Baixar/Clonar o repositório na sua máquina;
  2. Entrar na pasta "backend" e no arquivo "ormconfig.json", configurar o acesso para o seu banco de dados;
  3. Abrir o terminal na raiz da pasta "backend" e rodar "yarn" ou "npm i" para instalação das dependências do projeto;
  4. Ainda no terminal, rodar o comando "yarn dev:server" ou "npm run dev:server" para subir o servidor backend;
  5. Pronto, seu servidor backend está no ar e pronto pra ser acessado.

#### Subindo o servidor frontend
  1. Baixar/Clonar o repositório na sua máquina;
  2. Entrar na pasta "frontend", abrir o terminal na raiz da pasta e rodar "yarn" ou "npm i" para instalação das          dependências do projeto;
  3. Ainda no terminal, rodar o comando "yarn start" ou "npm run start" para subir o servidor frontend;
  4. Pronto, a aplicação está no ar e pode ser acessada pelo endereço http://localhost:3000".

### :wrench: Funcionalidades da aplicação

- **`Listar as transações da sua API`**: Na página inicial aparece uma listagem das transações cadastradas no seu banco de dados, com os campo `Título`, `Valor`, `Tipo` e `Categoria`.

- **`Exibir o balance da sua API`**: Também é possível ver o balanço que é retornado do seu backend, contendo o total geral, que é a diferença entre as entradas e saídas.

- **`Importar arquivos CSV`**: Na página `Import`, é possível enviar um arquivo no formato `csv` para o backend, que irá fazer a importação das transações para o seu banco de dados. O arquivo csv deve seguir o seguinte [modelo](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv).


### :mag_right: Específicação dos testes

**OBS:** *Antes de rodar os testes, crie um banco de dados com o nome **```database_tests```**.*

Para rodar os testes da aplicação, tanto na pasta **`backend`** quanto na pasta **`frontend`**, basta abrir o terminal na raiz da pasta e rodar **"yarn test"** ou ainda **"npm run test"**.

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Para esse projeto, temos os seguintes testes:

- **`should be able to list the total balance inside the cards`**: Para que esse teste passe, a aplicação deve permitir que seja exibido na Dashboard, cards contendo o total de `income`(entradas), `outcome`(saídas) e o total da subtração de `income - outcome` que são retornados pelo balance do backend.

* **`should be able to list the transactions`**: Para que esse teste passe, a aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do backend.

**Dica**: Para a exibição dos valores na listagem de transações, as transações com tipo `income` devem exibir os valores no formado `R$ 5.500,00`. Transações do tipo `outcome`(saída) devem exibir os valores no formado `- R$ 5.500,00`.

- **`should be able to navigate to the import page`**: Para que esse teste passe, deve haver uma troca de página através do Header, pelo botão que contém o nome `Importar`.

- **`should be able to upload a file`**: Para que esse teste passe, a aplicação deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de `import`, e que seja possível exibir o nome do arquivo enviado para o input.

## :memo: Tecnologias Utilizadas no Projeto

| **Frontend**| **Backend**|
|-------------|----------- |
|  *ReactJS*    | *NodeJS*   |
|  *Axios* | *Express*    |
|   *TypeScript*   | *TypeScript* |
|   *Filesize*   | *TypeORM*    |
|   *Jest*   | *Jest*       |
|   *Styled Components*   | *PostgreSQL* |
|   *Polished*   | *Multer*     |
|   *History*   | *CSV-Parser* |
|   *Eslint*   | *Eslint*     |
|   *Prettier*   | *Prettier*   |


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## :man: Author
[**_```Anderson Raphael Ferreira```_**](https://www.linkedin.com/in/anderson-raphael-ferreira/)
