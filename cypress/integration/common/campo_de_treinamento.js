import { Given } from 'cypress-cucumber-preprocessor/steps';

Given ('que eu esteja na tela de treinamento', () => {
    //direciona ao site de testes
    const url = './website.html'
    cy.visit(url)
    
})