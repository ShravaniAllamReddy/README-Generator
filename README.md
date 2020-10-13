# README-Generator

## Description

Command-line application that dynamically generates a professional README.md

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.


## Table of Contents:
  
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation:

How to add a package to a npm project:

* Run `npm init` when you first setup the project before installing any dependencies.

* At the same level as the package.json, run 
```
npm install <package_name>
```
* You *must* install a package before you can use it!

How to install your entire project

* The benefit of npm is that you can clone an project with a package.json
* Run this to *install the packages listed in package.json*

```npm install```

* If you haven't installed the package you want, however, ```npm install``` *won't* do anything!


## Usage 

 npm run start  - we use this command to run the application once we include `"start" :  "node filename.js" under "scripts" in package.json`

 Example:

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }

* WHEN you are prompted for information about your application repository
  THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
* WHEN you enter your project title
  THEN this is displayed as the title of the README
* WHEN you enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
* WHEN you choose a license for your application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
* WHEN you enter GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to your GitHub profile
* WHEN you enter email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach you with additional questions
* WHEN you click on the links in the Table of Contents
  THEN you are taken to the corresponding section of the README


## Credits:
  
  Markdown License badges: (https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500#apache-20-license)


## License 

  Copyright © 2020, ShravaniAllamReddy. 
  Licensed under MIT , you may not use this file except in compliance with the License.
  You may obtain a copy of the License at https://opensource.org/licenses/MIT


## Useful Packages:

* inquirer: CLI to make interactive applications in the console
* fs/http/other node packages: Packages we don't have to install, as they are part of native Node!


## Contributing:
   
  Contributions, issues and requests are welcome.

  
## Questions:
  
  Link to my GitHub Profile : https://github.com/ShravaniAllamReddy
  If you have any questions, you can reach out to me at shravani.allam@gmail.com 








