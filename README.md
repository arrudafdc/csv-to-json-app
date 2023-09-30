# csv-to-json

Para utilizar basta clicar no link: https://arrudafdc.github.io/csv-to-json-app/

## Sobre o projeto

CsvToJson é uma aplicação full stack que recebe um arquivo CSV, transforma para JSON e disponibiliza o mesmo para download.

Apesar de simples, a ideia era criar algo eficiente e funcional que pudesse de fato processar grandes arquivos sob demanda de forma rápida e com um consumo eficiente de memória utilizando a API de Streams.

## Funcionalidades

- Leitura, escrita e transformação de arquivos sob demanda utilizando a API nativa de Strams do Node.
- Transformação de arquivo CSV para Object sem framework, apenas com lógica de programação, tentando abranger mais de um padrão de escrita CSV, como separadores que usam vírgulas, pontos e vírgulas, headers com aspas, headers sem aspas...

## Observações

- Por ter hospedado o backend no Render, que é um serviço gratuíto e limitado, precisei deixar o tamanho máximo do arquivo para 1MB.

## Como usar (Modo de Desenvolvimento)

Para executar esse projeto, você precisará do servidor em execução local. Você pode encontrar o servidor e todas as instruções para iniciá-lo [aqui](https://github.com/arrudafdc/csv-to-json-server)

Após a execução dos comandos basta ir no arquivo ./src/services/config.jsx e alterar o baseURL para "http://localhost:3333/"

```bash
# clonar repositório
git clone https://github.com/arrudafdc/csv-to-json.git

# entrar na pasta do projeto csv-to-json-app
cd csv-to-json-app

# baixar as dependências
npm install

# executar o projeto em modo de desenvolvimento
npm run dev
```

## Construído com

### Back-end

- Typescript
- NodeJS
- Express
- Multer
- Cors

### Front-end

- React
- Axios

## Autor

Lucas Arruda
