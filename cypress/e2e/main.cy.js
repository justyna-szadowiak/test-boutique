const URL = "http://127.0.0.1:5500/static/shop/index.html"; 
const paragraph = "Click on the buttons to read more about our products and close this window";
const header = "PrecisionTestPro produtcs and information";
const buttonWiki = "Read on wikipedia";

describe(`Application Test in main.ts . Main file`, () => {
    it('Should open the application URL, and go through whole page.', () => {
        //Testing is URL correct
        cy.visit(URL);
        //Test should caught dialog modal, and after finding it, close it
        cy.get('[data-cy="dialog-modal"]').within(() => {
            cy.get('[data-cy="paragraph-modal"]').should('contains.text', paragraph);
            cy.get('[data-cy="close-modal"]').click({multiple: true});
        });
        //Test should check GET request
        cy.request('GET', URL).then(response => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
        });
        cy.wait(3000)
        //Test should check is the header correct if not will return error in log
        cy.get('[data-cy="app-header"]').then((value) => {
            if(value) {
                header
            } else {
                cy.log('ERROR: The header is not correctly.')
            }
            cy.wait(3000)
        });
        //Test should check is the image displaying correctly, if not return error in log
        cy.get('[data-cy="product-image"]').then((image) => {
            if(image) {
                cy.log('product.jpg');
            } else {
                cy.log('ERROR: The image is not displaying correctly.');
            }
            cy.wait(3000)
        })
        //Test should check the link for downloading pdf file and go back 
        cy.get('[data-cy="links"]')
            .first()
            .within(() => {
            cy.get('[data-cy="link-pdf"]').then((pdf) => {
                if(pdf) {
                    cy.contains('Download PDF').click();
                    cy.log('ERROR: Cannot GET /products/brochure.pdf');
                    cy.wait(3000);
                } else {
                    cy.contains('Download PDF').click();
                    cy.readFile('brochure.pdf');
                }
            });
        });
        cy.go('back');
        //Test should check the link for wikipedia
        cy.get('[data-cy="link-wiki"]')
            .first()
            .within(() => {
                cy.contains(buttonWiki).click();
                cy.wait(2000)
        });
        cy.go(-2)
    });
});