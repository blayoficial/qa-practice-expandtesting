describe('casos de teste practice', () => {
beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/login')
});


    it('001 - Deve realizar login com credenciais válidas', () => {
        cy.get('#username').type('practice'); 
        cy.get('#password').type('SuperSecretPassword!'); 
        cy.get('button[type="submit"]').click();
        cy.contains('You logged into a secure area!').should('be.visible') //| Passou |
    });

    it('002 - login com senha invalida', () => {
        cy.get('#username').type('practice'); 
        cy.get('#password').type('SuperSecretPassword'); // sem colocar ! no final
        cy.get('button[type="submit"]').click();
        cy.contains('Your password is invalid!').should('be.visible')//| Passou |
    });

 
    it('003 - login com usuario vazio', () => {
        cy.get('#username').clear(); //usuario vazio
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('button[type="submit"]').click();
        cy.contains('Your username is invalid!').should('be.visible')//| Passou |
    });

    it('004 - Login com senha vazia', () => {
        cy.get('#username').type('practice'); 
        cy.get('#password').clear(); 
        cy.get('button[type="submit"]').click();
        cy.contains('Your password is invalid!').should('be.visible')//| Passou |
    });
       
    it('005 - Login com usuário e senha vazios', () => {
        cy.get('#username').clear(); 
        cy.get('#password').clear(); 
        cy.get('button[type="submit"]').click();
        cy.contains('Your username is invalid!').should('be.visible')//| Passou |
    });

    it('006 - Login com caracteres especiais', () => {
        cy.get('#username').type('!@#$%'); 
        cy.get('#password').type('^&*()'); 
        cy.get('button[type="submit"]').click();
        cy.contains('Your username is invalid!').should('be.visible')//| Passou |     
    });

    it('007 - Logout do sistema', () => {
        cy.get('#username').type('practice'); 
        cy.get('#password').type('SuperSecretPassword!'); 
        cy.get('button[type="submit"]').click();
        cy.contains('You logged into a secure area!').should('be.visible') 
        cy.get('a[href="/logout"]').click() 
        cy.url().should('include', '/login')  
        cy.contains('You logged out of the secure area!').should('be.visible')//| Passou | 
    });

    it('008 - SEGURANCA! Acesso sem login  ', () => {
        cy.visit('https://practice.expandtesting.com/secure')
        cy.contains('You must login to view the secure area!').should('be.visible')//| Passou |    
    });
});