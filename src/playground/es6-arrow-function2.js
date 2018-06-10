// arguments object  - no longer bound with arrow function
// this keyword - no longer bound

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: "Osama",
  cities: ["damas", "latakia", "rotterdam", "paris"],
  printPlacesLived: function() {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function(city) {
      console.log(this.name + " has lived in " + city);
    }, this);
  }
};

const user2 = {
  name: "Osama",
  cities: ["damas", "latakia", "rotterdam", "paris"],
  printPlacesLived() {
    const nextCities = this.cities.map(city => {
      return this.name + " has lived in " + city;
    });
    return nextCities;
  }
};

console.log(user2.printPlacesLived());

const multiplier = {
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  multiplyBy: 2,
  multiply() {
    return this.nums.map(num => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
