describe('cloud prix testing', function() {
    it('faz login na tela da cloud prix', function() {
        cy.visit('dev.cloudprix.com.br')

        cy.xpath('//div//div//div//div//div//div[1]').click()
        cy.get('#Email').click()
          .type('rafael.santos@brisabr.com.br')

        cy.get('#Password').click()
          .type('123456')
        cy.get('.btnlogin').click()
        cy.url().should('include', 'MinhaConta')
          
    })
})