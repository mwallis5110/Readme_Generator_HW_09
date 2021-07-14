// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
console.log(generateMarkdown)

const responses = [
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Table of Contents: ',
            name: 'contents',
        },
        {
            type: 'input',
            message: 'Installation Instructions: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Using the Program: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'License: ',
            name: 'license',
        },
        {
            type: 'input',
            message: 'How To Contribute: ',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Tests: ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Questions: ',
            name: 'questions',
        },
    ])
]
//   .then((response) => {
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//       console.log(response)
//   });

  //inquirer.prompt(questions).then



    fs.writeFile("README.md", generateMarkDown({...responses.message}), (err),
    error ? console.log(err) : console.log('Success!'))

// TODO: Create a function to write README file
function writeToFile(filename, responses) {
fs.writeFile("README.md", generateMarkDown({...responses.message}), (err),
    error ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
