const inquirer = require("inquirer");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern");
const createHTML = require('./htmlGen');
const fs = require('fs');

function Main() {
    this.companyName;
    this.teamLead;
    this.engineers = [];
    this.interns = [];
}

Main.prototype.initialize = function () {
    console.log(`               Welcome to Team Profile Generator! 
Please follow the prompts and enter in information for you employees.`);
    inquirer
    .prompt({
        type: 'input',
        name: 'company',
        message: 'Please enter in your company name:'
    })
    .then(({ company }) => {
        this.companyName = company;
        
        const teamLeader = new Manager();
        let questions = teamLeader.getQuestions();
        inquirer
        .prompt(questions)
        .then(data => {
            teamLeader.assignValues(data);
            this.teamLead = teamLeader;
            this.nextEmployee();
        });
    });
}

Main.prototype.nextEmployee = function() {
    inquirer
    .prompt({
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee would you like to add next?',
        choices: ['Software Engineer', 'Intern', 'Done Create Website']
    })
    .then(({ employeeType }) => {
        switch(employeeType) {
            case 'Software Engineer':
                this.engineer();
                break;
            case 'Intern':
                this.intern();
                break;
            case 'Done Create Website':
                this.createWebsite();
                break;
        }
    })
}

Main.prototype.engineer = function() {
    let engineer = new Engineer();
    let questions = engineer.getQuestions();

    inquirer.prompt(questions)
    .then(data => {
        engineer.assignValues(data);
        this.engineers.push(engineer);
        this.nextEmployee();
    })
}

Main.prototype.intern = function() {
    let intern = new Intern();
    let questions = intern.getQuestions();

    inquirer.prompt(questions)
    .then(data => {
        intern.assignValues(data);
        this.interns.push(intern);
        this.nextEmployee();
    })
}

Main.prototype.createWebsite = function() {
    let html = createHTML(this.companyName, this.teamLead, this.engineers, this.interns);
    fs.writeFile('./src/dev/index.html', html, (err) => {
        if (err) throw err;
        console.log('File Created! Please go check src/dev to find the html and css files!');
    });
}

module.exports = Main;