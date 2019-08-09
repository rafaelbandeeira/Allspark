import { And, Then } from 'cypress-cucumber-preprocessor/steps';

And ('eu completar as preferencias', () => {
    cy.get('select[id="elementosForm:escolaridade"]')
      .select('Superior') 
      
    cy.get('select[id="elementosForm:esportes"]').scrollTo('30px')
      .select('nada')

    cy.get('input[id="elementosForm:comidaFavorita:3"]')
      .click()

    cy.xpath('//tbody//td//tr[5]//td[5]//td')
      .click()  
            
})

Then ('confirmarei meu cadastro', () => {
    cy.get('input[id="elementosForm:cadastrar"]')
      .click()

    cy.contains('Cadastrado')  

})   