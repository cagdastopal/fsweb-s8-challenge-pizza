describe("AnaSayfa Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("ACIKTIM butonuna tıklayınca sipariş sayfasına yönlendirir", () => {
    cy.contains("button", "ACIKTIM").click();
    cy.url().should("eq", "http://localhost:5173/siparis");
  });
});