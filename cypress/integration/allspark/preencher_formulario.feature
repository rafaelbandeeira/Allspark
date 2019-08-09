Feature: As I open the Training Camp I want to fill the form so that I prove my worth

        Preencher os campos referentes aos dados pessoais

Background: Campo de Treinamento
    Given que eu esteja na tela de treinamento

Scenario: Preencher dados pessoais
    When eu inserir dados pessoais nos campos
    Then os campos deverao ser preenchidos

Scenario: Preencher a tabela
    When eu preencher a tabela
    Then verei os popups dos botoes

Scenario: Enviar cadastro
    When eu inserir dados pessoais nos campos
    And eu preencher a tabela
    And eu completar as preferencias
    Then confirmarei meu cadastro    