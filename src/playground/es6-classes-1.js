class Person {
  constructor(name = "Unknown", location = "unknown", age = 0) {
    this.name = name;
    this.location = location;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old!`;
  }
}

class Student extends Person {
  constructor(name, age, location, major) {
    super(name, location, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `, has the major ${this.major}.`;
    }
    return `${description}`;
  }
}

class Travler extends Person {
  constructor(name, location, age, homeLocation) {
    super(name, location, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Travler("Osama", "latakia", 25, "Syria");
console.log(me.getGreeting());
const other = new Travler();
console.log(other.getGreeting());
