const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

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
        type: 'rawlist',
        message: 'Which license would you like to include? (Use up/down arrows and "enter" key to select) ',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "Creative Commons CC0", "GNU GPL v3"],
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

inquirer.prompt(questions)
    .then((responses) => {
        fs.writeFile("README.md", generateMarkdown(responses), (err) => {
        err ? console.log(err) : console.log('Success!')
        });
    });


// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
