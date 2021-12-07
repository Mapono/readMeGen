// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please providea a short description of your project",
  },
  {
    type: "input",
    name: "usage",
    message:
      "What additional information will users need to know about using this repo?",
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message:
      "Please provide the command to run tests, otherwise 'npm test' will be entered as the default.",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "Please provide the licence type of your project.",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
  {
    type: "input",
    name: "contributing",
    message: "How may other users contribute to your repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
