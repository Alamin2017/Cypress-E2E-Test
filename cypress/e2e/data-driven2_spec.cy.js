describe('My Test Suite', () => {

    // it('Fixture test demo', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.fixture('orange_hrm2').then((data)=>{
    //         cy.xpath("//input[@placeholder='Username']").type(data.username);
    //         cy.xpath("//input[@placeholder='Password']").type(data.password);
    //         cy.xpath("//button[normalize-space()='Login']").click();
    //         cy.xpath("//span[normalize-space()='PIM']").should('have.text',data.expected); 
    //     });
    // });
    it('data driven test automation', () => {

        cy.fixture("orange_hrm").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((user_data)=>{
                cy.xpath("//input[@placeholder='Username']").type(user_data.username);
                cy.xpath("//input[@placeholder='Password']").type(user_data.password);
                cy.xpath("//button[normalize-space()='Login']").click();
                if(user_data.username=='Admin' && user_data.password=='admin123'){
                 
                    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
                    cy.wait(2000);
                    cy.xpath("//a[normalize-space()='Logout']").click();
                }
                else{
                    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text",user_data.expected);
                }
            })

        })
        
    });
    
});