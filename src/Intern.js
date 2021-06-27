const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?'
    },
    {
        type: "number",
        name: 'employeeId',
        message: 'Please enter the interns employee ID:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address for your intern:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your interns school name:'

    }
];

function Intern() {
    this.name;
    this.id;
    this.email;
    this.school;
}

Intern.prototype.assignValues = function(data) {
    this.name = data.name;
    this.id = data.employeeId;
    this.email = data.email;
    this.school = data.school;
}

Intern.prototype.getQuestions = function() {
    return questions;
}

module.exports = Intern;