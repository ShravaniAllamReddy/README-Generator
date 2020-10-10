// function to generate markdown for README
function generateMarkdown(data) {
  return `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
  
# ${data.title}
  
## Description:
  
    ${data.description}
  
## Usage:
  
    ${data.usage}
  
## Table of Contents:
  
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

  
## Installation:
  
    ${data.installation}
  
## Credits:
  
    ${data.credits}
  
## License:
  
   ${data.license}  

## Contributing:
   
    ${data.contributing}
  
## Tests:
  
    ${data.tests}
    
## Badge: 
  
    ${data.badges}
    
    
## Questions:
  
     Link to my GitHub Profile : https://github.com/${data.github}
     If you have any questions, you can reach out to me at ${data.email} `;

}

module.exports = generateMarkdown;
