import { faker } from '@faker-js/faker';
/// <reference types="Cypress"/>
describe('Full Test Automation', () => {

    it('Add Product E2E Test:::', () => {

        cy.viewport(1280, 720);
        cy.visit("https://automationexercise.com/");
        cy.xpath("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click();
        cy.xpath("//button[normalize-space()='Add to cart']").click();
        cy.xpath("//u[normalize-space()='View Cart']").click();
        cy.xpath("//a[normalize-space()='Proceed To Checkout']").click();
        cy.xpath("//u[normalize-space()='Register / Login']").click();
        cy.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[2]").type("tania");
        cy.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]").type(faker.internet.email());
        cy.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/button").click();
        cy.xpath("//*[@id=\"id_gender1\"]").click();
        cy.xpath("//*[@id=\"password\"]").type("34567890");
        cy.xpath("//select[@id='days']").select("14");
        cy.xpath("//select[@id='months']").select("7");
        cy.xpath("//select[@id='years']").select("2006");
        cy.xpath("//*[@id=\"newsletter\"]").click();
        cy.xpath("//*[@id=\"optin\"]").click();
        cy.xpath("//*[@id=\"first_name\"]").type("tania");
        cy.xpath("//*[@id=\"last_name\"]").type("akter");
        cy.xpath("//*[@id=\"address1\"]").type("dhaka");
        cy.xpath("//*[@id=\"state\"]").type("Dhaka");
        cy.xpath("//*[@id=\"city\"]").type("Khilkhet");
        cy.xpath("//*[@id=\"zipcode\"]").type("1229");
        cy.xpath("//*[@id=\"mobile_number\"]").type("01723456721");
        cy.xpath("//*[@id=\"form\"]/div/div/div/div[1]/form/button").click();
        cy.xpath("//*[@id=\"form\"]/div/div/div/div/a").click();
        cy.xpath("//a[normalize-space()='Cart']").click();
        cy.xpath("//a[normalize-space()='Proceed To Checkout']").click();
        cy.xpath("//textarea[@name='message']").type("Already order some products");
        cy.xpath("//a[normalize-space()='Place Order']").click();
        cy.xpath('//input[@name="name_on_card"]').type("sumon");
        cy.xpath('//input[@name="card_number"]').type("4485233521979909");
        cy.xpath("//input[@placeholder='ex. 311']").type("748");
        cy.xpath("//input[@placeholder='MM']").type("9");
        cy.xpath("//input[@placeholder='YYYY']").type("2025");
        cy.xpath("//button[@id='submit']").click();
        
    });

});