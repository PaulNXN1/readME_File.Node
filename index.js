// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input


const questions = [
   
      {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
      },

      {
        type: 'input',
        message: 'Please describe the description of the project you are starting.',
        name: 'description',
      },

      {
        type: 'input',
        message: 'Please add installation instructions for the project.',
        name: 'installation',
      },

      {
        type: 'input',
        message: 'Please enter usage information for your application.',
        name: 'usage_info',
      },

      {
        type: 'input',
        message: 'Please state how you can contribute to this project.',
        name: 'contribution',
      },

      {
        type: 'input',
        message: 'Please list any test instructions.',
        name: 'tests',
      },

      {
        type: 'list',
        message: 'Please select license.',
        name: 'license',
        choices: [ 'MIT', 'Boost', 'Apache', 'Eclispe'],
      },

      {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username',

      },

      {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',

      },

      {
        // Section for questions portion 

      }

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)

    .then(function(answers) {
        console.log(answers);

        let markDown = generateMarkdown(answers);

        console.log(markDown)

        fs.writeFileSync('sample.md', markDown);
    
    })
    
}

// Function call to initialize app

init();
