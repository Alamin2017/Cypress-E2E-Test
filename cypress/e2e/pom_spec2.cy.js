import loginPage from "../pages/login_page2";

describe('POM Test', () => {
  const loginObj = new loginPage();

  before(function() {
      // executes prior each test within it block
      cy.visit('https://demo.guru99.com/test/newtours/login.php');
   })
    it('Verify Login successful 1', () => {
      loginObj.username.type('selenium@qa')
      loginObj.password.type('qa@12345')
    })
    it('Verify Login successful 2', () => {
      loginObj.submit.click();
      loginObj.successText.should('have.text','Login Successfully');
    });
   })
