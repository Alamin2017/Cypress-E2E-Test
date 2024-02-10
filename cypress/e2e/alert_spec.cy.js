

describe('Handling alerts', () => {

    it('Js Alerts', () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[normalize-space()='Click for JS Alert']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        });
        cy.xpath("//p[@id='result']").should('have.text','You successfully clicked an alert');
    });

    it('Js confirm Alerts ok', () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[normalize-space()='Click for JS Confirm']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        });
        cy.xpath("//p[@id='result']").should('have.text','You clicked: Ok');
    });
    it('Js confirm Alerts cancel', () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[normalize-space()='Click for JS Confirm']").click();
        cy.on('window:confirm',()=>false)
    
        cy.xpath("//p[@id='result']").should('have.text','You clicked: Cancel');
    });
    
});