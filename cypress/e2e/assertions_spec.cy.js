/// <reference types="Cypress"/>

describe('Handle Assertions', () => {

    it('Implicit assertions', () => {
        cy.visit("https://automationexercise.com/");
        cy.url().should('eq','https://automationexercise.com/');
        cy.xpath("//img[@alt='Website for automation practice']").should('be.visible');
        cy.xpath("//a[normalize-space()='Home']").should('exist');
        cy.title().should('include',"Automation Exercise");
    });

    
});