const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user

const questions = [
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
    
    
 ]


// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();


