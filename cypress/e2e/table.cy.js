// describe('Handle Tables', () => {

//     before('Login',() => {
//         cy.viewport(1280, 720);
//         cy.visit("https://demo.opencart.com/admin/index.php");
//         cy.xpath("//input[@id='input-username']").type("demo");
//         cy.xpath("//input[@id='input-password']").type("demo");
//         cy.xpath("//button[normalize-space()='Login']").click();
//         cy.xpath("//button[@class='btn-close']").click();
//         cy.xpath("//li[@id='menu-customer']/a").click();
//         cy.xpath("//ul[@id='collapse-5']//a[contains(text(),'Customers')]").click();

//     });

//     it('Check Number Rows and Columns', () => {
//         cy.xpath("//table[@class='table table-bordered table-hover']/tbody/tr").should('have.length',10);
//         cy.xpath("//table[@class='table table-bordered table-hover']/thead/tr/td").should('have.length',7);
//     });

//     it('Check cell data from specific row and column', () => {
//         cy.xpath("//table[@class='table table-bordered table-hover']/tbody/tr[5]/td[3]").contains("hfgjhgjgjggj@gmail.com")
//     });

//     it('Read all the rows and columns data in the first page', () => {
//         cy.xpath("//table[@class='table table-bordered table-hover']/tbody/tr")
//         .each(($row,index,$rows)=>{
//             cy.wrap($row).within(()=>{
//                 cy.get("td").each(($col,index,$cols)=>{
//                     cy.log($col.text())
//                 })
//             })
//         })
//     });

//     it('Pagination', () => {
//         // let totalPages;
//         // cy.xpath("//div[@class='col-sm-6 text-end']").then((e)=>{
//         //     let myText=e.text();
//         //     cy.log(myText);
//         //     totalPages=myText.substring(myText.indexOf("(")+1,myText.indexOf("Pages")-1);
//         //     cy.log("Total number of pages in a table: "+totalPages);
//         // })
//         let totalPages=5;
//         for(let p=1;p<=totalPages;p++){
//             if(totalPages>1){
//                 cy.log("Active page is : "+p);
//                 cy.xpath("//ul[@class='pagination']/li["+p+"]").click()
//                 cy.wait(2000);
//             }
//         }


//     });
    
// });