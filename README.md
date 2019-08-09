# Allspark
Este script de teste foi feito com muito amor e carinho. O repositório possui todos os arquivos necessários 
para a execução do teste.

Este projeto foi feito com a instalação de algumas dependências e configurações:

CUCUMBER:
   utilize o comando $npm install cypress-cucumber-preprocessor --save-dev.
   abra o arquivo cypress/plugins/index.js e adicione o código:
    
    const cucumber = require('cypress-cucumber-preprocessor').default

    module.exports = (on, config) => {
      on('file:preprocessor', cucumber())
    }
    
XPATH:
   utilize o comando $npm install -D cypress-xpath.
   abra o arquivo cypress/support/index.js e adicione o código:
  
    require('cypress-xpath')
    
COSMICONFIG:
   utilize o comando $npm install cosmiconfig.
   abra o arquivo package.json e adicione:
  
    "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true
    }
 
