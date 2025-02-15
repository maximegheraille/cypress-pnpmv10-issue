import { userFactory } from "../support/factory";

describe("Simple Cypress Test", () => {
  it("Visits the app and checks user data", () => {
    cy.visit("https://example.cypress.io");

    const user = userFactory();
    cy.log(`Generated user: ${user.name}, ${user.email}`);
  });
});
