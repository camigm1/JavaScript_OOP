console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    console.log(
      `Hello! My name is ${this.name}, I have ${this.pets}  pets and I live in ${this.residence}. My hobbies also include ${this.hobbies}`
    );
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = "FullStack Developer";
  }
  greeting() {
    console.log(`Hello! I'm a ${this.occupation}`);
  }
}

const camila = new Person("camila", 2, "Salt Lake City", ["tennis", "soccer"]);
const coderCami = new Coder();

console.log(coderCami.greeting());
console.log(camila.info());
