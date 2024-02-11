// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('userInput', (searchTxt) => { 
    cy.xpath("//textarea[@id='APjFqb']").type(searchTxt);
});

Cypress.Commands.add('getIframe',(iframe)=>{
    return iframe=cy.get(iframe).its('0.contentDocument.body').should('be.visible').then(cy.wrap);
})
Cypress.Commands.add('login',(username,password)=>{
    cy.xpath("//input[@placeholder='Username']").type(username);
    cy.xpath("//input[@placeholder='Password']").type(password);
    cy.xpath("//button[normalize-space()='Login']").click();
})
Cypress.Commands.add('logout',()=>{
    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    cy.wait(2000);
    cy.xpath("//a[normalize-space()='Logout']").click();
})
Cypress.Commands.add('ElementClick', (locator) => { 
    cy.xpath(locator).click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
