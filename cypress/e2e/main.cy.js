const URL = "http://127.0.0.1:5500/static/shop/index.html"; 
const paragraph = "Click on the buttons to read more about our products and close this window";

describe(`Application Test in main.ts . Main file`, () => {
    it('Should open the application URL, finds dialog modal and close it.', () => {
        cy.visit(URL);
        cy.get('[data-cy="dialog-modal"]').within(() => {
            cy.get('[data-cy="paragraph-modal"]').should('contains.text', paragraph);
            cy.get('[data-cy="close-modal"]').click({multiple: true});
        });
    });
});