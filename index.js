const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);


function userInput() {

    // array of questions for user
    return inquirer.prompt([

        {
            type: "input",
            message: "What is your Project Title?",
            name: "title"
        },
        {
            type: "editor",
            message: "Please enter a short description",
            name: "description"
        },
        {
            type: "editor",
            message: "Installation instructions",
            name: "installation"
        },
        {
            type: "editor",
            message: "Enter the Usage Information",
            name: "usage"
        },
        {
            type: "editor",
            message: "Credits:",
            name: "credits"
        },
        {
            type: "list",
            message: "Choose any one license:",
            name: "license",
            choices: [

                new inquirer.Separator('Which of the following best describes your situation?'),
                {
                    name: 'Apache2.0'
                },
                {
                    name: 'MIT'
                },
                {
                    name: 'GPL-3.0'
                }

            ]
        },
        {
            type: "editor",
            message: "Contribution Guidelines",
            name: "contributing"
        },
        {
            type: "input",
            message: "Tests",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub Username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your Email address?",
            name: "email"
        }

    ]);
}


// function to initialize program
async function init() {
    try {
        const data = await userInput();
        const readme = generateMarkdown(data);
        await writeFileAsync("fileREADME.md", readme);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}


// function call to initialize program
init();
