const person = require('./nameFunctions.js');

person.firstName("John"), person.lastName("Doe");
console.log(person.firstName("John"), person.lastName("Doe"));

module.exports = person;