describe('Handle Tables', () => {

    before('Browse the current url:',() => {
        cy.viewport(1280, 720);
        cy.visit("https://qavbox.github.io/demo/webtable/");
    });

    it('fetching table header data:', () => {
        cy.get("#table01 thead tr th").should('have.length',4);
        cy.get("#table01 thead tr th").each(($el)=>{
            // cy.wrap($el).invoke('text').then((text)=>{
            //     cy.log(text);
            // });
            cy.log($el.text())
        });
    });

    it('Number of rows and specific rows data:', () => {
       cy.get('#table01 tbody tr').should('have.length',3);

       cy.get("#table01 tbody tr:nth-child(1) td").each(($el)=>{
        // cy.wrap($el).invoke('text').then((text)=>{
        //     cy.log(text);
        // });
        cy.log($el.text());
        
    });

    });
    
});