import 'cypress-xpath';

describe('QA Development Challenge', function() {
    beforeEach(() => {
        cy.login();
        cy.wait(500);
    }
    );

    it('Check 1', () => {
        //Navigate to the `Inventory` feature
        cy.get("a[id='result_app_1'] div[class='o_app_icon']").click();
        cy.wait(500);
        //Select the `Products -> Products` item, then click on the `Create` button 
        cy.xpath("//span[normalize-space()='Products']").click();
        cy.xpath("//a[normalize-space()='Products']").click();
        cy.get("button[title='Create record']").click();
        //Fill in the required information, then click on the `Save` button 
        cy.get('#o_field_input_12').type("Product 1");
        cy.get("button[title='Save record']").click();
        cy.wait(1000);
        //Click on the `Update the quantity` link, then update the Counted Quantity is 10 
        cy.xpath("//span[normalize-space()='Update Quantity']").click();
        cy.wait(500);
        cy.xpath("//button[normalize-space()='Create']").click();
        cy.get("input[name='inventory_quantity']").type("10{enter}");
        //From the top-left page, click on the `Application` icon 
    })
})