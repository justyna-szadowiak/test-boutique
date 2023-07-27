# Test Boutique

This is a playground for QA people. It's made of an API and a web GUI. Both parts are slightly broken. Your job is to find bugs in this sytem.

## Project objective

Create fully automated testing setup. Here's few a few points to get you started:

* add tests to all the bugs you find
* add tests to working features (if you think that a given functionality is important for the user)
* create a show-off setup, but don't overdo it
    * use all the latest and greatest tools you know
    * use all the techniquest you are aware of that fit this assignment
* use TypeScript if possible (if not use JavaScript)
    * for API tests Postman / Newman is preferable
    * for GUI tests Cypress is preferable (Playwright is a viable alternative)
* run the code in CI pipeline (if possible)
* save your work in a git repo (with some nice, readable commits)

## Project structure

This project is made of two components and your automated setup should test both of them:

* API
    * [OpenAPI Specification](https://testboutique-precisiontest.deno.dev/static/docs/)
* web GUI
    * [PrecisionTestPro produtcs website](https://testboutique-precisiontest.deno.dev/static/shop/)

Write separate tests for API and for GUI.

## Solution notes

Your final repo should contain:

* working code
* reasonable `README` file
* nice commmit history
* and few nice to haves (if possible and if you have time)
    * test reports
    * CI pipleline integration