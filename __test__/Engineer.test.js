const Engineer = require('../src/Engineer.js');

const data = {
    name: 'ryan',
    employeeId: 6546838435,
    email: 'rymaster.ws@gmail.com',
    github: 'ryma1738'
};

test('creates a engineer object', () => {
    const engineer = new Engineer();
    engineer.assignValues(data);

    expect(engineer.name).toBe('ryan');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('rymaster.ws@gmail.com');
    expect(engineer.github).toBe('ryma1738');
});

test('sends over questions array', () => {
    const engineer = new Engineer();

    expect(engineer.getQuestions()).toEqual(expect.any(Array));
})