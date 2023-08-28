const URL = "http://127.0.0.1:5500/static/shop/index.html"; 
const paragraph = "Click on the buttons to read more about our products and close this window";
const header = "PrecisionTestPro produtcs and information";
const buttonWiki = "Read on wikipedia";

describe(`Application Test in main.ts . Main file`, () => {
    it('Should open the application URL, finds dialog modal and close it.', () => {
        cy.visit(URL);
        cy.get('[data-cy="dialog-modal"]').within(() => {
            cy.get('[data-cy="paragraph-modal"]').should('contains.text', paragraph);
            cy.get('[data-cy="close-modal"]').click({multiple: true});
        });
        cy.request('GET', URL).then(response => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
        });
        cy.get('[data-cy="app-header"]').then((value) => {
            if(value) {
                header
            } else {
                cy.log('The header is not correctly.')
            }
        });
        cy.get('[data-cy="product-image"]').then((image) => {
            if(image) {
                cy.log('product.jpg');
            } else {
                cy.log('The image is not displaying correctly.');
            }
        })
        cy.get('[data-cy="links"]')
            .first()
            .within(() => {
            cy.get('[data-cy="link-pdf"]').click();
            cy.wait(2000)
        });
        cy.go('back');
        cy.get('[data-cy="link-wiki"]')
            .first()
            .within(() => {
                cy.contains(buttonWiki).click();
                cy.wait(1000)
        });
        
    });
});