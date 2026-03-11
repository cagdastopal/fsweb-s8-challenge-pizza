describe("SiparisFormu Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis");
  });

  it("SİPARİŞ VER butonu pasif mi?", () => {
    cy.contains("SİPARİŞ VER").should("be.disabled");
  });

  it("Form eksiksiz dolduruluyor mu?", () => {
    cy.get('input[type="radio"][value="Orta"]').check();

    cy.get("select").select("İnce");

    cy.get('input[type="checkbox"][value="Mısır"]').check();
    cy.get('input[type="checkbox"][value="Domates"]').check();
    cy.get('input[type="checkbox"][value="Sucuk"]').check();
    cy.get('input[type="checkbox"][value="Sosis"]').check();

    cy.get("textarea").type("sıcak gelsin");
    cy.contains("SİPARİŞ VER").should("not.be.disabled");
  });

  it("Adet Sayısı Artıyor mu?", () => {
    cy.get(".counter-btn").contains("+").click();
    cy.get(".group23 p").should("contain", "2");
  });

  it("SİPARİŞ VER butonuna tıklayınca onay sayfasına yönlendiriyor mu?", () => {
    cy.contains("button", "SİPARİŞ VER").click();
    cy.url().should("eq", "http://localhost:5173/onay");
  });
});