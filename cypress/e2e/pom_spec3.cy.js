/// <reference types="Cypress"/>
import Login_Page from '../pages/login_page3';
describe('Page Object Model Test Automation', () => {
    const login_action=new Login_Page();
    it('Can not login successfully:', () => {
        cy.viewport(1540, 960)
        cy.visit("https://automationexercise.com/login");
        login_action.login("alamincse321@gmail.com","@wer123");
        login_action.errMsgValidation();
    });
});



