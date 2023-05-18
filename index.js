// Packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');



// Array of questions for user input


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
        choices: [ 'MIT', 'Boost', 'Apache', 'Eclispe', 'No License'],
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

      }


    ];


// Function to write README file - not needed
function writeToFile(fileName, data) {}


// Function to initialize app
function init() {

    inquirer.prompt(questions)

    .then(function(answers) {

      let markDown = generateMarkdown(answers);
        console.log(answers);

       console.log(markDown);

        fs.writeFileSync('sample.md', markDown);
    
    })
    
}

// Function call to initialize app

init();
