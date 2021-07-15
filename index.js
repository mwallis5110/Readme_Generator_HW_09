// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// const { title } = require('process');
console.log(generateMarkdown);


// inquirer.prompt(questions)[
const questions = [
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
        choices: "MIT License"
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
];

// console.log(inquirer.message)

// .then((response) => {
//     title, description, contents, installation, usage, license, contributing, tests, questions
//   }) => {
//       generateMarkdown
//   }

  inquirer.prompt(questions).then(answers => {
      console.log(answers)
      fs.writeFile("README.md", generateMarkdown(answers), (err) => {
        err ? console.log(err) : console.log('Success!')})
  });


// // TODO: Create a function to write README file
// function writeToFile(filename, responses) {
// fs.writeFile("README.md", generateMarkDown({...responses.message}), (err),
//     error ? console.log(err) : console.log('Success!'))
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
