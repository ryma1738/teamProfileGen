const Intern = require('../src/Intern.js');

const data = {
    name: 'ryan',
    employeeId: 6546838435,
    email: 'rymaster.ws@gmail.com',
    school: 'Utah State'
};

test('creates a Intern object', () => {
    const intern = new Intern();
    intern.assignValues(data);

    expect(intern.name).toBe('ryan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('rymaster.ws@gmail.com');
    expect(intern.school).toEqual(expect.any(String));
});

test('sends over questions array', () => {
    const intern = new Intern();

    expect(intern.getQuestions()).toEqual(expect.any(Array));
})