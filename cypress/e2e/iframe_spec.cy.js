describe('handling iframe', () => {

    it('approach 1 ', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        const iframe=cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);
        iframe.clear().type("Welcome");
        cy.xpath("//button[@title='Bold']").click();
    });
    it('approach 2 ', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe("#mce_0_ifr").clear().type("Welcome");
        cy.xpath("//button[@title='Bold']").click();
    });
    
});