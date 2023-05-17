// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else {
  return `[![License:${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) { 
  if (license === 'No License') {
    return "";
   } else {
    return '- [License](#license)'}

}

// Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {

  if (license === 'No License'){
    return '';
  } else {
    return '## License'; 
  }

 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}
  
  
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
${renderLicenseLink(data.license)}
- [Test](#tests)
- [Questions](#question)
  

## Installation
${data.installation}
  
  
## Usage
${data.usage_info}


${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

  
## Contribution
${data.contribution}

## Tests
${data.tests}

## Question
Here is the email input: ${data.email}, with the GitHub username submitted: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
