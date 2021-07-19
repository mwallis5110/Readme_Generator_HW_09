//Uses inqirier npm package, generateMarkdown.js, and fs to write files
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

//Takes input from users
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
    {
        type: 'input',
        message: 'Github Link: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'email',
    },
];

//Inquirer passes each message through the terminal as a question to be answered
inquirer.prompt(questions)
    //When each question is answered, the program passes the responses to be written 
    //in a markdown document. Console will log the success or failure of this
    .then((responses) => {
        fs.writeFile("README.md", generateMarkdown(responses), (err) => {
        err ? console.log(err) : console.log('Success!')
        });
    });


function init() {};

// Function call to initialize app
init();
