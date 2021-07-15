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
function generateMarkdown(response) {
  return `# ${response.title}
  ##Description 
  ${response.description}
  
  ##Table of Contents
  ${response.contents}

  ##Installation Instructions
  ${response.installation}

  ##Using the Program
  ${response.usage}
`
}

// .then((response) => {
//     title, description, contents, installation, usage, license, contributing, tests, questions
//   }) => { --Which page does this go on?

module.exports = generateMarkdown;




  // ##License
  // ${renderLicenseBadge(response.license)}

  // ##How to contribute
  // ${contributing}

  // ##Tests
  // ${tests}

  // ##Questions
  // ${questions}
  