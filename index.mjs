import inquirer from 'inquirer';
import fs from 'fs/promises';
import { write } from 'fs';


let {description} = await inquirer
  .prompt([
      {
        type: 'input',
        name: 'description',
        message: "A brief description of what this project does and who it's for",
      },
     
  ])


  let readmeText = `
  # Project title
  ${description};
  
  

## Table of contents

    -[Table of contents] (#Table-of-contents)
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[License] (#licence)
    -[Contributing] (#contributing)
    -[Tests] (#tests)
    -[Questions] (#questions)


## Installation


## Usage


## Licence


## Contributing


## Tests


## Questions
`

fs.writeFile("README.md", readmeText)
console.log(description)