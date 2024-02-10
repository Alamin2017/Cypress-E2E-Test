describe('Custom command test case', () => {
    it('Test case development', () => {
        cy.visit("https://www.google.com/");
        cy.userInput("Java");
    });
});