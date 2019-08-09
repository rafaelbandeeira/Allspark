import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When ('eu inserir dados pessoais nos campos', () => {
    //preenche os campos obrigatórios
    cy.get('input[id="elementosForm:nome"]')
      .click()
      .type('Yugi')

    cy.get('input[id="elementosForm:sobrenome"]')
      .click()
      .type('Muto')

    cy.get('textarea[id="elementosForm:sugestoes"]')
      .click()
      .type('Fe nas maluca e no coracao das cartas')
      
    cy.get('input[id="elementosForm:sexo:0"]')
      .check()
})
    

Then ('os campos deverao ser preenchidos', () => {
    //simples assert de strings
    cy.get('input[id="elementosForm:nome"]')
      .should('have.value', 'Yugi')

    cy.get('input[id="elementosForm:sobrenome"]')
      .should('have.value', 'Muto')

    cy.get('textarea[id="elementosForm:sugestoes"]')
      .should('have.value', 'Fe nas maluca e no coracao das cartas')

    cy.get('input[id="elementosForm:sexo:0"]')
      .should('be.checked')
    
})

