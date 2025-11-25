let age = 30;

function displayAge() {
  console.log(`Initial Age (Global Execution Context access): ${age}`);
}

function changeAge(newAge) {
  age = newAge;
  console.log(`Age updated inside function (Function Execution Context): ${age}`);
}

console.log("--- Initial State ---");
displayAge();

console.log("\n--- Calling changeAge(40) ---");
changeAge(40);

console.log("\n--- Final State ---");
displayAge();

console.log(`Final value of global age variable outside functions: ${age}`);
