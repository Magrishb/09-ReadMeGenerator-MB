
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questionsArray = [
    {
        type: "input",
        name: "title",
        message: "Title of the Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the Project:",
    },
    {
        type: "checkbox",
        message: "Table of Contents",
        name: "TableofContents",
        choices: [
            "installation",
            "Usage",
            "License",
            "Contributions",
            "Tests",
            "Questions",
          ],
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "usage",
        message: "How is the project used?",
    },
    {
        type: "input",
        name: "license",
        message: "What is the license?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who's contributed to the projet?",
    },
    {
        type: "input",
        name: "tests",
        message: "Test the project?",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github pages?",
    },
];
// function to write README file
function writeToFile(response) {
  fs.writeFile("READ.md", generateMarkdown(response), function (err) {
    if (err) throw err;
  });
}
// function to initialize program
function init() {
  inquirer
    .prompt(questionsArray)
    .then((response) => writeToFile(response))
    .catch((err) => console.log(err));
}
// function call to initialize program
init();
// inquirer.prompt(questionsArray).then(function (response) {
//   console.log(Response);
// });

 
