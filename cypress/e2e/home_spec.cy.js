import Home from "../pages/home_page";
const home = new Home()
describe("testing home page", () => {
    it("should visit home page", () => {
      home.visit()
    })
   
    it("should search for a product", () => {
      home.visit()
      home.searchInput("iphone")
      home.getSearchButton().click()
    })

 
})