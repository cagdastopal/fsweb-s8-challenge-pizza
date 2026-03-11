describe("Onay Sayfası Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/onay");
  });

  it("Ana Sayfa butonuna tıklayınca Ana Sayfa ' ya yönlendiriyor mu?", () => {
    cy.contains("button", "Ana Sayfa").click();
    cy.url().should("eq", "http://localhost:5173");
  });
});