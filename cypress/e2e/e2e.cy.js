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
        cy.get('#validationCustom05').type('013-34567')
        cy.get('[name="pickupdate"]').type('1212-02-12')
        cy.get('#validationCustom04').select('card')
        cy.contains(' Register ').click()
        cy.contains('Please provide your Contact number.').should('be.visible')
    });
    it('012 - Número de contato vazio', () => {
        cy.get('#validationCustom01').clear().type('Blay')
        cy.get('#validationCustom05').clear()
        cy.get('[name="pickupdate"]').clear().type('1212-02-12')
        cy.get('#validationCustom04').select('card')
        cy.contains(' Register ').click()
        cy.contains('Please provide your Contact number.').should('be.visible')  
    });
    it('013 - Número de contato com menos dígitos', () => {
        cy.get('#validationCustom01').clear().type('Blay')
        cy.get('#validationCustom05').type('012-34567') //2 digitos a menos
        cy.get('[name="pickupdate"]').clear().type('1212-02-12')
        cy.get('#validationCustom04').select('card')
        cy.contains(' Register ').click()
        cy.contains('Please provide your Contact number.').should('be.visible') 
    });
    it('014 - Número de contato com letras ou caracteres especiais', () => {
        cy.get('#validationCustom01').clear().type('Blay')
        cy.get('#validationCustom05').type('012-345678@!')
        cy.get('[name="pickupdate"]').clear().type('1212-02-12')
        cy.get('#validationCustom04').select('card')
        cy.contains(' Register ').click()
        cy.contains('Please provide your Contact number.').should('be.visible') 
    });
    it('015 - Data de retirada em formato inválido', () => {
        cy.get('#validationCustom01').clear().type('Blay')
        cy.get('#validationCustom05').type('012-3456789')
        cy.get('[name="pickupdate"]').clear().type('12-12-123123123123') //Durante os testes manuais foi identificado que o sistema
                                                                         //aceita datas numericamente válidas, porém incomuns, sem 
                                                                         //realizar validação de plausibilidade, o que pode gerar inconsistência de dados no sistema.
                                                                         //EM RESUMO NA AUTOMACAO DA ERRO DE CODICO PORQUE O SITE NAO ACEITA , AGORA QUANDO VOCE VAI TENTAR MANUALMENTE ELE PERMITE QUALQUER DATA INCOMUM
    });
   it('016 -  Método de pagamento não selecionado', () => {
        cy.get('#validationCustom01').clear().type('Blay')
        cy.get('#validationCustom05').type('012-3456789')
        cy.get('[name="pickupdate"]').clear().type('1212-02-12')
        cy.contains(' Register ').click()
        cy.contains('Please select the Paymeny Method.').should('be.visible') 
   });
   it('017 - Preenchimento correto de todos os campos', () => {
        cy.get('#validationCustom01').clear().type('Blay')
        cy.get('#validationCustom05').clear().type('012-3456789')
        cy.get('[name="pickupdate"]').clear().type('1212-02-12')
        cy.get('#validationCustom04').select('card')
        cy.contains(' Register ').click()
        cy.contains('Thank you for validating your ticket').should('be.visible')
   });
   it.only('018 - Teste de limite de caracteres no nome', () => {
    cy.get('#validationCustom01').clear().type('Blay@#$##@@!:')
        cy.get('#validationCustom05').clear().type('012-3456789')
        cy.get('[name="pickupdate"]').clear().type('1212-02-12')
        cy.get('#validationCustom04').select('card')
        cy.contains(' Register ').click()
        cy.contains('Thank you for validating your ticket').should('be.visible')
   });
});