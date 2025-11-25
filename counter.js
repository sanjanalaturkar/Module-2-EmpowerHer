function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Current count: ${count}`);
    },
    display: function() {
      console.log(`Current count: ${count}`);
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.display();

const counter1 = createCounter();
const counter2 = createCounter();

console.log("\n--- Counter 1 Operations ---");
counter1.increment();
counter1.increment();

console.log("--- Counter 2 Operations ---");
counter2.increment();
counter2.decrement();

console.log("--- Final States ---");
counter1.display();
counter2.display();
/* A closure is created when an inner function retains access to the variables of its outer function, even after the outer function has finished executing .
Outer Scope: When createCounter() is called, it creates a new execution context and initializes a local variable let count = 0.
Inner Functions: It then defines and returns an object containing the three inner functions (increment, decrement, display).
Lexical Environment: These three inner functions are bundled with their lexical environment, which includes the count variable.
Encapsulation: Because the count variable was declared with let inside createCounter, it is not accessible from the global scope. 
The only way to read or modify count is through the three public methods provided in the returned object. This effectively creates data privacy or encapsulation, making count a private variable.*/
