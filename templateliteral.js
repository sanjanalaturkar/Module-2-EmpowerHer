const username = "Sanjana";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Sanjana", "Laturkar"));
student.greet();
