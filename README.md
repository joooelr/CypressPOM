Cypress Automation Project

#**Overview**

This project is designed for automation testing using Cypress on the website Automation Exercise. It includes tests to validate various functionalities on the site.

#**Prerequisites**

Before you begin, ensure you have met the following requirements:
Node.js and npm installed on your machine.
Cypress installed as a development dependency.

#**Installation**

Clone the repository:
`git clone https://github.com/joooelr/CypressPOM`
`cd repository-directory`

Install the dependencies:

`npm install cypress --save-dev`
`npm install @faker-js/faker --save-dev`
`npm install --save-dev cypress-mochawesome-reporter`

#**Configuration**

Add the following configuration to your cypress.config.js:

```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
```
#**Running Tests**

To open the Cypress Test Runner, use:
`npx cypress open`
or 
`npm run cypress:open`

To run tests in headless mode with video recording, use:
`npx cypress run`
or 
`npm run cypress:run`


#**Viewing Reports**

After running tests in headless mode, you can view the generated Mochawesome reports in the specified folder (default is cypress/reports).

#**Contributing**
If you have suggestions for improving this project, feel free to open an issue or create a pull request.

