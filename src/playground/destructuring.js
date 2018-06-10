// /* const person = {
//   name: "osama",
//   age: 25,
//   location: {
//     temp: 36
//     //city : "Rotterdam"
//   }
// };

// /*const name = person.name;
// const age = person.age;*/

// const { name, age } = person;

// // lines ( 10 & 11 ) and 13 are equal

// // the goal is to use name variable
// console.log(`${name} is ${age}`);

// /******** check this *********/
// /*const { city, temp } = person.location;

// console.log(`it's ${person.location.temp} in ${person.location.city}`);
// console.log(`it's ${temp} in ${city}`);*/

// /******** check this rename *********/
// /*const { city, temp: temperature } = person.location;

// console.log(`it's ${person.location.temp} in ${person.location.city}`);
// console.log(`it's ${temperature} in ${city}`);

// /******************* default fallback values *************/
// /*const { city = "Lattakia", temp: temperature } = person.location;

// console.log(`it's ${person.location.temp} in ${person.location.city}`);
// console.log(`it's ${temperature} in ${city}`);*/

// /*const { city: town = "Lattakia", temp: temperature } = person.location;

// console.log(`it's ${person.location.temp} in ${person.location.city}`);
// console.log(`it's ${temperature} in ${town}`);*/

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Safari"
//   }
// };

// const { name: publisherName = "self-published " } = book.publisher;
// console.log(publisherName);
//  */

/* Array destructuring */

// const address = ["287 kees van dongenhof", "Rotterdam", "Holand", "3024NJ"];

/* here matching is by index  */
// const [street, city, state, zip] = address;
// const [, city, state] = address;
// const [, , state = "Hello"] = address;
// console.log(`You are in ${address[1]} - ${address[2]}`);
// console.log(`You are in ${city} - ${state}`);
const item = ["coffee (hot)", "2", "2.5", "2.75"];

const [product, , price] = item;
console.log(`a Medium ${product} costs ${price}`);
