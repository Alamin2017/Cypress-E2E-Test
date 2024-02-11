import loginPage from "../pages/login_page2";

describe('POM Test', () => {
  

  before(function() {
      // executes prior each test within it block
      cy.visit('https://demo.guru99.com/test/newtours/login.php');
   })
    it('Verify Login successful 1', () => {
      const loginObj = new loginPage();
      loginObj.username.type('selenium@qa')
      loginObj.password.type('qa@12345')
    })
    it('Verify Login successful 2', () => {
      const loginObj = new loginPage();
      loginObj.submit.click();
      loginObj.successText.should('have.text','Login Successfully');
    });
   })
