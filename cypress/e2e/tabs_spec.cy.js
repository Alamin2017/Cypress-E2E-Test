describe('Handle tabs', () => {
    it('Approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.wait(3000);
        cy.get('.example >a').invoke('removeAttr','target').click();
        cy.wait(3000);
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.go('back');
    });
    it('Approach 2', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.wait(3000);
        cy.get('.example >a').then((e)=>{
            let url=e.prop('href');
            cy.visit(url)
        })
        cy.wait(3000);
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.go('back');
    });
});