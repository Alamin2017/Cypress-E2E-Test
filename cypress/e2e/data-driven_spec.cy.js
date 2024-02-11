import signUpData from '../fixtures/example.json'

describe('DataDriven Test Automation', () => {

    let signUpDataExample
    before(() => {
    cy.fixture('example').then((data) => {
    signUpDataExample = data;
    })
})
    // it('Should create user', () => {
    //     cy.visit('https://www.browserstack.com/users/sign_up');
    //     cy.get('#user_full_name').type(signUpData.fullname);
    //     cy.get('#user_email_login').type(signUpData.email);
    //     cy.get('#user_password').type(signUpData.password);
    //     cy.xpath("//input[@id='tnc_checkbox']").click();
    //     cy.xpath("//input[@id='user_submit']").click();
    // });
    it('Should create user 2', () => {
        cy.visit('https://www.browserstack.com/users/sign_up');
        cy.get('#user_full_name').type(signUpDataExample.fullname);
        cy.get('#user_email_login').type(signUpDataExample.email);
        cy.get('#user_password').type(signUpDataExample.password);
        cy.get('#tnc_checkbox').click();
        cy.get('#user_submit').click();

    });
    
    
    
});