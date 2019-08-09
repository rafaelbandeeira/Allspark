import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When ('eu preencher a tabela', () => {
    //invocação do exódia nos 5 últimos textboxes
    cy.xpath('//tr[1]//td[6]').find('input[type="text"]').click()
      .type('Left Arm of the Forbidden One')
    
    cy.xpath('//tr[2]//td[6]').find('input[type="text"]').click()
      .type('Right Arm of the Forbidden One')
    
    cy.xpath('//tr[3]//td[6]').find('input[type="text"]').click()
      .type('Left Leg of the Forbidden One') 
    
    cy.xpath('//tr[4]//td[6]').find('input[type="text"]').click()
      .type('Right Leg of the Forbidden One')
    
    cy.xpath('//tr[5]//td[6]').find('input[type="text"]').click()
      .type('Exodia the Forbidden One')
    
})


Then ('verei os popups dos botoes', () => {
    //compara o conteúdo do pop-up com o campo de onde foi clicado
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.xpath('//tr[3]//td[3]')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Usuario A')
        
    })
})
