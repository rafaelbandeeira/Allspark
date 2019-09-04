# Allspark
Estes códigos foram feitos com muito amor e carinho. O repositório possui todos os arquivos necessários 
para a reprodução do script.

Estes scripts foram feitos com a instalação de algumas dependências.
Os códigos e configurações devem acontecer na pasta raíz do projeto, utilizando o cmd/powershell com permissão de administrador.

NODE.JS:

   baixe e instale o node.js (https://nodejs.org/en/download/)

CYPRESS:

   inicialize com
   	
	npm init
	
   depois, utilize o comando
   
   	npm install cypress --save-dev.
   
   abra o arquivo 'open cypress.bat' disponível neste repositório e aceite a configuração inicial // ou inicie-o na pasta raíz usando 
   
   	npx cypress open

CUCUMBER:

   utilize o comando 
   
   	npm install cypress-cucumber-preprocessor --save-dev
   
   em seguida, abra o arquivo cypress/plugins/index.js e adicione o código
    
    const cucumber = require('cypress-cucumber-preprocessor').default

    module.exports = (on, config) => {
      on('file:preprocessor', cucumber())
    }

COSMICONFIG:

   utilize o comando
   
   	npm install cosmiconfig.
	
   abra o arquivo package.json e adicione
  
    "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true
    }

*ponha 'false' para utilizar o método tradicional do Cucumber


XPATH:

   utilize o comando
   
   	npm install -D cypress-xpath
	
   abra o arquivo cypress/support/index.js e adicione o código
  
    require('cypress-xpath')
    
CYPRESS COMMANDS:

   inicie o comando
   
   	npm install cypress-commands
	
   ponha no arquivo cypress/support/index.js
   
   	require('cypress-commands');
    

