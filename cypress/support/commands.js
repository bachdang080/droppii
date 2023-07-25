Cypress.Commands.add('login', () => {
    // Thực hiện các bước đăng nhập:
    cy.visit("https://codechallenge.odoo.com");
    cy.get('#login').type("user@codechallenge.app");
    cy.get('#password').type("123456")
    cy.get("button[type='submit']").click();
    cy.wait(500);
  });