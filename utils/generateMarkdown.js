// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}
  // return [!["License: MIT"]("https://img.shields.io/badge/License-MIT-yellow.svg")]; //Should return what you want displayed in the markdown doc. THere will be trial and error
  // console.log(`${license}`)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}
// return("https://opensource.org/licenses/MIT")

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  // return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${responses.title}
  ##Description 
  ${responses.description}

  ##
  ${renderLicenseBadge(response.license)}

`;
}

module.exports = generateMarkdown;
