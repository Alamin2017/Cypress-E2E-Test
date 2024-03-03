class Login_Page{
    constructor(){
        this.username_field="//input[@data-qa='login-email']";
        this.password_field="//input[@placeholder='Password']";
        this.login_button="//button[normalize-space()='Login']";
        this.err_msg=".login-form > form > p";
    }
    login(username,password){
        cy.xpath(this.username_field).type(username);
        cy.xpath(this.password_field).type(password);
        cy.xpath(this.login_button).click();
    }
    errMsgValidation(){
        cy.get(this.err_msg).should('have.text',"Your email or password is incorrect!")
    }
    
}
export default Login_Page
