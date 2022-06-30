const Person = require('../person')

class Student extends Person{
	constructor(...args) {
		super(...args);
	}
}

module.exports = Student;
