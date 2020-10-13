// function to generate markdown for README
function generateMarkdown(data) {
  return `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
  
# ${data.title}
  
## Description:
  
  ${data.description}
  

## Table of Contents:
  
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

  
## Installation:
  
  ${data.installation}

## Usage:
  
  ${data.usage}
  
## Credits:
  
  ${data.credits}
  
## License:
  
  Copyright © 2020, ${data.github}. 
  Licensed under ${data.license} , you may not use this file except in compliance with the License.
  You may obtain a copy of the License at https://opensource.org/licenses/${data.license}


## Contributing:
   
  ${data.contributing}
  
## Tests:
  
  ${data.tests}
    
    
## Questions:
  
  Link to my GitHub Profile : https://github.com/${data.github}
  If you have any questions, you can reach out to me at ${data.email} `;

}

module.exports = generateMarkdown;
