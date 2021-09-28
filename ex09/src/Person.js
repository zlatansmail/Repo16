class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        var personInfo;
        return personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;

    }

}
var person = new Person("Zlatan", "zlatan.smailbegovic@gmail.com ", 30);
console.log(person.getPerson());
module.exports = Person;