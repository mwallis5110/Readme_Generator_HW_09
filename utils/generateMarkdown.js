// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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

function generateMarkdown(responses) {

  //switch statement for each license type response.license
  //inside the case set the license var to the appropriate string
  license = '';
  renderLicense(responses)

  return `# ${responses.title}

  ##Description 
  ${responses.description}

  ##Table of Contents
  ${responses.contents}
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>

  ##Installation Instructions
  ${responses.installation}

  ##Using the Program
  ${responses.usage}

  ##License
  ${renderLicense(responses.license)}

  ##How to contribute
  ${responses.contributing}

  ##Tests
  ${responses.tests}

  ##Questions
  ${responses.questions}
  

  ####This Readme was generated using a Node.js Readme generator. 
  [Get that open-source generator here.](git@github.com:mwallis5110/Readme_Generator_HW_09.git)
`
};



module.exports = generateMarkdown;
