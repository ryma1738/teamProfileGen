const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the software engineer?'
    },
    {
        type: "number",
        name: 'employeeId',
        message: 'Please enter the engineers employee ID:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address for your engineer:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the engineers github username:'

    }
];

function Engineer() {
    this.name;
    this.id;
    this.email;
    this.github;
}

Engineer.prototype.assignValues = function(data) {
    this.name = data.name;
    this.id = data.employeeId;
    this.email = data.email;
    this.github = data.github;
}

Engineer.prototype.getQuestions = function() {
    return questions;
}

module.exports = Engineer;