import inquirer from 'inquirer';
import fs from 'fs/promises';
import { write } from 'fs';

 let {projectTitle, description, license} = await inquirer
  .prompt([
    
    {
      type: 'input',
      name: 'projectTitle',
      message: "Project title",
    },
{
        type: 'input',
        name: 'description',
        message: "A brief description of what this project does and who it's for",
      },
{
      type: 'list',
      name: 'license',
      message: 'What licenses you choose?',
      choices: ['Apache2.0','Boost Software','BSD 3-Clause']
    }

  ])
 

  let readmeText = `
  # ${projectTitle}
  ${description}
  
  ## Table of contents

    - [Table of contents] (#Table-of-contents)
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [License] (#licence)
    - [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (#questions)


## Installation


## Usage


## Licence
${generateLicense(license)}

## Contributing


## Tests


## Questions
`

fs.writeFile("README.md", readmeText)
function generateLicense(license){
  if(license==='Apache2.0'){
    return '!(https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license==='Boost Software'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else{
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

console.log(description)