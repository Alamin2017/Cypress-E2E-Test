describe('My Test Suite', () => {

    before(() => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.xpath("//a[normalize-space()='Register']").click();
    });
    it('search ', () => {
        cy.xpath("//input[@id='gender-male']").click(); 
    });
    it('advanced search', () => {
        cy.xpath("//input[@id='Newsletter']").click()
    });
    it('listing products', () => {
        cy.xpath("//button[@id='register-button']").click();
    });
    
});