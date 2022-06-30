class Person{
	constructor(name, age, gender, interests) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}

	bio() {
		console.log(`${this.name}, ${this.age} years old. They like ${this.interests}.`);
	}

	greeting() {
		console.log(`Hi! I'm ${this.name}.`);
	}
}

module.exports = Person;