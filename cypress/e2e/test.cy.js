describe('Color code test automation', () => {
    it('test started', () => {
        cy.visit("https://secure.login.gov/");
        cy.xpath("//button[normalize-space()='Sign in']").click();
        cy.xpath("//input[@id='user_email']").should('have.css', 'border-color', 'rgb(226, 28, 61)');
        cy.xpath("//input[@name='user[password]']").should('have.css', 'border-color', 'rgb(226, 28, 61)');
    });
});