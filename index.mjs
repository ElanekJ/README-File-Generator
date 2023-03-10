import inquirer from 'inquirer';
import fs from 'fs/promises';
import { write } from 'fs';

let licenseLogo = ''
let {projectTitle, description, license, installation, usage, contributing, tests, questions} = await inquirer

.prompt([
    
  {
    type: 'input',
    name: 'projectTitle',
    message: "Project title",
  },

  {
    type: 'input',
    name: 'description',
    message: "A brief description of what this project does and who it's for ",
  },

  {
    type: 'list',
    name: 'license',
    message: 'What licenses you choose?',
    choices: ['Apache2.0','Boost Software','BSD 3-Clause']
  },

  {
    type: 'input',
    name: 'installation',
    message: "A brief description of installation instruction ",
  },

  {
    type: 'input',
    name: 'usage',
    message: "A brief description of usage",
  },
  
  {
    type: 'input',
    name: 'contributing',
    message: "A brief description of contributing guidelines",
  },
  
  {
    type: 'input',
    name: 'tests',
    message: "A brief description of test instruction",
  },
   
])
 

let readmeText = `
# ${projectTitle}

## Description
${description}
  
## Table of contents
- [Table of contents](#Table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${installation}

## Usage
${usage}

## Licence
${generateLicense(license)}

## Contributing
${contributing}

## Tests
${tests}

## Questions
${questions}
`

fs.writeFile("README.md", readmeText)


function generateLicense(license){
  
  if(license==='Apache2.0'){
  
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license==='Boost Software'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else{
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

console.log(description)