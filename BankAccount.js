function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  let transactionHistory = [];

  const recordTransaction = (type, amount, newBalance) => {
    const transaction = {
      type: type,
      amount: amount,
      date: new Date().toLocaleTimeString(),
      newBalance: newBalance
    };
    transactionHistory.push(transaction);
  };

  return {
    deposit: function(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
      }
      balance += amount;
      recordTransaction('Deposit', amount, balance);
      console.log(`Deposited: ${amount}. New balance: ${balance}`);
    },

    withdraw: function(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
      }
      if (amount > balance) {
        console.log(`Insufficient balance. Current balance: ${balance}`);
        recordTransaction('Attempted Withdrawal (Failed)', amount, balance);
        return;
      }
      balance -= amount;
      recordTransaction('Withdrawal', amount, balance);
      console.log(`Withdrawn: ${amount}. New balance: ${balance}`);
    },

    getBalance: function() {
      console.log(`Current Balance: ${balance}`);
      return balance;
    },
    
    getHistory: function() {
      console.log("\n--- Transaction History ---");
      if (transactionHistory.length === 0) {
        console.log("No transactions yet.");
      } else {
        transactionHistory.forEach(tx => {
          console.log(`[${tx.date}] ${tx.type} of ${tx.amount}. Balance: ${tx.newBalance}`);
        });
      }
      console.log("-------------------------\n");
      return transactionHistory;
    }
  };
}

const myAccount = createBankAccount(100);

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(400);
myAccount.getBalance();

console.log(`Attempt to access balance directly: ${myAccount.balance}`);

myAccount.getHistory();
/*The key to privacy is the lexical scoping of JavaScript.
The variables balance and transactionHistory are declared using let inside the body of createBankAccount.
When createBankAccount finishes execution, its execution context is normally destroyed.
However, the methods (deposit, withdraw, etc.) are returned and stored in the myAccount object. Since these inner functions require access to the balance and transactionHistory variables to work,
the JavaScript engine (specifically, the garbage collector) cannot destroy the memory space containing those variables.
This preserved connection forms the closure . The variables are private because they were never attached to the global object and they are not exposed in the returned public interface; they are only accessible via the returned methods.
 The transactionHistory Feature
Implementation and Closure Role
The transactionHistory array is also declared with let inside createBankAccount, making it a second private, closed-over variable.
Shared State: The deposit and withdraw methods, along with the new recordTransaction helper, all have access to this single shared array instance.
Persistent State: Every time a transaction method is called (e.g., myAccount.deposit(100)), the closure allows that method to retrieve the existing transactionHistory array from memory, 
append a new entry, and then save the modified array state back into the closed-over scope.
The getHistory method provides the only way for the outside world to read this private history, perfectly demonstrating data encapsulation and state retention across multiple function calls.
