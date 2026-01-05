describe('Casos de teste - Formulário', () => {
beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/form-validation')
});

it('009 - Envio com campos vazios ', () => {
    cy.get('#validationCustom01').clear()
    cy.get('#validationCustom05').clear()
    cy.get('.btn.btn-primary').click()
    cy.contains('Please enter your Contact name.').should('be.visible')
    cy.contains('Please provide your Contact number.').should('be.visible')
    cy.contains('Please provide valid Date.').should('be.visible')
    cy.contains('Please select the Paymeny Method.').should('be.visible') //| Passou | 
});

it('010 - Envio com dados válidos ', () => {
    cy.get('#validationCustom01').clear().type('Blay')
    cy.get('#validationCustom05').clear().type('013-3456789')
    cy.get('[name="pickupdate"]').clear().type('1212-02-12')
    cy.get('#validationCustom04').select('card')
    cy.contains(' Register ').click()
    cy.contains('Thank you for validating your ticket').should('be.visible')//| Passou |  
});

it('011 - Validação de campo obrigatório/número inválido ', () => {
      cy.get('#validationCustom01').clear().type('Blay')
    cy.get('#validationCustom05').clear().type('0131-3456789')
    cy.get('[name="pickupdate"]').clear().type('1212-02-12')
    cy.get('#validationCustom04').select('card')
    cy.contains(' Register ').click()
    cy.contains('Please provide your Contact number.').should('be.visible')
});
    
});