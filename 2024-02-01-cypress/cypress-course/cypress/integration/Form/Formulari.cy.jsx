describe('Amazing form', () => {
    beforeEach(() => {
      cy.visit("/formulari");
    });
  
    
  
    it('FirstPage process',() => {
      cy.get('[data-cy="input-name"]').type("Joana").should("have.value", "Joana")
      cy.get('[data-cy="input-phone"]').type("1234").should("have.value", "1234")
      cy.get('[data-cy="input-button"]').click()
      cy.get('[data-cy="input-dni"]').type("4444444").should("have.value", "4444444")
    })
  })