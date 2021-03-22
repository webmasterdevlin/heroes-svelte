/// <reference types="cypress"/>

const VILLAINS = [
  {
    firstName: "Lex",
    lastName: "Luther",
    house: "DC",
    knownAs: "Lex",
    id: "3290fhe",
  },
  {
    firstName: "Max",
    lastName: "Eisenhardt",
    house: "Marvel",
    knownAs: "Magneto",
    id: "6r8finlfy",
  },
];

describe("Villains Page", () => {
  beforeEach(() => {
    /* Custom commands. Please see support/commands.ts
     * and the global.d.ts for intellisense */
    cy.getCommand("/villains", VILLAINS);
    cy.deleteCommand("/villains/*");
    cy.NavigateByTestIdCommand("nav-villains");
  });

  it("should render villains", () => {
    cy.get("[data-testid=card]").should("have.length", VILLAINS.length);
  });
});
