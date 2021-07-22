//Uses switch cases to choose a license based on user response to the "license" prompt within 
//the questions array in index.js.  
function renderLicense(license) {
  switch (license) {
    case "MIT":
      license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache 2.0":
      license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Creative Commons CC0":
      license = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "GNU GPL v3":
      license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    default:
      license = "";
      break;
  };
  return license;
};
//Generates the actual contents of the markdown document by pulling in responses from index.js
function generateMarkdown(responses) {

  license = '';
  renderLicense(responses)

  return `
# Title 
${responses.title}

## Description 
${responses.description}

## Table of Contents
#### [Installation Instructions](#installation-instructions)<br>
#### [Using The Program](#using-the-program)<br>
#### [License](#license)<br>
#### [How to Contribute](#how-to-contribute)<br>
#### [Tests](#tests)<br>
#### [Questions](#questions)<br>
#### [Github Link](#github-link)<br>
#### [Email](#email)<br>

## Installation Instructions
${responses.installation}

## Using the Program
${responses.usage}

## License
#### ${renderLicense(responses.license)}

## How to Contribute
${responses.contributing}

## Tests
${responses.tests}

## Questions
${responses.questions}

## Github Link
${responses.github}

## Email
${responses.email}
  

#### This Readme was generated using a Node.js Readme generator. 
[Get that open-source generator here.](git@github.com:mwallis5110/Readme_Generator_HW_09.git)
`
};


//Exports content back to index.js
module.exports = generateMarkdown;
