const Manager = require('../src/Manager.js');

const data = {
    name: 'ryan',
    employeeId: 6546838435,
    email: 'rymaster.ws@gmail.com',
    officeNumber: 8016524658
};

test('creates a Manager object', () => {
    const manager = new Manager();
    manager.assignValues(data);

    expect(manager.name).toBe('ryan');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('rymaster.ws@gmail.com');
    expect(manager.officeNumber).toBe('801-652-4658');
});

test('sends over questions array', () => {
    const manager = new Manager();

    expect(manager.getQuestions()).toEqual(expect.any(Array));
})