/// <reference types="Cypress"/>

describe('Handle Assertions', () => {

    // it('Implicit assertions', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.url().should('include','orangehrmlive.com');
    //     cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     cy.url().should('contain','orangehrm');
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.xpath("//img[@alt='company-branding']").should('be.visible');
    //     cy.xpath("//img[@alt='company-branding']").should('exist');
    //     cy.title().should('include',"OrangeHRM");
    //     cy.url().should('include','orangehrmlive.com')
    //     .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .and('contain','orangehrm')
    //     .and('not.contain','greenhrm');
    //     cy.xpath("//a").should('have.length',5);
    //     cy.login("Admin","admin123");
    // });

    it('Explicit assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.login("Admin","admin123");
        cy.xpath("//p[@class='oxd-userdropdown-name']").then((x)=>{
            let actName=x.text();
            console.log(actName);
        })
        cy.logout();

    });

    
});