//1. Template Literals + Expressions
// a)
console.log(`5 + 7 = ${5 + 7}`); // "5 + 7 = 12"

// b) multi-line (3 lines)
const multi = `Line 1
Line 2
Line 3`;
console.log(multi);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`); // "John Doe"
//2. Arrow Functions & this
// 2a) convert to arrow
const square = n => n * n;

// 2b) explanation:
// Arrow functions do not have their own `this`. `this` inside arrow refers to outer lexical `this`,
// not the object, so `this.value` is undefined in that context.

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // logs undefined (because arrow uses outer `this`)

// 2c) rewrite using normal function so it works:
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test(); // 50
//3. Rest, Spread & Copying Objects
// 3a) shallow copy using spread
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };

// 3b) merge using spread
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b }; // { x:1, y:2 }

// 3c) maxValue using rest
const maxValue = (...nums) => Math.max(...nums);
// Example:
maxValue(3, 7, 2); // 7
//4. Destructuring & Optional Chaining
// 4a) array destructure to extract a and b
const arr = [10, 20, 30];
const [a, b] = arr; // a=10, b=20

// 4b) object destructure to extract brand
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop; // brand = "Dell"

// 4c) optional chaining safe access
const info = {};
console.log(info?.user?.name); // undefined (no error)
//5.Scoping (let/var/const)
// 5a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3  (var is function/global scoped)

// 5b)
for (let j = 0; j < 3; j++) {}
console.log(typeof j); // "undefined" -> ReferenceError if accessed directly in strict contexts
// Explanation: let is block-scoped so j is not defined outside the loop.

// 5c) Why use const for values that should not be reassigned?
// const prevents reassignment of the binding (helps avoid accidental reassignments).
// It communicates intent: the variable reference should remain constant.
//6. Ternary Operator – Practice
// 6a) convert to ternary
const speed = kmph > 60 ? "Fast" : "Normal";

// 6b) age ternary
const status = age >= 18 ? "Adult" : "Minor";

// 6c) nested ternary: Positive / Zero / Negative
const sign = num > 0 ? "Positive" : (num === 0 ? "Zero" : "Negative");
//7. Spread, Rest & Arrays
// 7a) add 4,5 using spread
const nums = [1,2,3];
const newNums = [...nums, 4, 5]; // [1,2,3,4,5]

// 7b) combine arrays using spread
const A = ["x","y"];
const B = ["z"];
const comb = [...A, ...B]; // ["x","y","z"]

// 7c) function using rest
const printNames = (...names) => names;
printNames("A","B","C"); // ["A","B","C"]
//8. Object Destructuring & Shorthand
// 8a) destructure
const user = { id: 101, status: "active" };
const { id, status } = user;

// 8b) convert to shorthand
const idVal = 101;
const role = "admin";
const userShorthand = { idVal, role }; // property keys idVal and role

// if you want keys named id and role:
const id2 = 101;
const role2 = "admin";
const user2 = { id: id2, role: role2 }; // or { id2, role2 } gives keys id2 and role2

// 8c) shorthand with method
const name = "Sam";
const age = 21;
const person = {
  name,
  age,
  greet() { return `Hi ${this.name}`; }
};
//9. Template Literals (More Practice)
// 9a) today's date
console.log(`Today: ${new Date().toDateString()}`);

// 9b) Hello NAME, your score is SCORE/100
const NAME = "Alex";
const SCORE = 87;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);
//10. Arrow Function Shorthands
// 10a) one-line arrow for addition
const add = (a, b) => a + b;

// 10b) isAdult
const isAdult = age => age >= 18;

// 10c) double
const double = n => n * 2;
//11. Spread Operator (Arrays & Objects)
// 11a) clone array
const arrOrig = [1,2,3];
const arrClone = [...arrOrig];

// 11b) add 100 to beginning
const arrWith100 = [100, ...arrOrig];

// 11c) merge two objects and override one property
const obj1 = { a: 1, color: "red" };
const obj2 = { b: 2, color: "blue" };
const mergedObjs = { ...obj1, ...obj2 }; // color will be "blue"
//12. Optional Chaining (More Practice)
// 12a)
const userA = { name: "Alex", address: { city: "Bangalore" } };
console.log(userA?.address?.city); // "Bangalore"

// 12b)
console.log(userA?.job?.title); // undefined

// 12c) example preventing runtime error
const data = { profile: null };
// without optional chaining: data.profile.user -> error
console.log(data.profile?.user?.name); // undefined (safe)
