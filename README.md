# Test Boutique

This is a playground for QA people. It's made of an API and a web GUI. Both parts are slightly broken, and it contains tests written to point out on the issues. Also there are couple tests just to be perfectly sure that anything won't interupt user while using the application.

## Project description

Project is made of backend(Swagger) and frontend(TypeScript + HTML), and several tests as mentioned above. Tests are written in Cypress and Postman/Newman.

List of technologies:
    "cypress": "^12.17.4",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui": "5.4.2",
    "typescript": "^5.2.2"

Those technologies were used accordingly to the business requierments.
As well as that, for test workflow of the project is used CI GitHub Actions.

## Project structure

* API
    * [OpenAPI Specification](https://testboutique-precisiontest.deno.dev/static/docs/)
* web GUI
    * [PrecisionTestPro produtcs website](https://testboutique-precisiontest.deno.dev/static/shop/)

*CI
    *[.github/worflows]

*Cypress Test
    *[cypress/e2e/main.cy.js]

*Postman Test
    *[static/docs/tests/PrecisionTestPro Product API.postman_collection.json]


## Instruction to run project

1. npm install
2. irm https://deno.land/install.ps1 | iex
3. deno run
4. npm install cypress --save-dev
5. cypress run
6. npm install -g newman 
7. npm run
 