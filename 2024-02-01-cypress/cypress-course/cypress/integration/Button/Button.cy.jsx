describe("New Member", () => {
  /*     Cypress.on('uncaught:exception', (error, runnable) => {
      console.error(error)
      return false
    }) */

  const text = "CLICA";
  const textClick = "CLICAT!";

  beforeEach(() => {
    cy.visit("/component");
  });

  it("Show text inside button", function () {
    cy.get('[data-cy="button"]').should("contain.text", text);
  });

  it("Show text after click the button", function () {
    cy.get('[data-cy="button"]').click();
    cy.get('[data-cy="title"]').should("contain.text", textClick);
  });

});
