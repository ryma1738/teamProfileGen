const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name your Team Lead?'
    },
    {
        type: "number",
        name: 'employeeId',
        message: 'Please enter the team leads employee ID:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address for your team lead:'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the team leads office number (example: 8885557777):',
        validate: input => {
            if (isNaN(input)) {
                console.log("Must be a phone number without spaces or -!")
                return false;
            } else if (input.length != 10) {
                console.log('   Please enter a valid phone number length! exp: 8015556666');
                return false;
            } else {
                return true;
            }
        }
    }
];

function Manager() {
    this.name;
    this.id;
    this.email;
    this.officeNumber;
}

Manager.prototype.assignValues = function(data) {
    this.name = data.name;
    this.id = data.employeeId;
    this.email = data.email;
    let phone = data.officeNumber;
    let phoneNumber = [phone.slice(0, 3), phone.slice(3, 6), phone.slice(6)];
    phoneNumber = phoneNumber.join('-');
    this.officeNumber = phoneNumber;
}

Manager.prototype.getQuestions = function() {
    return questions;
}

module.exports = Manager;