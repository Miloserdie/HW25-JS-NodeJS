const Person = require('../person')

class Teacher extends Person{
	constructor(...args) {
		super(...args);
	}

	subject() {
		console.log(`This is ${this.gender}!`);
		
	}
}

module.exports = Teacher;