import loginPage from "../pages/login_page1"
describe('POM Test', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/test/newtours/login.php');
  });
  afterEach(() => {
    const loginObj = new loginPage();
    loginObj.clickSubmit();
  });
  it('Test 1', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('selenium@qa',{force: true});
    loginObj.enterPassword('qa@12345',{force: true});
    // loginObj.elements.successTxt().should('have.text','Login Successfully');

  });
  it('Test 2', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('selenium',{force: true});
    loginObj.enterPassword('qa@123',{force: true});
    // loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
  });

});