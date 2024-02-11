
describe('Custom command test case', () => {
    it('Test case development', () => {
        cy.visit("https://www.google.com/");
        cy.userInput("Java");
    });
    it('Test case development 2', () => {
        cy.visit("https://automationexercise.com/");
        cy.ElementClick("//a[normalize-space()='Contact us']");
    });
});