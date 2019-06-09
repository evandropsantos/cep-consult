### Projeto Consulta de CEP

> Sistema de consulta de CEP (Back-end - Node.js (versão 11.7), Front-end - Javascript Vanilla (versão ES2018))

### - 1. Pré requisitos
    Entendimento básico de ES6:
    - Requisições assincronas (async e await, promisses)
    - Modularização (export e import)
    Entendimento básico de Saas (scss)
    - Uso de funções (mixins, placeholders e functions)
    - Uso de map e variáveis

### - 2. Itrodução
    Para iniciar o projeto é necessário baixar suas dependências, através do comando 
    $ npm install
    Após o termino executar
    $ npm run server - Para inicia o servidor 
    Através do navegador acesse "localhost:3000"

### - 3. Comandos Extras (Front-end)
    Os arquivos estáticos estão localizados na pasta "public", os comandos a seguir servem para minupula-los

    $ npm run webpack:build - Cria o pacote build (Produção, arquivos minificados e otimizados) - "public/build"
    $ npm run webpack - Executa o webpack em modo desenvolvimento, serve para edição do arquivos estáticos (Trava o terminal e observa as alterações)